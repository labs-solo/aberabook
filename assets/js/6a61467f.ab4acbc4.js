"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[9766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},g),{},{components:n})):r.createElement(m,i({ref:t},g))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>w,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(83117),o=(n(67294),n(3905));const a={title:"Reviewing content",description:"Using review workflows to manage content throughout the content creation process."},i="Reviewing content <EnterpriseBadge />",s={unversionedId:"user-docs/content-manager/reviewing-content",id:"user-docs/content-manager/reviewing-content",title:"Reviewing content",description:"Using review workflows to manage content throughout the content creation process.",source:"@site/docs/user-docs/content-manager/reviewing-content.md",sourceDirName:"user-docs/content-manager",slug:"/user-docs/content-manager/reviewing-content",permalink:"/aberabook/user-docs/content-manager/reviewing-content",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/user-docs/content-manager/reviewing-content.md",tags:[],version:"current",frontMatter:{title:"Reviewing content",description:"Using review workflows to manage content throughout the content creation process."}},c={},l=[{value:"Change review stage",id:"change-review-stage",level:2},{value:"Change assignee",id:"change-assignee",level:2}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},p=g("EnterpriseBadge"),u=g("ThemedImage"),d=g("FeedbackPlaceholder"),m={toc:l};function w(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reviewing-content-"},"Reviewing content ",(0,o.kt)(p,{mdxType:"EnterpriseBadge"})),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",{parentName:"p",href:"/user-docs/settings/review-workflows"},"Review Workflows")," feature, you can manage content throughout the content creation process. In the Content Manager, you can change the review stage of the content from the edit view, and keep moving it between stages as needed. You can also change the assignee of the content, assigning it to a Strapi admin user for review."),(0,o.kt)("p",null,"When viewing your content in the Content Manager, you can see the current stage in the ",(0,o.kt)("strong",{parentName:"p"},"Review Stage")," and the assignee in the ",(0,o.kt)("strong",{parentName:"p"},"Assignee")," column:"),(0,o.kt)(u,{alt:"Review Stage column",sources:{light:"/img/assets/content-manager/review-workflow-list-view.png",dark:"/img/assets/content-manager/review-workflow-list-view.png"},mdxType:"ThemedImage"}),(0,o.kt)("h2",{id:"change-review-stage"},"Change review stage"),(0,o.kt)("p",null,"As content is created and revised among your team, you can change the review stage of the content to any stage defined in the review workflow (see ",(0,o.kt)("a",{parentName:"p",href:"/user-docs/settings/review-workflows"},"Managing Review Workflows"),")."),(0,o.kt)("p",null,"To change the review stage of your content:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access the edit view of your content-type."),(0,o.kt)("li",{parentName:"ol"},"In the Information box, click on the ",(0,o.kt)("em",{parentName:"li"},"Review stage")," drop-down list."),(0,o.kt)("li",{parentName:"ol"},"Choose the new review stage of your entry. It is automatically saved.")),(0,o.kt)(u,{alt:"Review Stage dropdown",sources:{light:"/img/assets/content-manager/review-stage-dropdown.png",dark:"/img/assets/content-manager/review-stage-dropdown_DARK.png"},mdxType:"ThemedImage"}),(0,o.kt)("h2",{id:"change-assignee"},"Change assignee"),(0,o.kt)("p",null,"Entries of a review workflow content type can be assigned to any admin user in Strapi for review."),(0,o.kt)("p",null,"To change the assignee of your content:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access the edit view of your content-type."),(0,o.kt)("li",{parentName:"ol"},"In the Information box, click on the ",(0,o.kt)("em",{parentName:"li"},"Assignee")," drop-down list."),(0,o.kt)("li",{parentName:"ol"},"Choose the new assignee of your entry. It is automatically saved.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Review Stage dropdown",src:n(83732).Z,width:"3024",height:"1736"})),(0,o.kt)(d,{mdxType:"FeedbackPlaceholder"}))}w.isMDXComponent=!0},83732:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/review-assignee-dropdown-c715f657fb6fd6929bd46f4e49333c7d.png"}}]);