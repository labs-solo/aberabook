"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[9918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||l[m]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(83117),r=(n(67294),n(3905));const o={title:"Customization",displayed_sidebar:"devDocsSidebar",pagination_next:"dev-docs/plugins"},i="Customization",s={unversionedId:"dev-docs/customization",id:"dev-docs/customization",title:"Customization",description:"Strapi includes 2 main components:",source:"@site/docs/dev-docs/customization.md",sourceDirName:"dev-docs",slug:"/dev-docs/customization",permalink:"/aberabook/dev-docs/customization",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/customization.md",tags:[],version:"current",frontMatter:{title:"Customization",displayed_sidebar:"devDocsSidebar",pagination_next:"dev-docs/plugins"},sidebar:"devDocsSidebar",next:{title:"Plugins",permalink:"/aberabook/dev-docs/plugins"}},c={},d=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},l=p("CustomDocCardsWrapper"),u=p("CustomDocCard"),m={toc:d};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"customization"},"Customization"),(0,r.kt)("p",null,"Strapi includes 2 main components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The back-end part of Strapi is a ",(0,r.kt)("strong",{parentName:"p"},"server")," that receives requests and handles them to return responses that can surface the data you built and saved through the Content-Type Builder and Content Manager. The backend server is described in more details in the ",(0,r.kt)("a",{parentName:"p",href:"/dev-docs/backend-customization"},"Backend Customization introduction"),". Most of the parts of the backend server can be customized.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The front-end, user-facing part of Strapi is called the ",(0,r.kt)("strong",{parentName:"p"},"admin panel"),". The admin panel is the graphical user interface (GUI) that you use to build a data structure, create and manage content, and perform various other actions that can be managed by built-in or 3rd-party plugins.  Some parts of the admin panel can be customized."))),(0,r.kt)("p",null,"From a bigger picture, this is how Strapi integrates in a typical, generic setup: Strapi includes 2 parts, a back-end server and an admin panel, and interact with a database (which stores data) and an external, front-end application that displays your data. Both parts of Strapi can be customized to some extent."),(0,r.kt)("mermaid",{value:"\n  flowchart LR\n    database[(Database)] --\x3e backend[Back-end server]\n    subgraph Strapi\n        direction BT\n        backend --\x3e frontend[Admin Panel]\n        frontend \n    end\n    frontend --\x3e external{{External, front-end applications}}"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Click on any of the following cards to learn more about customization possibilities:"),(0,r.kt)(l,{mdxType:"CustomDocCardsWrapper"},(0,r.kt)(u,{emoji:"",title:"Back-end customization",description:"Customize the backend server (routes, policies, middlewares, controllers, services, and models).",link:"/dev-docs/backend-customization",mdxType:"CustomDocCard"}),(0,r.kt)(u,{emoji:"",title:"Admin panel customization",description:"Customize the admin panel (logos, themes, menu, translations, and more).",link:"/dev-docs/admin-panel-customization",mdxType:"CustomDocCard"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Customizing the database or the external, front-end application are outside of the scope of the present documentation section."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"You can learn more about databases usage with Strapi by reading the installation documentation, which lists ",(0,r.kt)("a",{parentName:"li",href:"/dev-docs/installation/cli#preparing-the-installation"},"supported databases"),", and the configuration documentation, which describes how to ",(0,r.kt)("a",{parentName:"li",href:"/dev-docs/configurations/database"},"configure a database")," with your project."),(0,r.kt)("li",{parentName:"ul"},"You can learn more about how external front-end applications can interact with Strapi by reading the ",(0,r.kt)("a",{parentName:"li",href:"/dev-docs/integrations"},"integration guides"),"."))))}b.isMDXComponent=!0}}]);