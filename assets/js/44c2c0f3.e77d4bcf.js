"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[9132,9523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(83117),a=(n(67294),n(3905)),o=n(13528);const i={title:"Populating",description:"Use Strapi's Query Engine API to populate relations when querying your content.",displayed_sidebar:"devDocsSidebar"},p="Populating",s={unversionedId:"dev-docs/api/query-engine/populating",id:"dev-docs/api/query-engine/populating",title:"Populating",description:"Use Strapi's Query Engine API to populate relations when querying your content.",source:"@site/docs/dev-docs/api/query-engine/populating.md",sourceDirName:"dev-docs/api/query-engine",slug:"/dev-docs/api/query-engine/populating",permalink:"/aberabook/dev-docs/api/query-engine/populating",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/api/query-engine/populating.md",tags:[],version:"current",frontMatter:{title:"Populating",description:"Use Strapi's Query Engine API to populate relations when querying your content.",displayed_sidebar:"devDocsSidebar"},sidebar:"devDocsSidebar",previous:{title:"Filtering",permalink:"/aberabook/dev-docs/api/query-engine/filtering"},next:{title:"Ordering & Pagination",permalink:"/aberabook/dev-docs/api/query-engine/order-pagination"}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"populating"},"Populating"),(0,a.kt)(o.default,{mdxType:"RecommendEntityService"}),(0,a.kt)("p",null,"Relations and components have a unified API for populating them."),(0,a.kt)("p",null,"To populate all the root level relations, use ",(0,a.kt)("inlineCode",{parentName:"p"},"populate: true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"strapi.db.query('api::article.article').findMany({\n  populate: true,\n});\n")),(0,a.kt)("p",null,"Select which data to populate by passing an array of attribute names:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"strapi.db.query('api::article.article').findMany({\n  populate: ['componentA', 'relationA'],\n});\n")),(0,a.kt)("p",null,"An object can be passed for more advanced usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"strapi.db.query('api::article.article').findMany({\n  populate: {\n    componentB: true,\n    dynamiczoneA: true,\n    relation: someLogic || true,\n  },\n});\n")),(0,a.kt)("p",null,"Complex populating can also be achieved by applying ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," filters and select or populate nested relations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"strapi.db.query('api::article.article').findMany({\n  where: {\n    relationA: {\n      name: {\n        $contains: 'Strapi',\n      },\n    },\n  },\n\n  repeatableComponent: {\n    select: ['someAttributeName'],\n    orderBy: ['someAttributeName'],\n    populate: {\n      componentRelationA: true,\n      dynamiczoneA: true,\n    },\n  },\n});\n")),(0,a.kt)("p",null,"When dealing with polymorphic data structures (dynamic zones, polymorphic relations, etc...), it is possible to use populate fragments to have a better granularity on the populate strategy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"strapi.db.query('api::article.article').findMany('api::article.article', {\n  populate: {\n    dynamicZone: {\n      on: {\n        'components.foo': {\n          select: ['title'],\n          where: { title: { $contains: 'strapi' } },\n        },\n        'components.bar': {\n          select: ['name'],\n        },\n      },\n    },\n\n    morphAuthor: {\n      on: {\n        'plugin::users-permissions.user': {\n          select: ['username'],\n        },\n        'api::author.author': {\n          select: ['name'],\n        },\n      },\n    },\n  },\n});\n")))}d.isMDXComponent=!0},13528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const o={},i=void 0,p={unversionedId:"snippets/recommend-entity-service",id:"snippets/recommend-entity-service",title:"recommend-entity-service",description:"The Entity Service API is the recommended API to interact with your application's database. Only use QueryEngine if EntityService does not cover your use case.",source:"@site/docs/snippets/recommend-entity-service.md",sourceDirName:"snippets",slug:"/snippets/recommend-entity-service",permalink:"/aberabook/snippets/recommend-entity-service",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/snippets/recommend-entity-service.md",tags:[],version:"current",frontMatter:{}},s={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,":::strapi Have you considered the Entity Service API?\nThe ",(0,a.kt)("a",{parentName:"p",href:"/dev-docs/api/entity-service"},"Entity Service API")," is the recommended API to interact with your application's database. Only use QueryEngine if EntityService does not cover your use case.\n:::"))}u.isMDXComponent=!0}}]);