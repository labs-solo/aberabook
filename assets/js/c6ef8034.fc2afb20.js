"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[7926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(83117),r=(n(67294),n(3905));const a={title:"Installation",description:"Learn many different options to install Strapi and getting started on using it.",pagination_next:"dev-docs/installation/cli"},i="Installation",l={unversionedId:"dev-docs/installation",id:"dev-docs/installation",title:"Installation",description:"Learn many different options to install Strapi and getting started on using it.",source:"@site/docs/dev-docs/installation.md",sourceDirName:"dev-docs",slug:"/dev-docs/installation",permalink:"/aberabook/dev-docs/installation",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/installation.md",tags:[],version:"current",frontMatter:{title:"Installation",description:"Learn many different options to install Strapi and getting started on using it.",pagination_next:"dev-docs/installation/cli"},sidebar:"devDocsSidebar",previous:{title:"Setup and Deployment",permalink:"/aberabook/dev-docs/setup-deployment"},next:{title:"CLI",permalink:"/aberabook/dev-docs/installation/cli"}},c={},s=[],p=(d="CustomDocCard",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const u={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Strapi projects can be installed either locally on a computer or on a remote server. The following installation guide provides step-by-step instructions on how to install and create a new Strapi project on your local machine."),(0,r.kt)(p,{title:"CLI",description:"Create a project on your local machine using the CLI",link:"/dev-docs/installation/cli",mdxType:"CustomDocCard"}),(0,r.kt)("p",null,"If you already have an existing Strapi project on your local machine, the following guide provides step-by-step instructions on creating a custom Docker image for your project."),(0,r.kt)(p,{title:"Docker",description:"Create a custom Docker container from a local project",link:"/dev-docs/installation/docker",mdxType:"CustomDocCard"}))}m.isMDXComponent=!0}}]);