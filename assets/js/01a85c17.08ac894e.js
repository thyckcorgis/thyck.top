"use strict";(self.webpackChunkthyck_top=self.webpackChunkthyck_top||[]).push([[4013],{6813:(e,t,s)=>{s.d(t,{Z:()=>k});var a=s(5271),i=s(4814),r=s(1633),l=s(7647),n=s(7523),c=s(3653),o=s(3225),d=s(8984);function m(e){const{pathname:t}=(0,o.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_IbLb",sidebarItemTitle:"sidebarItemTitle_Zqtf",sidebarItemList:"sidebarItemList_dfbU",sidebarItem:"sidebarItem_QsOK",sidebarItemLink:"sidebarItemLink_T01t",sidebarItemLinkActive:"sidebarItemLinkActive_ulBj"};var b=s(2676);function g(e){let{sidebar:t}=e;const s=m(t.items);return(0,b.jsx)("aside",{className:"col col--3",children:(0,b.jsxs)("nav",{className:(0,i.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,b.jsx)("div",{className:(0,i.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,b.jsx)("ul",{className:(0,i.Z)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,b.jsx)("li",{className:u.sidebarItem,children:(0,b.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=s(9658);function j(e){let{sidebar:t}=e;const s=m(t.items);return(0,b.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,b.jsx)("li",{className:"menu__list-item",children:(0,b.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,b.jsx)(h.Zo,{component:j,props:e})}function x(e){let{sidebar:t}=e;const s=(0,l.i)();return t?.items.length?"mobile"===s?(0,b.jsx)(p,{sidebar:t}):(0,b.jsx)(g,{sidebar:t}):null}function k(e){const{sidebar:t,toc:s,children:a,...l}=e,n=t&&t.items.length>0;return(0,b.jsx)(r.Z,{...l,children:(0,b.jsx)("div",{className:"container margin-vert--lg",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)(x,{sidebar:t}),(0,b.jsx)("main",{className:(0,i.Z)("col",{"col--7":n,"col--9 col--offset-1":!n}),children:a}),s&&(0,b.jsx)("div",{className:"col col--2",children:s})]})})})}},946:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});s(5271);var a=s(4814),i=s(3653);const r=()=>(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var l=s(8090),n=s(12),c=s(6813),o=s(9624),d=s(9227);const m={tag:"tag_TAz0"};var u=s(2676);function b(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(d.Z,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:m.tag,children:(0,u.jsx)(o.Z,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function g(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,u.jsx)(b,{letterEntry:e},e.letter)))})}var h=s(5939);function j(e){let{tags:t,sidebar:s}=e;const i=r();return(0,u.jsxs)(l.FG,{className:(0,a.Z)(n.k.wrapper.blogPages,n.k.page.blogTagsListPage),children:[(0,u.jsx)(l.d,{title:i}),(0,u.jsx)(h.Z,{tag:"blog_tags_list"}),(0,u.jsxs)(c.Z,{sidebar:s,children:[(0,u.jsx)(d.Z,{as:"h1",children:i}),(0,u.jsx)(g,{tags:t})]})]})}},9624:(e,t,s)=>{s.d(t,{Z:()=>n});s(5271);var a=s(4814),i=s(7523);const r={tag:"tag__qqh",tagRegular:"tagRegular_aFtk",tagWithCount:"tagWithCount_EOki"};var l=s(2676);function n(e){let{permalink:t,label:s,count:n,description:c}=e;return(0,l.jsxs)(i.Z,{href:t,title:c,className:(0,a.Z)(r.tag,n?r.tagWithCount:r.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}}}]);