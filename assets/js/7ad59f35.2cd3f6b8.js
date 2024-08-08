"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[1116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=M(e,["components","mdxType","originalType","parentName"]),g=u(n),y=r,p=g["".concat(c,".").concat(y)]||g[y]||s[y]||i;return n?o.createElement(p,a(a({ref:t},l),{},{components:n})):o.createElement(p,a({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var M={};for(var c in t)hasOwnProperty.call(t,c)&&(M[c]=t[c]);M.originalType=e,M.mdxType="string"==typeof e?e:r,a[1]=M;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},68963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>M,toc:()=>u});var o=n(83117),r=(n(67294),n(3905));const i={sidebar_position:1,slug:"/user-docs/content-type-builder"},a="Introduction to the Content-type Builder",M={unversionedId:"user-docs/content-type-builder/introduction-to-content-types-builder",id:"user-docs/content-type-builder/introduction-to-content-types-builder",title:"Introduction to the Content-type Builder",description:"The Content-type Builder is a core plugin of Strapi. It is a feature that is always activated by default and cannot be deactivated. The Content-type Builder is however only accessible when the application is in a development environment.",source:"@site/docs/user-docs/content-type-builder/introduction-to-content-types-builder.md",sourceDirName:"user-docs/content-type-builder",slug:"/user-docs/content-type-builder",permalink:"/aberabook/user-docs/content-type-builder",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/user-docs/content-type-builder/introduction-to-content-types-builder.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/user-docs/content-type-builder"},sidebar:"userDocsSidebar",previous:{title:"Including content in a release",permalink:"/aberabook/user-docs/content-manager/adding-content-to-releases"},next:{title:"Creating content-types",permalink:"/aberabook/user-docs/content-type-builder/creating-new-content-type"}},c={},u=[],l=(s="ThemedImage",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var s;const g={toc:u};function y(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-the-content-type-builder"},"Introduction to the Content-type Builder"),(0,r.kt)("p",null,"The Content-type Builder is a core plugin of Strapi. It is a feature that is always activated by default and cannot be deactivated. The Content-type Builder is however only accessible when the application is in a development environment."),(0,r.kt)("p",null,"Administrators can access the Content-type Builder from ",(0,r.kt)("img",{alt:"CTB icon",src:n(11941).Z,width:"16",height:"16"})," ",(0,r.kt)("em",{parentName:"p"},"Content-type Builder")," in the main navigation of the admin panel."),(0,r.kt)(l,{alt:"Content-type Builder interface",sources:{light:"/img/assets/content-type-builder/content-types-builder.png",dark:"/img/assets/content-type-builder/content-types-builder_DARK.png"},mdxType:"ThemedImage"}),(0,r.kt)("p",null,"From the Content-type Builder, administrators can create and manage content-types: collection types and single types but also components."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Collection types are content-types that can manage several entries."),(0,r.kt)("li",{parentName:"ul"},"Single types are content-types that can only manage one entry."),(0,r.kt)("li",{parentName:"ul"},"Components are a data structure that can be used in multiple collection types and single types.")),(0,r.kt)("p",null,"All 3 are displayed as categories in the sub navigation of the Content-type Builder. In each category are listed all content-types and components that have already been created."),(0,r.kt)("p",null,"From each category of the Content-type Builder sub navigation, it is possible to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"click on an existing content-type or component to access it and edit it (see ",(0,r.kt)("a",{parentName:"li",href:"/user-docs/content-type-builder/managing-content-types"},"Managing content-types"),"),"),(0,r.kt)("li",{parentName:"ul"},"or create a new content-type or component (see ",(0,r.kt)("a",{parentName:"li",href:"/user-docs/content-type-builder/creating-new-content-type"},"Creating content-types"),").")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Click the search icon ",(0,r.kt)("img",{alt:"Search icon",src:n(80286).Z,width:"16",height:"16"})," in the Content-type Builder sub navigation to find a specific collection type, single type, or component.")))}y.isMDXComponent=!0},11941:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjE4MTgyIDBDMC45NzY4MzMgMCAwIDAuOTc2ODMzIDAgMi4xODE4MlYyMS44MTgyQzAgMjMuMDIzMiAwLjk3NjgzMyAyNCAyLjE4MTgyIDI0SDIxLjgxODJDMjMuMDIzMiAyNCAyNCAyMy4wMjMyIDI0IDIxLjgxODJWMi4xODE4MkMyNCAwLjk3NjgzMyAyMy4wMjMyIDAgMjEuODE4MiAwSDIuMTgxODJaTTExLjUzNjEgMTEuOTg2OEgxOS4wNzVDMTkuMzg4OSAxMS45ODY4IDE5LjYyNDMgMTIuMTk2IDE5LjYyNDMgMTIuNTM2VjE5LjA3NDlDMTkuNjI0MyAxOS40MTUgMTkuMzg4OSAxOS42MjQyIDE5LjA3NSAxOS42MjQySDExLjUzNjFDMTEuMTk2MSAxOS42MjQyIDEwLjk4NjggMTkuMzg4OCAxMC45ODY4IDE5LjA3NDlWMTIuNTM2QzEwLjk4NjggMTIuMTk2IDExLjIyMjIgMTEuOTg2OCAxMS41MzYxIDExLjk4NjhaTTQuODk4MzkgOS43MTcyNEgxOS4wNzQ4QzE5LjM4ODYgOS43MTcyNCAxOS42MjQgOS41MDc5OSAxOS42MjQgOS4xNjc5N1Y0Ljg5ODUxQzE5LjYyNCA0LjU1ODQ5IDE5LjQxNDggNC4zNDkyNCAxOS4wNzQ4IDQuMzQ5MjRINC44OTgzOUM0LjU4NDUyIDQuMzQ5MjQgNC4zNDkxMiA0LjU1ODQ5IDQuMzQ5MTIgNC44OTg1MVY5LjE2Nzk3QzQuMzQ5MTIgOS41MDc5OSA0LjU4NDUyIDkuNzE3MjQgNC44OTgzOSA5LjcxNzI0Wk04LjE2Nzg1IDE5LjYyNDJINC44OTgzOUM0LjU4NDUyIDE5LjYyNDIgNC4zNDkxMiAxOS4zODg4IDQuMzQ5MTIgMTkuMDc0OVYxMi41MzZDNC4zNDkxMiAxMi4xOTYgNC41ODQ1MiAxMS45ODY4IDQuODk4MzkgMTEuOTg2OEg4LjE2Nzg1QzguNTA3ODcgMTEuOTg2OCA4LjcxNzEyIDEyLjE5NiA4LjcxNzEyIDEyLjUzNlYxOS4wNzQ5QzguNzE3MTIgMTkuNDE1IDguNDgxNzIgMTkuNjI0MiA4LjE2Nzg1IDE5LjYyNDJaIiBmaWxsPSIjMjEyMTM0Ii8+Cjwvc3ZnPgo="},80286:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy44MTI1IDIwLjE2MzVMMTguNTEyNSAxNC43OTYxQzE5LjM3NSAxMy4yOTAzIDE5LjgyNSAxMS42MTU3IDE5LjgyNSA5LjkyODY2QzE5LjgyNSA0LjQ1NTA5IDE1LjM3NSAwIDkuOTEyNSAwQzQuNDUgMCAwIDQuNDU1MDkgMCA5LjkyODY2QzAgMTUuNDAyMiA0LjQ1IDE5Ljg1NzMgOS45MTI1IDE5Ljg1NzNDMTEuNjU2MiAxOS44NTczIDEzLjM4MTIgMTkuMzc2MiAxNC45MTg3IDE4LjQ1NzdMMjAuMTkzNyAyMy44MDYzQzIwLjMxMjUgMjMuOTI1IDIwLjQ4MTIgMjQgMjAuNjUgMjRDMjAuODE4OCAyNCAyMC45ODc1IDIzLjkzMTMgMjEuMTA2MyAyMy44MDYzTDIzLjgxMjUgMjEuMDY5NUMyNC4wNjI1IDIwLjgxMzMgMjQuMDYyNSAyMC40MTM0IDIzLjgxMjUgMjAuMTYzNVpNOS45MTEzMyAzLjg2NzE5QzEzLjI0ODggMy44NjcxOSAxNS45NjEzIDYuNTg1MjMgMTUuOTYxMyA5LjkyODExQzE1Ljk2MTMgMTMuMjcxIDEzLjI0ODggMTUuOTg5IDkuOTExMzMgMTUuOTg5QzYuNTczODMgMTUuOTg5IDMuODYxMzMgMTMuMjcxIDMuODYxMzMgOS45MjgxMUMzLjg2MTMzIDYuNTg1MjMgNi41NzM4MyAzLjg2NzE5IDkuOTExMzMgMy44NjcxOVoiIGZpbGw9IiMzMjMyNEQiLz4KPC9zdmc+Cg=="}}]);