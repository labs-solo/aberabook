"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[2395],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>y});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(o),y=n,m=u["".concat(d,".").concat(y)]||u[y]||c[y]||a;return o?r.createElement(m,i(i({ref:t},l),{},{components:o})):r.createElement(m,i({ref:t},l))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2635:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=o(83117),n=(o(67294),o(3905));const a={title:"Optional Software Guides",description:"Learn how to use proxy and process managers in your deployed Strapi application .",displayed_sidebar:"devDocsSidebar"},i="Optional Software Guides",p={unversionedId:"dev-docs/deployment/optional-software-guides",id:"dev-docs/deployment/optional-software-guides",title:"Optional Software Guides",description:"Learn how to use proxy and process managers in your deployed Strapi application .",source:"@site/docs/dev-docs/deployment/optional-software-guides.md",sourceDirName:"dev-docs/deployment",slug:"/dev-docs/deployment/optional-software-guides",permalink:"/aberabook/dev-docs/deployment/optional-software-guides",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/deployment/optional-software-guides.md",tags:[],version:"current",frontMatter:{title:"Optional Software Guides",description:"Learn how to use proxy and process managers in your deployed Strapi application .",displayed_sidebar:"devDocsSidebar"},sidebar:"devDocsSidebar",previous:{title:"Heroku",permalink:"/aberabook/dev-docs/deployment/heroku"},next:{title:"Optional Software Guides",permalink:"/aberabook/dev-docs/deployment/optional-software-guides"}},d={},s=[],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=l("CustomDocCardsWrapper"),u=l("CustomDocCard"),y={toc:s};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"optional-software-guides"},"Optional Software Guides"),(0,n.kt)("admonition",{type:"prerequisites"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Your Strapi project is ",(0,n.kt)("a",{parentName:"li",href:"/dev-docs/installation"},"created")," and its code is hosted on GitHub."),(0,n.kt)("li",{parentName:"ul"},"You have read the ",(0,n.kt)("a",{parentName:"li",href:"/dev-docs/deployment#general-guidelines"},"general deployment guidelines"),"."),(0,n.kt)("li",{parentName:"ul"},"You have deployed Strapi on a ",(0,n.kt)("a",{parentName:"li",href:"/dev-docs/deployment/hosting-guides"},"3rd-party platform")," or on your own server."))),(0,n.kt)("p",null,"The following guides are for optional software additions that compliment or improve the ",(0,n.kt)("a",{parentName:"p",href:"/dev-docs/deployment"},"deployment")," process when using Strapi in a production or production-like environment:"),(0,n.kt)(c,{mdxType:"CustomDocCardsWrapper"},(0,n.kt)(u,{title:"Caddy Proxying",description:"Use a proxy application like Caddy to secure your Strapi project.",link:"/dev-docs/deployment/caddy-proxy",mdxType:"CustomDocCard"}),(0,n.kt)(u,{title:"HAProxy Proxying",description:"Use a proxy application like HAProxy to secure your Strapi project.",link:"/dev-docs/deployment/haproxy-proxy",mdxType:"CustomDocCard"}),(0,n.kt)(u,{title:"NGinx Proxying",description:"Use a proxy application like Nginx to secure your Strapi project.",link:"/dev-docs/deployment/nginx-proxy",mdxType:"CustomDocCard"}),(0,n.kt)(u,{title:"PM2 Process Manager",description:"Install and start a Strapi application using a process manager.",link:"/dev-docs/deployment/process-manager",mdxType:"CustomDocCard"})))}m.isMDXComponent=!0}}]);