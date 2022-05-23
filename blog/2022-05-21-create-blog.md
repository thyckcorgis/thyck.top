---
title: Create Blog Script
authors: charles
tags: [thyck, hard, script]
---

I created a script to create a blog post!

Update (May 23, 2022): `createBlog.js` is now published as an [npm package](https://www.npmjs.com/package/create-md-blog)!

<!--truncate-->

It's not very useful since you'd still have to deploy it through your local dev machine, but at least you won't have to copy-paste existing Markdown files anymore.

```
[chrlz@mini ~/.../thyck.top]$ pnpm blog

> thyck.top@0.0.0 blog ~/.../thyck.top
> ./scripts/createBlog.js

✔ Who is creating this blog? › cbebe
✔ Title of the blog … Create Blog Script
✔ URL slug for the blog … create-blog
✔ Pick existing tags › thyck, hard
✔ List new tags (separated by commas) … script
✔ Date of blog › May 21 2022
```

Here's another one with for the biker gang post:

```
[chrlz@mini ~/.../thyck.top]$ pnpm blog

> thyck.top@0.0.0 blog ~/.../thyck.top
> ./scripts/createBlog.js

✔ Who is creating this blog? › cbebe
✔ Title of the blog … Biker Gang 2022
✔ URL slug for the blog … biker-gang-2022
✔ Pick existing tags › biking, biker, gang, butt
✔ List new tags (separated by commas) … squat
✔ Date of blog › May 15 2022
```
