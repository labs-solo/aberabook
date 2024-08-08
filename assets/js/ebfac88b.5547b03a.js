"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[4493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(83117),o=(n(67294),n(3905));const r={title:"Content-Type schema",displayed_sidebar:"devDocsSidebar",description:"Migrate your content-types from Strapi v3.6.x to v4.0.x with step-by-step instructions",sidebarDepth:3},i="v4 code migration: Updating content-type schemas",l={unversionedId:"dev-docs/migration/v3-to-v4/code/content-type-schema",id:"dev-docs/migration/v3-to-v4/code/content-type-schema",title:"Content-Type schema",description:"Migrate your content-types from Strapi v3.6.x to v4.0.x with step-by-step instructions",source:"@site/docs/dev-docs/migration/v3-to-v4/code/content-type-schema.md",sourceDirName:"dev-docs/migration/v3-to-v4/code",slug:"/dev-docs/migration/v3-to-v4/code/content-type-schema",permalink:"/aberabook/dev-docs/migration/v3-to-v4/code/content-type-schema",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/migration/v3-to-v4/code/content-type-schema.md",tags:[],version:"current",frontMatter:{title:"Content-Type schema",displayed_sidebar:"devDocsSidebar",description:"Migrate your content-types from Strapi v3.6.x to v4.0.x with step-by-step instructions",sidebarDepth:3},sidebar:"devDocsSidebar",previous:{title:"Configuration",permalink:"/aberabook/dev-docs/migration/v3-to-v4/code/configuration"},next:{title:"Controllers",permalink:"/aberabook/dev-docs/migration/v3-to-v4/code/controllers"}},p={},s=[{value:"Convert models to content-types",id:"convert-models-to-content-types",level:2},{value:"Updating content-type relations",id:"updating-content-type-relations",level:2},{value:"Updating lifecycle hooks",id:"updating-lifecycle-hooks",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"v4-code-migration-updating-content-type-schemas"},"v4 code migration: Updating content-type schemas"),(0,o.kt)("p",null,"This guide is part of the ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/migration/v3-to-v4/code-migration"},"v4 code migration guide")," designed to help you migrate the code of a Strapi application from v3.6.x to v4.0.x"),(0,o.kt)("p",null,"Models in Strapi v4 have been completely overhauled: model files are located in ",(0,o.kt)("inlineCode",{parentName:"p"},"/content-types/")," folders, various keys and settings have been removed, and the relation syntax has completely changed."),(0,o.kt)("p",null,"Migrating to Strapi v4 requires:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#convert-models-to-content-types"},"converting models to content-types"),","),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#updating-content-type-relations"},"updating content-type relations"),","),(0,o.kt)("li",{parentName:"ul"},"and ",(0,o.kt)("a",{parentName:"li",href:"#updating-lifecycle-hooks"},"updating lifecycle hooks"),".")),(0,o.kt)("h2",{id:"convert-models-to-content-types"},"Convert models to content-types"),(0,o.kt)("p",null,":::strapi v3/v4 comparison\nStrapi v3 declares models in ",(0,o.kt)("inlineCode",{parentName:"p"},"<model-name>.settings.json")," files found in a ",(0,o.kt)("inlineCode",{parentName:"p"},"models")," folder."),(0,o.kt)("p",null,"In Strapi v4, ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/backend-customization/models#content-types"},"content-types")," are declared in ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.json")," files found in ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/api/<apiName>/content-types/<contentTypeName>")," folder. The ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.json")," files introduce some new properties (see ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/backend-customization/models#model-schema"},"schema documentation"),").\n:::"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Content-types can be created automatically with the ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/cli#strapi-generate"},"interactive CLI command ",(0,o.kt)("inlineCode",{parentName:"a"},"strapi generate")),".")),(0,o.kt)("p",null,"To convert Strapi v3 models to v4 content-types:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move the ",(0,o.kt)("inlineCode",{parentName:"p"},"./api")," folder at the root of your project into ",(0,o.kt)("inlineCode",{parentName:"p"},"./src"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir src # Only if you haven't created the `./src` folder\nmv api/ src/api/\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move/rename each content-types ",(0,o.kt)("inlineCode",{parentName:"p"},"models")," folder to ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/api/<apiName>/content-types/"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mv src/api/<apiName>/models/ src/api/<apiName>/content-types/\n")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/strapi/codemods/"},"Strapi codemods")," can be used to convert v3 models to v4 content-types.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move/rename each model's ",(0,o.kt)("inlineCode",{parentName:"p"},"<modelName>.settings.json")," file to ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/api/<apiName>/content-types/<contentTypeName>/schema.json")," files.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In each ",(0,o.kt)("inlineCode",{parentName:"p"},"<contentTypeName>/schema.json")," file, update ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/backend-customization/models#model-information"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"info")," object"),", which now requires declaring the 3 new ",(0,o.kt)("inlineCode",{parentName:"p"},"singularName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pluralName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"displayName")," keys and respecting some case-formatting conventions:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="./src/api/<apiName>/content-types/<contentTypeName>/schema.json"',title:'"./src/api/<apiName>/content-types/<contentTypeName>/schema.json"'},'\n// ...\n"info": {\n  "singularName": "content-type-name", // kebab-case required\n  "pluralName": "content-type-names", // kebab-case required\n  "displayName": "Content-type name",\n  "name": "Content-type name",\n};\n// ...\n')))),(0,o.kt)("h2",{id:"updating-content-type-relations"},"Updating content-type relations"),(0,o.kt)("p",null,":::strapi v3/v4 comparison\nStrapi v3 defines relations between content-types with the ",(0,o.kt)("inlineCode",{parentName:"p"},"via"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"model")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"collection")," properties in the model settings."),(0,o.kt)("p",null,"In Strapi v4, relations should be explicitly described in the ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.json")," file of the content-types (see ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/backend-customization/models#relations"},"relations documentation"),").\n:::"),(0,o.kt)("p",null,"If the content-type has relations, it's required to manually migrate them to Strapi v4, by updating the ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/backend-customization/models#model-schema"},"schema")," of the content-types."),(0,o.kt)("p",null,"To update content-type relations, update the ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/api/<apiName>/content-types/<contentTypeName>/schema.json")," file for each content-type with the following procedure:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Declare the relation explicitly by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," attribute value to ",(0,o.kt)("inlineCode",{parentName:"p"},'"relation"'),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define the type of relation with the ",(0,o.kt)("inlineCode",{parentName:"p"},"relation")," property.",(0,o.kt)("br",null),"The value should be a string among the following possible options: ",(0,o.kt)("inlineCode",{parentName:"p"},'"oneToOne"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"oneToMany"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"manyToOne"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'"manyToMany"'),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define the content-type target with the ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," property.",(0,o.kt)("br",null),"The value should be a string following the ",(0,o.kt)("inlineCode",{parentName:"p"},"api::api-name.content-type-name")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin::plugin-name.content-type-name")," syntax convention.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(",(0,o.kt)("em",{parentName:"p"},"optional"),") In ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/backend-customization/models#relations"},"bidirectional relations"),", define ",(0,o.kt)("inlineCode",{parentName:"p"},"mappedBy")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"inversedBy")," properties on each content-type."))),(0,o.kt)("details",null,(0,o.kt)("summary",null," Example of all possible relations between an article and an author content-types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="./src/api/article/content-types/article/schema.json"',title:'"./src/api/article/content-types/article/schema.json"'},'\n// Attributes for the Article content-type\n\n// oneWay relation\n"articleHasOneAuthor": {\n  "type": "relation",\n  "relation": "oneToOne",\n  "target": "api::author.author"\n},\n// oneToOne relation\n"articleHasAndBelongsToOneAuthor": {\n  "type": "relation",\n  "relation": "oneToOne",\n  "target": "api::author.author",\n  "inversedBy": "article"\n},\n// oneToMany relation\n"articleBelongsToManyAuthors": {\n  "type": "relation",\n  "relation": "oneToMany",\n  "target": "api::author.author",\n  "mappedBy": "article"\n},\n// manyToOne relation\n"authorHasManyArticles": {\n  "type": "relation",\n  "relation": "manyToOne",\n  "target": "api::author.author",\n  "inversedBy": "articles"\n},\n// manyToMany relation\n"articlesHasAndBelongsToManyAuthors": {\n  "type": "relation",\n  "relation": "manyToMany",\n  "target": "api::author.author",\n  "inversedBy": "articles"\n},\n// manyWay relation\n"articleHasManyAuthors": {\n  "type": "relation",\n  "relation": "oneToMany",\n  "target": "api::author.author"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="./src/api/author/content-types/author/schema.json"',title:'"./src/api/author/content-types/author/schema.json"'},'\n// Attributes for the Author content-type\n\n// inversed oneToMany relation\n"article": {\n  "type": "relation",\n  "relation": "manyToOne",\n  "target": "api::article.article",\n  "inversedBy": "articleBelongsToManyAuthors"\n},\n// inversed manyToOne or manyToMany relation\n"articles": {\n  "type": "relation",\n  "relation": "manyToMany",\n  "target": "api::article.article",\n  "inversedBy": "articlesHasAndBelongsToManyAuthors"\n}\n'))),(0,o.kt)("h2",{id:"updating-lifecycle-hooks"},"Updating lifecycle hooks"),(0,o.kt)("p",null,":::strapi v3/v4 comparison\nStrapi v3 declares model lifecycle hooks in ",(0,o.kt)("inlineCode",{parentName:"p"},"<model-name>.js")," files found in a ",(0,o.kt)("inlineCode",{parentName:"p"},"models")," folder."),(0,o.kt)("p",null,"In Strapi v4, ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/backend-customization/models#lifecycle-hooks"},"lifecycle hooks")," are declared in a ",(0,o.kt)("inlineCode",{parentName:"p"},"lifecycles.js")," file found in ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/api/<apiName>/content-types/<contentTypeName>/")," folder. The ",(0,o.kt)("inlineCode",{parentName:"p"},"lifecycles.js")," file is similar in structure but no longer needs lifecycles to be wrapped in a ",(0,o.kt)("inlineCode",{parentName:"p"},"lifecycles: {}")," object, and new parameters are passed to the hooks (see ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/backend-customization/models#hook-event-object"},"lifecycle hooks documentation"),").\n:::"),(0,o.kt)("p",null,"To convert Strapi v3 model lifecycle hooks to v4 lifecycle hooks:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move/rename the ",(0,o.kt)("inlineCode",{parentName:"p"},"<modelName>.js")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/api/<apiName>/content-types/")," to the proper content-type folder you created in ",(0,o.kt)("a",{parentName:"p",href:"#convert-models-to-content-types"},"step 3")," of the content-type migration, while changing its name to ",(0,o.kt)("inlineCode",{parentName:"p"},"lifecyles.js"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd src/api/<apiName>\nmv content-types/<modelName>.js content-types/<contentTypeName>/lifecycles.js\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In each ",(0,o.kt)("inlineCode",{parentName:"p"},"lifecycles.js")," file, adjust the structure and move each lifecycle outside of the legacy ",(0,o.kt)("inlineCode",{parentName:"p"},"lifecycles: {}")," object, like in the following examples:"),(0,o.kt)("details",null,(0,o.kt)("summary",null," Example of a Strapi v3 lifecycles file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"module.exports = {\n  lifecycles: {\n    async beforeCreate() {\n      // ...\n    },\n  },\n};\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null," Example of a Strapi v4 lifecycles file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"module.exports = {\n  async beforeCreate() {\n    // ...\n  },\n};\n")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Refactor the model lifecycle hooks to use the new input variables (see ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/backend-customization/models#hook-event-object"},"hook ",(0,o.kt)("inlineCode",{parentName:"a"},"event")," object documentation"),"):"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"All Strapi v3 ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," are placed in an ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," object in Strapi v4 (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"event.params"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Nested inside of this params object, you have access to ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," (also known as fields), ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," (also known as filters), ",(0,o.kt)("inlineCode",{parentName:"p"},"orderBy")," (also known as sort), ",(0,o.kt)("inlineCode",{parentName:"p"},"limit"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"offset"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"populate"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Optionally, for all ",(0,o.kt)("inlineCode",{parentName:"p"},"after*")," events, you have access to ",(0,o.kt)("inlineCode",{parentName:"p"},"event.result")," that contains the result response from the database."),(0,o.kt)("details",null,(0,o.kt)("summary",null," Example of a Strapi v3 lifecycle:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"module.exports = {\n  lifecycles: {\n    async beforeCreate(data) {\n      data.isTableFull = data.numOfPeople === 4;\n    },\n    async afterCreate(result, data) {\n      // do something with result\n    }\n  },\n};\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example of a Strapi v4 lifecycle:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"module.exports = {\n  beforeCreate(event) {\n    let { data, where, select, populate } = event.params;\n\n    data.isTableFull = data.numOfPeople === 4;\n  },\n\n  afterCreate(event) {\n    const { result, params } = event;\n\n    // do something to the result\n  },\n};\n"))))),(0,o.kt)("p",null,":::strapi Next steps\n",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/migration/v3-to-v4/code/backend"},"Migrating the backend code")," of Strapi to v4 also requires to at least migrate the core features of the Strapi server, such as the ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/migration/v3-to-v4/code/configuration"},"configuration"),", ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/migration/v3-to-v4/code/dependencies"},"dependencies"),", ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/migration/v3-to-v4/code/routes"},"routes"),", ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/migration/v3-to-v4/code/controllers"},"controllers"),", and ",(0,o.kt)("a",{parentName:"p",href:"/dev-docs/migration/v3-to-v4/code/services"},"services"),".\n:::"))}m.isMDXComponent=!0}}]);