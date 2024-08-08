"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[1701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(83117),r=(n(67294),n(3905));const l={title:"Webhooks",displayed_sidebar:"devDocsSidebar",description:"Strapi webhooks are user-defined HTTP callbacks used by an application to notify other applications that an event occurred."},o="Webhooks",i={unversionedId:"dev-docs/backend-customization/webhooks",id:"dev-docs/backend-customization/webhooks",title:"Webhooks",description:"Strapi webhooks are user-defined HTTP callbacks used by an application to notify other applications that an event occurred.",source:"@site/docs/dev-docs/backend-customization/webhooks.md",sourceDirName:"dev-docs/backend-customization",slug:"/dev-docs/backend-customization/webhooks",permalink:"/aberabook/dev-docs/backend-customization/webhooks",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/backend-customization/webhooks.md",tags:[],version:"current",frontMatter:{title:"Webhooks",displayed_sidebar:"devDocsSidebar",description:"Strapi webhooks are user-defined HTTP callbacks used by an application to notify other applications that an event occurred."},sidebar:"devDocsSidebar",previous:{title:"Models",permalink:"/aberabook/dev-docs/backend-customization/models"},next:{title:"Backend Customization Examples Cookbook",permalink:"/aberabook/dev-docs/backend-customization/examples"}},d={},s=[{value:"User content-type webhooks",id:"user-content-type-webhooks",level:2},{value:"Available configurations",id:"available-configurations",level:2},{value:"Securing your webhooks",id:"securing-your-webhooks",level:2},{value:"Available events",id:"available-events",level:2},{value:"Payloads",id:"payloads",level:2},{value:"Headers",id:"headers",level:3},{value:"<code>entry.create</code>",id:"entrycreate",level:3},{value:"<code>entry.update</code>",id:"entryupdate",level:3},{value:"<code>entry.delete</code>",id:"entrydelete",level:3},{value:"<code>entry.publish</code>",id:"entrypublish",level:3},{value:"<code>entry.unpublish</code>",id:"entryunpublish",level:3},{value:"<code>media.create</code>",id:"mediacreate",level:3},{value:"<code>media.update</code>",id:"mediaupdate",level:3},{value:"<code>media.delete</code>",id:"mediadelete",level:3},{value:"<code>review-workflows.updateEntryStage</code> <EnterpriseBadge/>",id:"review-workflowsupdateentrystage-",level:3},{value:"<code>releases.publish</code> <EnterpriseBadge/><CloudTeamBadge/>",id:"releasespublish-",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("Tabs"),c=p("TabItem"),m=p("EnterpriseBadge"),k=p("CloudTeamBadge"),h={toc:s};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webhooks"},"Webhooks"),(0,r.kt)("p",null,"Webhook is a construct used by an application to notify other applications that an event occurred. More precisely, webhook is a user-defined HTTP callback. Using a webhook is a good way to tell third party providers to start some processing (CI, build, deployment ...)."),(0,r.kt)("p",null,"The way a webhook works is by delivering information to a receiving application through HTTP requests (typically POST requests)."),(0,r.kt)("h2",{id:"user-content-type-webhooks"},"User content-type webhooks"),(0,r.kt)("p",null,"To prevent from unintentionally sending any user's information to other applications, Webhooks will not work for the User content-type.\nIf you need to notify other applications about changes in the Users collection, you can do so by creating ",(0,r.kt)("a",{parentName:"p",href:"/dev-docs/backend-customization/models#lifecycle-hooks"},"Lifecycle hooks")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/index.js")," example."),(0,r.kt)("h2",{id:"available-configurations"},"Available configurations"),(0,r.kt)("p",null,"You can set webhook configurations inside the file ",(0,r.kt)("inlineCode",{parentName:"p"},"./config/server"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"webhooks"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultHeaders"),": You can set default headers to use for your webhook requests. This option is overwritten by the headers set in the webhook itself.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example configuration")),(0,r.kt)(u,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(c,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/server.js"',title:'"./config/server.js"'},'module.exports = {\n  webhooks: {\n    defaultHeaders: {\n      "Custom-Header": "my-custom-header",\n    },\n  },\n};\n'))),(0,r.kt)(c,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/server.ts"',title:'"./config/server.ts"'},'export default {\n  webhooks: {\n    defaultHeaders: {\n      "Custom-Header": "my-custom-header",\n    },\n  },\n};\n')))),(0,r.kt)("h2",{id:"securing-your-webhooks"},"Securing your webhooks"),(0,r.kt)("p",null,"Most of the time, webhooks make requests to public URLs, therefore it is possible that someone may find that URL and send it wrong information."),(0,r.kt)("p",null,"To prevent this from happening you can send a header with an authentication token. Using the Admin panel you would have to do it for every webhook.\nAnother way is to define ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultHeaders")," to add to every webhook requests."),(0,r.kt)("p",null,"You can configure these global headers by updating the file at ",(0,r.kt)("inlineCode",{parentName:"p"},"./config/server"),":"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(c,{value:"simple-token",label:"Simple token",mdxType:"TabItem"},(0,r.kt)(u,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(c,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/server.js"',title:'"./config/server.js"'},'module.exports = {\n  webhooks: {\n    defaultHeaders: {\n      Authorization: "Bearer my-very-secured-token",\n    },\n  },\n};\n'))),(0,r.kt)(c,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config.server.ts"',title:'"./config.server.ts"'},'export default {\n  webhooks: {\n    defaultHeaders: {\n      Authorization: "Bearer my-very-secured-token",\n    },\n  },\n};\n'))))),(0,r.kt)(c,{value:"environment-variable",label:"Environment variable",mdxType:"TabItem"},(0,r.kt)(u,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(c,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/server.js"',title:'"./config/server.js"'},"module.exports = {\n  webhooks: {\n    defaultHeaders: {\n      Authorization: `Bearer ${process.env.WEBHOOK_TOKEN}`,\n    },\n  },\n};\n"))),(0,r.kt)(c,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/server.ts"',title:'"./config/server.ts"'},"export default {\n  webhooks: {\n    defaultHeaders: {\n      Authorization: `Bearer ${process.env.WEBHOOK_TOKEN}`,\n    },\n  },\n};\n")))))),(0,r.kt)("p",null,"If you are developing the webhook handler yourself you can now verify the token by reading the headers."),(0,r.kt)("h2",{id:"available-events"},"Available events"),(0,r.kt)("p",null,"By default Strapi webhooks can be triggered by the following events:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#entrycreate"},(0,r.kt)("inlineCode",{parentName:"a"},"entry.create"))),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when a Content Type entry is created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#entryupdate"},(0,r.kt)("inlineCode",{parentName:"a"},"entry.update"))),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when a Content Type entry is updated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#entrydelete"},(0,r.kt)("inlineCode",{parentName:"a"},"entry.delete"))),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when a Content Type entry is deleted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#entrypublish"},(0,r.kt)("inlineCode",{parentName:"a"},"entry.publish"))),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when a Content Type entry is published.","*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#entryunpublish"},(0,r.kt)("inlineCode",{parentName:"a"},"entry.unpublish"))),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when a Content Type entry is unpublished.","*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mediacreate"},(0,r.kt)("inlineCode",{parentName:"a"},"media.create"))),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when a media is created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mediaupdate"},(0,r.kt)("inlineCode",{parentName:"a"},"media.update"))),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when a media is updated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mediadelete"},(0,r.kt)("inlineCode",{parentName:"a"},"media.delete"))),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when a media is deleted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#review-workflowsupdateentrystage"},(0,r.kt)("inlineCode",{parentName:"a"},"review-workflows.updateEntryStage"))),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when content is moved between review stages (see ",(0,r.kt)("a",{parentName:"td",href:"/user-docs/settings/review-workflows"},"Review Workflows"),").",(0,r.kt)("br",null),"This event is only available with the ",(0,r.kt)(m,{mdxType:"EnterpriseBadge"})," edition of Strapi.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#releasespublish-"},(0,r.kt)("inlineCode",{parentName:"a"},"releases.publish"))),(0,r.kt)("td",{parentName:"tr",align:null},"Triggered when a Release is published (see ",(0,r.kt)("a",{parentName:"td",href:"/user-docs/releases/introduction"},"Releases"),").",(0,r.kt)("br",null),"This event is only available with the ",(0,r.kt)(m,{mdxType:"EnterpriseBadge"})," edition of Strapi and the ",(0,r.kt)(k,{mdxType:"CloudTeamBadge"})," plan for Strapi Cloud.")))),(0,r.kt)("p",null,"*","only when ",(0,r.kt)("inlineCode",{parentName:"p"},"draftAndPublish")," is enabled on this Content Type."),(0,r.kt)("h2",{id:"payloads"},"Payloads"),(0,r.kt)("admonition",{title:"NOTE",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Private fields and passwords are not sent in the payload.")),(0,r.kt)("h3",{id:"headers"},"Headers"),(0,r.kt)("p",null,"When a payload is delivered to your webhook's URL, it will contain specific headers:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"X-Strapi-Event")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the event type that was triggered.")))),(0,r.kt)("h3",{id:"entrycreate"},(0,r.kt)("inlineCode",{parentName:"h3"},"entry.create")),(0,r.kt)("p",null,"This event is triggered when a new entry is created."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "entry.create",\n  "createdAt": "2020-01-10T08:47:36.649Z",\n  "model": "address",\n  "entry": {\n    "id": 1,\n    "geolocation": {},\n    "city": "Paris",\n    "postal_code": null,\n    "category": null,\n    "full_name": "Paris",\n    "createdAt": "2020-01-10T08:47:36.264Z",\n    "updatedAt": "2020-01-10T08:47:36.264Z",\n    "cover": null,\n    "images": []\n  }\n}\n')),(0,r.kt)("h3",{id:"entryupdate"},(0,r.kt)("inlineCode",{parentName:"h3"},"entry.update")),(0,r.kt)("p",null,"This event is triggered when an entry is updated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "entry.update",\n  "createdAt": "2020-01-10T08:58:26.563Z",\n  "model": "address",\n  "entry": {\n    "id": 1,\n    "geolocation": {},\n    "city": "Paris",\n    "postal_code": null,\n    "category": null,\n    "full_name": "Paris",\n    "createdAt": "2020-01-10T08:47:36.264Z",\n    "updatedAt": "2020-01-10T08:58:26.210Z",\n    "cover": null,\n    "images": []\n  }\n}\n')),(0,r.kt)("h3",{id:"entrydelete"},(0,r.kt)("inlineCode",{parentName:"h3"},"entry.delete")),(0,r.kt)("p",null,"This event is triggered when an entry is deleted."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "entry.delete",\n  "createdAt": "2020-01-10T08:59:35.796Z",\n  "model": "address",\n  "entry": {\n    "id": 1,\n    "geolocation": {},\n    "city": "Paris",\n    "postal_code": null,\n    "category": null,\n    "full_name": "Paris",\n    "createdAt": "2020-01-10T08:47:36.264Z",\n    "updatedAt": "2020-01-10T08:58:26.210Z",\n    "cover": null,\n    "images": []\n  }\n}\n')),(0,r.kt)("h3",{id:"entrypublish"},(0,r.kt)("inlineCode",{parentName:"h3"},"entry.publish")),(0,r.kt)("p",null,"This event is triggered when an entry is published."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "entry.publish",\n  "createdAt": "2020-01-10T08:59:35.796Z",\n  "model": "address",\n  "entry": {\n    "id": 1,\n    "geolocation": {},\n    "city": "Paris",\n    "postal_code": null,\n    "category": null,\n    "full_name": "Paris",\n    "createdAt": "2020-01-10T08:47:36.264Z",\n    "updatedAt": "2020-01-10T08:58:26.210Z",\n    "publishedAt": "2020-08-29T14:20:12.134Z",\n    "cover": null,\n    "images": []\n  }\n}\n')),(0,r.kt)("h3",{id:"entryunpublish"},(0,r.kt)("inlineCode",{parentName:"h3"},"entry.unpublish")),(0,r.kt)("p",null,"This event is triggered when an entry is unpublished."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "entry.unpublish",\n  "createdAt": "2020-01-10T08:59:35.796Z",\n  "model": "address",\n  "entry": {\n    "id": 1,\n    "geolocation": {},\n    "city": "Paris",\n    "postal_code": null,\n    "category": null,\n    "full_name": "Paris",\n    "createdAt": "2020-01-10T08:47:36.264Z",\n    "updatedAt": "2020-01-10T08:58:26.210Z",\n    "publishedAt": null,\n    "cover": null,\n    "images": []\n  }\n}\n')),(0,r.kt)("h3",{id:"mediacreate"},(0,r.kt)("inlineCode",{parentName:"h3"},"media.create")),(0,r.kt)("p",null,"This event is triggered when you upload a file on entry creation or through the media interface."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "media.create",\n  "createdAt": "2020-01-10T10:58:41.115Z",\n  "media": {\n    "id": 1,\n    "name": "image.png",\n    "hash": "353fc98a19e44da9acf61d71b11895f9",\n    "sha256": "huGUaFJhmcZRHLcxeQNKblh53vtSUXYaB16WSOe0Bdc",\n    "ext": ".png",\n    "mime": "image/png",\n    "size": 228.19,\n    "url": "/uploads/353fc98a19e44da9acf61d71b11895f9.png",\n    "provider": "local",\n    "provider_metadata": null,\n    "createdAt": "2020-01-10T10:58:41.095Z",\n    "updatedAt": "2020-01-10T10:58:41.095Z",\n    "related": []\n  }\n}\n')),(0,r.kt)("h3",{id:"mediaupdate"},(0,r.kt)("inlineCode",{parentName:"h3"},"media.update")),(0,r.kt)("p",null,"This event is triggered when you replace a media or update the metadata of a media through the media interface."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "media.update",\n  "createdAt": "2020-01-10T10:58:41.115Z",\n  "media": {\n    "id": 1,\n    "name": "image.png",\n    "hash": "353fc98a19e44da9acf61d71b11895f9",\n    "sha256": "huGUaFJhmcZRHLcxeQNKblh53vtSUXYaB16WSOe0Bdc",\n    "ext": ".png",\n    "mime": "image/png",\n    "size": 228.19,\n    "url": "/uploads/353fc98a19e44da9acf61d71b11895f9.png",\n    "provider": "local",\n    "provider_metadata": null,\n    "createdAt": "2020-01-10T10:58:41.095Z",\n    "updatedAt": "2020-01-10T10:58:41.095Z",\n    "related": []\n  }\n}\n')),(0,r.kt)("h3",{id:"mediadelete"},(0,r.kt)("inlineCode",{parentName:"h3"},"media.delete")),(0,r.kt)("p",null,"This event is triggered only when you delete a media through the media interface."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "media.delete",\n  "createdAt": "2020-01-10T11:02:46.232Z",\n  "media": {\n    "id": 11,\n    "name": "photo.png",\n    "hash": "43761478513a4c47a5fd4a03178cfccb",\n    "sha256": "HrpDOKLFoSocilA6B0_icA9XXTSPR9heekt2SsHTZZE",\n    "ext": ".png",\n    "mime": "image/png",\n    "size": 4947.76,\n    "url": "/uploads/43761478513a4c47a5fd4a03178cfccb.png",\n    "provider": "local",\n    "provider_metadata": null,\n    "createdAt": "2020-01-07T19:34:32.168Z",\n    "updatedAt": "2020-01-07T19:34:32.168Z",\n    "related": []\n  }\n}\n')),(0,r.kt)("h3",{id:"review-workflowsupdateentrystage-"},(0,r.kt)("inlineCode",{parentName:"h3"},"review-workflows.updateEntryStage")," ",(0,r.kt)(m,{mdxType:"EnterpriseBadge"})),(0,r.kt)("p",null,"This event is only available with the ",(0,r.kt)(m,{mdxType:"EnterpriseBadge"})," edition of Strapi.",(0,r.kt)("br",null),"The event is triggered when content is moved to a new review stage (see ",(0,r.kt)("a",{parentName:"p",href:"/user-docs/settings/review-workflows"},"Review Workflows"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "review-workflows.updateEntryStage",\n  "createdAt": "2023-06-26T15:46:35.664Z",\n  "model": "model",\n  "uid": "uid",\n  "entity": {\n    "id": 2\n  },\n  "workflow": {\n    "id": 1,\n    "stages": {\n      "from": {\n        "id": 1,\n        "name": "Stage 1"\n      },\n      "to": {\n        "id": 2,\n        "name": "Stage 2"\n      }\n    }\n  }\n}\n')),(0,r.kt)("admonition",{title:"Payload format for Strapi v4.11.4+",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The payload format for the ",(0,r.kt)("inlineCode",{parentName:"p"},"review-workflows.updateEntryStage")," webhook changed between Strapi v4.11.3 and Strapi v4.11.4. Please notice the payload format differences in the following examples and update your integration code accordingly:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Payload formats for Strapi v4.11.3 vs. Strapi v4.11.4"),(0,r.kt)("p",{parentName:"admonition"},"In Strapi v4.11.3 the webhook payload has the following structure:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "review-workflows.updateEntryStage",\n  "createdAt": "2023-06-30T11:40:00.658Z",\n  "model": "model",\n  "uid": "uid",\n  "entry": {\n    "entityId": 2,\n    "workflow": {\n      "id": 1,\n      "stages": {\n        "from": 1,\n        "to": 2\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",{parentName:"admonition"},"In Strapi v4.11.4 the webhook payload has the following structure:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "review-workflows.updateEntryStage",\n  "createdAt": "2023-06-26T15:46:35.664Z",\n  "model": "model",\n  "uid": "uid",\n  "entity": {\n    "id": 2\n  },\n  "workflow": {\n    "id": 1,\n    "stages": {\n      "from": {\n        "id": 1,\n        "name": "Stage 1"\n      },\n      "to": {\n        "id": 2,\n        "name": "Stage 2"\n      }\n    }\n  }\n}\n')))),(0,r.kt)("h3",{id:"releasespublish-"},(0,r.kt)("inlineCode",{parentName:"h3"},"releases.publish")," ",(0,r.kt)(m,{mdxType:"EnterpriseBadge"}),(0,r.kt)(k,{mdxType:"CloudTeamBadge"})),(0,r.kt)("p",null,"The event is triggered when a ",(0,r.kt)("a",{parentName:"p",href:"/user-docs/releases/introduction"},"release")," is published."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "event": "releases.publish",\n  "createdAt": "2024-02-21T16:45:36.877Z",\n  "isPublished": true,\n  "release": {\n    "id": 2,\n    "name": "Fall Winter highlights",\n    "releasedAt": "2024-02-21T16:45:36.873Z",\n    "scheduledAt": null,\n    "timezone": null,\n    "createdAt": "2024-02-21T15:16:22.555Z",\n    "updatedAt": "2024-02-21T16:45:36.875Z",\n    "actions": {\n      "count": 1\n    }\n  }\n}\n')))}g.isMDXComponent=!0}}]);