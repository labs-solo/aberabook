"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[4734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(83117),i=(n(67294),n(3905));const r={title:"Relations",description:"Use the REST API to manage the order of relations",displayed_sidebar:"restApiSidebar"},o="Managing relations through the REST API",l={unversionedId:"dev-docs/api/rest/relations",id:"dev-docs/api/rest/relations",title:"Relations",description:"Use the REST API to manage the order of relations",source:"@site/docs/dev-docs/api/rest/relations.md",sourceDirName:"dev-docs/api/rest",slug:"/dev-docs/api/rest/relations",permalink:"/aberabook/dev-docs/api/rest/relations",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/api/rest/relations.md",tags:[],version:"current",frontMatter:{title:"Relations",description:"Use the REST API to manage the order of relations",displayed_sidebar:"restApiSidebar"},sidebar:"restApiSidebar",previous:{title:"Sort and Pagination",permalink:"/aberabook/dev-docs/api/rest/sort-pagination"},next:{title:"REST API Guides",permalink:"/aberabook/dev-docs/api/rest/guides/intro"}},p={},d=[{value:"<code>connect</code>",id:"connect",level:2},{value:"Relations reordering",id:"relations-reordering",level:3},{value:"<code>disconnect</code>",id:"disconnect",level:2},{value:"<code>set</code>",id:"set",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},m=s("Tabs"),u=s("TabItem"),c=s("MultiLanguageSwitcher"),k=s("MultiLanguageSwitcherRequest"),h=s("Request"),g=s("FeedbackPlaceholder"),N={toc:d};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"managing-relations-through-the-rest-api"},"Managing relations through the REST API"),(0,i.kt)("p",null,"Defining relations between content-types (that are designated as entities in the database layers) is connecting entities with each other."),(0,i.kt)("p",null,"Relations between content-types can be managed through the ",(0,i.kt)("a",{parentName:"p",href:"/user-docs/content-manager/managing-relational-fields#managing-multiple-choices-relational-fields"},"admin panel")," or through ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/api/rest"},"REST")," requests sent to the Content API."),(0,i.kt)("p",null,"Relations can be connected, disconnected or set through the Content API by passing parameters in the body of the request:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type of update"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#connect"},(0,i.kt)("inlineCode",{parentName:"a"},"connect"))),(0,i.kt)("td",{parentName:"tr",align:null},"Connects new entities.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Can be used in combination with ",(0,i.kt)("inlineCode",{parentName:"td"},"disconnect"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),"Can be used with ",(0,i.kt)("a",{parentName:"td",href:"#relations-reordering"},"positional arguments")," to define an order for relations."),(0,i.kt)("td",{parentName:"tr",align:null},"Partial")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#disconnect"},(0,i.kt)("inlineCode",{parentName:"a"},"disconnect"))),(0,i.kt)("td",{parentName:"tr",align:null},"Disconnects entities.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Can be used in combination with ",(0,i.kt)("inlineCode",{parentName:"td"},"connect"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"Partial")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#set"},(0,i.kt)("inlineCode",{parentName:"a"},"set"))),(0,i.kt)("td",{parentName:"tr",align:null},"Set entities to a specific set. Using ",(0,i.kt)("inlineCode",{parentName:"td"},"set")," will overwrite all existing connections to other entities.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Cannot be used in combination with ",(0,i.kt)("inlineCode",{parentName:"td"},"connect")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"disconnect"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"Full")))),(0,i.kt)("h2",{id:"connect"},(0,i.kt)("inlineCode",{parentName:"h2"},"connect")),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," in the body of a request performs a partial update, connecting the specified relations."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"connect")," accepts either a shorthand or a longhand syntax. In the following examples, numbers refers to entity ids:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Syntax type"),(0,i.kt)("th",{parentName:"tr",align:null},"Syntax example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"shorthand"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connect: [2, 4]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"longhand"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connect: [{ id: 2 }, { id: 4 }]"))))),(0,i.kt)("p",null,"You can also use the longhand syntax to ",(0,i.kt)("a",{parentName:"p",href:"#relations-reordering"},"reorder relations"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"connect")," can be used in combination with ",(0,i.kt)("a",{parentName:"p",href:"#disconnect"},(0,i.kt)("inlineCode",{parentName:"a"},"disconnect")),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"connect")," can not be used for media attributes (see ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/plugins/upload#examples"},"Upload plugin documentation")," for more details).")),(0,i.kt)(m,{groupId:"shorthand-longhand",mdxType:"Tabs"},(0,i.kt)(u,{value:"shorthand",label:"Shorthand syntax example",mdxType:"TabItem"},(0,i.kt)("p",null,"Sending the following request updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"restaurant")," entity with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", using the ",(0,i.kt)("inlineCode",{parentName:"p"},"categories")," attribute to connect the entity with entities with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"4"),":"),(0,i.kt)(c,{title:"Example request using the shorthand syntax",mdxType:"MultiLanguageSwitcher"},(0,i.kt)(k,{language:"REST",mdxType:"MultiLanguageSwitcherRequest"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:1337/api/restaurants/1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  data: {\n    categories: {\n      connect: [2, 4]\n    }\n  }\n}\n"))),(0,i.kt)(k,{language:"Node",mdxType:"MultiLanguageSwitcherRequest"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fetch = require('node-fetch');\n\nconst response = await fetch(\n  'http://localhost:1337/api/restaurants/1',\n  {\n    method: 'put',\n    body: {\n      data: {\n        categories: {\n          connect: [2, 4]\n        }\n      }\n    }\n  }\n);\n"))))),(0,i.kt)(u,{value:"longhand",label:"Longhand syntax example",mdxType:"TabItem"},(0,i.kt)("p",null,"Sending the following request updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"restaurant")," entity with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", using the ",(0,i.kt)("inlineCode",{parentName:"p"},"categories")," attribute to connect the entity with entities with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"4"),":"),(0,i.kt)(c,{title:"Example request using the longhand syntax",mdxType:"MultiLanguageSwitcher"},(0,i.kt)(k,{language:"REST",mdxType:"MultiLanguageSwitcherRequest"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:1337/api/restaurants/1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  data: {\n    categories: {\n      connect: [\n        { id: 2 },\n        { id: 4 }\n      ]\n    }\n  }\n}\n"))),(0,i.kt)(k,{language:"Node",mdxType:"MultiLanguageSwitcherRequest"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fetch = require('node-fetch');\n\nconst response = await fetch(\n  'http://localhost:1337/api/restaurants/1',\n  {\n    method: 'put',\n    body: {\n      data: {\n        categories: {\n          connect: [\n            { id: 2 },\n            { id: 4 }\n          ]\n        }\n      }\n    }\n  }\n);\n")))))),(0,i.kt)("h3",{id:"relations-reordering"},"Relations reordering"),(0,i.kt)("p",null,"Positional arguments can be passed to the longhand syntax of ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," to define the order of relations."),(0,i.kt)("p",null,"The longhand syntax accepts an array of objects, each object containing the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of the entry to be connected and an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," object to define where to connect the relation."),(0,i.kt)("admonition",{title:"Different syntaxes for different relations",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The syntaxes described in this documentation are useful for one-to-many, many-to-many and many-ways relations.",(0,i.kt)("br",null),"For one-to-one, many-to-one and one-way relations, the syntaxes are also supported but only the last relation will be used, so it's preferable to use a shorter format (e.g.: ",(0,i.kt)("inlineCode",{parentName:"p"},"{ data: { category: 2 } }"),", see ",(0,i.kt)("a",{parentName:"p",href:"/dev-docs/api/rest#requests"},"REST API documentation"),").")),(0,i.kt)("p",null,"To define the ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," for a relation, pass one of the following 4 different positional attributes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter name and syntax"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"before: id")),(0,i.kt)("td",{parentName:"tr",align:null},"Positions the relation before the given ",(0,i.kt)("inlineCode",{parentName:"td"},"id"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"Entry ",(0,i.kt)("inlineCode",{parentName:"td"},"id"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"after: id")),(0,i.kt)("td",{parentName:"tr",align:null},"Positions the relation after the given ",(0,i.kt)("inlineCode",{parentName:"td"},"id"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"Entry ",(0,i.kt)("inlineCode",{parentName:"td"},"id"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"start: true")),(0,i.kt)("td",{parentName:"tr",align:null},"Positions the relation at the start of the existing list of relations."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"end: true")),(0,i.kt)("td",{parentName:"tr",align:null},"Positions the relation at the end of the existing list of relations."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," argument is optional and defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"position: { end: true }"),"."),(0,i.kt)("admonition",{title:"Sequential order",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," is an array, the order of operations is important as they will be treated sequentially (see combined example below).")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The same relation should not be connected more than once, otherwise it would return a Validation error by the API.")),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(u,{value:"basic",label:"Basic example",mdxType:"TabItem"},(0,i.kt)("p",null,"Consider the following record in the database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"categories: [\n  { id: 1 }\n  { id: 2 }\n]\n")),(0,i.kt)("p",null,"Sending the following request updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"restaurant")," entity with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", connecting a relation of entity with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"categories")," attribute and positioning it before the entity with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),":"),(0,i.kt)(h,{title:"Example request to update the position of one relation",mdxType:"Request"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT http://localhost:1337/api/restaurants/1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  data: {\n    categories: {\n      connect: [\n        { id: 3, position: { before: 2 } },\n      ]\n    }\n  }\n}\n")))),(0,i.kt)(u,{value:"combined",label:"Combined example",mdxType:"TabItem"},(0,i.kt)("p",null,"Consider the following record in the database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"categories: [\n  { id: 1 }\n  { id: 2 }\n]\n")),(0,i.kt)("p",null,"Sending the following example in the request body of a PUT request updates multiple relations:"),(0,i.kt)(h,{title:"Example request to reorder several relations",mdxType:"Request"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT http://localhost:1337/api/restaurants/1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  data: {\n    categories: {\n      connect: [\n        { id: 6, position: { after: 1} },\n        { id: 7, position: { before: 2 } },\n        { id: 8, position: { end: true } },\n        { id: 9 },\n        { id: 10, position: { start: true } },\n      ]\n    }\n  }\n}\n"))),(0,i.kt)("p",null,"Omitting the ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," argument (as in ",(0,i.kt)("inlineCode",{parentName:"p"},"id: 9"),") defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"position: { end: true }"),". All other relations are positioned relative to another existing ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," (using ",(0,i.kt)("inlineCode",{parentName:"p"},"after")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"before"),") or relative to the list of relations (using ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"end"),"). Operations are treated sequentially in the order defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," array, so the resulting database record will be the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"categories: [\n  { id: 10 },\n  { id: 1 },\n  { id: 6 },\n  { id: 7 },\n  { id: 2 },\n  { id: 8 },\n  { id: 9 }\n]\n")))),(0,i.kt)("h2",{id:"disconnect"},(0,i.kt)("inlineCode",{parentName:"h2"},"disconnect")),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"disconnect")," in the body of a request performs a partial update, disconnecting the specified relations."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"disconnect")," accepts either a shorthand or a longhand syntax. In the following examples, numbers refers to entity ids:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Syntax type"),(0,i.kt)("th",{parentName:"tr",align:null},"Syntax example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"shorthand"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"disconnect: [2, 4]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"longhand"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"disconnect: [{ id: 2 }, { id: 4 }]"))))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"disconnect")," can be used in combination with ",(0,i.kt)("a",{parentName:"p",href:"#connect"},(0,i.kt)("inlineCode",{parentName:"a"},"connect")),"."),(0,i.kt)("br",null),(0,i.kt)(m,{groupId:"shorthand-longhand",mdxType:"Tabs"},(0,i.kt)(u,{value:"shorthand",label:"Shorthand syntax example",mdxType:"TabItem"},(0,i.kt)("p",null,"Sending the following request updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"restaurant")," entity with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", disconnecting the relations with entities with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"4"),":"),(0,i.kt)(h,{title:"Example request using the shorthand syntax",mdxType:"Request"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT http://localhost:1337/api/restaurants/1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  data: {\n    categories: {\n      disconnect: [2, 4],\n    }\n  }\n}\n")))),(0,i.kt)(u,{value:"longhand",label:"Longhand syntax example",mdxType:"TabItem"},(0,i.kt)("p",null,"Sending the following request updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"restaurant")," entity with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", disconnecting the relations with entities with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"4"),":"),(0,i.kt)(h,{title:"Example request using the longhand syntax",mdxType:"Request"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT http://localhost:1337/api/restaurants/1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  data: {\n    categories: {\n      disconnect: [\n        { id: 2 },\n        { id: 4 }\n      ],\n    }\n  }\n}\n"))))),(0,i.kt)("h2",{id:"set"},(0,i.kt)("inlineCode",{parentName:"h2"},"set")),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," performs a full update, replacing all existing relations with the ones specified, in the order specified."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"set")," accepts a shorthand or a longhand syntax. In the following examples, numbers refers to entity ids:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Syntax type"),(0,i.kt)("th",{parentName:"tr",align:null},"Syntax example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"shorthand"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"set: [2, 4]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"longhand"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"set: [{ id: 2 }, { id: 4 }]"))))),(0,i.kt)("p",null,"As ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," replaces all existing relations, it should not be used in combination with other parameters. To perform a partial update, use ",(0,i.kt)("a",{parentName:"p",href:"#connect"},(0,i.kt)("inlineCode",{parentName:"a"},"connect"))," and ",(0,i.kt)("a",{parentName:"p",href:"#disconnect"},(0,i.kt)("inlineCode",{parentName:"a"},"disconnect")),"."),(0,i.kt)("admonition",{title:"Omitting set",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Omitting any parameter is equivalent to using ",(0,i.kt)("inlineCode",{parentName:"p"},"set"),".",(0,i.kt)("br",null),"For instance, the following 3 syntaxes are all equivalent:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data: { categories: { set: [{ id: 2 }, { id: 4 }] }}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data: { categories: { set: [2, 4] }}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data: { categories: [2, 4] }")," (as used in the ",(0,i.kt)("a",{parentName:"li",href:"/dev-docs/api/rest#update-an-entry"},"REST API documentation"),")"))),(0,i.kt)(m,{groupId:"shorthand-longhand",mdxType:"Tabs"},(0,i.kt)(u,{value:"shorthand",label:"Shorthand syntax example",mdxType:"TabItem"},(0,i.kt)("p",null,"Sending the following request updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"restaurant")," entity with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", replacing all previously existing relations and using the ",(0,i.kt)("inlineCode",{parentName:"p"},"categories")," attribute to connect the entity with entities with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"4"),":"),(0,i.kt)(h,{title:"Example request using the shorthand syntax with set",mdxType:"Request"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT http://localhost:1337/api/restaurants/1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  data: {\n    categories: {\n      set: [2, 4],\n    }\n  }\n}\n")))),(0,i.kt)(u,{value:"longhand",label:"Longhand syntax example",mdxType:"TabItem"},(0,i.kt)("p",null,"Sending the following request updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"restaurant")," entity with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", replacing all previously existing relations and using the ",(0,i.kt)("inlineCode",{parentName:"p"},"categories")," attribute to connect the entity with entities with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"4"),":"),(0,i.kt)(h,{title:"Example request using the longhand syntax with set",mdxType:"Request"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT http://localhost:1337/api/restaurants/1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  data: {\n    categories: {\n      set: [\n        { id: 2 },\n        { id: 4 }\n      ],\n    }\n  }\n}\n"))))),(0,i.kt)(g,{mdxType:"FeedbackPlaceholder"}))}b.isMDXComponent=!0}}]);