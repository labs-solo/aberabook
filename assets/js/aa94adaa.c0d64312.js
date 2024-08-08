"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[9270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,y=d["".concat(p,".").concat(g)]||d[g]||u[g]||r;return n?o.createElement(y,i(i({ref:t},s),{},{components:n})):o.createElement(y,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(83117),a=(n(67294),n(3905));const r={sidebar_position:2},i="Creating content-types",l={unversionedId:"user-docs/content-type-builder/creating-new-content-type",id:"user-docs/content-type-builder/creating-new-content-type",title:"Creating content-types",description:"The Content-type Builder is only accessible to create and update content-types when your Strapi application is in a development environment, else it will be in a read-only mode in other environments.",source:"@site/docs/user-docs/content-type-builder/creating-new-content-type.md",sourceDirName:"user-docs/content-type-builder",slug:"/user-docs/content-type-builder/creating-new-content-type",permalink:"/aberabook/user-docs/content-type-builder/creating-new-content-type",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/user-docs/content-type-builder/creating-new-content-type.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"userDocsSidebar",previous:{title:"Introduction to the Content-type Builder",permalink:"/aberabook/user-docs/content-type-builder"},next:{title:"Configuring fields for content-types",permalink:"/aberabook/user-docs/content-type-builder/configuring-fields-content-type"}},p={},c=[{value:"Creating a new content-type",id:"creating-a-new-content-type",level:2},{value:"Creating a new component",id:"creating-a-new-component",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=s("ThemedImage"),d=s("EnterpriseBadge"),g={toc:c};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-content-types"},"Creating content-types"),(0,a.kt)("admonition",{title:"Development-only",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Content-type Builder is only accessible to create and update content-types when your Strapi application is in a development environment, else it will be in a read-only mode in other environments.")),(0,a.kt)("p",null,"The Content-type Builder allows to create new content-types: single and collection types. Although they are not proper content-types as they cannot exist independently, components can also be created through the Content-type Builder, in the same way as collection and single types."),(0,a.kt)("h2",{id:"creating-a-new-content-type"},"Creating a new content-type"),(0,a.kt)(u,{alt:"Content-type creation",sources:{light:"/img/assets/content-type-builder/content-type-creation.png",dark:"/img/assets/content-type-builder/content-type-creation_DARK.png"},mdxType:"ThemedImage"}),(0,a.kt)("p",null,"Content types are created from the Content-type Builder's Collection types and Single types categories, both displayed in the Content-type Builder sub navigation."),(0,a.kt)("p",null,"To create a new content-type:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose whether you want to create a collection type or a single type.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the category of the content-type you want to create, click on ",(0,a.kt)("strong",{parentName:"p"},"Create a new collection/single type"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the content-type creation window, write the name of the new content-type in the ",(0,a.kt)("em",{parentName:"p"},"Display name")," textbox.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the ",(0,a.kt)("em",{parentName:"p"},"API UID")," to make sure the automatically pre-filled values are correct. Collection type names are indeed automatically pluralized when displayed in the Content Manager. It is recommended to opt for singular names, but the ",(0,a.kt)("em",{parentName:"p"},"API UID")," field allows to fix any pluralization mistake.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(optional) In the Advanced Settings tab, configure the available settings for the new content-type:"),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Setting name"),(0,a.kt)("th",{parentName:"tr",align:null},"Instructions"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Draft & publish"),(0,a.kt)("td",{parentName:"tr",align:null},"Tick the checkbox to allow entries of the content-type to be managed as draft versions, before they are published (see ",(0,a.kt)("a",{parentName:"td",href:"/user-docs/content-manager/saving-and-publishing-content#saving-publishing-content"},"Saving & publishing content"),").")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Localization"),(0,a.kt)("td",{parentName:"tr",align:null},"(if the ",(0,a.kt)("a",{parentName:"td",href:"/user-docs/plugins/strapi-plugins#-internationalization-plugin"},"Internationalization plugin")," is installed) Tick the checkbox to allow entries of the content-type to be translated into other locales.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Review workflows"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(d,{mdxType:"EnterpriseBadge"})," Tick the checkbox to allow entries of the content-type to be managed through defined review stages (see ",(0,a.kt)("a",{parentName:"td",href:"/user-docs/settings/review-workflows"},"Managing Review Workflows"),")."))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the ",(0,a.kt)("strong",{parentName:"p"},"Continue")," button.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add and configure chosen fields for your content-type (see ",(0,a.kt)("a",{parentName:"p",href:"/user-docs/content-type-builder/configuring-fields-content-type"},"Configuring fields for content-types"),").")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the ",(0,a.kt)("strong",{parentName:"p"},"Save")," button."))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"New content-types are only considered created once they have been saved. Saving is only possible if at least one field has been added and properly configured. If these steps have not been done, a content-type cannot be created, listed in its category in the Content-type Builder, and cannot be used in the Content Manager.")),(0,a.kt)("h2",{id:"creating-a-new-component"},"Creating a new component"),(0,a.kt)(u,{alt:"Component creation",sources:{light:"/img/assets/content-type-builder/component-creation-1.png",dark:"/img/assets/content-type-builder/component-creation-1_DARK.png"},mdxType:"ThemedImage"}),(0,a.kt)("p",null,"Components are created from the same-named category of the Content-type Builder's sub navigation."),(0,a.kt)("p",null,"To create a new component:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Components category of the Content-type Builder sub navigation, click on ",(0,a.kt)("strong",{parentName:"li"},"Create a new component"),"."),(0,a.kt)("li",{parentName:"ol"},"In the component creation window, configure the base settings of the new component:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Write the name of the component in the ",(0,a.kt)("em",{parentName:"li"},"Name")," textbox."),(0,a.kt)("li",{parentName:"ul"},"Select an available category, or enter in the textbox a new category name to create one."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"(optional)")," Choose an icon representing the new component. You can use the search ",(0,a.kt)("img",{alt:"Search icon",src:n(80286).Z,width:"16",height:"16"})," to find an icon instead of scrolling through the list."))),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Continue")," button."),(0,a.kt)("li",{parentName:"ol"},"Add and configure chosen fields for your component (see ",(0,a.kt)("a",{parentName:"li",href:"/user-docs/content-type-builder/configuring-fields-content-type"},"Configuring fields for content-types"),")."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Save")," button.")))}y.isMDXComponent=!0},80286:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy44MTI1IDIwLjE2MzVMMTguNTEyNSAxNC43OTYxQzE5LjM3NSAxMy4yOTAzIDE5LjgyNSAxMS42MTU3IDE5LjgyNSA5LjkyODY2QzE5LjgyNSA0LjQ1NTA5IDE1LjM3NSAwIDkuOTEyNSAwQzQuNDUgMCAwIDQuNDU1MDkgMCA5LjkyODY2QzAgMTUuNDAyMiA0LjQ1IDE5Ljg1NzMgOS45MTI1IDE5Ljg1NzNDMTEuNjU2MiAxOS44NTczIDEzLjM4MTIgMTkuMzc2MiAxNC45MTg3IDE4LjQ1NzdMMjAuMTkzNyAyMy44MDYzQzIwLjMxMjUgMjMuOTI1IDIwLjQ4MTIgMjQgMjAuNjUgMjRDMjAuODE4OCAyNCAyMC45ODc1IDIzLjkzMTMgMjEuMTA2MyAyMy44MDYzTDIzLjgxMjUgMjEuMDY5NUMyNC4wNjI1IDIwLjgxMzMgMjQuMDYyNSAyMC40MTM0IDIzLjgxMjUgMjAuMTYzNVpNOS45MTEzMyAzLjg2NzE5QzEzLjI0ODggMy44NjcxOSAxNS45NjEzIDYuNTg1MjMgMTUuOTYxMyA5LjkyODExQzE1Ljk2MTMgMTMuMjcxIDEzLjI0ODggMTUuOTg5IDkuOTExMzMgMTUuOTg5QzYuNTczODMgMTUuOTg5IDMuODYxMzMgMTMuMjcxIDMuODYxMzMgOS45MjgxMUMzLjg2MTMzIDYuNTg1MjMgNi41NzM4MyAzLjg2NzE5IDkuOTExMzMgMy44NjcxOVoiIGZpbGw9IiMzMjMyNEQiLz4KPC9zdmc+Cg=="}}]);