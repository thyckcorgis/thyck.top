"use strict";(self.webpackChunkthyck_top=self.webpackChunkthyck_top||[]).push([[3089],{1017:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(9496),r=a(1626),n=a(5993),s=a(6791),o=a(4590);const i="sidebar_LGeH",m="sidebarItemTitle_eCqC",c="sidebarItemList_DJc7",u="sidebarItem_DBxX",d="sidebarItemLink_WxYk",g="sidebarItemLinkActive_ohrj";function p(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(i,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(c,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:u},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title)))))))}var h=a(1949);function E(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return l.createElement(h.Zo,{component:E,props:e})}var v=a(6652);function f(e){let{sidebar:t}=e;const a=(0,v.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(b,{sidebar:t}):l.createElement(p,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:s,...o}=e,i=t&&t.items.length>0;return l.createElement(n.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(f,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},8085:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(9496),r=a(9876),n=a(1017),s=a(3230),o=a(5280),i=a(2527),m=a(5598),c=a(9234),u=a(1626);function d(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.Z)(),{blogDescription:n,blogTitle:s,permalink:o}=t,m="/"===o?a:s;return l.createElement(l.Fragment,null,l.createElement(i.d,{title:m,description:n}),l.createElement(c.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:a,sidebar:r}=e;return l.createElement(n.Z,{sidebar:r},a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(o.Z,{metadata:t}))}function p(e){return l.createElement(i.FG,{className:(0,u.Z)(m.k.wrapper.blogPages,m.k.page.blogListPage)},l.createElement(d,e),l.createElement(g,e))}},5280:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(9496),r=a(4590),n=a(6076);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(n.Z,{permalink:s,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},3230:(e,t,a)=>{a.d(t,{Z:()=>Z});var l=a(9496),r=a(1626),n=a(4590),s=a(6791),o=a(6084),i=a(6475),m=a(5808),c=a(2910),u=a(4181);const d="blogPostTitle_cGMV",g="blogPostData_ey83",p="blogPostDetailsFull_mS4M";var h=a(1855);function E(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function b(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:s,email:o}=t,i=n||o&&`mailto:${o}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(E,{href:i,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(E,{href:i,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const v="authorCol_FGn1",f="imageOnlyAuthorRow_GoIh",N="imageOnlyAuthorCol_QoYo";function _(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?f:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?N:v),key:t},l.createElement(b,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function Z(e){const t=function(){const{selectMessage:e}=(0,i.c)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,o.C)(),{children:E,frontMatter:b,assets:v,metadata:f,truncated:N,isBlogPostPage:Z=!1}=e,{date:k,formattedDate:P,permalink:w,tags:y,readingTime:T,title:I,editUrl:F,authors:L}=f,x=v.image??b.image,M=!Z&&N,C=y.length>0,A=Z?"h1":"h2";return l.createElement("article",{className:Z?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(A,{className:d,itemProp:"headline"},Z?I:l.createElement(s.Z,{itemProp:"url",to:w},I)),l.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},l.createElement("time",{dateTime:k,itemProp:"datePublished"},P),void 0!==T&&l.createElement(l.Fragment,null," \xb7 ",t(T))),l.createElement(_,{authors:L,assets:v})),x&&l.createElement("meta",{itemProp:"image",content:a(x,{absolute:!0})}),l.createElement("div",{id:Z?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,E)),(C||N)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",Z&&p)},C&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":M})},l.createElement(h.Z,{tags:y})),Z&&F&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.Z,{editUrl:F})),M&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":C})},l.createElement(s.Z,{to:f.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:I})},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6475:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(9496),r=a(9876);const n=["zero","one","two","few","many","other"];function s(e){return n.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function m(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms}), but the message contains ${l.length}: ${e}`);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);