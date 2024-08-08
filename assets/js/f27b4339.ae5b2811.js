"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[5450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(83117),i=(n(67294),n(3905));const r={title:"Configuration",displayed_sidebar:"devDocsSidebar",description:"Migrate your configuration from Strapi v3.6.x to v4.0.x with step-by-step instructions",pagination_next:"dev-docs/migration/v3-to-v4/code/dependencies",sidebarDepth:3},o="v4 code migration: Updating configuration",l={unversionedId:"dev-docs/migration/v3-to-v4/code/configuration",id:"dev-docs/migration/v3-to-v4/code/configuration",title:"Configuration",description:"Migrate your configuration from Strapi v3.6.x to v4.0.x with step-by-step instructions",source:"@site/docs/dev-docs/migration/v3-to-v4/code/configuration.md",sourceDirName:"dev-docs/migration/v3-to-v4/code",slug:"/dev-docs/migration/v3-to-v4/code/configuration",permalink:"/aberabook/dev-docs/migration/v3-to-v4/code/configuration",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/migration/v3-to-v4/code/configuration.md",tags:[],version:"current",frontMatter:{title:"Configuration",displayed_sidebar:"devDocsSidebar",description:"Migrate your configuration from Strapi v3.6.x to v4.0.x with step-by-step instructions",pagination_next:"dev-docs/migration/v3-to-v4/code/dependencies",sidebarDepth:3},sidebar:"devDocsSidebar",previous:{title:"Backend code migration",permalink:"/aberabook/dev-docs/migration/v3-to-v4/code/backend"},next:{title:"Dependencies",permalink:"/aberabook/dev-docs/migration/v3-to-v4/code/dependencies"}},s={},p=[{value:"Database configuration",id:"database-configuration",level:2},{value:"Server configuration",id:"server-configuration",level:2},{value:"Admin panel configuration",id:"admin-panel-configuration",level:2},{value:"Middlewares configuration",id:"middlewares-configuration",level:2},{value:"CRON tasks",id:"cron-tasks",level:2},{value:"API configuration",id:"api-configuration",level:2},{value:"Plugins configuration",id:"plugins-configuration",level:2},{value:"Custom functions folder",id:"custom-functions-folder",level:2},{value:"Bootstrap function",id:"bootstrap-function",level:2},{value:"Custom responses",id:"custom-responses",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"v4-code-migration-updating-configuration"},"v4 code migration: Updating configuration"),(0,i.kt)("p",null,"This guide is part of the ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/migration/v3-to-v4/code-migration"},"v4 code migration guide")," designed to help you migrate the code of a Strapi application from v3.6.x to v4.0.x"),(0,i.kt)("p",null,"Strapi v4 introduces several types of changes to configurations, which includes new files, moved or restructured files, and removed features. The following table gives a high-level overview of the changes, and you can click on a specific topic to read more information:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Configuration topic"),(0,i.kt)("th",{parentName:"tr",align:null},"Type of change in Strapi v4 vs. v3"),(0,i.kt)("th",{parentName:"tr",align:null},"File name in Strapi v4"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#database-configuration"},"Database")),(0,i.kt)("td",{parentName:"tr",align:null},"Changes to an existing Strapi v3 file"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"database.js"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#server-configuration"},"Server")),(0,i.kt)("td",{parentName:"tr",align:null},"Changes to an existing Strapi v3 file"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"server.js"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#admin-panel-configuration"},"Admin panel")),(0,i.kt)("td",{parentName:"tr",align:null},"New file in Strapi v4"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"admin.js"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#middlewares-configuration"},"Middlewares")),(0,i.kt)("td",{parentName:"tr",align:null},"Changes to an existing Strapi v3 file"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"middlewares.js"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#cron-tasks"},"CRON tasks")),(0,i.kt)("td",{parentName:"tr",align:null},"New file in Strapi v4"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cron-tasks.js"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#api-configuration"},"API")),(0,i.kt)("td",{parentName:"tr",align:null},"Changes to an existing Strapi v3 file"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"api.js"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#plugins-configuration"},"Plugins")),(0,i.kt)("td",{parentName:"tr",align:null},"Changes to an existing Strapi v3 file"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"plugins.js"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#bootstrap-function"},"Bootstrap function")),(0,i.kt)("td",{parentName:"tr",align:null},"Now defined in the global ",(0,i.kt)("inlineCode",{parentName:"td"},"src/index.js")," file"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#custom-functions-folder"},"Custom functions folder")),(0,i.kt)("td",{parentName:"tr",align:null},"Feature removed from Strapi v4"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#custom-responses"},"Custom responses")),(0,i.kt)("td",{parentName:"tr",align:null},"Feature removed from Strapi v4"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This part of the code migration guide is not an exhaustive resource for Strapi v4 configurations, which are described in the ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/configurations"},"configurations documentation"),".")),(0,i.kt)("h2",{id:"database-configuration"},"Database configuration"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"MongoDB databases are no longer supported in Strapi v4. You need to migrate to ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/installation/cli#preparing-the-installation"},"a compatible SQL database")," to use Strapi v4.")),(0,i.kt)("p",null,"Due to the complete rewrite of the database and query layers in Strapi v4, the entire structure of the ",(0,i.kt)("inlineCode",{parentName:"p"},"database.js")," file has changed (see ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/configurations/database#configuration-structure"},"database configuration")," documentation). Multi-database support has been dropped, so there is no more ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultConnection")," key. Instead, in Strapi v4, the 2 main database configuration objects are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connection"),", passed to the database connection manager package (i.e. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/knex/knex"},"Knex.js"),"),"),(0,i.kt)("li",{parentName:"ul"},"and ",(0,i.kt)("inlineCode",{parentName:"li"},"settings")," for Strapi-specific settings.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Strapi v4 does not abstract Knex.js key names so some key names are different in Strapi v3 and v4 (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," in Strapi v3 is now ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," in Strapi v4) (see ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/configurations/database"},"database configuration")," documentation).")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Example of a Strapi v3 database configuration for PostgreSQL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/database.js"',title:'"./config/database.js"'},"\nmodule.exports = ({ env }) => ({\n  defaultConnection: 'default',\n  connections: {\n    default: {\n      connector: 'bookshelf',\n      settings: {\n        client: 'postgres',\n        host: env('DATABASE_HOST', 'localhost'),\n        port: env.int('DATABASE_PORT', 5432),\n        database: env('DATABASE_NAME', 'strapi'),\n        username: env('DATABASE_USERNAME', 'strapi'),\n        password: env('DATABASE_PASSWORD', 'strapi'),\n        schema: env('DATABASE_SCHEMA', 'public'), // Not Required\n        ssl: {\n          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates\n        },\n      },\n      options: {},\n    },\n  },\n});\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null," Example of a Strapi v4 database configuration for PostgreSQL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="./config/database.js"',title:'"./config/database.js"'},"\nmodule.exports = ({ env }) => ({\n  connection: {\n    client: 'postgres',\n    connection: {\n      host: env('DATABASE_HOST', '127.0.0.1'),\n      port: env.int('DATABASE_PORT', 5432),\n      database: env('DATABASE_NAME', 'strapi'),\n      user: env('DATABASE_USERNAME', 'strapi'),\n      password: env('DATABASE_PASSWORD', 'strapi'),\n      schema: env('DATABASE_SCHEMA', 'public'), // Not Required\n      ssl: {\n        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates\n      },\n    },\n    debug: false,\n  },\n});\n"))),(0,i.kt)("h2",{id:"server-configuration"},"Server configuration"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/configurations/server"},"server configuration")," in Strapi v4 is similar to Strapi v3, with the following exceptions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All admin panel-related settings (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"admin.*")," keys) are in the ",(0,i.kt)("a",{parentName:"li",href:"#admin-panel-configuration"},(0,i.kt)("inlineCode",{parentName:"a"},"admin.js")," file"),"."),(0,i.kt)("li",{parentName:"ul"},"CRON tasks (configured with ",(0,i.kt)("inlineCode",{parentName:"li"},"cron.*")," keys) can be directly referenced in the ",(0,i.kt)("inlineCode",{parentName:"li"},"./config/server.js")," or imported from any other custom files (see ",(0,i.kt)("a",{parentName:"li",href:"#cron-tasks"},(0,i.kt)("inlineCode",{parentName:"a"},"cron-tasks.js")," file"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"app.keys")," is a new configuration option for the refactored ",(0,i.kt)("a",{parentName:"li",href:"/dev-docs/configurations/middlewares#session"},"session middleware")," and is used to create secure session keys.")),(0,i.kt)("details",null,(0,i.kt)("summary",null," Example of a Strapi v3 server configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="./config/server.js"',title:'"./config/server.js"'},"\nmodule.exports = ({ env }) => ({\n  host: env('HOST', '0.0.0.0'),\n  port: env.int('PORT', 1337),\n  admin: {\n    // ...\n  },\n});\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null," Example of a Strapi v4 server configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="./config/server.js"',title:'"./config/server.js"'},"\nmodule.exports = ({ env }) => ({\n  host: env('HOST', '0.0.0.0'),\n  port: env.int('PORT', 1337),\n  app: {\n    keys: env.array('APP_KEYS'),\n  },\n});\n"))),(0,i.kt)("h2",{id:"admin-panel-configuration"},"Admin panel configuration"),(0,i.kt)("p",null,"In Strapi v3, admin panel configuration is defined inside an ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," object within the ",(0,i.kt)("inlineCode",{parentName:"p"},"server.js")," configuration file."),(0,i.kt)("p",null,"In Strapi v4, the admin panel configuration is defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"./config/admin.js")," (see ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/project-structure"},"project structure"),")."),(0,i.kt)("p",null,"By default, in Strapi v4, only 2 keys are required in ",(0,i.kt)("inlineCode",{parentName:"p"},"admin.js"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apiToken.salt")," is used as the salt key for the new ",(0,i.kt)("a",{parentName:"li",href:"/dev-docs/configurations/api-tokens"},"API tokens feature"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"auth.secret")," (previously located in the ",(0,i.kt)("inlineCode",{parentName:"li"},"server.js")," file in Strapi v3) is used to encrypt JWTs for the admin panel.")),(0,i.kt)("p",null,"The admin panel configuration documentation lists all the other ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/configurations/admin-panel#available-options"},"available options"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null," Example of a Strapi v3 server.js admin configuration section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="./config/server.js"',title:'"./config/server.js"'},"\nmodule.exports = ({ env }) => ({\n  // ...\n  admin: {\n    auth: {\n      secret: env('ADMIN_JWT_SECRET', '77b2c87dbab4e1697bec244226fbd1b3'),\n    },\n  },\n});\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null," Example of a Strapi v4 admin.js configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="./config/admin.js"',title:'"./config/admin.js"'},"\nmodule.exports = ({ env }) => ({\n  apiToken: {\n    salt: env('API_TOKEN_SALT', 'd9b0df66ff97a666027e665707b4e3e7'),\n  },\n  auth: {\n    secret: env('ADMIN_JWT_SECRET', '77b2c87dbab4e1697bec244226fbd1b3'),\n  },\n});\n"))),(0,i.kt)("h2",{id:"middlewares-configuration"},"Middlewares configuration"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/dev-docs/backend-customization/middlewares"},"Middlewares")," in Strapi v4 have been entirely overhauled and the Strapi v3 configuration format (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"load order"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"before"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"after")," keys) is replaced with a single array representing the loading order."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/dev-docs/configurations/middlewares#optional-configuration"},"Middlewares configuration")," in Strapi v4 is defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"./config/middlewares.js")," file (plural file name, instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"middleware.js")," in Strapi v3)."),(0,i.kt)("details",null,(0,i.kt)("summary",null," Example of Strapi v3 middlewares configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="./config/middleware.js"',title:'"./config/middleware.js"'},"\nmodule.exports = {\n  //...\n  settings: {\n    cors: {\n      origin: ['http://localhost', 'https://mysite.com', 'https://www.mysite.com'],\n    },\n  },\n  // ...\n};\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null," Example of Strapi v4 middlewares configuration:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important"),": Various middlewares in this list are required. During configuration, replace the string with the object format (see ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/configurations/middlewares#optional-configuration"},"middlewares configuration"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="./config/middlewares.js"',title:'"./config/middlewares.js"'},"\nmodule.exports = [\n  'strapi::errors',\n  'strapi::security',\n  {\n    name: 'strapi::cors',\n    config: {\n      origin: ['http://localhost', 'https://mysite.com', 'https://www.mysite.com'],\n    }\n  },\n  'strapi::poweredBy',\n  'strapi::logger',\n  'strapi::query',\n  'strapi::body',\n  'strapi::session',\n  'strapi::favicon',\n  'strapi::public',\n];\n"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In Strapi v4, security middlewares from Strapi v3 have been removed and replaced with ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/koa-helmet"},"koa-helmet"),", which is a Koa.js wrapper for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/helmetjs/helmet"},"helmet"),". This package replaces all security middlewares except for ",(0,i.kt)("inlineCode",{parentName:"p"},"cors")," (see ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/configurations/middlewares#internal-middlewares-configuration-reference"},"internal middlewares configuration reference"),").")),(0,i.kt)("h2",{id:"cron-tasks"},"CRON tasks"),(0,i.kt)("p",null,"In Strapi v3, CRON tasks could be defined in a ",(0,i.kt)("inlineCode",{parentName:"p"},"./config/functions/cron.js")," file."),(0,i.kt)("p",null,"In Strapi v4, the ",(0,i.kt)("inlineCode",{parentName:"p"},"config/functions")," folder ",(0,i.kt)("a",{parentName:"p",href:"#custom-functions-folder"},"does not exist anymore"),", and ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/configurations/cron"},"CRON tasks")," can be defined:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in a separate file (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"./config/cron-tasks.js"),")"),(0,i.kt)("li",{parentName:"ul"},"or in the ",(0,i.kt)("inlineCode",{parentName:"li"},"server.js")," file:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"either by directly declaring them here"),(0,i.kt)("li",{parentName:"ul"},"or by creating a custom file and requiring it in the ",(0,i.kt)("inlineCode",{parentName:"li"},"server.js")," file.")))),(0,i.kt)("h2",{id:"api-configuration"},"API configuration"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/configurations/api"},"API configuration")," options are similar in Strapi v3 and v4, with the exception of the following keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rest.defaultLimit")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"25")," by default (instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"100")," in Strapi v3)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rest.maxLimit")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"100")," by default (instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," in Strapi v3)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rest.prefix")," is a new API configuration option. Its default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"/api")," and can be changed to anything but ",(0,i.kt)("inlineCode",{parentName:"li"},"/"),".")),(0,i.kt)("p",null,"The API configuration is optional."),(0,i.kt)("details",null,(0,i.kt)("summary",null," Example of a Strapi v3 API configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="./config/api.js"',title:'"./config/api.js"'},"\nmodule.exports = ({ env }) => ({\n  responses: {\n    privateAttributes: ['created_at'],\n  },\n  rest: {\n    defaultLimit: 100,\n    maxLimit: 250,\n  },\n});\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null," Example of a Strapi v4 API configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/api.js"',title:'"./config/api.js"'},"\nmodule.exports = ({ env }) => ({\n  responses: {\n    privateAttributes: ['createdAt'],\n  },\n  rest: {\n    prefix: '/v1',\n    defaultLimit: 100,\n    maxLimit: 250,\n  },\n});\n"))),(0,i.kt)("h2",{id:"plugins-configuration"},"Plugins configuration"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Strapi v3 plugins may not work with Strapi v4. If you are a plugin developer wanting to upgrade your plugin to Strapi v4, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/migration/v3-to-v4/plugin-migration"},"plugin migration guide"),".")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/dev-docs/configurations/plugins"},"Plugins configuration")," in Strapi v4 include the ability to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"enable or disable a plugin,"),(0,i.kt)("li",{parentName:"ul"},"and have custom resolve locations in addition to custom configuration options.")),(0,i.kt)("p",null,"To migrate to Strapi v4, use the new ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"resolve")," keys and move existing Strapi v3 custom configuration keys into a nested ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," object:"),(0,i.kt)("details",null,(0,i.kt)("summary",null," Example of a Strapi v3 plugins configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"module.exports = ({ env }) => ({\n  // ...\n  sentry: {\n    dsn: env('SENTRY_DSN'),\n    sendMetadata: true,\n  },\n  // ...\n});\n\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null," Example of a Strapi v4 plugins configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="./config/plugins.js"',title:'"./config/plugins.js"'},"\nmodule.exports = ({ env }) => ({\n  sentry: {\n    enabled: true,\n    resolve: './src/plugins/my-sentry-fork',\n    config: {\n      dsn: env('SENTRY_DSN'),\n      sendMetadata: true,\n      myCustomSetting: false,\n    },\n  },\n  graphql: {\n    enabled: true,\n    config: {\n      defaultLimit: 10,\n      maxLimit: 20,\n    },\n  },\n});\n\n"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For specific plugin configurations, please refer to the dedicated plugin's documentation.")),(0,i.kt)("h2",{id:"custom-functions-folder"},"Custom functions folder"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"config/functions")," folder and all of its content no longer exist in Strapi v4. ",(0,i.kt)("a",{parentName:"p",href:"#bootstrap-function"},"The ",(0,i.kt)("inlineCode",{parentName:"a"},"bootstrap.js")," file")," and ",(0,i.kt)("a",{parentName:"p",href:"#cron-tasks"},"CRON tasks")," have their own dedicated configuration options but global functions are no longer automatically added to the Strapi internal API."),(0,i.kt)("p",null,"When creating universal utility functions in Strapi v4, it's recommended to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"either create a ",(0,i.kt)("a",{parentName:"li",href:"/dev-docs/plugins-development"},"plugin")," dedicated to holding those utility functions,"),(0,i.kt)("li",{parentName:"ul"},"or build ",(0,i.kt)("a",{parentName:"li",href:"/dev-docs/backend-customization/services"},"services")," that can be called from anywhere in the Strapi backend.")),(0,i.kt)("h2",{id:"bootstrap-function"},"Bootstrap function"),(0,i.kt)("p",null,"The dedicated ",(0,i.kt)("inlineCode",{parentName:"p"},"bootstrap.js")," file no longer exists in Strapi v4 and is now a global function combined with the new ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," function. ",(0,i.kt)("inlineCode",{parentName:"p"},"bootstrap()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"register()")," can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/index.js")," (see ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/configurations/functions"},"functions documentation"),")."),(0,i.kt)("h2",{id:"custom-responses"},"Custom responses"),(0,i.kt)("p",null,"Due to the standardization of the response and error handling structures in Strapi v4, it's no longer possible to customize the response structure or add custom response structures."),(0,i.kt)("p",null,"For custom error messages, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/error-handling"},"error handling")," documentation or the ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/backend-customization/requests-responses"},"requests & responses")," documentation."),(0,i.kt)("p",null,":::strapi Next steps\n",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/migration/v3-to-v4/code/backend"},"Migrating the backend code")," of Strapi to v4 also requires to at least migrate the core features of the Strapi server, such as the ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/migration/v3-to-v4/code/dependencies"},"dependencies"),", ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/migration/v3-to-v4/code/routes"},"routes"),", ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/migration/v3-to-v4/code/controllers"},"controllers"),", ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/migration/v3-to-v4/code/services"},"services"),", and ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/migration/v3-to-v4/code/content-type-schema"},"content-type schema"),".\n:::"))}c.isMDXComponent=!0}}]);