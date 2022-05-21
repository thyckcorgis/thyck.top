#!/usr/bin/env node
// @ts-check

const BLOG_DIR = "./blog";

const yaml = require("js-yaml");
const fs = require("fs");
const { readdir, readFile, writeFile, mkdir } = require("fs/promises");
const prompts = require("prompts");
/** @type {(data: string) => import('front-matter').FrontMatterResult } */
// @ts-expect-error
const fm = require("front-matter");

/**
 * Creates questions
 * @param {[string, import ('./types').Author][]} authorChoices
 * @param {{ slugs: Set<string>, tags: Set<string> }} fileData
 */
function promptQuestions(authorChoices, fileData) {
  const { slugs, tags } = fileData;
  return prompts(
    [
      {
        type: "select",
        name: "author",
        message: "Who is creating this blog?",
        choices: authorChoices.map(([name]) => ({ title: name, value: name })),
      },
      {
        type: "text",
        name: "title",
        message: "Title of the blog",
        validate: (title) => (!title.length ? "Please enter a title" : true),
      },
      {
        type: "text",
        name: "slug",
        message: "URL slug for the blog",
        validate: (slug) =>
          slugs.has(slug) ? "Slug already exists in blog" : true,
        /** @type {(s: string) => string} */
        initial: (prev) =>
          prev
            .split(" ")
            .slice(0, 2)
            .map((s) => s.toLowerCase())
            .join("-"),
      },
      {
        type: "autocompleteMultiselect",
        name: "tags",
        message: "Pick existing tags",
        choices: Array.from(tags).map((t) => ({ title: t, value: t })),
      },
      {
        type: "list",
        name: "newTags",
        format: (val) => val.map((v) => v.toString()),
        message: "List new tags (separated by commas)",
      },
      {
        type: "date",
        name: "date",
        message: "Date of blog",
        mask: "MMM DD YYYY",
        initial: new Date(),
      },
    ],
    {
      onCancel: () => {
        process.exit(0);
      },
    }
  );
}

/**
 *
 * @returns {Promise<[string, import ('./types').Author][]>}
 */
async function getAuthors() {
  const doc = yaml.load(fs.readFileSync(BLOG_DIR + "/authors.yml", "utf8"));
  return Object.entries(doc);
}

/**
 * @returns {Promise<{slugs: Set<string>, tags: Set<string>}>}
 */
async function getSlugsAndTags() {
  const entries = await Promise.all(
    (
      await readdir(BLOG_DIR)
    )
      .filter((f) => {
        const arr = f.split(".");
        return arr[arr.length - 1] === "md";
      })
      .map(async (f) => {
        const { attributes } = fm(
          (await readFile(`${BLOG_DIR}/${f}`)).toString()
        );
        const slug = f.match(/\d{4}-\d{2}-\d{2}-(.*).md/);
        return [slug ? slug[1] : null, attributes.tags];
      })
  );
  return {
    slugs: new Set(entries.map(([slug]) => slug)),
    tags: new Set(entries.flatMap(([, tags]) => tags)),
  };
}

const pad = (d) => d.toString().padStart(2, "0");
const fmtDate = (date) =>
  [date.getFullYear(0), date.getMonth() + 1, date.getDate()]
    .map((d) => pad(d))
    .join("-");

/**
 * @param {Date} date
 * @param {string} slug
 * @returns {Promise<string>}
 */
const createBlogDir = async (date, slug) => {
  const blogDir = `${BLOG_DIR}/${fmtDate(date)}-${slug}`;
  await mkdir(blogDir);
  return blogDir;
};

async function main() {
  try {
    const authorChoices = await getAuthors();
    const fileData = await getSlugsAndTags();
    const response = await promptQuestions(authorChoices, fileData);
    const { date, slug, tags: existingTags, newTags, ...rest } = response;
    const dirName = createBlogDir(date, slug);
    const tags = Array.from(
      new Set(
        existingTags
          .concat(newTags)
          .filter((t) => !!t)
          .map((t) => t.toLowerCase())
      )
    );
    const { title, author: authors } = rest;
    const frontMatter = `---\n${yaml.dump(
      { title, authors, tags },
      { flowLevel: 1 }
    )}---\n\n<!--truncate-->\n`;

    await writeFile(dirName + "/index.md", frontMatter);
  } catch (e) {
    console.error(e);
  }
}

main();
