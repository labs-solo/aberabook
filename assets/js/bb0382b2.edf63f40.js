"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[8839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),g=i,c=m["".concat(p,".").concat(g)]||m[g]||u[g]||r;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(83117),i=(n(67294),n(3905));const r={title:"Plugins configuration",sidebar_label:"Plugins",displayed_sidebar:"devDocsConfigSidebar",description:"Strapi plugins have a single entry point file to define their configurations."},l="Plugins configuration",o={unversionedId:"dev-docs/configurations/plugins",id:"dev-docs/configurations/plugins",title:"Plugins configuration",description:"Strapi plugins have a single entry point file to define their configurations.",source:"@site/docs/dev-docs/configurations/plugins.md",sourceDirName:"dev-docs/configurations",slug:"/dev-docs/configurations/plugins",permalink:"/aberabook/dev-docs/configurations/plugins",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/configurations/plugins.md",tags:[],version:"current",frontMatter:{title:"Plugins configuration",sidebar_label:"Plugins",displayed_sidebar:"devDocsConfigSidebar",description:"Strapi plugins have a single entry point file to define their configurations."},sidebar:"devDocsConfigSidebar",previous:{title:"Configurations",permalink:"/aberabook/dev-docs/configurations"},next:{title:"TypeScript",permalink:"/aberabook/dev-docs/configurations/typescript"}},p={},d=[{value:"GraphQL configuration",id:"graphql-configuration",level:2},{value:"Upload configuration",id:"upload-configuration",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=s("Tabs"),m=s("TabItem"),g={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plugins-configuration"},"Plugins configuration"),(0,i.kt)("p",null,"Plugin configurations are stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"/config/plugins.js|ts")," (see ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/project-structure"},"project structure"),"). Each plugin can be configured with the following available parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Enable (",(0,i.kt)("inlineCode",{parentName:"td"},"true"),") or disable (",(0,i.kt)("inlineCode",{parentName:"td"},"false"),") an installed plugin"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"config"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Optional")),(0,i.kt)("td",{parentName:"tr",align:null},"Used to override default plugin configuration (",(0,i.kt)("a",{parentName:"td",href:"/dev-docs/api/plugins/server-api#configuration"},"defined in strapi-server.js"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Object")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"resolve"),(0,i.kt)("br",null)," ",(0,i.kt)("em",{parentName:"td"},"Optional, only required for local plugins")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to the plugin's folder"),(0,i.kt)("td",{parentName:"tr",align:null},"String")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Some features of Strapi are provided by plugins and the following plugins can also have specific configuration options: ",(0,i.kt)("a",{parentName:"p",href:"#graphql-configuration"},"GraphQL")," and ",(0,i.kt)("a",{parentName:"p",href:"#upload-configuration"},"Upload"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Basic example custom configuration for plugins:")),(0,i.kt)(u,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(m,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/plugins.js"',title:'"./config/plugins.js"'},"\nmodule.exports = ({ env }) => ({\n  // enable a plugin that doesn't require any configuration\n  i18n: true,\n\n  // enable a custom plugin\n  myplugin: {\n    // my-plugin is going to be the internal name used for this plugin\n    enabled: true,\n    resolve: './src/plugins/my-local-plugin',\n    config: {\n      // user plugin config goes here\n    },\n  },\n\n  // disable a plugin\n  'my-other-plugin': {\n    enabled: false, // plugin installed but disabled\n  },\n});\n"))),(0,i.kt)(m,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./config/plugins.ts"',title:'"./config/plugins.ts"'},"\nexport default ({ env }) => ({\n  // enable a plugin that doesn't require any configuration\n  i18n: true,\n\n  // enable a custom plugin\n  myplugin: {\n    // my-plugin is going to be the internal name used for this plugin\n    enabled: true,\n    resolve: './src/plugins/my-local-plugin',\n    config: {\n      // user plugin config goes here\n    },\n  },\n\n  // disable a plugin\n  'my-other-plugin': {\n    enabled: false, // plugin installed but disabled\n  },\n});\n")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If no specific configuration is required, a plugin can also be declared with the shorthand syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"'plugin-name': true"),".")),(0,i.kt)("h2",{id:"graphql-configuration"},"GraphQL configuration"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/plugins/graphql"},"GraphQL plugin")," has the following specific configuration options that should be declared in a ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql.config")," object within the ",(0,i.kt)("inlineCode",{parentName:"p"},"config/plugins")," file. All parameters are optional:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"apolloServer")),(0,i.kt)("td",{parentName:"tr",align:null},"Additional configuration for ",(0,i.kt)("a",{parentName:"td",href:"https://www.apollographql.com/docs/apollo-server/api/apollo-server/#apolloserver"},(0,i.kt)("inlineCode",{parentName:"a"},"ApolloServer")),"."),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"artifacts")),(0,i.kt)("td",{parentName:"tr",align:null},"Object containing filepaths, defining where to store generated artifacts. Can include the following properties: ",(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"schema"),": path to the generated GraphQL schema file"),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"typegen"),": path to generated TypeScript types")),"Only works if ",(0,i.kt)("inlineCode",{parentName:"td"},"generateArtifacts")," is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"schema: false")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"typegen: false"))))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"defaultLimit")),(0,i.kt)("td",{parentName:"tr",align:null},"Default value for ",(0,i.kt)("a",{parentName:"td",href:"/dev-docs/api/graphql#pagination-by-offset"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"pagination[limit]")," parameter")," used in API calls"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"depthLimit")),(0,i.kt)("td",{parentName:"tr",align:null},"Limits the ",(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/graphql-depth-limit"},"complexity of GraphQL queries"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"10"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,i.kt)("td",{parentName:"tr",align:null},"The URL path on which the plugin is exposed"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/graphql"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"generateArtifacts")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether Strapi should automatically generate and output a GraphQL schema file and corresponding TypeScript definitions.",(0,i.kt)("br",null),(0,i.kt)("br",null),"The file system location can be configured through ",(0,i.kt)("inlineCode",{parentName:"td"},"artifacts"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"maxLimit")),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum value for ",(0,i.kt)("a",{parentName:"td",href:"/dev-docs/api/graphql#pagination-by-offset"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"pagination[limit]")," parameter")," used in API calls"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"playgroundAlways")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether the playground should be publicly exposed.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Enabled by default in if ",(0,i.kt)("inlineCode",{parentName:"td"},"NODE_ENV")," is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"development"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"shadowCRUD")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether type definitions for queries, mutations and resolvers based on models should be created automatically (see ",(0,i.kt)("a",{parentName:"td",href:"/dev-docs/plugins/graphql#shadow-crud"},"Shadow CRUD documentation"),")."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example custom configuration"),":"),(0,i.kt)(u,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(m,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/plugins.js"',title:'"./config/plugins.js"'},"\nmodule.exports = () => ({\n  graphql: {\n    enabled: true,\n    config: {\n      playgroundAlways: false,\n      defaultLimit: 10,\n      maxLimit: 20,\n      apolloServer: {\n        tracing: true,\n      },\n    }\n  }\n})\n"))),(0,i.kt)(m,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./config/plugins.ts"',title:'"./config/plugins.ts"'},"\nexport default () => ({\n  graphql: {\n    enabled: true,\n    config: {\n      playgroundAlways: false,\n      defaultLimit: 10,\n      maxLimit: 20,\n      apolloServer: {\n        tracing: true,\n      },\n    }\n  }\n})\n")))),(0,i.kt)("h2",{id:"upload-configuration"},"Upload configuration"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/plugins/upload"},"Upload plugin")," handles the ",(0,i.kt)("a",{parentName:"p",href:"/user-docs/media-library"},"Media Library"),". When using the default upload provider, the following specific configuration options can be declared in an ",(0,i.kt)("inlineCode",{parentName:"p"},"upload.config")," object within the ",(0,i.kt)("inlineCode",{parentName:"p"},"config/plugins")," file. All parameters are optional:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"providerOptions.localServer")),(0,i.kt)("td",{parentName:"tr",align:null},"Options that will be passed to ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/koajs/static"},"koa-static")," upon which the Upload server is build.",(0,i.kt)("br",null),(0,i.kt)("br",null),"(See ",(0,i.kt)("a",{parentName:"td",href:"/dev-docs/plugins/upload#local-server"},"local server configuration")," in Upload documentation for additional details)"),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sizeLimit")),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum file size in bytes.",(0,i.kt)("br",null),(0,i.kt)("br",null),"(See ",(0,i.kt)("a",{parentName:"td",href:"/dev-docs/plugins/upload#max-file-size"},"max file size configuration")," in Upload plugin documentation for additional information)"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"209715200"),(0,i.kt)("br",null),(0,i.kt)("br",null),"(200 MB in bytes, i.e., 200 x 1024 x 1024 bytes)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"breakpoints")),(0,i.kt)("td",{parentName:"tr",align:null},'Allows to override the breakpoints sizes at which responsive images are generated when the "Responsive friendly upload" option is set to ',(0,i.kt)("inlineCode",{parentName:"td"},"true"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),"(See ",(0,i.kt)("a",{parentName:"td",href:"/dev-docs/plugins/upload#responsive-images"},"responsive images configuration")," in Upload plugin documentation for additional information)"),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{ large: 1000, medium: 750, small: 500 }"))))),(0,i.kt)("admonition",{title:"Notes",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Some configuration options can also be set directly from the Admin Panel (see ",(0,i.kt)("a",{parentName:"li",href:"/user-docs/settings/media-library-settings"},"User Guide"),")."),(0,i.kt)("li",{parentName:"ul"},"The Upload request timeout is defined in the server options, not in the Upload plugin options, as it's not specific to the Upload plugin but is applied to the whole Strapi server instance. See ",(0,i.kt)("a",{parentName:"li",href:"/dev-docs/plugins/upload#upload-request-timeout"},"upload request timeout configuration")," in the Upload documentation for additional details."),(0,i.kt)("li",{parentName:"ul"},"When using a different upload provider, additional configuration options might be available. For Upload providers maintained by Strapi, see the ",(0,i.kt)("a",{parentName:"li",href:"https://market.strapi.io/providers/@strapi-provider-upload-aws-s3"},"Amazon S3 provider")," and ",(0,i.kt)("a",{parentName:"li",href:"https://market.strapi.io/providers/@strapi-provider-upload-cloudinary"},"Cloudinary provider")," documentations for additional information about available options."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example custom configuration"),":"),(0,i.kt)("p",null,"The following is an example of a custom configuration for the Upload plugin when using the default upload provider:"),(0,i.kt)(u,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(m,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/config/plugins.js"',title:'"/config/plugins.js"'},"\nmodule.exports = ({ env })=>({\n  upload: {\n    config: {\n      providerOptions: {\n        localServer: {\n          maxage: 300000\n        },\n      },\n      sizeLimit: 250 * 1024 * 1024, // 256mb in bytes\n      breakpoints: {\n        xlarge: 1920,\n        large: 1000,\n        medium: 750,\n        small: 500,\n        xsmall: 64\n      },\n    },\n  },\n});\n"))),(0,i.kt)(m,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/config/plugins.ts"',title:'"/config/plugins.ts"'},"\nexport default () => ({\n  upload: {\n    config: {\n      providerOptions: {\n        localServer: {\n          maxage: 300000\n        },\n      },\n      sizeLimit: 250 * 1024 * 1024, // 256mb in bytes\n      breakpoints: {\n        xlarge: 1920,\n        large: 1000,\n        medium: 750,\n        small: 500,\n        xsmall: 64\n      },\n    },\n  },\n})\n")))))}c.isMDXComponent=!0}}]);