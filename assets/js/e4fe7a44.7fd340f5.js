"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[3884],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,v=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return t?a.createElement(v,o(o({ref:n},d),{},{components:t})):a.createElement(v,o({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77917:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(83117),i=(t(67294),t(3905));const r={title:"Environment variables",displayed_sidebar:"devDocsConfigSidebar"},o="Environment configuration and variables",l={unversionedId:"dev-docs/configurations/environment",id:"dev-docs/configurations/environment",title:"Environment variables",description:"Strapi provides environment variables that can be used in configuration files.  An env() utility can be used to retrieve the value of environment variables and cast variables to different types, and  specific configurations for different environments can be created.",source:"@site/docs/dev-docs/configurations/environment.md",sourceDirName:"dev-docs/configurations",slug:"/dev-docs/configurations/environment",permalink:"/aberabook/dev-docs/configurations/environment",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/configurations/environment.md",tags:[],version:"current",frontMatter:{title:"Environment variables",displayed_sidebar:"devDocsConfigSidebar"},sidebar:"devDocsConfigSidebar",previous:{title:"CRON jobs",permalink:"/aberabook/dev-docs/configurations/cron"},next:{title:"Single Sign-on (SSO)",permalink:"/aberabook/dev-docs/configurations/sso"}},s={},p=[{value:"Strapi&#39;s environment variables",id:"strapis-environment-variables",level:2},{value:"Configuration using environment variables",id:"configuration-using-environment-variables",level:2},{value:"Casting environment variables",id:"casting-environment-variables",level:3},{value:"Environment configurations",id:"environment-configurations",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},u=d("Tabs"),m=d("TabItem"),c={toc:p};function v(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"environment-configuration-and-variables"},"Environment configuration and variables"),(0,i.kt)("p",null,"Strapi provides environment variables that can be used in configuration files.  An ",(0,i.kt)("inlineCode",{parentName:"p"},"env()")," utility can be used to ",(0,i.kt)("a",{parentName:"p",href:"#configuration-using-environment-variables"},"retrieve the value of environment variables")," and ",(0,i.kt)("a",{parentName:"p",href:"#casting-environment-variables"},"cast variables to different types"),", and  specific ",(0,i.kt)("a",{parentName:"p",href:"#environment-configurations"},"configurations for different environments")," can be created."),(0,i.kt)("h2",{id:"strapis-environment-variables"},"Strapi's environment variables"),(0,i.kt)("p",null,"Strapi provides the following environment variables:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRAPI_DISABLE_UPDATE_NOTIFICATION")),(0,i.kt)("td",{parentName:"tr",align:null},"Don't show the notification message about updating strapi in the terminal"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRAPI_HIDE_STARTUP_MESSAGE")),(0,i.kt)("td",{parentName:"tr",align:null},"Don't show the startup message in the terminal"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRAPI_TELEMETRY_DISABLED")),(0,i.kt)("td",{parentName:"tr",align:null},"Don't send telemetry usage data to Strapi"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRAPI_LICENSE")),(0,i.kt)("td",{parentName:"tr",align:null},"The license key to activate the Enterprise Edition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRAPI_DISABLE_REMOTE_DATA_TRANSFER")),(0,i.kt)("td",{parentName:"tr",align:null},"Disable the ability to use the ",(0,i.kt)("a",{parentName:"td",href:"/dev-docs/data-management#transfer-data-using-the-cli-tool"},"transfer feature")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NODE_ENV")),(0,i.kt)("td",{parentName:"tr",align:null},"Type of environment where the application is running.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"production")," enables specific behaviors (see  ",(0,i.kt)("a",{parentName:"td",href:"https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production"},"Node.js documentation")," for details)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'development'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BROWSER")),(0,i.kt)("td",{parentName:"tr",align:null},"Open the admin panel in the browser after startup"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ENV_PATH")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to the file that contains your environment variables"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'./.env'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRAPI_PLUGIN_I18N_INIT_LOCALE_CODE")," ",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Optional")),(0,i.kt)("td",{parentName:"tr",align:null},"Initialization locale for the application, if the ",(0,i.kt)("a",{parentName:"td",href:"/dev-docs/plugins/i18n"},"Internationalization (i18n) plugin")," is installed and enabled on Content-Types (see ",(0,i.kt)("a",{parentName:"td",href:"/dev-docs/plugins/i18n#configuration-of-the-default-locale"},"Configuration of i18n in production environments"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'en'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRAPI_ENFORCE_SOURCEMAPS")),(0,i.kt)("td",{parentName:"tr",align:null},"Forces the bundler to emit source-maps, which is helpful for debugging errors in the admin app."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FAST_REFRESH")),(0,i.kt)("td",{parentName:"tr",align:null},"Use ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/pmmmwh/react-refresh-webpack-plugin"},"react-refresh"),' to enable "Fast Refresh" for near-instant feedback while developing the Strapi admin panel.'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Prefixing an environment variable name with ",(0,i.kt)("inlineCode",{parentName:"p"},"STRAPI_ADMIN_")," exposes the variable to the admin front end (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"STRAPI_ADMIN_MY_PLUGIN_VARIABLE")," is accessible through ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.STRAPI_ADMIN_MY_PLUGIN_VARIABLE"),").")),(0,i.kt)("h2",{id:"configuration-using-environment-variables"},"Configuration using environment variables"),(0,i.kt)("p",null,"In most use cases there will be different configurations between environments (e.g. database credentials)."),(0,i.kt)("p",null,"Instead of writing those credentials into configuration files, variables can be defined in a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file at the root of the application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# path: .env\n\nDATABASE_PASSWORD=acme\n")),(0,i.kt)("p",null,"To customize the path of the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file to load, set an environment variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"ENV_PATH")," before starting the application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"ENV_PATH=/absolute/path/to/.env npm run start\n")),(0,i.kt)("p",null,"Variables defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file are accessible using ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.{variableName}")," anywhere in configuration and application files."),(0,i.kt)("p",null,"In configuration files, a ",(0,i.kt)("inlineCode",{parentName:"p"},"env()")," utility allows defining defaults and ",(0,i.kt)("a",{parentName:"p",href:"#casting-environment-variables"},"casting values"),":"),(0,i.kt)(u,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(m,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/database.js"',title:'"./config/database.js"'},"\nmodule.exports = ({ env }) => ({\n  connections: {\n    default: {\n      settings: {\n        password: env('DATABASE_PASSWORD'),\n      },\n    },\n  },\n});\n"))),(0,i.kt)(m,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/database.ts"',title:'"./config/database.ts"'},"\nexport default ({ env }) => ({\n  connections: {\n    default: {\n      settings: {\n        password: env('DATABASE_PASSWORD'),\n      },\n    },\n  },\n});\n")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"property-name: env('VAR', 'default-value')")," uses the value stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file. If there is no specified value in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file the default value is used.")),(0,i.kt)("h3",{id:"casting-environment-variables"},"Casting environment variables"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"env()")," utility can be used to cast environment variables to different types:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Returns the env if defined without casting it\nenv('VAR', 'default');\n\n// Cast to integer (using parseInt)\nenv.int('VAR', 0);\n\n// Cast to float (using parseFloat)\nenv.float('VAR', 3.14);\n\n// Cast to boolean (check if the value is equal to 'true')\nenv.bool('VAR', true);\n\n// Cast to JS object (using JSON.parse)\nenv.json('VAR', { key: 'value' });\n\n// Cast to array (syntax: ENV_VAR=[value1, value2, value3] | ENV_VAR=[\"value1\", \"value2\", \"value3\"])\nenv.array('VAR', [1, 2, 3]);\n\n// Cast to date (using new Date(value))\nenv.date('VAR', new Date());\n\n// Returns the env matching oneOf union types\nenv.oneOf('UPLOAD_PROVIDER', ['local', 'aws'], 'local')\n")),(0,i.kt)("h2",{id:"environment-configurations"},"Environment configurations"),(0,i.kt)("p",null,"Configurations can be created with the following naming and structure conventions: ",(0,i.kt)("inlineCode",{parentName:"p"},"./config/env/{environment}/{filename}"),". This is useful when you need specific static configurations for specific environments and using environment variables is not the best solution."),(0,i.kt)("p",null,"These configurations will be merged into the base configurations defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"./config")," folder.\nThe environment is based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable, which defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"development"),"."),(0,i.kt)("p",null,"When starting Strapi with ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV=production")," it will load the configuration from ",(0,i.kt)("inlineCode",{parentName:"p"},"./config/*")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"./config/env/production/*"),". Everything defined in the production configuration will override the default configuration. In combination with environment variables this pattern becomes really powerful."),(0,i.kt)("p",null,"For instance, using the following configuration files will give you various options to start the server:"),(0,i.kt)(u,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(m,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/server.js"',title:'"./config/server.js"'},"\nmodule.exports = {\n  host: '127.0.0.1',\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/env/production/server.js"',title:'"./config/env/production/server.js"'},"\nmodule.exports = ({ env }) => ({\n  host: env('HOST', '0.0.0.0'),\n});\n"))),(0,i.kt)(m,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./config/server.ts"',title:'"./config/server.ts"'},"\nexport default ({ env }) => ({\n  host: '127.0.0.1',\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/env/production/server.ts"',title:'"./config/env/production/server.ts"'},"\nexport default ({ env }) => ({\n  host: env('HOST', '0.0.0.0'),\n});\n")))),(0,i.kt)("p",null,"With these configuration files the server will start on various ports depending on the environment variables passed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start                                   # uses host 127.0.0.1\nNODE_ENV=production yarn start               # uses host defined in .env. If not defined, uses 0.0.0.0\nHOST=10.0.0.1 NODE_ENV=production yarn start # uses host 10.0.0.1\n")))}v.isMDXComponent=!0}}]);