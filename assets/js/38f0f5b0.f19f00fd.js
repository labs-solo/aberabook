"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[1386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,M=d["".concat(u,".").concat(c)]||d[c]||s[c]||o;return n?i.createElement(M,r(r({ref:t},g),{},{components:n})):i.createElement(M,r({ref:t},g))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>M,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(83117),a=(n(67294),n(3905));const o={title:"Documentation",displayed_sidebar:"devDocsSidebar",description:"By using Swagger UI, the API documentation plugin takes out most of your pain to generate your documentation."},r="Documentation plugin",l={unversionedId:"dev-docs/plugins/documentation",id:"dev-docs/plugins/documentation",title:"Documentation",description:"By using Swagger UI, the API documentation plugin takes out most of your pain to generate your documentation.",source:"@site/docs/dev-docs/plugins/documentation.md",sourceDirName:"dev-docs/plugins",slug:"/dev-docs/plugins/documentation",permalink:"/aberabook/dev-docs/plugins/documentation",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/plugins/documentation.md",tags:[],version:"current",frontMatter:{title:"Documentation",displayed_sidebar:"devDocsSidebar",description:"By using Swagger UI, the API documentation plugin takes out most of your pain to generate your documentation."},sidebar:"devDocsSidebar",previous:{title:"Using Strapi plugins",permalink:"/aberabook/dev-docs/plugins/using-plugins"},next:{title:"Email",permalink:"/aberabook/dev-docs/plugins/email"}},u={},p=[{value:"Installation",id:"installation",level:2},{value:"Swagger UI",id:"swagger-ui",level:2},{value:"Authenticated requests",id:"authenticated-requests",level:3},{value:"Administration panel",id:"administration-panel",level:2},{value:"Restrict the access to your API documentation",id:"restrict-the-access-to-your-api-documentation",level:3},{value:"Regenerate documentation",id:"regenerate-documentation",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Create a new version of the documentation",id:"create-a-new-version-of-the-documentation",level:3},{value:"Indicate which plugins need documentation generated",id:"indicate-which-plugins-need-documentation-generated",level:3},{value:"Overriding the generated documentation",id:"overriding-the-generated-documentation",level:2},{value:"Excluding from generation",id:"excluding-from-generation",level:3},{value:"Providing replacement documentation",id:"providing-replacement-documentation",level:3}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=g("Tabs"),d=g("TabItem"),c={toc:p};function M(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"documentation-plugin"},"Documentation plugin"),(0,a.kt)("p",null,"The Documentation plugin is useful to document the available endpoints once you created an API."),(0,a.kt)("p",null,"If installed, the Documentation plugin will inspect content types and routes found on all APIs in your project and any plugin specified in the configuration. The plugin will then programmatically generate documentation to match the ",(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI specification"),". The Documentation plugin generates the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#paths-object"},"paths objects")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schema-object"},"schema objects")," and converts all Strapi types to ",(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/data-models/data-types/"},"OpenAPI data types"),"."),(0,a.kt)("p",null,"The generated documentation can be found in your application at the following path: ",(0,a.kt)("inlineCode",{parentName:"p"},"src/extensions/documentation/documentation/<version>/full_documentation.json")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To install the plugin run following command in your terminal:"),(0,a.kt)(s,{groupId:"yarn-npm",mdxType:"Tabs"},(0,a.kt)(d,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn strapi install documentation\n"))),(0,a.kt)(d,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run strapi install documentation\n")))),(0,a.kt)("p",null,"Once the plugin is installed, starting the application generates the API documentation."),(0,a.kt)("h2",{id:"swagger-ui"},"Swagger UI"),(0,a.kt)("p",null,"The Documentation plugin visualizes your API using ",(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/tools/swagger-ui/"},"Swagger UI"),". To access the UI, select ",(0,a.kt)("em",{parentName:"p"},"Plugins > ",(0,a.kt)("img",{alt:"Documentation plugin icon",src:n(15968).Z,width:"16",height:"16"})," Documentation")," in the main navigation of the admin panel. Then click ",(0,a.kt)("strong",{parentName:"p"},"Open documentation")," to open the Swagger UI. Using the Swagger UI you can view all of the endpoints available on your API and trigger API calls."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Once installed, the Documentation plugin UI can be accessed at the following URL:\n",(0,a.kt)("inlineCode",{parentName:"p"},"<server-url>:<server-port>/documentation/<documentation-version>"),"\n(e.g., ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:1337/documentation/v1.0.0"},(0,a.kt)("inlineCode",{parentName:"a"},"localhost:1337/documentation/v1.0.0")),").")),(0,a.kt)("h3",{id:"authenticated-requests"},"Authenticated requests"),(0,a.kt)("p",null,"Strapi is secured by default, which means that most of your end-points require the user to be authorized. If the action has not been set to public in users and permission then you must provide your JWT. To do this, click the \u201cAuthorize\u201d button and paste your JWT."),(0,a.kt)("h2",{id:"administration-panel"},"Administration panel"),(0,a.kt)("p",null,"This plugin comes with an interface that is available in your administration panel and a configuration file."),(0,a.kt)("h3",{id:"restrict-the-access-to-your-api-documentation"},"Restrict the access to your API documentation"),(0,a.kt)("p",null,"By default, your documentation will be accessible by anyone."),(0,a.kt)("p",null,"To restrict API documentation access, enable the\xa0",(0,a.kt)("strong",{parentName:"p"},"Restricted Access"),"\xa0option from the admin panel:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("img",{alt:"Settings icon",src:n(60154).Z,width:"16",height:"16"})," ",(0,a.kt)("em",{parentName:"li"},"Settings")," in the main navigation of the admin panel."),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("strong",{parentName:"li"},"Documentation"),"."),(0,a.kt)("li",{parentName:"ol"},"Toggle ",(0,a.kt)("strong",{parentName:"li"},"Restricted Access")," to\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"ON"),"."),(0,a.kt)("li",{parentName:"ol"},"Define a password in the\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"password"),"\xa0input."),(0,a.kt)("li",{parentName:"ol"},"Save the settings.")),(0,a.kt)("h3",{id:"regenerate-documentation"},"Regenerate documentation"),(0,a.kt)("p",null,"There are 2 ways to update the documentation after making changes to your API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"restart your application to regenerate the version of the documentation specified in the Documentation plugin's configuration,"),(0,a.kt)("li",{parentName:"ul"},"or go to the Documentation plugin page and click the\xa0",(0,a.kt)("strong",{parentName:"li"},"regenerate"),"\xa0button for the documentation version you want to regenerate.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The Documentation plugin is initialized with the following configuration, where all properties can be altered by providing new values to the documentation plugin's configuration object in ",(0,a.kt)("inlineCode",{parentName:"p"},"config/plugins.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  documentation: {\n    enabled: true,\n    config: {\n      openapi: '3.0.0',\n      info: {\n        version: '1.0.0',\n        title: 'DOCUMENTATION',\n        description: '',\n        termsOfService: 'YOUR_TERMS_OF_SERVICE_URL',\n        contact: {\n          name: 'TEAM',\n          email: 'contact-email@something.io',\n          url: 'mywebsite.io'\n        },\n        license: {\n          name: 'Apache 2.0',\n          url: 'https://www.apache.org/licenses/LICENSE-2.0.html'\n        },\n      },\n      'x-strapi-config': {\n        // Leave empty to ignore plugins during generation\n        plugins: [ 'upload', 'users-permissions'],\n        path: '/documentation',\n      },\n      servers: [{ url: 'http://localhost:1337/api', description: 'Development server' }],\n      externalDocs: {\n        description: 'Find out more',\n        url: 'https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html'\n      },\n      security: [ { bearerAuth: [] } ]\n    }\n  }\n}\n")),(0,a.kt)("h3",{id:"create-a-new-version-of-the-documentation"},"Create a new version of the documentation"),(0,a.kt)("p",null,"To create a new version of your documentation, update the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"version"),"\xa0key as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/plugins.js"',title:'"config/plugins.js"'},'\nmodule.exports = {\n  documentation: {\n    enabled: true,\n    config: {\n      info: { version: "2.0.0" },\n    },\n  },\n};\n')),(0,a.kt)("h3",{id:"indicate-which-plugins-need-documentation-generated"},"Indicate which plugins need documentation generated"),(0,a.kt)("p",null,"If you want plugins to be included in documentation generation, they should be included in the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," array on the ",(0,a.kt)("inlineCode",{parentName:"p"},"x-strapi-config"),". By default, the array is initialized with ",(0,a.kt)("inlineCode",{parentName:"p"},'["upload", "users-permissions"]'),"."),(0,a.kt)("p",null,"Similarly, if you do not want plugins to be included in documentation generation, provide an empty array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/plugins.js"',title:'"config/plugins.js"'},'\nmodule.exports = {\n  documentation: {\n    enabled: true,\n    config: {\n      "x-strapi-config": {\n        // Default\n        plugins: ["upload", "users-permissions"],\n        // Custom\n        plugins: ["upload"],\n        // Do not generate for plugins\n        plugins: [],\n      },\n    },\n  },\n};\n')),(0,a.kt)("h2",{id:"overriding-the-generated-documentation"},"Overriding the generated documentation"),(0,a.kt)("h3",{id:"excluding-from-generation"},"Excluding from generation"),(0,a.kt)("p",null,"To exclude certain APIs or plugins from being generated, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"excludeFromGeneration")," found on the documentation plugin\u2019s ",(0,a.kt)("inlineCode",{parentName:"p"},"override")," service in your application or plugin's ",(0,a.kt)("a",{parentName:"p",href:"/dev-docs/api/plugins/admin-panel-api#register"},(0,a.kt)("inlineCode",{parentName:"a"},"register")," lifecycle"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"excludeFromGeneration")," gives more fine-grained control over what is generated."),(0,a.kt)("p",{parentName:"admonition"},"For example, pluginA might create several new APIs while pluginB may only want to generate documentation for some of those APIs. In that case, pluginB could still benefit from the generated documentation it does need by excluding only what it does not need.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"excludeFromGeneration()"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"api")),(0,a.kt)("td",{parentName:"tr",align:null},"String or Array of Strings"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the API/plugin, or list of names, to exclude")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Application or plugin register lifecycle"',title:'"Application',or:!0,plugin:!0,register:!0,'lifecycle"':!0},'\nmodule.exports = {\n  register({ strapi }) {\n    strapi\n      .plugin("documentation")\n      .service("override")\n      .excludeFromGeneration("restaurant");\n    // or several\n    strapi\n      .plugin("documentation")\n      .service("override")\n      .excludeFromGeneration(["address", "upload"]);\n  }\n}\n')),(0,a.kt)("h3",{id:"providing-replacement-documentation"},"Providing replacement documentation"),(0,a.kt)("p",null,"If the Documentation plugin fails to generate what you expect, it is possible to replace what has been generated."),(0,a.kt)("p",null,"The Documentation plugin exposes an API that allows you to replace what was generated for the following OpenAPI root level keys: ",(0,a.kt)("inlineCode",{parentName:"p"},"paths"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tags"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"components")," ."),(0,a.kt)("p",null,"To provide an override, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"registerOverride")," function found on the Documentation plugin\u2019s ",(0,a.kt)("inlineCode",{parentName:"p"},"override")," service in your application or plugin's ",(0,a.kt)("a",{parentName:"p",href:"/dev-docs/api/plugins/admin-panel-api#register"},(0,a.kt)("inlineCode",{parentName:"a"},"register")," lifecycle"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"registerOverride()"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"override")),(0,a.kt)("td",{parentName:"tr",align:null},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},"OpenAPI object including any of the following keys paths, tags, components. Accepts JavaScript, JSON, or yaml")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"options")),(0,a.kt)("td",{parentName:"tr",align:null},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},"Accepts ",(0,a.kt)("inlineCode",{parentName:"td"},"pluginOrigin")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"excludeFromGeneration"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"options.pluginOrigin")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"The plugin that is registering the override")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"options.excludeFromGeneration")),(0,a.kt)("td",{parentName:"tr",align:null},"String or Array of String"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the API/plugin, or list of names, to exclude")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Plugin developers providing an override should always specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"pluginOrigin")," options key. Otherwise the override will run regardless of the user\u2019s configuration.")),(0,a.kt)("p",null,"The Documentation plugin will use the registered overrides to replace the value of common keys on the generated documentation with what the override provides. If no common keys are found, the plugin will add new keys to the generated documentation."),(0,a.kt)("p",null,"If the override completely replaces what the documentation generates, you can specify that generation is no longer necessary by providing the names of the APIs or plugins to exclude in the options key array ",(0,a.kt)("inlineCode",{parentName:"p"},"excludeFromGeneration"),"."),(0,a.kt)("p",null,"If the override should only be applied to a specific version, the override must include a value for ",(0,a.kt)("inlineCode",{parentName:"p"},"info.version"),". Otherwise, the override will run on all documentation versions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Application or plugin register lifecycle"',title:'"Application',or:!0,plugin:!0,register:!0,'lifecycle"':!0},"\nmodule.exports = {\n  register({ strapi }) {\n    if (strapi.plugin('documentation')) {\n      const override = {\n        // Only run this override for version 1.0.0\n        info: { version: '1.0.0' },\n        paths: {\n          '/answer-to-everything': {\n            get: {\n              responses: { 200: { description: \"*\" }}\n            }\n          }\n        }\n      }\n\n      strapi\n        .plugin('documentation')\n        .service('override')\n        .registerOverride(override, {\n          // Specify the origin in case the user does not want this plugin documented\n          pluginOrigin: 'upload',\n          // The override provides everything don't generate anything\n          excludeFromGeneration: ['upload'],\n        });\n    }\n  },\n}\n")),(0,a.kt)("p",null,"The overrides system is provided to try and simplify amending the generated documentation. It is the only way a plugin can add or modify the generated documentation."),(0,a.kt)("p",null,"The Documentation plugin\u2019s configuration also accepts a ",(0,a.kt)("inlineCode",{parentName:"p"},"mutateDocumentation")," function on ",(0,a.kt)("inlineCode",{parentName:"p"},"info['x-strapi-config']"),". This function receives a draft state of the generated documentation that be can be mutated. It should only be applied from an application and has the final say in the OpenAPI schema."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"mutateDocumentation()"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"generatedDocumentationDraft")),(0,a.kt)("td",{parentName:"tr",align:null},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},"The generated documentation with applied overrides as a mutable object")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/plugins.js"',title:'"config/plugins.js"'},'\nmodule.exports = {\n  documentation: {\n    config: {\n      "x-strapi-config": {\n        mutateDocumentation: (generatedDocumentationDraft) => {\n          generatedDocumentationDraft.paths[\n            "/answer-to-everything" // must be an existing path\n          ].get.responses["200"].description = "*";\n        },\n      },\n    },\n  },\n};\n')))}M.isMDXComponent=!0},15968:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDBDNS4zODMgMCAwIDUuMzgzIDAgMTJzNS4zODMgMTIgMTIgMTIgMTItNS4zODMgMTItMTJTMTguNjE3IDAgMTIgMFptMCA0LjkyYTEuNTYgMS41NiAwIDEgMSAwIDMuMTIgMS41NiAxLjU2IDAgMCAxIDAtMy4xMlptMy44NCAxMy4wNmEuNS41IDAgMCAxLS41LjVoLTYuMmEuNS41IDAgMCAxLS41LS41di0uOTJhLjUuNSAwIDAgMSAuNS0uNWgyLjE0di01LjI4SDkuODZhLjUuNSAwIDAgMS0uNS0uNXYtLjkyYS41LjUgMCAwIDEgLjUtLjVoMi44NGEuNS41IDAgMCAxIC41LjV2Ni43aDIuMTRhLjUuNSAwIDAgMSAuNS41di45MloiIGZpbGw9IiM4RThFQTkiPjwvcGF0aD4KPC9zdmc+Cg=="},60154:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjY4MDgyIDkuMTkxOTlDMi4wODA4MiA5LjQ2Nzk5IDAuNTY2NDIzIDEwLjM3MjggMC4zNzQ0MjQgMTAuNDk1MkMwLjI1OTAxOCAxMC41NjY4IDAuMTYzOTY1IDEwLjY2NjkgMC4wOTgzOTk4IDEwLjc4NThDMC4wMzI4MzQ3IDEwLjkwNDggLTAuMDAxMDQzNjIgMTEuMDM4NiAyLjQ0OTYzZS0wNSAxMS4xNzQ0VjEyLjgyNTZDLTAuMDAwODE2NjQ0IDEyLjk2MzQgMC4wMzQxMjQxIDEzLjA5OTIgMC4xMDE0MzEgMTMuMjE5NUMwLjE2ODczNyAxMy4zMzk4IDAuMjY2MTA3IDEzLjQ0MDYgMC4zODQwMjMgMTMuNTEyQzAuNjM4NDI0IDEzLjY3MjggMi4xMTQ0MiAxNC41NTM2IDIuNjkwNDIgMTQuODE1MkwzLjQzNDQyIDE2LjYxNTJDMy4xOTQ0MiAxNy4yNDg4IDIuNzY0ODIgMTguOTQ4IDIuNzE0NDIgMTkuMTY4OEMyLjY4NDE2IDE5LjMwMDkgMi42ODgxMSAxOS40Mzg2IDIuNzI1OTEgMTkuNTY4OEMyLjc2MzcxIDE5LjY5OSAyLjgzNDEgMTkuODE3NCAyLjkzMDQyIDE5LjkxMjhMNC4wOTY4MiAyMS4wNzkyQzQuMTkyNDggMjEuMTc1MSA0LjMxMDg4IDIxLjI0NTMgNC40NDA5OSAyMS4yODNDNC41NzExIDIxLjMyMDggNC43MDg2NiAyMS4zMjUgNC44NDA4MiAyMS4yOTUyTDQuODcxMTQgMjEuMjg3NEM1LjIzMTg5IDIxLjE5NTEgNi44MTczNiAyMC43ODkzIDcuMzk0NDIgMjAuNTc1Mkw5LjE5NDQyIDIxLjMxOTJDOS40NzA0MiAyMS45MTkyIDEwLjM3NTIgMjMuNDMzNiAxMC40OTc2IDIzLjYyNTZDMTAuNTcwMSAyMy43NDAyIDEwLjY3MDMgMjMuODM0NiAxMC43ODkxIDIzLjkwMDFDMTAuOTA3OCAyMy45NjU2IDExLjA0MTIgMjMuOTk5OSAxMS4xNzY4IDI0SDEyLjgyNTZDMTIuOTYzNSAyNC4wMDA4IDEzLjA5OTIgMjMuOTY1OSAxMy4yMTk1IDIzLjg5ODZDMTMuMzM5OCAyMy44MzEzIDEzLjQ0MDYgMjMuNzMzOSAxMy41MTIgMjMuNjE2QzEzLjY3MjggMjMuMzYxNiAxNC41NTM2IDIxLjg4NTYgMTQuODE1MiAyMS4zMDk2TDE2LjYxNTIgMjAuNTY1NkMxNy4yNDg4IDIwLjgwNTYgMTguOTQ4IDIxLjIzNTIgMTkuMTY4OCAyMS4yODU2QzE5LjMwMSAyMS4zMTU4IDE5LjQzODYgMjEuMzExOSAxOS41Njg4IDIxLjI3NDFDMTkuNjk5IDIxLjIzNjMgMTkuODE3NCAyMS4xNjU5IDE5LjkxMjggMjEuMDY5NkwyMS4wNzkyIDE5LjkwMzJDMjEuMTc1MSAxOS44MDc1IDIxLjI0NTMgMTkuNjg5MSAyMS4yODMxIDE5LjU1OUMyMS4zMjA4IDE5LjQyODkgMjEuMzI1IDE5LjI5MTMgMjEuMjk1MiAxOS4xNTkyTDIxLjI4NzQgMTkuMTI4OUMyMS4xOTUxIDE4Ljc2ODEgMjAuNzg5MyAxNy4xODI3IDIwLjU3NTIgMTYuNjA1NkwyMS4zMTkyIDE0LjgwNTZDMjEuOTE5MiAxNC41Mjk2IDIzLjQzMzYgMTMuNjI0OCAyMy42MjU2IDEzLjUwMjRDMjMuNzQwMiAxMy40Mjk5IDIzLjgzNDcgMTMuMzI5NyAyMy45MDAxIDEzLjIxMDlDMjMuOTY1NiAxMy4wOTIyIDIzLjk5OTkgMTIuOTU4OCAyNCAxMi44MjMyVjExLjE3NDRDMjMuOTk5OSAxMS4wMzggMjMuOTY0NyAxMC45MDM5IDIzLjg5NzkgMTAuNzg1QzIzLjgzMTEgMTAuNjY2MSAyMy43MzQ4IDEwLjU2NjMgMjMuNjE4NCAxMC40OTUyQzIzLjM2NCAxMC4zMzQ0IDIxLjg4OCA5LjQ1MzU5IDIxLjMxMiA5LjE5MTk5TDIwLjU2OCA3LjM5MkMyMC44MDggNi43NTg0IDIxLjIzNzYgNS4wNTkyIDIxLjI4OCA0LjgzODRDMjEuMzE4MyA0LjcwNjI1IDIxLjMxNDMgNC41Njg1NyAyMS4yNzY1IDQuNDM4MzhDMjEuMjM4NyA0LjMwODE5IDIxLjE2ODMgNC4xODk3OSAyMS4wNzIgNC4wOTQ0TDE5LjkwNTYgMi45MjA4QzE5LjgwOTkgMi44MjQ4NiAxOS42OTE1IDIuNzU0NzIgMTkuNTYxNCAyLjcxNjk1QzE5LjQzMTMgMi42NzkxOCAxOS4yOTM4IDIuNjc1IDE5LjE2MTYgMi43MDQ4TDE5LjEzMTMgMi43MTI1NUMxOC43NzA3IDIuODA0ODcgMTcuMTg1MSAzLjIxMDcyIDE2LjYwOCAzLjQyNDhMMTQuODA4IDIuNjgwOEMxNC41MzIgMi4wODA4IDEzLjYyNzIgMC41NjY0IDEzLjUwNDggMC4zNzQ0QzEzLjQzMjQgMC4yNTk3ODIgMTMuMzMyMSAwLjE2NTM1IDEzLjIxMzMgMC4wOTk4OTAzQzEzLjA5NDYgMC4wMzQ0MzAyIDEyLjk2MTIgNi43OTI5MmUtMDUgMTIuODI1NiAwSDExLjE3NDRDMTEuMDM4IDAuMDAwMTQ5NDkyIDEwLjkwMzkgMC4wMzUzMTU4IDEwLjc4NSAwLjEwMjEzMkMxMC42NjYxIDAuMTY4OTQ3IDEwLjU2NjMgMC4yNjUxNzUgMTAuNDk1MiAwLjM4MTZDMTAuMzM0NCAwLjYzNiA5LjQ1MzYxIDIuMTEyIDkuMTkyMDEgMi42ODhMNy4zOTIwMiAzLjQzMkM2Ljc1ODQyIDMuMTkyIDUuMDU5MjIgMi43NjI0IDQuODM4NDIgMi43MTJDNC43MDYyOCAyLjY4MTc0IDQuNTY4NTkgMi42ODU2OSA0LjQzODQgMi43MjM0OUM0LjMwODIxIDIuNzYxMjkgNC4xODk4MiAyLjgzMTY4IDQuMDk0NDIgMi45MjhMMi45MjA4MiA0LjA5NDRDMi44MjQ4OCA0LjE5MDA1IDIuNzU0NzUgNC4zMDg0NiAyLjcxNjk3IDQuNDM4NTdDMi42NzkyIDQuNTY4NjggMi42NzUwMiA0LjcwNjI0IDIuNzA0ODIgNC44Mzg0QzIuNzA3MDkgNC44NDcyNCAyLjcwOTY4IDQuODU3MzcgMi43MTI1OCA0Ljg2ODcxQzIuODA0OTIgNS4yMjk0NCAzLjIxMDc1IDYuODE0OTMgMy40MjQ4MiA3LjM5MkwyLjY4MDgyIDkuMTkxOTlaTTEyIDE3QzE0Ljc2MTQgMTcgMTcgMTQuNzYxNCAxNyAxMkMxNyA5LjIzODU4IDE0Ljc2MTQgNyAxMiA3QzkuMjM4NTggNyA3IDkuMjM4NTggNyAxMkM3IDE0Ljc2MTQgOS4yMzg1OCAxNyAxMiAxN1oiIGZpbGw9IiMyMTIxMzQiLz4KPC9zdmc+Cg=="}}]);