"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[3557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>s});var M=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(e);t&&(M=M.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,M)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,M,i=function(e,t){if(null==e)return{};var n,M,i={},a=Object.keys(e);for(M=0;M<a.length;M++)n=a[M],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(M=0;M<a.length;M++)n=a[M],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=M.createContext({}),D=function(e){var t=M.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=D(e.components);return M.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return M.createElement(M.Fragment,{},t)}},N=M.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=g(e,["components","mdxType","originalType","parentName"]),N=D(n),s=i,u=N["".concat(r,".").concat(s)]||N[s]||c[s]||a;return n?M.createElement(u,o(o({ref:t},l),{},{components:n})):M.createElement(u,o({ref:t},l))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=N;var g={};for(var r in t)hasOwnProperty.call(t,r)&&(g[r]=t[r]);g.originalType=e,g.mdxType="string"==typeof e?e:i,o[1]=g;for(var D=2;D<a;D++)o[D]=n[D];return M.createElement.apply(null,o)}return M.createElement.apply(null,n)}N.displayName="MDXCreateElement"},52450:(e,t,n)=>{n.d(t,{Z:()=>i});var M=n(67294);const i=e=>{let{number:t}=e;return M.createElement("span",{style:{display:"inline-block",width:"1.5rem",height:"1.5rem",borderRadius:"50%",backgroundColor:"#4743FF",color:"#fff",textAlign:"center",fontSize:".8rem",fontWeight:"bold",padding:"0.1rem"}},t)}},42909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>D,contentTitle:()=>g,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var M=n(83117),i=(n(67294),n(3905)),a=n(52450);const o={title:"Introduction to the Content Manager",sidebar_position:1,displayed_sidebar:"userDocsSidebar",slug:"/user-docs/content-manager",description:"Introduction to the Content Manager which allows to write content for collection types and single types."},g="Introduction to the Content Manager",r={unversionedId:"user-docs/content-manager/introduction-to-content-manager",id:"user-docs/content-manager/introduction-to-content-manager",title:"Introduction to the Content Manager",description:"Introduction to the Content Manager which allows to write content for collection types and single types.",source:"@site/docs/user-docs/content-manager/introduction-to-content-manager.md",sourceDirName:"user-docs/content-manager",slug:"/user-docs/content-manager",permalink:"/aberabook/user-docs/content-manager",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/user-docs/content-manager/introduction-to-content-manager.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction to the Content Manager",sidebar_position:1,displayed_sidebar:"userDocsSidebar",slug:"/user-docs/content-manager",description:"Introduction to the Content Manager which allows to write content for collection types and single types."},sidebar:"userDocsSidebar"},D={},l=[{value:"Collection types",id:"collection-types",level:2},{value:"Filtering entries",id:"filtering-entries",level:3},{value:"Creating a new entry",id:"creating-a-new-entry",level:3},{value:"Configuring the table fields",id:"configuring-the-table-fields",level:3},{value:"Single types",id:"single-types",level:2}],c=(N="ThemedImage",function(e){return console.warn("Component "+N+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var N;const s={toc:l};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,M.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-the-content-manager"},"Introduction to the Content Manager"),(0,i.kt)("p",null,"The Content Manager is a core plugin of Strapi. It is a feature that is always activated by default and cannot be deactivated. It is accessible both when the application is in a development and production environment."),(0,i.kt)("p",null,"The Content Manager is accessible from ",(0,i.kt)("img",{alt:"Content icon",src:n(58196).Z,width:"16",height:"16"})," ",(0,i.kt)("em",{parentName:"p"},"Content Manager")," in the main navigation, which opens a sub navigation displaying 2 categories: ",(0,i.kt)("em",{parentName:"p"},"Collection types")," and ",(0,i.kt)("em",{parentName:"p"},"Single types"),". Each category contains the available collection and single content-types which were created beforehand using the ",(0,i.kt)("a",{parentName:"p",href:"/aberabook/user-docs/content-type-builder"},"Content-type Builder"),". From these 2 categories, administrators can create, manage, and publish content."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Click the search icon ",(0,i.kt)("img",{alt:"Search icon",src:n(80286).Z,width:"16",height:"16"})," in the sub navigation to use a text search and find one of your content-types more quickly!")),(0,i.kt)("h2",{id:"collection-types"},"Collection types"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Collection types")," category of the Content Manager displays the list of available collection types which are accessible from the ",(0,i.kt)("img",{alt:"Content icon",src:n(58196).Z,width:"16",height:"16"})," Content Manager sub navigation."),(0,i.kt)("p",null,"For each available collection type multiple entries can be created which is why each collection type is divided into 2 interfaces: the list view and the edit view (see ",(0,i.kt)("a",{parentName:"p",href:"/aberabook/user-docs/content-manager/writing-content"},"Writing content"),")."),(0,i.kt)("p",null,"The list view of a collection type displays all entries created for that collection type."),(0,i.kt)(c,{alt:"List view of a collection type in the Content Manager",sources:{light:"/img/assets/content-manager/content-manager_list-view.png",dark:"/img/assets/content-manager/content-manager_list-view_DARK.png"},mdxType:"ThemedImage"}),(0,i.kt)("p",null,"From the list view, it is possible to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a new entry ",(0,i.kt)(a.Z,{number:"1",mdxType:"ScreenshotNumberReference"}),","),(0,i.kt)("li",{parentName:"ul"},"make a textual search ",(0,i.kt)(a.Z,{number:"2",mdxType:"ScreenshotNumberReference"})," or set filters ",(0,i.kt)(a.Z,{number:"3",mdxType:"ScreenshotNumberReference"})," to find specific entries,"),(0,i.kt)("li",{parentName:"ul"},"if the ",(0,i.kt)("a",{parentName:"li",href:"/user-docs/plugins/strapi-plugins#-internationalization-plugin"},"Internationalization plugin")," is installed, filter by locale to display only the entries translated in a chosen locale ",(0,i.kt)(a.Z,{number:"4",mdxType:"ScreenshotNumberReference"}),","),(0,i.kt)("li",{parentName:"ul"},"configure the fields displayed in the table of the list view ",(0,i.kt)(a.Z,{number:"5",mdxType:"ScreenshotNumberReference"}),","),(0,i.kt)("li",{parentName:"ul"},"edit ",(0,i.kt)("img",{alt:"Edit icon",src:n(80524).Z,width:"16",height:"16"})," (see ",(0,i.kt)("a",{parentName:"li",href:"/aberabook/user-docs/content-manager/writing-content"},"Writing content"),"), duplicate ",(0,i.kt)("img",{alt:"Duplicate icon",src:n(93011).Z,width:"16",height:"16"}),", or delete ",(0,i.kt)("img",{alt:"Delete icon",src:n(65725).Z,width:"16",height:"16"})," (see ",(0,i.kt)("a",{parentName:"li",href:"/aberabook/user-docs/content-manager/saving-and-publishing-content#deleting-content"},"Deleting content"),") an entry,"),(0,i.kt)("li",{parentName:"ul"},"select multiple entries to simultaneously ",(0,i.kt)("a",{parentName:"li",href:"/user-docs/content-manager/saving-and-publishing-content#bulk-publish-and-unpublish-"},"publish, unpublish"),", or ",(0,i.kt)("a",{parentName:"li",href:"/aberabook/user-docs/content-manager/saving-and-publishing-content#deleting-content"},"delete"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Sorting can be enabled for most fields displayed in the list view table (see ",(0,i.kt)("a",{parentName:"p",href:"/aberabook/user-docs/content-manager/configuring-view-of-content-type"},"Configuring the views of a content-type"),"). Click on a field name, in the header of the table, to sort on that field.")),(0,i.kt)("h3",{id:"filtering-entries"},"Filtering entries"),(0,i.kt)("p",null,"Right above the list view table, on the left side of the interface, a ",(0,i.kt)("strong",{parentName:"p"},"Filters")," button is displayed. It allows to set one or more condition-based filters, which add to one another (i.e. if you set several conditions, only the entries that match all the conditions will be displayed)."),(0,i.kt)(c,{alt:"Filters in the Content Manager",sources:{light:"/img/assets/content-manager/content-manager_filters.png",dark:"/img/assets/content-manager/content-manager_filters_DARK.png"},mdxType:"ThemedImage"}),(0,i.kt)("p",null,"To set a new filter:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Filters")," button."),(0,i.kt)("li",{parentName:"ol"},"Click on the 1st drop-down list to choose the field on which the condition will be applied."),(0,i.kt)("li",{parentName:"ol"},"Click on the 2nd drop-down list to choose the type of condition to apply."),(0,i.kt)("li",{parentName:"ol"},"Enter the value(s) of the condition in the remaining textbox."),(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Add filter")," button.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When active, filters are displayed next to the ",(0,i.kt)("strong",{parentName:"p"},"Filters")," button. They can be removed by clicking on the delete icon ",(0,i.kt)("img",{alt:"Clear icon",src:n(54427).Z,width:"16",height:"16"}),".")),(0,i.kt)("h3",{id:"creating-a-new-entry"},"Creating a new entry"),(0,i.kt)("p",null,"On the top right side of the list view interface, an ",(0,i.kt)("strong",{parentName:"p"},"Add new entry")," button is displayed. It allows to create a new entry for your collection type."),(0,i.kt)("p",null,"Clicking on the new entry button will redirect you to the edit view, where you will be able to write the content of the new entry (see ",(0,i.kt)("a",{parentName:"p",href:"/aberabook/user-docs/content-manager/writing-content"},"Writing content"),")."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"New entries are only considered created once some of their content has been written and saved once. Only then will the new entry be listed in the list view.")),(0,i.kt)("h3",{id:"configuring-the-table-fields"},"Configuring the table fields"),(0,i.kt)("p",null,"Above the list view table, on the right, a settings button ",(0,i.kt)("img",{alt:"Cog icon",src:n(37138).Z,width:"16",height:"16"})," is displayed. It allows to temporarily choose which fields to display in the table or to access permanent view settings."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Configuring the displayed field of the table in the way detailed below is only temporary: the configurations will be reset as soon as the page is refreshed or when navigating outside the Content Manager. For permanent configurations, go to the list view configuration interface by clicking on the settings button ",(0,i.kt)("img",{alt:"Cog icon",src:n(37138).Z,width:"16",height:"16"})," and clicking on the ",(0,i.kt)("strong",{parentName:"p"},"Configure the view")," button (see ",(0,i.kt)("a",{parentName:"p",href:"/aberabook/user-docs/content-manager/configuring-view-of-content-type"},"Configuring the views of a content-type"),").")),(0,i.kt)(c,{alt:"Displayed fields in the settings of a list view in the Content Manager",sources:{light:"/img/assets/content-manager/content-manager_displayed-fields.png",dark:"/img/assets/content-manager/content-manager_displayed-fields_DARK.png"},mdxType:"ThemedImage"}),(0,i.kt)("p",null,"To temporarily configure the fields displayed in the table:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on the settings button ",(0,i.kt)("img",{alt:"Cog icon",src:n(37138).Z,width:"16",height:"16"}),"."),(0,i.kt)("li",{parentName:"ol"},"Tick the boxes associated with the field you want to be displayed in the table."),(0,i.kt)("li",{parentName:"ol"},"Untick the boxes associated with the fields you do not want to be displayed in the table.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Relational fields can also be displayed in the list view. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/aberabook/user-docs/content-manager/configuring-view-of-content-type"},"Configuring the views of a content-type")," for more information on their specificities.")),(0,i.kt)("h2",{id:"single-types"},"Single types"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Single types")," category of the Content Manager displays the list of available single types, which are accessible from the ",(0,i.kt)("img",{alt:"Content icon",src:n(58196).Z,width:"16",height:"16"})," Content Manager sub navigation."),(0,i.kt)("p",null,"Unlike collection types which have multiple entries, single types are not created for multiple uses. In other words, there can only be one default entry per available single type. There is therefore no list view in the Single types category."),(0,i.kt)("p",null,"Clicking on a single type will directly redirect you to the edit view, where you will be able to write the content of your single type (see ",(0,i.kt)("a",{parentName:"p",href:"/aberabook/user-docs/content-manager/writing-content"},"Writing content"),")."),(0,i.kt)(c,{alt:"Single type in the Content Manager",sources:{light:"/img/assets/content-manager/content-manager_single-type.png",dark:"/img/assets/content-manager/content-manager_single-type_DARK.png"},mdxType:"ThemedImage"}))}u.isMDXComponent=!0},54427:(e,t,n)=>{n.d(t,{Z:()=>M});const M="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDUuNjExNDNMMTguMzg4NiA0TDEyIDEwLjM4ODZMNS42MTE0MyA0TDQgNS42MTE0M0wxMC4zODg2IDEyTDQgMTguMzg4Nkw1LjYxMTQzIDIwTDEyIDEzLjYxMTRMMTguMzg4NiAyMEwyMCAxOC4zODg2TDEzLjYxMTQgMTJMMjAgNS42MTE0M1oiIGZpbGw9IiMyMTIxMzQiLz4KPC9zdmc+Cg=="},37138:(e,t,n)=>{n.d(t,{Z:()=>M});const M="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMS4yNTUyIDEyQzIxLjI1NTIgMTIuNDA4IDIxLjIxODIgMTIuNzkyIDIxLjE2ODggMTMuMTc2TDIzLjc3MTkgMTUuMTU2QzI0LjAwNjMgMTUuMzM2IDI0LjA2OCAxNS42NiAyMy45MTk5IDE1LjkyNEwyMS40NTI2IDIwLjA3NkMyMS4zMDQ2IDIwLjM0IDIwLjk4MzggMjAuNDQ4IDIwLjcwMDEgMjAuMzRMMTcuNjI4MiAxOS4xNEMxNi45ODY3IDE5LjYwOCAxNi4yOTU5IDIwLjAxNiAxNS41NDMzIDIwLjMxNkwxNS4wNzQ1IDIzLjQ5NkMxNS4wMzc1IDIzLjc4NCAxNC43Nzg1IDI0IDE0LjQ3MDEgMjRIOS41MzU0QzkuMjI2OTggMjQgOC45Njc5MSAyMy43ODQgOC45MzA5IDIzLjQ5Nkw4LjQ2MjExIDIwLjMxNkM3LjcwOTU3IDIwLjAxNiA3LjAxODcyIDE5LjYyIDYuMzc3MjIgMTkuMTRMMy4zMDUzOSAyMC4zNEMzLjAzMzk5IDIwLjQzNiAyLjcwMDkgMjAuMzQgMi41NTI4NiAyMC4wNzZMMC4wODU1MzE5IDE1LjkyNEMtMC4wNjI1MDc4IDE1LjY2IC0wLjAwMDgyNDU3NyAxNS4zMzYgMC4yMzM1NzIgMTUuMTU2TDIuODM2NiAxMy4xNzZDMi43ODcyNiAxMi43OTIgMi43NTAyNSAxMi4zOTYgMi43NTAyNSAxMkMyLjc1MDI1IDExLjYwNCAyLjc4NzI2IDExLjIwOCAyLjgzNjYgMTAuODI0TDAuMjMzNTcyIDguODQ0Qy0wLjAwMDgyNDU3NyA4LjY2NCAtMC4wNzQ4NDQ0IDguMzQgMC4wODU1MzE5IDguMDc2TDIuNTUyODYgMy45MjRDMi43MDA5IDMuNjYgMy4wMjE2NSAzLjU1MiAzLjMwNTM5IDMuNjZMNi4zNzcyMiA0Ljg2QzcuMDE4NzIgNC4zOTIgNy43MDk1NyAzLjk4NCA4LjQ2MjExIDMuNjg0TDguOTMwOSAwLjUwNEM4Ljk2NzkxIDAuMjE2IDkuMjI2OTggMCA5LjUzNTQgMEgxNC40NzAxQzE0Ljc3ODUgMCAxNS4wMzc1IDAuMjE2IDE1LjA3NDUgMC41MDRMMTUuNTQzMyAzLjY4NEMxNi4yOTU5IDMuOTg0IDE2Ljk4NjcgNC4zOCAxNy42MjgyIDQuODZMMjAuNzAwMSAzLjY2QzIwLjk3MTUgMy41NjQgMjEuMzA0NiAzLjY2IDIxLjQ1MjYgMy45MjRMMjMuOTE5OSA4LjA3NkMyNC4wNjggOC4zNCAyNC4wMDYzIDguNjY0IDIzLjc3MTkgOC44NDRMMjEuMTY4OCAxMC44MjRDMjEuMjE4MiAxMS4yMDggMjEuMjU1MiAxMS41OTIgMjEuMjU1MiAxMlpNNy42ODUwNiAxMS45OTk4QzcuNjg1MDYgMTQuMzE1OCA5LjYyMTkxIDE2LjE5OTggMTIuMDAyOSAxNi4xOTk4QzE0LjM4MzkgMTYuMTk5OCAxNi4zMjA3IDE0LjMxNTggMTYuMzIwNyAxMS45OTk4QzE2LjMyMDcgOS42ODM4IDE0LjM4MzkgNy43OTk4IDEyLjAwMjkgNy43OTk4QzkuNjIxOTEgNy43OTk4IDcuNjg1MDYgOS42ODM4IDcuNjg1MDYgMTEuOTk5OFoiIGZpbGw9IiMyMTIxMzQiLz4KPC9zdmc+Cg=="},58196:(e,t,n)=>{n.d(t,{Z:()=>M});const M="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy43MDc4IDAuMjk2ODA2QzIzLjUyMDMgMC4xMDkyNyAyMy4yNjU5IDAuMDAzOTExODkgMjMuMDAwNyAwLjAwMzkxMTg5TDIxLjAwMDcgMC4wMDM5MTE4OUMxOS4xNTM2IDAuMDAyMjQ4NjggMTcuMzI0NyAwLjM2ODU0NCAxNS42MjA3IDEuMDgxNDJDMTUuNDM4NiAxLjE1NzM3IDE1LjI4MzEgMS4yODU0OCAxNS4xNzM3IDEuNDQ5NjNDMTUuMDY0MiAxLjYxMzc4IDE1LjAwNTggMS44MDY2NCAxNS4wMDU3IDIuMDAzOTJWNC45MjE0MkMxNS4wMDY4IDQuOTI5MyAxNS4wMDUxIDQuOTM3MzEgMTUuMDAxIDQuOTQ0MTJDMTQuOTk3IDQuOTUwOTQgMTQuOTkwNyA0Ljk1NjE2IDE0Ljk4MzIgNC45NTg5M0wxMi45ODMyIDMuNDg4OTJDMTIuNzk4NyAzLjM1MDM3IDEyLjU3MTkgMy4yNzk5MSAxMi4zNDEzIDMuMjg5NDhDMTIuMTEwOCAzLjI5OTA1IDExLjg5MDYgMy4zODgwNiAxMS43MTgyIDMuNTQxNDJDMTAuMjM3MyA0Ljg1MzA3IDkuMDUxMjEgNi40NjM2NiA4LjIzODA3IDguMjY3MDZDNy40MjQ5MiAxMC4wNzA1IDcuMDAzMiAxMi4wMjU3IDcuMDAwNjkgMTQuMDAzOVYxNS41ODlMNC4yOTMxOSAxOC4yOTY1QzQuMTA1NTQgMTguNDg0MSA0LjAwMDEzIDE4LjczODYgNC4wMDAxMyAxOS4wMDRDNC4wMDAxMyAxOS4yNjkzIDQuMTA1NTQgMTkuNTIzOCA0LjI5MzE5IDE5LjcxMTVDNC40ODA4MyAxOS44OTkxIDQuNzM1MzIgMjAuMDA0NSA1LjAwMDY5IDIwLjAwNDVDNS4yNjYwNSAyMC4wMDQ1IDUuNTIwNTUgMTkuODk5MSA1LjcwODE5IDE5LjcxMTVMOC40MTU3IDE3LjAwNEgxMC4wMDA3QzEzLjcxMjUgMTcgMTcuMjcxMiAxNS41MjM3IDE5Ljg5NTggMTIuODk5MUMyMi41MjA1IDEwLjI3NDQgMjMuOTk2OCA2LjcxNTc0IDI0LjAwMDcgMy4wMDM5MlYxLjAwMzkyQzI0LjAwMDcgMC43Mzg2OTkgMjMuODk1NCAwLjQ4NDM0MyAyMy43MDc4IDAuMjk2ODA2Wk0xOCAyNC4wMDAxSDMuMDAwMDFDMi4yMDQzNiAyNC4wMDAxIDEuNDQxMjkgMjMuNjg0IDAuODc4NjgyIDIzLjEyMTRDMC4zMTYwNzEgMjIuNTU4OCAwIDIxLjc5NTggMCAyMS4wMDAxVjYuMDAwMDdDMCA1LjIwNDQyIDAuMzE2MDcxIDQuNDQxMzUgMC44Nzg2ODIgMy44Nzg3NEMxLjQ0MTI5IDMuMzE2MTMgMi4yMDQzNiAzLjAwMDA2IDMuMDAwMDEgMy4wMDAwNkg2LjAwMDAxQzYuMjY1MjMgMy4wMDAwNiA2LjUxOTU4IDMuMTA1NDIgNi43MDcxMiAzLjI5Mjk2QzYuODk0NjYgMy40ODA0OSA3LjAwMDAyIDMuNzM0ODUgNy4wMDAwMiA0LjAwMDA2QzcuMDAwMDIgNC4yNjUyOCA2Ljg5NDY2IDQuNTE5NjQgNi43MDcxMiA0LjcwNzE3QzYuNTE5NTggNC44OTQ3MSA2LjI2NTIzIDUuMDAwMDcgNi4wMDAwMSA1LjAwMDA3SDMuMDAwMDFDMi43MzQ3OSA1LjAwMDA3IDIuNDgwNDMgNS4xMDU0MiAyLjI5MjkgNS4yOTI5NkMyLjEwNTM2IDUuNDgwNSAyIDUuNzM0ODUgMiA2LjAwMDA3VjIxLjAwMDFDMiAyMS4yNjUzIDIuMTA1MzYgMjEuNTE5NyAyLjI5MjkgMjEuNzA3MkMyLjQ4MDQzIDIxLjg5NDcgMi43MzQ3OSAyMi4wMDAxIDMuMDAwMDEgMjIuMDAwMUgxOEMxOC4yNjUzIDIyLjAwMDEgMTguNTE5NiAyMS44OTQ3IDE4LjcwNzEgMjEuNzA3MkMxOC44OTQ3IDIxLjUxOTcgMTkgMjEuMjY1MyAxOSAyMS4wMDAxVjE4LjAwMDFDMTkgMTcuNzM0OSAxOS4xMDU0IDE3LjQ4MDUgMTkuMjkyOSAxNy4yOTNDMTkuNDgwNSAxNy4xMDU0IDE5LjczNDggMTcuMDAwMSAyMCAxNy4wMDAxQzIwLjI2NTMgMTcuMDAwMSAyMC41MTk2IDE3LjEwNTQgMjAuNzA3MiAxNy4yOTNDMjAuODk0NyAxNy40ODA1IDIxIDE3LjczNDkgMjEgMTguMDAwMVYyMS4wMDAxQzIxIDIxLjc5NTggMjAuNjg0IDIyLjU1ODggMjAuMTIxNCAyMy4xMjE0QzE5LjU1ODggMjMuNjg0IDE4Ljc5NTcgMjQuMDAwMSAxOCAyNC4wMDAxWiIgZmlsbD0iIzIxMjEzNCIvPgo8L3N2Zz4K"},65725:(e,t,n)=>{n.d(t,{Z:()=>M});const M="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuMjM2NDIgNi4xNDg3NkMzLjExMjcyIDYuMTQ4NzYgMy4wMTg2OCA2LjI1OTkyIDMuMDM5MTggNi4zODE5MUw2IDI0SDE4TDIwLjk2MDggNi4zODE5MUMyMC45ODEzIDYuMjU5OTIgMjAuODg3MyA2LjE0ODc2IDIwLjc2MzYgNi4xNDg3NkgzLjIzNjQyWk0yMS44IDEuOTgzNDdDMjEuOTEwNSAxLjk4MzQ3IDIyIDIuMDczMDEgMjIgMi4xODM0N1YzLjc2Njk0QzIyIDMuODc3NCAyMS45MTA1IDMuOTY2OTQgMjEuOCAzLjk2Njk0SDIuMkMyLjA4OTU0IDMuOTY2OTQgMiAzLjg3NzQgMiAzLjc2Njk0VjIuMTgzNDdDMiAyLjA3MzAxIDIuMDg5NTQgMS45ODM0NyAyLjIgMS45ODM0N0g3LjcxMUM4LjYxMSAxLjk4MzQ3IDkuMzQyIDAuODkzNTU0IDkuMzQyIDBIMTQuNjU4QzE0LjY1OCAwLjg5MzU1NCAxNS4zODggMS45ODM0NyAxNi4yODkgMS45ODM0N0gyMS44WiIgZmlsbD0iIzMyMzI0RCIvPgo8L3N2Zz4K"},93011:(e,t,n)=>{n.d(t,{Z:()=>M});const M="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMDU1NyAyNEgxNi45NjE5QzE3LjU0NDkgMjQgMTguMDE3NiAyMy41MjczIDE4LjAxNzYgMjIuOTQ0M1Y3LjAyNzU3QzE4LjAxNzYgNi40NDQ1MSAxNy41NDQ5IDUuOTcxODUgMTYuOTYxOSA1Ljk3MTg1SDEuMDU1N0MwLjQ3MjY0NSA1Ljk3MTg1IC0xLjcxNjYxZS0wNSA2LjQ0NDUxIC0xLjcxNjYxZS0wNSA3LjAyNzU3VjIyLjk0NDNDLTEuNzE2NjFlLTA1IDIzLjUyNzMgMC40NzI2NDUgMjQgMS4wNTU3IDI0WiIgZmlsbD0iIzIxMjEzNCIvPgo8cGF0aCBkPSJNOC4wOTM4NCAyLjExMTQySDIxLjg4ODZWMTUuOTA2MUgyMC43NjI1VjE4LjAxNzZIMjIuOTQ0M0MyMy4yMjQzIDE4LjAxNzYgMjMuNDkyOCAxNy45MDY0IDIzLjY5MDggMTcuNzA4NEMyMy44ODg4IDE3LjUxMDQgMjQgMTcuMjQxOSAyNCAxNi45NjE5VjEuMDU1N0MyNCAwLjc3NTcwNyAyMy44ODg4IDAuNTA3MTgxIDIzLjY5MDggMC4zMDkxOTVDMjMuNDkyOCAwLjExMTIxIDIzLjIyNDMgLTEuNzE2NjFlLTA1IDIyLjk0NDMgLTEuNzE2NjFlLTA1SDcuMDM4MTJDNi43NTgxMyAtMS43MTY2MWUtMDUgNi40ODk2IDAuMTExMjEgNi4yOTE2MiAwLjMwOTE5NUM2LjA5MzYzIDAuNTA3MTgxIDUuOTgyNCAwLjc3NTcwNyA1Ljk4MjQgMS4wNTU3VjMuMzA3OUg4LjA5Mzg0VjIuMTExNDJaIiBmaWxsPSIjMjEyMTM0Ii8+Cjwvc3ZnPgo="},80524:(e,t,n)=>{n.d(t,{Z:()=>M});const M="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy42MDQ2IDMuNTE0MTRDMjQuMTMyMyA0LjA0MTg2IDI0LjEzMjMgNC44NzM0MiAyMy42MDQ2IDUuNDAxMTRMMjAuOTgyIDguMDA3NzdMMTUuOTkyNiAzLjAxODRMMTguNTk5MiAwLjM5NTc5MUMxOS4xMjcgLTAuMTMxOTMgMTkuOTU4NSAtMC4xMzE5MyAyMC40ODYyIDAuMzk1NzkxTDIzLjYwNDYgMy41MTQxNFpNMCAyNC4wMDAzVjE5LjAxMUwxNC4yMDA1IDQuODEwNDdMMTkuMTg5OSA5Ljc5OTg0TDQuOTg5MzYgMjQuMDAwM0gwWiIgZmlsbD0iIzIxMjEzNCIvPgo8L3N2Zz4K"},80286:(e,t,n)=>{n.d(t,{Z:()=>M});const M="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy44MTI1IDIwLjE2MzVMMTguNTEyNSAxNC43OTYxQzE5LjM3NSAxMy4yOTAzIDE5LjgyNSAxMS42MTU3IDE5LjgyNSA5LjkyODY2QzE5LjgyNSA0LjQ1NTA5IDE1LjM3NSAwIDkuOTEyNSAwQzQuNDUgMCAwIDQuNDU1MDkgMCA5LjkyODY2QzAgMTUuNDAyMiA0LjQ1IDE5Ljg1NzMgOS45MTI1IDE5Ljg1NzNDMTEuNjU2MiAxOS44NTczIDEzLjM4MTIgMTkuMzc2MiAxNC45MTg3IDE4LjQ1NzdMMjAuMTkzNyAyMy44MDYzQzIwLjMxMjUgMjMuOTI1IDIwLjQ4MTIgMjQgMjAuNjUgMjRDMjAuODE4OCAyNCAyMC45ODc1IDIzLjkzMTMgMjEuMTA2MyAyMy44MDYzTDIzLjgxMjUgMjEuMDY5NUMyNC4wNjI1IDIwLjgxMzMgMjQuMDYyNSAyMC40MTM0IDIzLjgxMjUgMjAuMTYzNVpNOS45MTEzMyAzLjg2NzE5QzEzLjI0ODggMy44NjcxOSAxNS45NjEzIDYuNTg1MjMgMTUuOTYxMyA5LjkyODExQzE1Ljk2MTMgMTMuMjcxIDEzLjI0ODggMTUuOTg5IDkuOTExMzMgMTUuOTg5QzYuNTczODMgMTUuOTg5IDMuODYxMzMgMTMuMjcxIDMuODYxMzMgOS45MjgxMUMzLjg2MTMzIDYuNTg1MjMgNi41NzM4MyAzLjg2NzE5IDkuOTExMzMgMy44NjcxOVoiIGZpbGw9IiMzMjMyNEQiLz4KPC9zdmc+Cg=="}}]);