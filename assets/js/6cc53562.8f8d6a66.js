"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[3704],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>p});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var g=r.createContext({}),u=function(e){var t=r.useContext(g),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},l=function(e){var t=u(e.components);return r.createElement(g.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,g=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=u(i),p=a,c=m["".concat(g,".").concat(p)]||m[p]||s[p]||o;return i?r.createElement(c,n(n({ref:t},l),{},{components:i})):r.createElement(c,n({ref:t},l))}));function p(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,n=new Array(o);n[0]=m;var d={};for(var g in t)hasOwnProperty.call(t,g)&&(d[g]=t[g]);d.originalType=e,d.mdxType="string"==typeof e?e:a,n[1]=d;for(var u=2;u<o;u++)n[u]=i[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},39490:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>n,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=i(83117),a=(i(67294),i(3905));const o={title:"Migration Guides",displayed_sidebar:"devDocsSidebar",description:"Migration guides for a Strapi v4 application.",sidebarDepth:0},n="Migration guides",d={unversionedId:"dev-docs/migration-guides",id:"dev-docs/migration-guides",title:"Migration Guides",description:"Migration guides for a Strapi v4 application.",source:"@site/docs/dev-docs/migration-guides.md",sourceDirName:"dev-docs",slug:"/dev-docs/migration-guides",permalink:"/aberabook/dev-docs/migration-guides",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/migration-guides.md",tags:[],version:"current",frontMatter:{title:"Migration Guides",displayed_sidebar:"devDocsSidebar",description:"Migration guides for a Strapi v4 application.",sidebarDepth:0},sidebar:"devDocsSidebar",previous:{title:"Upgrade Strapi version",permalink:"/aberabook/dev-docs/update-version"},next:{title:"v4 code migration",permalink:"/aberabook/dev-docs/migration/v3-to-v4/code-migration"}},g={},u=[{value:"v4 migration guides",id:"v4-migration-guides",level:2},{value:"v3 to v4 migration guides",id:"v3-to-v4-migration-guides",level:2},{value:"v3 migration guides",id:"v3-migration-guides",level:2}],l={toc:u};function s(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migration-guides"},"Migration guides"),(0,a.kt)("p",null,"Migrations are necessary when upgrades to Strapi include breaking changes. The migration guides are sequential, meaning if there is more than 1 migration guide between your current version and the latest release, follow each guide in order."),(0,a.kt)("p",null,"If there is no specific migration guide between your current version and the latest release, you only need to follow the ",(0,a.kt)("a",{parentName:"p",href:"/aberabook/dev-docs/update-version"},"guide to upgrade Strapi"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/dev-docs/plugins/users-permissions"},"Plugins extension")," that create custom code or modify existing code will need to be updated and compared to the changes in the repository. Not updating the plugin extensions could break the application.")),(0,a.kt)("h2",{id:"v4-migration-guides"},"v4 migration guides"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev-docs/migration/v4/migration-guide-4.0.0-to-4.0.6"},"Migration guide from 4.0.0+ to 4.0.6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev-docs/migration/v4/migration-guide-4.0.6-to-4.1.8"},"Migration guide from 4.0.6+ to 4.1.8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev-docs/migration/v4/migration-guide-4.1.8-to-4.1.10"},"Migration guide from 4.1.8+ to 4.1.10")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev-docs/migration/v4/migration-guide-4.2.x-to-4.3.x"},"Migration guide from 4.2.x to 4.3.x")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev-docs/migration/v4/migration-guide-4.3.6-to-4.3.8"},"Migration guide from 4.3.6 to 4.3.8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev-docs/migration/v4/migration-guide-4.4.3-to-4.4.5"},"Migration guide from 4.4.3 to 4.4.5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev-docs/migration/v4/migration-guide-4.4.5-to-4.5.1"},"Migration guide from 4.4.5 to 4.5.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev-docs/migration/v4/migration-guide-4.5.1-to-4.6.1"},"Migration guide from 4.5.1 to 4.6.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev-docs/migration/v4/migration-guide-4.6.1-to-4.7.0"},"Migration guide from 4.6.1 to 4.7.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev-docs/migration/v4/migration-guide-4.7.0-to-4.11.4"},"Migration guide from 4.7.0 to 4.11.4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev-docs/migration/v4/migration-guide-4.11.4-to-4.14.0"},"Migration guide from 4.11.4 to 4.14.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev-docs/migration/v4/migration-guide-4.14.0-to-4.15.5"},"Migration guide from 4.14.0 to 4.15.5"))),(0,a.kt)("h2",{id:"v3-to-v4-migration-guides"},"v3 to v4 migration guides"),(0,a.kt)("p",null,"Migrating from v3.6.x to v4.0.x revolves around 3 topics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/dev-docs/migration/v3-to-v4/code-migration"},"code migration guide")," helps migrating the built-in back-end and front-end code of the Strapi application to v4."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/dev-docs/migration/v3-to-v4/data-migration"},"data migration guide")," helps migrating the database content to v4."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/dev-docs/migration/v3-to-v4/plugin-migration"},"plugin migration guide")," helps migrating a plugin to v4.")),(0,a.kt)("h2",{id:"v3-migration-guides"},"v3 migration guides"),(0,a.kt)("p",null,"v3 migration guides are available in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs-v3.strapi.io/developer-docs/latest/update-migration-guides/migration-guides.html#v3-guides"},"v3 documentation"),"."))}s.isMDXComponent=!0}}]);