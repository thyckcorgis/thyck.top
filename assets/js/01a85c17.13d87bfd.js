"use strict";(self.webpackChunkthyck_top=self.webpackChunkthyck_top||[]).push([[8209],{585:(e,t,s)=>{s.d(t,{A:()=>v});var a=s(758),i=s(3526),r=s(858),l=s(4478),n=s(6724),c=s(5621),o=s(5557),d=s(7517);function m(e){const{pathname:t}=(0,o.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_iHjm",sidebarItemTitle:"sidebarItemTitle_IJLO",sidebarItemList:"sidebarItemList_LWrM",sidebarItem:"sidebarItem_jP0Y",sidebarItemLink:"sidebarItemLink_yb_O",sidebarItemLinkActive:"sidebarItemLinkActive_Cxq_"};var b=s(6070);function g(e){let{sidebar:t}=e;const s=m(t.items);return(0,b.jsx)("aside",{className:"col col--3",children:(0,b.jsxs)("nav",{className:(0,i.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,b.jsx)("div",{className:(0,i.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,b.jsx)("ul",{className:(0,i.A)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,b.jsx)("li",{className:u.sidebarItem,children:(0,b.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=s(2052);function j(e){let{sidebar:t}=e;const s=m(t.items);return(0,b.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,b.jsx)("li",{className:"menu__list-item",children:(0,b.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,b.jsx)(h.GX,{component:j,props:e})}function x(e){let{sidebar:t}=e;const s=(0,l.l)();return t?.items.length?"mobile"===s?(0,b.jsx)(p,{sidebar:t}):(0,b.jsx)(g,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:a,...l}=e,n=t&&t.items.length>0;return(0,b.jsx)(r.A,{...l,children:(0,b.jsx)("div",{className:"container margin-vert--lg",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)(x,{sidebar:t}),(0,b.jsx)("main",{className:(0,i.A)("col",{"col--7":n,"col--9 col--offset-1":!n}),children:a}),s&&(0,b.jsx)("div",{className:"col col--2",children:s})]})})})}},7940:(e,t,s)=>{s.d(t,{A:()=>n});s(758);var a=s(3526),i=s(6724);const r={tag:"tag_EzR8",tagRegular:"tagRegular_DSL2",tagWithCount:"tagWithCount_CVLQ"};var l=s(6070);function n(e){let{permalink:t,label:s,count:n,description:c}=e;return(0,l.jsxs)(i.A,{href:t,title:c,className:(0,a.A)(r.tag,n?r.tagWithCount:r.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}},8189:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});s(758);var a=s(3526),i=s(5621);const r=()=>(0,i.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var l=s(7817),n=s(3963),c=s(585),o=s(7940),d=s(7962);const m={tag:"tag_gCN_"};var u=s(6070);function b(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(d.A,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:m.tag,children:(0,u.jsx)(o.A,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function g(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,u.jsx)(b,{letterEntry:e},e.letter)))})}var h=s(4250);function j(e){let{tags:t,sidebar:s}=e;const i=r();return(0,u.jsxs)(l.e3,{className:(0,a.A)(n.G.wrapper.blogPages,n.G.page.blogTagsListPage),children:[(0,u.jsx)(l.be,{title:i}),(0,u.jsx)(h.A,{tag:"blog_tags_list"}),(0,u.jsxs)(c.A,{sidebar:s,children:[(0,u.jsx)(d.A,{as:"h1",children:i}),(0,u.jsx)(g,{tags:t})]})]})}}}]);