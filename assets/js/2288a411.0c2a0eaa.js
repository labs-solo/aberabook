"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[2513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(83117),o=(n(67294),n(3905));const a={title:"Lifecycle Functions",displayed_sidebar:"devDocsConfigSidebar",description:"Strapi includes lifecycle functions (e.g. register, bootstrap and destroy) that control the flow of your application."},i="Functions",s={unversionedId:"dev-docs/configurations/functions",id:"dev-docs/configurations/functions",title:"Lifecycle Functions",description:"Strapi includes lifecycle functions (e.g. register, bootstrap and destroy) that control the flow of your application.",source:"@site/docs/dev-docs/configurations/functions.md",sourceDirName:"dev-docs/configurations",slug:"/dev-docs/configurations/functions",permalink:"/aberabook/dev-docs/configurations/functions",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/configurations/functions.md",tags:[],version:"current",frontMatter:{title:"Lifecycle Functions",displayed_sidebar:"devDocsConfigSidebar",description:"Strapi includes lifecycle functions (e.g. register, bootstrap and destroy) that control the flow of your application."},sidebar:"devDocsConfigSidebar",previous:{title:"API tokens",permalink:"/aberabook/dev-docs/configurations/api-tokens"},next:{title:"CRON jobs",permalink:"/aberabook/dev-docs/configurations/cron"}},c={},p=[{value:"Synchronous function",id:"synchronous-function",level:2},{value:"Asynchronous function",id:"asynchronous-function",level:2},{value:"Function returning a promise",id:"function-returning-a-promise",level:2},{value:"Register",id:"register",level:2},{value:"Bootstrap",id:"bootstrap",level:2},{value:"Destroy",id:"destroy",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=l("Tabs"),u=l("TabItem"),m={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"functions"},"Functions"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/index.js")," file (or ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/index.ts")," file in a ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/typescript"},"TypeScript-based")," project) includes global ",(0,o.kt)("a",{parentName:"p",href:"#register"},"register"),", ",(0,o.kt)("a",{parentName:"p",href:"#bootstrap"},"bootstrap")," and ",(0,o.kt)("a",{parentName:"p",href:"#destroy"},"destroy")," functions that can be used to add dynamic and logic-based configurations."),(0,o.kt)("p",null,"The functions can be synchronous, asynchronous, or return a promise."),(0,o.kt)("mermaid",{value:'flowchart TB\n    A([The Strapi application starts.]) --\x3e B{"register()"} \n    B -- The Strapi application is setup. --\x3e C\n    C{"bootstrap()"} -- The Strapi back-end server starts. --\x3e D\n    D(Request)\n    D\n    click B "#register"\n    click C "#bootstrap"\n    click D "/dev-docs/backend-customization/requests-responses"'}),(0,o.kt)("h2",{id:"synchronous-function"},"Synchronous function"),(0,o.kt)(d,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(u,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  register() {\n    // some sync code\n  },\n  bootstrap() {\n    // some sync code\n  },\n  destroy() {\n    // some sync code\n  }\n};\n"))),(0,o.kt)(u,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  register() {\n    // some sync code\n  },\n  bootstrap() {\n    // some sync code\n  },\n  destroy() {\n    // some sync code\n  }\n};\n")))),(0,o.kt)("h2",{id:"asynchronous-function"},"Asynchronous function"),(0,o.kt)(d,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(u,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  async register() {\n    // some async code\n  },\n  async bootstrap() {\n    // some async code\n  },\n  async destroy() {\n    // some async code\n  }\n};\n"))),(0,o.kt)(u,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  async register() {\n    // some async code\n  },\n  async bootstrap() {\n    // some async code\n  },\n  async destroy() {\n    // some async code\n  }\n};\n")))),(0,o.kt)("h2",{id:"function-returning-a-promise"},"Function returning a promise"),(0,o.kt)(d,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(u,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  register() {\n    return new Promise(/* some code */);\n  },\n  bootstrap() {\n    return new Promise(/* some code */);\n  },\n  destroy() {\n    return new Promise(/* some code */);\n  }\n};\n"))),(0,o.kt)(u,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  register() {\n    return new Promise(/* some code */);\n  },\n  bootstrap() {\n    return new Promise(/* some code */);\n  },\n  destroy() {\n    return new Promise(/* some code */);\n  }\n};\n")))),(0,o.kt)("h2",{id:"register"},"Register"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," lifecycle function, found in ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/index.js")," (or in ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/index.ts"),"), is an asynchronous function that runs before the application is initialized.\nIt can be used to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dev-docs/plugins-extension#extending-a-plugin-s-interface"},"extend plugins")),(0,o.kt)("li",{parentName:"ul"},"extend ",(0,o.kt)("a",{parentName:"li",href:"/dev-docs/backend-customization/models"},"content-types")," programmatically"),(0,o.kt)("li",{parentName:"ul"},"load some ",(0,o.kt)("a",{parentName:"li",href:"/dev-docs/configurations/environment"},"environment variables")),(0,o.kt)("li",{parentName:"ul"},"register a ",(0,o.kt)("a",{parentName:"li",href:"/dev-docs/custom-fields"},"custom field")," that would be used only by the current Strapi application.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"register()")," is the very first thing that happens when a Strapi application is starting. This happens ",(0,o.kt)("em",{parentName:"p"},"before")," any setup process and you don't have any access to database, routes, policies, or any other backend server elements within the ",(0,o.kt)("inlineCode",{parentName:"p"},"register()")," function."),(0,o.kt)("h2",{id:"bootstrap"},"Bootstrap"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap")," lifecycle function, found in ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/index.js")," (or in ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/index.ts"),"), is called at every server start."),(0,o.kt)("p",null,"It can be used to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create an admin user if there isn't one"),(0,o.kt)("li",{parentName:"ul"},"fill the database with some necessary data"),(0,o.kt)("li",{parentName:"ul"},"declare custom conditions for the ",(0,o.kt)("a",{parentName:"li",href:"/dev-docs/configurations/rbac"},"Role-Based Access Control (RBAC)")," feature")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrapi()")," function is run ",(0,o.kt)("em",{parentName:"p"},"before")," the back-end server starts but ",(0,o.kt)("em",{parentName:"p"},"after")," the Strapi application has setup, so you have access to anything from the ",(0,o.kt)("inlineCode",{parentName:"p"},"strapi")," object."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn strapi console")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run strapi console"),") in the terminal and interact with the ",(0,o.kt)("inlineCode",{parentName:"p"},"strapi")," object.")),(0,o.kt)("h2",{id:"destroy"},"Destroy"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy")," function, found in ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/index.js")," (or in ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/index.ts"),"), is an asynchronous function that runs before the application gets shut down."),(0,o.kt)("p",null,"It can be used to gracefully:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"stop ",(0,o.kt)("a",{parentName:"li",href:"/dev-docs/backend-customization/services"},"services")," that are running"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dev-docs/api/plugins/server-api#destroy"},"clean up plugin actions")," (e.g. close connections, remove listeners, etc.)")))}f.isMDXComponent=!0}}]);