"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[8298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const s={title:"Introduction to Releases",description:"Introduction to the Releases feature that enables content managers to organize entries to publish/unpublish simultaneously"},o="Releases <EnterpriseBadge /> <CloudTeamBadge/>",i={unversionedId:"user-docs/releases/introduction",id:"user-docs/releases/introduction",title:"Introduction to Releases",description:"Introduction to the Releases feature that enables content managers to organize entries to publish/unpublish simultaneously",source:"@site/docs/user-docs/releases/introduction.md",sourceDirName:"user-docs/releases",slug:"/user-docs/releases/introduction",permalink:"/aberabook/user-docs/releases/introduction",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/user-docs/releases/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction to Releases",description:"Introduction to the Releases feature that enables content managers to organize entries to publish/unpublish simultaneously"}},l={},c=[],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=u("EnterpriseBadge"),p=u("CloudTeamBadge"),m=u("ThemedImage"),g={toc:c};function f(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"releases--"},"Releases ",(0,a.kt)(d,{mdxType:"EnterpriseBadge"})," ",(0,a.kt)(p,{mdxType:"CloudTeamBadge"})),(0,a.kt)("p",null,"Releases enables content managers to organize entries into containers that can perform publish and unpublish actions simultaneously. A release can contain entries from different content types and can mix locales."),(0,a.kt)(m,{alt:"List of Releases",sources:{light:"/img/assets/releases/releases-overview.png",dark:"/img/assets/releases/releases-overview_DARK.png"},mdxType:"ThemedImage"}),(0,a.kt)("p",null,"Administrators can access Releases from ",(0,a.kt)("img",{alt:"Releases icon",src:n(16338).Z,width:"16",height:"16"})," ",(0,a.kt)("em",{parentName:"p"},"Releases")," in the main navigation of the admin panel."),(0,a.kt)("p",null,"From the Releases view, it is possible to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/user-docs/releases/creating-a-release"},"create a new release"),","),(0,a.kt)("li",{parentName:"ul"},"view pending and done releases,"),(0,a.kt)("li",{parentName:"ul"},"view which releases are ",(0,a.kt)("a",{parentName:"li",href:"/user-docs/releases/managing-a-release#scheduling-a-release"},"scheduled"),", and when they will be published (in the Pending tab) or have been published (in the Done tab),"),(0,a.kt)("li",{parentName:"ul"},"and click on a release to ",(0,a.kt)("a",{parentName:"li",href:"/user-docs/releases/managing-a-release"},"manage its content"),".")))}f.isMDXComponent=!0},16338:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE0NjVfOTUzMSkiPgo8cGF0aCBkPSJNMS4yOTczMyA2LjIxMDAxQzAuOTQ5MzMgNi4wOTQwMSAwLjk0NTk5NiA1LjkwNjY3IDEuMzA0IDUuNzg3MzRMMTQuMDI4NyAxLjU0NjAxQzE0LjM4MTMgMS40Mjg2NyAxNC41ODMzIDEuNjI2MDEgMTQuNDg0NyAxLjk3MTM0TDEwLjg0ODcgMTQuNjk1M0MxMC43NDg3IDE1LjA0OCAxMC41NDUzIDE1LjA2IDEwLjM5NiAxNC43MjUzTDggOS4zMzMzNEwxMiA0LjAwMDAxTDYuNjY2NjYgOC4wMDAwMUwxLjI5NzMzIDYuMjEwMDFaIiBmaWxsPSIjMDAwIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTQ2NV85NTMxIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);