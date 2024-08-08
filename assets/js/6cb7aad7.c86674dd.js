"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[4933,1518,4350,931,4158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=o,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var a=n(83117),o=(n(67294),n(3905)),i=n(76634),r=n(81322),p=n(61770),s=n(87386);const l={title:"Migrate from 4.7.0 to 4.11.4",displayed_sidebar:"devDocsSidebar",description:"Learn how you can migrate your Strapi application from 4.7.0 to 4.11.4.",canonicalUrl:"https://docs.strapi.io/developer-docs/latest/update-migration-guides/migration-guides/v4/migration-guide-4.7.0-to-4.11.4.html"},d="v4.7.0 to v4.11.4 migration guide",m={unversionedId:"dev-docs/migration/v4/migration-guide-4.7.0-to-4.11.4",id:"dev-docs/migration/v4/migration-guide-4.7.0-to-4.11.4",title:"Migrate from 4.7.0 to 4.11.4",description:"Learn how you can migrate your Strapi application from 4.7.0 to 4.11.4.",source:"@site/docs/dev-docs/migration/v4/migration-guide-4.7.0-to-4.11.4.md",sourceDirName:"dev-docs/migration/v4",slug:"/dev-docs/migration/v4/migration-guide-4.7.0-to-4.11.4",permalink:"/aberabook/dev-docs/migration/v4/migration-guide-4.7.0-to-4.11.4",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/migration/v4/migration-guide-4.7.0-to-4.11.4.md",tags:[],version:"current",frontMatter:{title:"Migrate from 4.7.0 to 4.11.4",displayed_sidebar:"devDocsSidebar",description:"Learn how you can migrate your Strapi application from 4.7.0 to 4.11.4.",canonicalUrl:"https://docs.strapi.io/developer-docs/latest/update-migration-guides/migration-guides/v4/migration-guide-4.7.0-to-4.11.4.html"},sidebar:"devDocsSidebar"},c={},u=[{value:"Upgrading the application dependencies to 4.11.4",id:"upgrading-the-application-dependencies-to-4114",level:2},{value:"Installing database migration script (Optional)",id:"installing-database-migration-script-optional",level:2},{value:"Rebuild the application",id:"rebuild-the-application",level:2},{value:"Restart the application",id:"restart-the-application",level:2}],g={toc:u};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"v470-to-v4114-migration-guide"},"v4.7.0 to v4.11.4 migration guide"),(0,o.kt)("p",null,"The Strapi v4.7.0 to v4.11.4 migration guide upgrades v4.7.0 to v4.11.4. We updated how images are fetched in the Media Library, and some people had database records in the wrong state from old migrations. The migration guide consists of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upgrading the application dependencies"),(0,o.kt)("li",{parentName:"ul"},"Installing database migration script (Optional)"),(0,o.kt)("li",{parentName:"ul"},"Reinitializing the application")),(0,o.kt)(i.default,{components:n.components,mdxType:"PluginsCaution"}),(0,o.kt)("h2",{id:"upgrading-the-application-dependencies-to-4114"},"Upgrading the application dependencies to 4.11.4"),(0,o.kt)("admonition",{type:"prerequisites"},(0,o.kt)("p",{parentName:"admonition"},"Stop the server before starting the upgrade.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Upgrade all of the Strapi packages in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"4.11.4"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="path: package.json"',title:'"path:','package.json"':!0},'{\n  // ...\n  "dependencies": {\n    "@strapi/strapi": "4.11.4",\n    "@strapi/plugin-users-permissions": "4.11.4",\n    "@strapi/plugin-i18n": "4.11.4"\n    // ...\n  }\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the edited ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the install command:"),(0,o.kt)(s.default,{components:n.components,mdxType:"InstallCommand"}))),(0,o.kt)("h2",{id:"installing-database-migration-script-optional"},"Installing database migration script (Optional)"),(0,o.kt)("p",null,"Skip this step if you can see all images in your Media Library after updating to ",(0,o.kt)("inlineCode",{parentName:"p"},"4.11.4")," or greater."),(0,o.kt)("p",null,"The issue with missing images in the Media Library is documented ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/strapi/strapi/issues/17228"},"here"),". In version ",(0,o.kt)("inlineCode",{parentName:"p"},"4.11.4"),", the Media Library fetches files by their folder path. Root files should have a ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," path. Some users migrating from older versions had ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," values for root files' folder paths, causing the Media Library to appear empty. This migration updates those files folder paths to ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,o.kt)("p",null,"To prepare the migration:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make a backup of the database in case something unexpected happens."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"./database/migrations")," folder, create a file named ",(0,o.kt)("inlineCode",{parentName:"li"},"2023.06.14T00.00.00.update-file-paths.js"),"."),(0,o.kt)("li",{parentName:"ol"},"Copy and paste the following code into the previously created file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'"use strict";\n\nconst FILE_TABLE = "files";\n\nasync function up(trx) {\n  // Updates file\n  await trx\n    .from(FILE_TABLE)\n    .whereNull("folder_path")\n    .update({ folder_path: "/" });\n}\n\nasync function down() {}\n\nmodule.exports = { up, down };\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Save the file.")),(0,o.kt)("h2",{id:"rebuild-the-application"},"Rebuild the application"),(0,o.kt)(r.default,{components:n.components,mdxType:"BuildCommand"}),(0,o.kt)("h2",{id:"restart-the-application"},"Restart the application"),(0,o.kt)(p.default,{components:n.components,mdxType:"DevelopCommand"}))}b.isMDXComponent=!0},81322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(83117),o=(n(67294),n(3905));const i={},r=void 0,p={unversionedId:"snippets/build-npm-yarn",id:"snippets/build-npm-yarn",title:"build-npm-yarn",description:"Run the following command in your project root directory to rebuild Strapi's admin panel:",source:"@site/docs/snippets/build-npm-yarn.md",sourceDirName:"snippets",slug:"/snippets/build-npm-yarn",permalink:"/aberabook/snippets/build-npm-yarn",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/snippets/build-npm-yarn.md",tags:[],version:"current",frontMatter:{}},s={},l=[],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=d("Tabs"),c=d("TabItem"),u={toc:l};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Run the following command in your project root directory to rebuild Strapi's admin panel:"),(0,o.kt)(m,{groupId:"yarn-npm",mdxType:"Tabs"},(0,o.kt)(c,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n"))),(0,o.kt)(c,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")))))}g.isMDXComponent=!0},61770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(83117),o=(n(67294),n(3905));const i={},r=void 0,p={unversionedId:"snippets/develop-npm-yarn",id:"snippets/develop-npm-yarn",title:"develop-npm-yarn",description:"Run the following command in your project root directory to restart the application:",source:"@site/docs/snippets/develop-npm-yarn.md",sourceDirName:"snippets",slug:"/snippets/develop-npm-yarn",permalink:"/aberabook/snippets/develop-npm-yarn",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/snippets/develop-npm-yarn.md",tags:[],version:"current",frontMatter:{}},s={},l=[],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=d("Tabs"),c=d("TabItem"),u={toc:l};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Run the following command in your project root directory to restart the application:"),(0,o.kt)(m,{groupId:"yarn-npm",mdxType:"Tabs"},(0,o.kt)(c,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn develop\n"))),(0,o.kt)(c,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run develop\n")))))}g.isMDXComponent=!0},87386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(83117),o=(n(67294),n(3905));const i={},r=void 0,p={unversionedId:"snippets/install-npm-yarn",id:"snippets/install-npm-yarn",title:"install-npm-yarn",description:"Install the upgraded version:",source:"@site/docs/snippets/install-npm-yarn.md",sourceDirName:"snippets",slug:"/snippets/install-npm-yarn",permalink:"/aberabook/snippets/install-npm-yarn",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/snippets/install-npm-yarn.md",tags:[],version:"current",frontMatter:{}},s={},l=[],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=d("Tabs"),c=d("TabItem"),u={toc:l};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Install the upgraded version:"),(0,o.kt)(m,{groupId:"yarn-npm",mdxType:"Tabs"},(0,o.kt)(c,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\n"))),(0,o.kt)(c,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If the operation doesn't work, try removing your ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn.lock")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"package-lock.json"),". If that doesn't help, remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," folder as well and try again.")))}g.isMDXComponent=!0},76634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(83117),o=(n(67294),n(3905));const i={},r=void 0,p={unversionedId:"snippets/migrate-plugins-extension-caution",id:"snippets/migrate-plugins-extension-caution",title:"migrate-plugins-extension-caution",description:"Plugins extension that create custom code or modify existing code, will need to be updated and compared to the changes in the repository. Not updating the plugin extensions could break the application.",source:"@site/docs/snippets/migrate-plugins-extension-caution.md",sourceDirName:"snippets",slug:"/snippets/migrate-plugins-extension-caution",permalink:"/aberabook/snippets/migrate-plugins-extension-caution",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/snippets/migrate-plugins-extension-caution.md",tags:[],version:"current",frontMatter:{}},s={},l=[],d={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"}," ",(0,o.kt)("a",{parentName:"p",href:"/aberabook/dev-docs/plugins/users-permissions"},"Plugins extension")," that create custom code or modify existing code, will need to be updated and compared to the changes in the repository. Not updating the plugin extensions could break the application.")))}m.isMDXComponent=!0}}]);