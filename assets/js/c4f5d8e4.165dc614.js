(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[4195,6031],{71410:(e,t,o)=>{const a=o(7694),i=o(13618),s={title:"AquaBera Documentation",tagline:"Automate and optimize your crypto liquidity provision with AquaBera.",url:"https://labs-solo.github.io",baseUrl:"/aberabook/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"https://aquabera.com/assets/favicon-32x32.png",customFields:{prefabApiKey:{}.REACT_APP_PREFAB_FRONTEND_PRODUCTION_API_KEY||"398-Development-P435-E907-FRONTEND-b3f733ec-b1b7-464f-8b6f-9cf91d23a434"},i18n:{defaultLocale:"en",locales:["en"]},markdown:{mermaid:!0},themes:["@docusaurus/theme-live-codeblock","@docusaurus/theme-mermaid"],scripts:[{src:"/js/hotjar.js",type:"module",async:!0},{src:"/js/particle.js",type:"module",async:!0},{src:"/js/firework.js",type:"module",async:!0},{src:"/js/ball.js",type:"module",async:!0},{src:"/js/bar.js",type:"module",async:!0},{src:"/js/game.js",type:"module",async:!0},{src:"/js/particleProfiles.js",type:"module",async:!0}],presets:[["@docusaurus/preset-classic",{docs:{routeBasePath:"/",sidebarPath:86679,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus",admonitions:{tag:":::",keywords:["note","tip","info","caution","danger","callout","prerequisites","aquabera","warning"]}},blog:!1,theme:{customCss:56189}}],["redocusaurus",{specs:[{spec:"docs/dev-docs/api/openapi.yaml",route:"/openapi/"}],theme:{primaryColor:"#4945FF"}}]],themeConfig:{announcementBar:{id:"aquabera-launch",content:"\ud83d\ude80 AquaBera is launching on Bartio Testnet Soon! Be ready to automate your liquidity.",backgroundColor:"#e0f7fa",textColor:"#005662",isCloseable:!0},docs:{sidebar:{hideable:!0,autoCollapseCategories:!0}},algolia:{appId:"392RJ63O14",apiKey:"ed62374a794e8da5accb298e13618614",indexName:"aquaberaDocsNext",contextualSearch:!0},navbar:{hideOnScroll:!0,logo:{alt:"AquaBera Documentation",src:"img/logo.png",srcDark:"img/logo-dark.png"},items:[{type:"doc",docId:"user-docs/intro",position:"left",label:"User Guide"},{type:"doc",docId:"dev-docs/intro",position:"left",label:"Developer Docs"},{label:"Community",position:"left",items:[{label:"Tokenomics",to:"/community/tokenomics"},{label:"Socials",to:"/community/socials"},{label:"Forum",to:"/community/forum"},{label:"Discord",href:"https://discord.aquabera.com/"},{label:"Twitter",href:"https://twitter.com/aquabera"}]},{href:"https://aquabera.com",label:"AquaBera.com",position:"right"},{href:"https://github.com/labs-solo/aberabook",label:"GitHub",position:"right"}]},footer:{style:"dark",links:[{title:"AquaBera Documentation",items:[{label:"User Guide",to:"/user-docs/intro"},{label:"Developer Documentation",to:"/dev-docs/intro"},{label:"FAQ",to:"/user-docs/faq"}]},{title:"Community",items:[{label:"Tokenomics",to:"/community/tokenomics"},{label:"Socials",to:"/community/socials"},{label:"Forum",to:"/community/forum"},{label:"Discord",href:"https://discord.aquabera.com/"},{label:"Twitter",href:"https://twitter.com/aquabera"}]},{title:"Developer Resources",items:[{label:"Deployed Contracts",to:"/dev-docs/deployed-contracts"},{label:"Audits",to:"/dev-docs/audits"},{label:"GitHub",href:"https://github.com/labs-solo/aberabook"}]},{title:"More",items:[{label:"Blog",to:"https://aquabera.com/blog"},{label:"About Us",to:"/about-us"},{label:"Contact",to:"/contact"}]}],copyright:`Copyright \xa9 ${(new Date).getFullYear()} AquaBera. Built with \u2764\ufe0f by the AquaBera community.`},prism:{theme:a,darkTheme:i},zoom:{selector:".markdown img",background:{light:"rgba(255, 255, 255, 0.8)",dark:"rgba(0, 0, 0, 0.8)"},config:{}},hubspot:{accountId:6893032,async:!0,defer:!0}},plugins:[["@docusaurus/plugin-google-tag-manager",{containerId:"GTM-WT49VGT"}],"docusaurus-plugin-hubspot","docusaurus-plugin-sass","docusaurus-plugin-image-zoom",["posthog-docusaurus",{apiKey:"phc_DETCfjmHIm184mceL8duwutdQgOnVTZSC59xontNRWN",appUrl:"https://eu.i.posthog.com",enableInDevelopment:!1}]]};e.exports=s},86679:e=>{e.exports={devDocsSidebar:[{type:"category",collapsed:!1,label:"\ud83d\ude80 Getting Started",items:["dev-docs/intro",{type:"doc",label:"Quick Start Guide",id:"dev-docs/quick-start"},"dev-docs/faq","dev-docs/usage-information"]},{type:"category",collapsed:!1,label:"\u2699\ufe0f Setup & Deployment",link:{type:"doc",id:"dev-docs/setup-deployment"},items:[{type:"doc",label:"Introduction to Setup & Deployment",id:"dev-docs/setup-deployment"},{type:"category",label:"Installation",link:{type:"doc",id:"dev-docs/installation"},items:[{type:"doc",label:"Introduction to installation",id:"dev-docs/installation"},"dev-docs/installation/cli",{type:"doc",id:"dev-docs/installation/docker"}]},"dev-docs/project-structure",{type:"category",label:"Configuration",items:[{type:"doc",label:"Introduction",id:"dev-docs/configurations"},"dev-docs/configurations/database","dev-docs/configurations/server","dev-docs/configurations/admin-panel","dev-docs/configurations/middlewares","dev-docs/configurations/api",{type:"doc",id:"dev-docs/configurations/plugins"},"dev-docs/configurations/typescript","dev-docs/configurations/api-tokens","dev-docs/configurations/functions","dev-docs/configurations/cron","dev-docs/configurations/environment","dev-docs/configurations/public-assets","dev-docs/configurations/sso","dev-docs/configurations/rbac",{type:"doc",id:"dev-docs/configurations/features"}]},{type:"category",label:"Deployment",link:{type:"doc",id:"dev-docs/deployment"},items:[{type:"doc",label:"Introduction to deployment",id:"dev-docs/deployment"},{type:"doc",label:"\u2601\ufe0f Strapi Cloud",id:"cloud/getting-started/deployment"},{type:"category",label:"Other Hosting Guides",link:{type:"doc",id:"dev-docs/deployment/hosting-guides"},collapsed:!1,items:[{type:"doc",label:"Introduction to hosting guides",id:"dev-docs/deployment/hosting-guides"},"dev-docs/deployment/amazon-aws","dev-docs/deployment/azure","dev-docs/deployment/digitalocean-app-platform","dev-docs/deployment/digitalocean","dev-docs/deployment/heroku"]},{type:"category",label:"Optional Software Guides",link:{type:"doc",id:"dev-docs/deployment/optional-software-guides"},collapsed:!1,items:[{type:"doc",label:"Introduction to optional guides",id:"dev-docs/deployment/optional-software-guides"},"dev-docs/deployment/caddy-proxy","dev-docs/deployment/haproxy-proxy","dev-docs/deployment/nginx-proxy","dev-docs/deployment/process-manager"]}]}]},{type:"category",collapsed:!1,label:"\ud83d\udce6 APIs",items:[{type:"doc",label:"APIs Introduction/Concepts",id:"dev-docs/api/content-api"},{type:"category",label:"REST API",items:[{type:"doc",id:"dev-docs/api/rest",label:"Introduction to REST APIs"},"dev-docs/api/rest/parameters",{type:"doc",id:"dev-docs/api/rest/populate-select"},"dev-docs/api/rest/filters-locale-publication","dev-docs/api/rest/sort-pagination","dev-docs/api/rest/relations","dev-docs/api/rest/interactive-query-builder",{type:"doc",id:"dev-docs/api/rest/guides/intro",label:"Guides",customProps:{updated:!0}}]},"dev-docs/api/graphql",{type:"category",label:"Entity Service API",items:[{type:"doc",id:"dev-docs/api/entity-service",label:"Introduction to Entity Service API"},"dev-docs/api/entity-service/crud","dev-docs/api/entity-service/filter","dev-docs/api/entity-service/populate","dev-docs/api/entity-service/order-pagination","dev-docs/api/entity-service/components-dynamic-zones"]},{type:"category",label:"Query Engine API",items:[{type:"doc",id:"dev-docs/api/query-engine",label:"Introduction to Query Engine API"},"dev-docs/api/query-engine/single-operations","dev-docs/api/query-engine/bulk-operations","dev-docs/api/query-engine/filtering","dev-docs/api/query-engine/populating","dev-docs/api/query-engine/order-pagination"]}]},{type:"category",label:"\ud83d\udd27 Development",collapsed:!1,items:["dev-docs/admin-panel-customization",{type:"category",label:"Back-end customization",items:[{type:"doc",id:"dev-docs/backend-customization",label:"Introduction to backend customization"},{type:"doc",id:"dev-docs/backend-customization/requests-responses"},"dev-docs/backend-customization/routes","dev-docs/backend-customization/policies",{type:"doc",id:"dev-docs/backend-customization/middlewares"},{type:"doc",id:"dev-docs/backend-customization/controllers"},"dev-docs/backend-customization/services","dev-docs/backend-customization/models","dev-docs/backend-customization/webhooks",{type:"category",label:"\u2728 Examples",collapsed:!0,items:[{type:"doc",label:"Introduction",id:"dev-docs/backend-customization/examples"},{type:"doc",label:"Authentication",id:"dev-docs/backend-customization/examples/authentication"},{type:"doc",label:"Services, Controllers",id:"dev-docs/backend-customization/examples/services-and-controllers"},{type:"doc",label:"Policies",id:"dev-docs/backend-customization/examples/policies"},{type:"doc",label:"Routes",id:"dev-docs/backend-customization/examples/routes"},{type:"doc",label:"Global middlewares",id:"dev-docs/backend-customization/examples/middlewares"}]}]},"dev-docs/typescript",{type:"doc",label:"Providers",id:"dev-docs/providers"}]},{type:"category",label:"\ud83d\udcbb Developer Resources",collapsed:!1,items:["dev-docs/cli",{type:"category",label:"Data management",items:[{type:"doc",label:"Introduction to data management",id:"dev-docs/data-management"},"dev-docs/data-management/export","dev-docs/data-management/import",{type:"doc",label:"Data transfer",id:"dev-docs/data-management/transfer"}]},"dev-docs/database-migrations","dev-docs/error-handling",{type:"category",label:"Integrations",items:[{type:"doc",label:"Introduction to integrations",id:"dev-docs/integrations"},"dev-docs/integrations/11ty","dev-docs/integrations/angular","dev-docs/integrations/dart","dev-docs/integrations/flutter","dev-docs/integrations/gatsby","dev-docs/integrations/gridsome","dev-docs/integrations/go","dev-docs/integrations/graphql","dev-docs/integrations/jekyll","dev-docs/integrations/laravel","dev-docs/integrations/next-js","dev-docs/integrations/nuxt-js","dev-docs/integrations/php","dev-docs/integrations/python","dev-docs/integrations/react","dev-docs/integrations/ruby","dev-docs/integrations/sapper","dev-docs/integrations/svelte","dev-docs/integrations/vue-js"]}]},{type:"category",collapsed:!1,label:"\ud83d\udd0c Plugins",link:{type:"doc",id:"dev-docs/plugins"},items:[{type:"doc",label:"Plugins Introduction/Concepts",id:"dev-docs/plugins"},{type:"category",label:"Using plugins",link:{type:"doc",id:"dev-docs/plugins/using-plugins"},items:[{type:"doc",label:"Introduction to using plugins",id:"dev-docs/plugins/using-plugins"},{type:"doc",label:"Documentation",id:"dev-docs/plugins/documentation"},{type:"doc",label:"Email",id:"dev-docs/plugins/email"},{type:"doc",label:"GraphQL",id:"dev-docs/plugins/graphql"},{type:"doc",label:"Internationalization (i18n)",id:"dev-docs/plugins/i18n"},{type:"doc",label:"Sentry",id:"dev-docs/plugins/sentry"},{type:"doc",label:"Upload",id:"dev-docs/plugins/upload"},{type:"doc",label:"Users & Permissions",id:"dev-docs/plugins/users-permissions"}]},{type:"category",label:"Developing plugins",customProps:{new:!0},link:{type:"doc",id:"dev-docs/plugins/developing-plugins"},items:[{type:"doc",label:"Introduction to developing plugins",id:"dev-docs/plugins/developing-plugins"},"dev-docs/plugins/development/create-a-plugin","dev-docs/plugins/development/plugin-structure",{type:"doc",id:"dev-docs/api/plugins/admin-panel-api",label:"Admin Panel API"},{type:"doc",id:"dev-docs/api/plugins/server-api",label:"Server API"},{type:"doc",id:"dev-docs/plugins/development/plugin-cli",customProps:{new:!0}},"dev-docs/custom-fields","dev-docs/plugins-extension",{type:"category",label:"Guides",link:{type:"doc",id:"dev-docs/plugins/developing-plugins"},items:["dev-docs/plugins/guides/store-and-access-data","dev-docs/plugins/guides/pass-data-from-server-to-admin",{type:"doc",id:"dev-docs/plugins/guides/use-the-plugin-cli",customProps:{new:!0}}]}]}]},{type:"category",collapsed:!1,label:"\u267b\ufe0f Update and Migration",items:["dev-docs/update-version","dev-docs/migration-guides",{type:"category",collapsed:!0,label:"v3 to v4 migration guides",items:[{type:"category",collapsed:!1,link:{type:"doc",id:"dev-docs/migration/v3-to-v4/code-migration"},label:"Code migration",items:[{type:"category",collapsed:!0,link:{type:"doc",id:"dev-docs/migration/v3-to-v4/code/backend"},label:"Backend migration",items:["dev-docs/migration/v3-to-v4/code/configuration","dev-docs/migration/v3-to-v4/code/content-type-schema","dev-docs/migration/v3-to-v4/code/controllers","dev-docs/migration/v3-to-v4/code/dependencies","dev-docs/migration/v3-to-v4/code/global-middlewares","dev-docs/migration/v3-to-v4/code/graphql","dev-docs/migration/v3-to-v4/code/policies","dev-docs/migration/v3-to-v4/code/route-middlewares","dev-docs/migration/v3-to-v4/code/routes","dev-docs/migration/v3-to-v4/code/services"]},{type:"category",collapsed:!0,link:{type:"doc",id:"dev-docs/migration/v3-to-v4/code/frontend"},label:"Frontend migration",items:["dev-docs/migration/v3-to-v4/code/strapi-global","dev-docs/migration/v3-to-v4/code/theming","dev-docs/migration/v3-to-v4/code/translations","dev-docs/migration/v3-to-v4/code/webpack","dev-docs/migration/v3-to-v4/code/wysiwyg"]}]},{type:"category",collapsed:!1,link:{type:"doc",id:"dev-docs/migration/v3-to-v4/plugin-migration"},label:"Plugin migration",items:["dev-docs/migration/v3-to-v4/plugin/update-folder-structure","dev-docs/migration/v3-to-v4/plugin/migrate-back-end","dev-docs/migration/v3-to-v4/plugin/migrate-front-end","dev-docs/migration/v3-to-v4/plugin/enable-plugin"]},{type:"category",collapsed:!1,link:{type:"doc",id:"dev-docs/migration/v3-to-v4/data-migration"},label:"Data migration",items:["dev-docs/migration/v3-to-v4/data/sql","dev-docs/migration/v3-to-v4/data/sql-relations","dev-docs/migration/v3-to-v4/data/mongo","dev-docs/migration/v3-to-v4/data/mongo-sql-cheatsheet"]}]}]}],userDocsSidebar:[{type:"category",collapsed:!1,label:"Getting Started",items:["user-docs/intro","user-docs/getting-started/user-guide-fundamentals","user-docs/getting-started/setting-up-admin-panel"]},{type:"category",collapsed:!1,label:"Content Manager",items:["user-docs/content-manager/introduction-to-content-manager","user-docs/content-manager/configuring-view-of-content-type",{type:"doc",id:"user-docs/content-manager/writing-content"},"user-docs/content-manager/managing-relational-fields","user-docs/content-manager/translating-content","user-docs/content-manager/reviewing-content",{type:"doc",id:"user-docs/content-manager/saving-and-publishing-content"},"user-docs/content-manager/adding-content-to-releases"]},{type:"category",collapsed:!1,label:"Content-type Builder",items:["user-docs/content-type-builder/introduction-to-content-types-builder","user-docs/content-type-builder/creating-new-content-type",{type:"doc",id:"user-docs/content-type-builder/configuring-fields-content-type"},"user-docs/content-type-builder/managing-content-types"]},{type:"category",collapsed:!1,label:"Media Library",items:[{type:"autogenerated",dirName:"user-docs/media-library"}]},{type:"category",customProps:{new:!0},collapsed:!1,label:"Releases",items:["user-docs/releases/introduction","user-docs/releases/creating-a-release","user-docs/releases/managing-a-release"]},{type:"category",collapsed:!1,label:"Users, Roles & Permissions",items:[{type:"autogenerated",dirName:"user-docs/users-roles-permissions"}]},{type:"category",collapsed:!1,label:"Plugins",items:[{type:"autogenerated",dirName:"user-docs/plugins"}]},{type:"category",collapsed:!1,label:"General Settings",items:[{type:"doc",id:"user-docs/settings/introduction",customProps:{new:!0}},"user-docs/settings/configuring-users-permissions-plugin-settings","user-docs/settings/audit-logs",{type:"category",collapsed:!1,label:"Configuring global settings",items:["user-docs/settings/admin-panel","user-docs/settings/API-tokens","user-docs/settings/internationalization","user-docs/settings/media-library-settings",{type:"doc",label:"Review Workflows",id:"user-docs/settings/review-workflows"},"user-docs/settings/single-sign-on","user-docs/settings/transfer-tokens"]}]}],cloudSidebar:[{type:"category",collapsed:!1,label:"Getting Started",items:["cloud/getting-started/intro",{type:"doc",label:"Cloud fundamentals",id:"cloud/getting-started/cloud-fundamentals",customProps:{new:!1}},{type:"category",label:"Project deployment",link:{type:"doc",id:"cloud/getting-started/deployment-options"},customProps:{updated:!1},items:[{type:"doc",id:"cloud/getting-started/deployment",customProps:{updated:!0}},{type:"doc",id:"cloud/getting-started/deployment-cli",customProps:{new:!0}}]},{type:"doc",id:"cloud/getting-started/usage-billing",customProps:{updated:!1}},"cloud/getting-started/caching",{type:"doc",label:"Notifications",id:"cloud/projects/notifications"}]},{type:"category",collapsed:!1,label:"Projects management",items:["cloud/projects/overview",{type:"doc",label:"Project settings",id:"cloud/projects/settings",customProps:{updated:!0}},"cloud/projects/collaboration","cloud/projects/runtime-logs"]},{type:"category",collapsed:!1,label:"Deployments",items:["cloud/projects/deploys","cloud/projects/deploys-history"]},{type:"category",collapsed:!1,label:"Account management",items:["cloud/account/account-settings",{type:"doc",id:"cloud/account/account-billing",label:"Account billing & invoices",customProps:{updated:!1}}]},{type:"category",collapsed:!1,label:"Command Line Interface",items:[{type:"doc",id:"cloud/cli/cloud-cli",label:"Strapi Cloud CLI",customProps:{new:!0}}]},{type:"category",collapsed:!1,label:"Advanced configuration",items:["cloud/advanced/database",{type:"doc",id:"cloud/advanced/email",label:"Email provider",customProps:{new:!1}},{type:"doc",id:"cloud/advanced/upload",label:"Upload provider",customProps:{new:!1}}]}],restApiSidebar:[{type:"link",label:"\u2b05\ufe0f Back to Dev Docs content",href:"/dev-docs/intro"},{type:"category",collapsed:!1,label:"REST API reference",items:[{type:"category",label:"Endpoints and basic requests",link:{type:"doc",id:"dev-docs/api/rest"},collapsed:!1,items:[{type:"link",label:"Endpoints",href:"/dev-docs/api/rest#endpoints"},{type:"link",label:"Get entries",href:"/dev-docs/api/rest#get-entries"},{type:"link",label:"Get an entry",href:"/dev-docs/api/rest#get-an-entry"},{type:"link",label:"Create an entry",href:"/dev-docs/api/rest#create-an-entry"},{type:"link",label:"Update an entry",href:"/dev-docs/api/rest#update-an-entry"},{type:"link",label:"Delete an entry",href:"/dev-docs/api/rest#delete-an-entry"}]},{type:"doc",id:"dev-docs/api/rest/interactive-query-builder",label:"\u2728 Interactive Query Builder"},{type:"doc",id:"dev-docs/api/rest/parameters"},{type:"category",label:"Populate and Select",link:{type:"doc",id:"dev-docs/api/rest/populate-select"},collapsed:!1,items:[{type:"link",label:"Field selection",href:"/dev-docs/api/rest/populate-select#field-selection"},{type:"link",label:"Populate",href:"/dev-docs/api/rest/populate-select#population"},{type:"link",label:"Combining populate with other operators",href:"/dev-docs/api/rest/populate-select#combining-population-with-other-operators"}]},{type:"category",collapsed:!1,label:"Filters, Locale, Publication State",link:{type:"doc",id:"dev-docs/api/rest/filters-locale-publication"},items:[{type:"link",label:"Filtering",href:"/dev-docs/api/rest/filters-locale-publication#filtering"},{type:"link",label:"Complex filtering",href:"/dev-docs/api/rest/filters-locale-publication#complex-filtering"},{type:"link",label:"Deep filtering",href:"/dev-docs/api/rest/filters-locale-publication#deep-filtering"},{type:"link",label:"Locale",href:"/dev-docs/api/rest/filters-locale-publication#locale"},{type:"link",label:"Publication state",href:"/dev-docs/api/rest/filters-locale-publication#publication-state"}]},{type:"category",collapsed:!1,label:"Sort and Pagination",link:{type:"doc",id:"dev-docs/api/rest/sort-pagination"},items:[{type:"link",label:"Sorting",href:"/dev-docs/api/rest/sort-pagination#sorting"},{type:"link",label:"Pagination",href:"/dev-docs/api/rest/sort-pagination#pagination"},{type:"link",label:"Pagination by page",href:"/dev-docs/api/rest/sort-pagination#pagination-by-page"},{type:"link",label:"Pagination by offset",href:"/dev-docs/api/rest/sort-pagination#pagination-by-offset"}]},{type:"category",collapsed:!1,label:"Relations",link:{type:"doc",id:"dev-docs/api/rest/relations"},items:[{type:"link",label:"connect",href:"/dev-docs/api/rest/relations#connect"},{type:"link",label:"disconnect",href:"/dev-docs/api/rest/relations#disconnect"},{type:"link",label:"set",href:"/dev-docs/api/rest/relations#set"}]}]},{type:"category",label:"Rest API guides",collapsed:!1,customProps:{new:!0},link:{type:"doc",id:"dev-docs/api/rest/guides/intro"},items:[{type:"doc",label:"Understanding populate",id:"dev-docs/api/rest/guides/understanding-populate"},{type:"doc",label:"How to populate creator fields",id:"dev-docs/api/rest/guides/populate-creator-fields"},{type:"link",label:"Additional resources",href:"/dev-docs/api/rest/guides/intro#additional-resources"}]}],devDocsConfigSidebar:[{type:"link",label:"\u2b05\ufe0f Back to Dev Docs content",href:"/dev-docs/intro"},{type:"category",collapsed:!1,label:"Configuration",link:{type:"doc",id:"dev-docs/configurations"},items:[{type:"doc",label:"Introduction to configuration",id:"dev-docs/configurations"},{type:"category",collapsed:!1,label:"Base configurations",link:{type:"doc",id:"dev-docs/configurations"},items:["dev-docs/configurations/database","dev-docs/configurations/server","dev-docs/configurations/admin-panel","dev-docs/configurations/middlewares","dev-docs/configurations/api"]},{type:"category",label:"Additional configurations",collapsed:!1,link:{type:"doc",id:"dev-docs/configurations"},items:[{type:"doc",id:"dev-docs/configurations/plugins"},"dev-docs/configurations/typescript","dev-docs/configurations/api-tokens","dev-docs/configurations/functions","dev-docs/configurations/cron","dev-docs/configurations/environment","dev-docs/configurations/sso",{type:"doc",id:"dev-docs/configurations/features"}]},{type:"category",label:"Guides",collapsed:!1,link:{type:"doc",id:"dev-docs/configurations"},items:["dev-docs/configurations/rbac","dev-docs/configurations/public-assets","dev-docs/configurations/guides/access-cast-environment-variables","dev-docs/configurations/guides/access-configuration-values"]}]}]}},56918:(e,t,o)=>{"use strict";o.d(t,{z:()=>l});var a=o(83117),i=o(86010),s=o(67294),n=o(39960);const c={button:"button_Vhl8",button__decorative:"button__decorative_Jqlm","button--huge":"button--huge_OWRo","button--secondary":"button--secondary_gb6N"};function l(e){let{href:t,to:o,children:l,className:r,decorative:d,size:u="",variant:p="primary",...m}=e;const g=o?n.Z:t?"a":"button";return s.createElement(g,(0,a.Z)({},m,t?{href:t,target:"_blank"}:{},o?{to:o}:{},{className:(0,i.Z)("button",p&&c[`button--${p}`],u&&c[`button--${u}`],c.button,c[p],r)}),l,d&&s.createElement("span",{className:c.button__decorative},d))}},44422:(e,t,o)=>{"use strict";o.d(t,{zx:()=>a.z,Zb:()=>y,SZ:()=>m,Mo:()=>v,RI:()=>g,ll:()=>p,lr:()=>P,qs:()=>C,W2:()=>q,CT:()=>L,VM:()=>H,$4:()=>M,LR:()=>O,st:()=>B,SK:()=>Q,xu:()=>V});var a=o(56918),i=o(83117),s=o(67294),n=o(86010),c=o(39960);const l={card:"card_wesb",card__title:"card__title_R7iO",card__title__arrow:"card__title__arrow__PIP",card__description:"card__description_mNDO",card__img:"card__img_D7Zl","card__img-bg":"card__img-bg_cTkx","card--cloud":"card--cloud_bhYD","card--validators":"card--validators_rj6t","card--cta":"card--cta_nClz","card--content-delimited":"card--content-delimited_Q_tF"};var r;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},d.apply(this,arguments)}const u=e=>{let{title:t,titleId:o,...a}=e;return s.createElement("svg",d({width:"0.75rem",height:"0.75rem",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-labelledby":o},a),t?s.createElement("title",{id:o},t):null,r||(r=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m8.68 6.982-2.95 3.18c-.388.418-.378 1.105 0 1.524a.942.942 0 0 0 1.405 0l4.574-4.929a1.13 1.13 0 0 0 0-1.514L7.135.314a.942.942 0 0 0-1.404 0c-.187.2-.292.473-.292.757 0 .284.105.557.292.757l2.96 3.19H1.064C.477 5.018 0 5.458 0 6s.477.982 1.065.982H8.68Z",fill:"currentColor"})))};function p(e){let{as:t,children:o,className:a,withArrow:c,...r}=e;const d=t||"h3";return s.createElement(d,(0,i.Z)({className:(0,n.Z)(l.card__title,a)},r),o,c&&s.createElement("span",{className:l.card__title__arrow},s.createElement(u,null)))}function m(e){let{as:t,className:o,...a}=e;const c=t||"div";return s.createElement(c,(0,i.Z)({className:(0,n.Z)(l.card__description,o)},a))}function g(e){let{className:t,...o}=e;return s.createElement("img",(0,i.Z)({className:(0,n.Z)(l["card__img-bg"],t)},o))}function v(e){let{className:t,...o}=e;return s.createElement("img",(0,i.Z)({className:(0,n.Z)(l.card__img,t)},o))}function y(e){let{className:t,href:o,isContentDelimited:a,to:r,variant:d,...u}=e;const p=!(!o&&!r),m=r?c.Z:o?"a":"div";return s.createElement(m,(0,i.Z)({},o?{href:o,target:"_blank"}:{},r?{to:r}:{},{className:(0,n.Z)(l.card,p&&l["card--cta"],a&&l["card--content-delimited"],d&&l[`card--${d}`],t)},u))}var b,_=o(25585),f=o(22074);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},h.apply(this,arguments)}const k=e=>{let{title:t,titleId:o,...a}=e;return s.createElement("svg",h({width:"1rem",height:"1rem",viewBox:"0 0 10 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-labelledby":o},a),t?s.createElement("title",{id:o},t):null,b||(b=s.createElement("path",{d:"M9.88 14.12 3.773 8 9.88 1.88 8 0 0 8l8 8 1.88-1.88Z",fill:"currentColor"})))};var w;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},E.apply(this,arguments)}const I=e=>{let{title:t,titleId:o,...a}=e;return s.createElement("svg",E({width:"1rem",height:"1rem",viewBox:"0 0 10 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-labelledby":o},a),t?s.createElement("title",{id:o},t):null,w||(w=s.createElement("path",{d:"M0 1.88 6.107 8 0 14.12 1.88 16l8-8-8-8L0 1.88Z",fill:"currentColor"})))};var N=o(80269);const Z={carousel:"carousel_iA77",carousel__viewport:"carousel__viewport_UsLo",carousel__container:"carousel__container_gw2g",carousel__slide:"carousel__slide_Cvwr","carousel__slide--dark":"carousel__slide--dark_rToz","carousel__slide--light":"carousel__slide--light_fJ1o",carousel__arrow:"carousel__arrow_pTCD",carousel__pagination__btn:"carousel__pagination__btn_aFpz",carousel__arrow__svg:"carousel__arrow__svg_vNwf","carousel__arrow--prev":"carousel__arrow--prev_bbuA","carousel__arrow--next":"carousel__arrow--next_zlgr",carousel__pagination:"carousel__pagination_u5A5","carousel__pagination__btn--active":"carousel__pagination__btn--active_ieZg"};function C(e){let{className:t,textStyle:o,...a}=e;return s.createElement("div",(0,i.Z)({className:(0,n.Z)(Z.carousel__slide,t)},a),s.createElement("div",{className:(0,n.Z)(Z.carousel__text),style:o},a.children))}function P(e){let{className:t,options:o,...a}=e;const[c,l]=(0,s.useState)(0),[r,d]=(0,s.useState)([]),[u,p]=(0,_.Z)({loop:!0,...o||{}},[(0,f.Z)({delay:1e4})]),m=(0,s.useCallback)((()=>p&&p.scrollPrev()),[p]),g=(0,s.useCallback)((()=>p&&p.scrollNext()),[p]),v=(0,s.useCallback)((e=>p&&p.scrollTo(e)),[p]),y=(0,s.useCallback)((()=>{if(!p)return;l(p.selectedScrollSnap());const e=p.slideNodes()[p.selectedScrollSnap()],t=e.querySelector("img");if(t){const o=new N.Z;t.onload=()=>{const a=o.getColor(t),i=(.299*a[0]+.587*a[1]+.114*a[2])/255>.5?"#000000":"#FFFFFF";e.querySelector(`.${Z.carousel__text}`).style.color=i}}}),[p]);return(0,s.useEffect)((()=>{p&&(y(),d(p.scrollSnapList()),p.on("select",y),p.on("reInit",y))}),[p,d,y]),s.createElement("div",{className:(0,n.Z)(Z.carousel,t)},s.createElement("div",{ref:u,className:Z.carousel__viewport},s.createElement("div",(0,i.Z)({className:Z.carousel__container},a))),s.createElement("button",{"aria-label":"Previous slide",onClick:m,className:(0,n.Z)(Z.carousel__arrow,Z["carousel__arrow--prev"])},s.createElement(k,null)),s.createElement("button",{"aria-label":"Next slide",onClick:g,className:(0,n.Z)(Z.carousel__arrow,Z["carousel__arrow--next"])},s.createElement(I,null)),s.createElement("div",{className:Z.carousel__pagination},r.map(((e,t)=>s.createElement("button",{key:t,"aria-hidden":!0,tabIndex:-1,onClick:()=>v(t),className:(0,n.Z)(Z.carousel__pagination__btn,t===c&&Z["carousel__pagination__btn--active"])})))))}const S="container_PBms";function q(e){let{className:t,...o}=e;return s.createElement("div",(0,i.Z)({className:(0,n.Z)(S,t)},o))}const D={"features-list":"features-list_GMQ2","features-list__item":"features-list__item_lCjJ","features-list__item__icon":"features-list__item__icon_Koru","features-list__item__icon--green":"features-list__item__icon--green_isRV"},A="lwa_cuB0",x="lwa__icon_qH3s",j="lwa--apart_str9",z="lwa__content_Ktvc";function B(e){let{apart:t=!1,children:o,className:a,href:l,to:r,...d}=e;const p=r?c.Z:"a";return s.createElement(p,(0,i.Z)({className:(0,n.Z)(A,t&&j,a)},l&&{href:l,target:"_blank"},r&&{to:r},d),s.createElement("span",{className:z},o),s.createElement(u,{className:x}))}function T(e){let{children:t,className:o,href:a,icon:c,iconColor:l,label:r,to:d,...u}=e;const p=a||d?B:"span",m=a||d?"a":"span";return s.createElement("li",{className:(0,n.Z)(D["features-list__item"],o)},c&&s.createElement(m,(0,i.Z)({className:(0,n.Z)(D["features-list__item__icon"],l&&D[`features-list__item__icon--${l}`]),href:a,to:d},"a"===m?{href:d||a}:{}),s.createElement(c,null)),s.createElement(p,(0,i.Z)({className:D["features-list__item__content"],href:a,to:d},u),t||r))}function L(e){let{className:t,id:o,icon:a,iconColor:c,items:l,...r}=e;const d=`featureListItem${Math.random()}`;return s.createElement("ul",(0,i.Z)({className:(0,n.Z)(D["features-list"],t)},r),l?.map(((e,t)=>s.createElement(T,(0,i.Z)({key:`${o||d}${t}`,icon:a,iconColor:c},e)))))}const F="hero_hQsd",G="hero__title_ducK",R="hero__description_fzxk";function O(e){let{className:t,...o}=e;return s.createElement("h1",(0,i.Z)({className:(0,n.Z)(G,t)},o))}function M(e){let{className:t,...o}=e;return s.createElement("div",(0,i.Z)({className:(0,n.Z)(R,t)},o))}function H(e){let{className:t,...o}=e;return s.createElement("header",(0,i.Z)({className:(0,n.Z)(F,t)},o))}o(71410);const U="sbs-column_G69e",$="sbs-column__content_m_qN";function Q(e){let{children:t,className:o,...a}=e;return s.createElement("div",(0,i.Z)({className:(0,n.Z)(U,o)},a),s.createElement("div",{className:(0,n.Z)($,o)},t))}const W="sbs-container--spaced_YDAa",K="sbs-container_uJZe";function V(e){let{className:t,spaced:o=!0,...a}=e;return s.createElement(s.Fragment,null,s.createElement("style",{id:"side-by-side-container--styles-overrides",dangerouslySetInnerHTML:{__html:"\n            /**\n             * Overrides applied by the component 'SideBySideContainer'\n             */\n            @media (min-width: 997px) {\n\n              /**\n               * Increase the general container size\n               */\n              main article:first-child:not(.col),\n              main article:first-child:not(.col) + nav {\n                --custom-main-width: 120rem;\n              }\n            }\n\n            @media (max-width: 1536px) {\n              /**\n               * Hide the right-side nav (table of contents)\n               */\n              .container > .row > .col.col--3 {\n                display: none;\n              }\n\n              /**\n               * Increase the content-column size\n               */\n              .container > .row > .col:first-child {\n                max-width: 100% !important;\n              }\n            }\n          "}}),s.createElement("div",(0,i.Z)({className:(0,n.Z)(K,o&&W,t)},a)))}},22795:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>y});var a=o(83117),i=o(67294),s=o(86010),n=o(7452);const c="home_TvO7",l="home__carousel_NfFa",r="home__carousel__cta_SFWc",d="home__categories_fSIZ",u="home__categories__item_psfj",p="home__huitd_mJQD",m="home__huitd__link_HDAY";var g=o(44422);const v={page:{title:"AquaBera\u2019s documentation",description:"Automate and optimize participation in Berachain's Proof-of-Liquidity."},carousel:[{backgroundImgSrc:o(25547).Z,variant:"validators",title:"Validators",description:i.createElement(i.Fragment,null,"Maximize Delegation with Focused Strategies."),button:{label:"Learn More",decorative:"\ud83d\udcca",to:"/validators/intro"}},{backgroundImgSrc:o(37381).Z,variant:"cloud",title:"$GBT & LP Token Holders",description:i.createElement(i.Fragment,null,"Asset Preservation & Growth."),button:{label:"Learn More",decorative:"\ud83d\udcb0",to:"/validators/intro"}}],categories:[{cardLink:"/user-docs/intro",cardTitle:"\ud83d\udcd8 User Guide",cardDescription:"Get the most out of AquaBera with our user guide",cardImgSrc:o(19862).Z,linksIconColor:"blue",links:[{label:"\u2139\ufe0f Introduction to AquaBera",to:"/user-docs/intro-to-aquabera"},{label:"\ud83d\udd17 Understanding BeraChain\u2019s Proof-of-Liquidity (PoL)",to:"/user-docs/understanding-pol"},{label:"\ud83c\udf0a Liquidity Management on Kodiak via AquaBera",to:"/user-docs/liquidity-management-kodiak"},{label:"\ud83d\uddf3\ufe0f Gauges and Voting Mechanisms",to:"/user-docs/gauges-voting"},{label:"\ud83c\udf81 Incentives and Rewards",to:"/user-docs/incentives-rewards"}]},{cardLink:"/community/intro",cardTitle:"\ud83d\udc65 Community",cardDescription:"Join and engage with the AquaBera community.",cardImgSrc:o(25786).Z,linksIconColor:"purple",links:[{label:"\ud83d\udcb0 Tokenomics",to:"/community/tokenomics"},{label:"\ud83d\udcf1 Socials",to:"/community/socials"},{label:"\ud83d\udcac Forum",to:"/community/forum"}]},{cardLink:"/dev-docs/intro",cardTitle:"\ud83d\udcbb Developer Documentation",cardDescription:"All you need to get your project up-and-running, and become an AquaBera expert",cardImgSrc:o(25786).Z,linksIconColor:"green",links:[{label:"\ud83d\udcdc Deployed Contracts",to:"/dev-docs/deployed-contracts"},{label:"\ud83d\udd0d Audits",to:"/dev-docs/audits"},{label:"\ud83d\udd27 GitHub",to:"https://github.com/labs-solo/aberabook"}]}],huitd:{label:"Help us improve the documentation",href:"https://github.com/labs-solo/aberabook"}};function y(){const[e,t]=(0,i.useState)(!0);return(0,i.useEffect)((()=>{function e(){t(window.scrollY<=36)}return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),i.createElement(n.Z,{title:v.page.title,description:v.page.description},e&&i.createElement("style",{dangerouslySetInnerHTML:{__html:"\n              .navbar {\n                --ifm-navbar-background-color: transparent;\n                --ifm-navbar-shadow: none;\n              }\n            "}}),i.createElement("style",{dangerouslySetInnerHTML:{__html:"\n            html[data-theme='dark'] {\n              --ifm-background-color: #181826;\n              --ifm-navbar-background-color: #181826;\n\n              --strapi-primary-600: #4945FF;\n            }\n\n            html[data-theme='dark'] .navbar .DocSearch-Button {\n              background: var(--strapi-neutral-0);\n            }\n          "}}),i.createElement("main",{className:(0,s.Z)("font-poppins",c)},i.createElement(g.VM,{id:"homeHero"},i.createElement(g.W2,null,i.createElement(g.LR,null,v.page.title),i.createElement(g.$4,null,v.page.description))),i.createElement("section",{id:"homeCarousel",className:l},i.createElement(g.W2,null,i.createElement(g.lr,null,v.carousel.map(((e,t)=>{let{backgroundImgSrc:o,title:s,description:n,button:c,...l}=e;return i.createElement(g.qs,{key:`pageHomeCarouselItem${t}`},i.createElement(g.Zb,(0,a.Z)({isContentDelimited:!0},l),o&&i.createElement(g.RI,{src:o}),s&&i.createElement(g.ll,{as:"h2"},s),n&&i.createElement(g.SZ,null,n),c&&i.createElement("div",{className:r},i.createElement(g.zx,(0,a.Z)({size:"huge"},c),c.children||c.label))))}))))),i.createElement("section",{id:"homeCategories",className:d},i.createElement(g.W2,null,i.createElement("div",{className:"row row--huge"},v.categories.map(((e,t)=>{let{cardTitle:o,cardDescription:a,cardImgSrc:n,cardLink:c,...l}=e;return i.createElement("div",{key:`pageHomeCategoryItem${t}`,className:(0,s.Z)("col","col--6",u)},i.createElement(g.Zb,{to:c},o&&i.createElement(g.ll,{withArrow:!0},o),a&&i.createElement(g.SZ,null,a),n&&i.createElement(g.Mo,{src:n})),l.links&&i.createElement(g.CT,{icon:l.linksIconSrc,iconColor:l.linksIconColor,items:l.links}))}))))),i.createElement("section",{id:"homeHelpUsImproveTheDocumentation",className:p},i.createElement(g.W2,null,i.createElement(g.st,(0,a.Z)({apart:!0,className:m},v.huitd),v.huitd.label)))))}},62841:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>a.default});var a=o(22795)},37381:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/Asset_owners-16243c378cdd4084af0c9353988ec326.jpg"},25547:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/Validators-4c0a1ae11d5751eb74d3697c560a4209.jpg"},25786:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/preview--dev-docs-8996118daeba3e1f1b8698dfa86a3520.jpg"},19862:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/preview--user-guides-9f1b192805e55f0bf52f4b00579f0527.jpg"}}]);