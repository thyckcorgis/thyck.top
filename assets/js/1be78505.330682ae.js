"use strict";(self.webpackChunkthyck_top=self.webpackChunkthyck_top||[]).push([[9514,4707],{3223:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pe});var a=n(9496),o=n(5924),l=n(4495),r=n(3209),i=n(5722),c=n(7106),s=n(4911),d=n(9998),m=n(1599),u=n(5604),b=n(3521),p=n(1626);const h={backToTopButton:"backToTopButton_vA90",backToTopButtonShow:"backToTopButtonShow_IXg6"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:r,cancelScroll:i}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(l.current?l.current=!1:a>=r?(i(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.S)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",r.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var g=n(3442),f=n(6460),v=n(4125),k=n(1258),_=n(1163);function C(e){return a.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I={collapseSidebarButton:"collapseSidebarButton_NmYP",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_MGxW"};function S(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",I.collapseSidebarButton),onClick:t},a.createElement(C,{className:I.collapseSidebarButtonIcon}))}var N=n(1436),T=n(360);const x=Symbol("EmptyContext"),Z=a.createContext(x);function B(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(Z.Provider,{value:l},t)}var y=n(6578),w=n(2759),L=n(6274),A=n(6601);function H(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function W(e){let{item:t,onItemClick:n,activePath:l,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,v.L)(),g=function(e){const t=(0,A.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),f=(0,c._F)(t,l),k=(0,w.Mg)(h,l),{collapsed:C,setCollapsed:I}=(0,y.u)({initialState:()=>!!b&&(!f&&t.collapsed)}),{expandedItem:S,setExpandedItem:N}=function(){const e=(0,a.useContext)(Z);if(e===x)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),B=function(e){void 0===e&&(e=!C),N(e?null:s),I(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:f,collapsed:C,updateCollapsed:B}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&E&&I(!0)}),[b,S,s,I,E]),a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":C},p)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},a.createElement(L.Z,(0,_.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?e=>{n?.(t),h?B(!1):(e.preventDefault(),B())}:()=>{n?.(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!C:void 0,href:b?g??"#":g},d),u),h&&b&&a.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),B()}})),a.createElement(y.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(q,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:l,level:i+1})))}var P=n(6883),M=n(6726);const F={menuExternalLink:"menuExternalLink_xEqa"};function R(e){let{item:t,onItemClick:n,activePath:l,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,c._F)(t,l),E=(0,P.Z)(m);return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(L.Z,(0,_.Z)({className:(0,o.Z)("menu__link",!E&&F.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(M.Z,null)))}const D={menuHtmlItem:"menuHtmlItem_R5rK"};function V(e){let{item:t,level:n,index:l}=e;const{value:i,defaultStyle:c,className:s}=t;return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),c&&[D.menuHtmlItem,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:i}})}function Y(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(W,(0,_.Z)({item:t},n));case"html":return a.createElement(V,(0,_.Z)({item:t},n));default:return a.createElement(R,(0,_.Z)({item:t},n))}}function z(e){let{items:t,...n}=e;return a.createElement(B,null,t.map(((e,t)=>a.createElement(Y,(0,_.Z)({key:t,item:e,index:t},n)))))}const q=(0,a.memo)(z),U={menu:"menu_YZeY",menuWithAnnouncementBar:"menuWithAnnouncementBar_BHwd"};function G(e){let{path:t,sidebar:n,className:l}=e;const i=function(){const{isActive:e}=(0,N.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",U.menu,i&&U.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:n,activePath:t,level:1})))}const K={sidebar:"sidebar_JqBC",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_Bb6Y",sidebarHidden:"sidebarHidden_eWyD",sidebarLogo:"sidebarLogo_Uu7z"};function j(e){let{path:t,sidebar:n,onCollapse:l,isHidden:r}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,v.L)();return a.createElement("div",{className:(0,o.Z)(K.sidebar,i&&K.sidebarWithHideableNavbar,r&&K.sidebarHidden)},i&&a.createElement(k.Z,{tabIndex:-1,className:K.sidebarLogo}),a.createElement(G,{path:t,sidebar:n}),c&&a.createElement(S,{onClick:l}))}const J=a.memo(j);var O=n(3060),X=n(9190);const Q=e=>{let{sidebar:t,path:n}=e;const l=(0,X.e)();return a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function $(e){return a.createElement(O.Zo,{component:Q,props:e})}const ee=a.memo($);function te(e){const t=(0,f.i)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(J,e),o&&a.createElement(ee,e))}const ne={expandButton:"expandButton_LTAy",expandButtonIcon:"expandButtonIcon_jgPw"};function ae(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ne.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:ne.expandButtonIcon}))}const oe={docSidebarContainer:"docSidebarContainer_VhLW",docSidebarContainerHidden:"docSidebarContainerHidden_T99D",sidebarViewport:"sidebarViewport_fCYc"};function le(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function re(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:i}=(0,g.TH)(),[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&s(!1),l((e=>!e))}),[l,c]);return a.createElement("aside",{className:(0,o.Z)(r.k.docs.docSidebarContainer,oe.docSidebarContainer,n&&oe.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(oe.docSidebarContainer)&&n&&s(!0)}},a.createElement(le,null,a.createElement("div",{className:(0,o.Z)(oe.sidebarViewport,c&&oe.sidebarViewportHidden)},a.createElement(te,{sidebar:t,path:i,onCollapse:d,isHidden:c}),c&&a.createElement(ae,{toggleSidebar:d}))))}const ie={docMainContainer:"docMainContainer_xEAg",docMainContainerEnhanced:"docMainContainerEnhanced_u_kW",docItemWrapperEnhanced:"docItemWrapperEnhanced_WIvo"};function ce(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.V)();return a.createElement("main",{className:(0,o.Z)(ie.docMainContainer,(t||!l)&&ie.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ie.docItemWrapper,t&&ie.docItemWrapperEnhanced)},n))}const se={docPage:"docPage_WggR",docsWrapper:"docsWrapper_vRwm"};function de(e){let{children:t}=e;const n=(0,d.V)(),[o,l]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:se.docsWrapper},a.createElement(E,null),a.createElement("div",{className:se.docPage},n&&a.createElement(re,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(ce,{hiddenSidebarContainer:o},t)))}var me=n(4707),ue=n(5074);function be(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(ue.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function pe(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(me.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(be,e),a.createElement(l.FG,{className:(0,o.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(de,null,i)))))}},4707:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(9496),o=n(5604),l=n(4495),r=n(1599);function i(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},4911:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>r});var a=n(9496),o=n(360);const l=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(l);if(null===e)throw new o.i6("DocsVersionProvider");return e}}}]);