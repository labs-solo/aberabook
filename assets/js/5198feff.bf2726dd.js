"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[3235],{3905:(M,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>j});var n=t(67294);function D(M,e,t){return e in M?Object.defineProperty(M,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[e]=t,M}function i(M,e){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(M);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),t.push.apply(t,n)}return t}function r(M){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){D(M,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(t,e))}))}return M}function a(M,e){if(null==M)return{};var t,n,D=function(M,e){if(null==M)return{};var t,n,D={},i=Object.keys(M);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(D[t]=M[t]);return D}(M,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(M);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(D[t]=M[t])}return D}var s=n.createContext({}),g=function(M){var e=n.useContext(s),t=e;return M&&(t="function"==typeof M?M(e):r(r({},e),M)),t},u=function(M){var e=g(M.components);return n.createElement(s.Provider,{value:e},M.children)},N={inlineCode:"code",wrapper:function(M){var e=M.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(M,e){var t=M.components,D=M.mdxType,i=M.originalType,s=M.parentName,u=a(M,["components","mdxType","originalType","parentName"]),o=g(t),j=D,I=o["".concat(s,".").concat(j)]||o[j]||N[j]||i;return t?n.createElement(I,r(r({ref:e},u),{},{components:t})):n.createElement(I,r({ref:e},u))}));function j(M,e){var t=arguments,D=e&&e.mdxType;if("string"==typeof M||D){var i=t.length,r=new Array(i);r[0]=o;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=M,a.mdxType="string"==typeof M?M:D,r[1]=a;for(var g=2;g<i;g++)r[g]=t[g];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}o.displayName="MDXCreateElement"},8496:(M,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>j,frontMatter:()=>i,metadata:()=>a,toc:()=>g});var n=t(83117),D=(t(67294),t(3905));const i={title:"Managing end-user accounts",displayed_sidebar:"userDocsSidebar",sidebar_position:5},r="Managing end-user accounts",a={unversionedId:"user-docs/users-roles-permissions/managing-end-users",id:"user-docs/users-roles-permissions/managing-end-users",title:"Managing end-user accounts",description:"End-users are the users who consume the content that is created and managed with a Strapi application and displayed on front-end applications (e.g. websites, mobile applications, connected devices etc.). Unlike the administrators, they do not have access to the admin panel.",source:"@site/docs/user-docs/users-roles-permissions/managing-end-users.md",sourceDirName:"user-docs/users-roles-permissions",slug:"/user-docs/users-roles-permissions/managing-end-users",permalink:"/aberabook/user-docs/users-roles-permissions/managing-end-users",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/user-docs/users-roles-permissions/managing-end-users.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Managing end-user accounts",displayed_sidebar:"userDocsSidebar",sidebar_position:5},sidebar:"userDocsSidebar",previous:{title:"Configuring end-user roles",permalink:"/aberabook/user-docs/users-roles-permissions/configuring-end-users-roles"},next:{title:"Introduction to plugins",permalink:"/aberabook/user-docs/plugins"}},s={},g=[],u=(N="ThemedImage",function(M){return console.warn("Component "+N+" was not imported, exported, or provided by MDXProvider as global scope"),(0,D.kt)("div",M)});var N;const o={toc:g};function j(M){let{components:e,...i}=M;return(0,D.kt)("wrapper",(0,n.Z)({},o,i,{components:e,mdxType:"MDXLayout"}),(0,D.kt)("h1",{id:"managing-end-user-accounts"},"Managing end-user accounts"),(0,D.kt)("p",null,"End-users are the users who consume the content that is created and managed with a Strapi application and displayed on front-end applications (e.g. websites, mobile applications, connected devices etc.). Unlike the administrators, they do not have access to the admin panel."),(0,D.kt)("p",null,"With the ",(0,D.kt)("a",{parentName:"p",href:"/aberabook/user-docs/plugins/strapi-plugins#users-permissions-plugin"},"Users & Permissions plugin")," activated, it is possible to manage end users. This plugin is however not entirely managed and configured from one same place of the admin panel: end-user roles and permissions are managed in the ",(0,D.kt)("img",{alt:"Settings icon",src:t(60154).Z,width:"16",height:"16"})," ",(0,D.kt)("em",{parentName:"p"},"Settings")," interface (see ",(0,D.kt)("a",{parentName:"p",href:"/aberabook/user-docs/users-roles-permissions/configuring-end-users-roles"},"Configuring end-user roles"),"), but end-user accounts are managed from the ",(0,D.kt)("img",{alt:"Content icon",src:t(58196).Z,width:"16",height:"16"})," ",(0,D.kt)("em",{parentName:"p"},"Content Manager"),"."),(0,D.kt)("p",null,"With the Users & Permissions plugin, the end users and their account information are managed as a content-type. When the plugin is installed on a Strapi application, 3 collection types are automatically created (see ",(0,D.kt)("a",{parentName:"p",href:"/aberabook/user-docs/plugins/strapi-plugins#users-permissions-plugin"},"Users & Permissions plugin"),'), including "User" which is the only one available directly in the Content Manager.'),(0,D.kt)(u,{alt:"Managing end users via the Content Manager",sources:{light:"/img/assets/users-permissions/end-user_content-manager.png",dark:"/img/assets/users-permissions/end-user_content-manager_DARK.png"},mdxType:"ThemedImage"}),(0,D.kt)("p",null,"Registering new end users in a front-end application with the Users & Permissions plugin consists in adding a new entry to the User collection type (see ",(0,D.kt)("a",{parentName:"p",href:"/user-docs/content-manager"},"Introduction to the Content Manager")," for more information about the Content Manager)."),(0,D.kt)("admonition",{type:"note"},(0,D.kt)("p",{parentName:"admonition"},"If end users can register themselves on your front-end application (see ",(0,D.kt)("a",{parentName:"p",href:"/aberabook/user-docs/settings/configuring-users-permissions-plugin-settings"},"Managing Users & Permissions plugin settings"),"), a new entry will automatically be created and the fields of that entry will be filled up with the information indicated by the end user. All fields can however be edited by an administrator of the Strapi application.")),(0,D.kt)("p",null,"To create a new end-user account:"),(0,D.kt)("ol",null,(0,D.kt)("li",{parentName:"ol"},"Go to the User collection type in the Content Manager."),(0,D.kt)("li",{parentName:"ol"},"Click on the ",(0,D.kt)("strong",{parentName:"li"},"Add new entry")," button in the top right corner."),(0,D.kt)("li",{parentName:"ol"},"Fill in the default fields of the entry. Additional fields added specifically for your Strapi application by your administrators may be displayed as well.")),(0,D.kt)("table",null,(0,D.kt)("thead",{parentName:"table"},(0,D.kt)("tr",{parentName:"thead"},(0,D.kt)("th",{parentName:"tr",align:null},"Field"),(0,D.kt)("th",{parentName:"tr",align:null},"Instructions"))),(0,D.kt)("tbody",{parentName:"table"},(0,D.kt)("tr",{parentName:"tbody"},(0,D.kt)("td",{parentName:"tr",align:null},"Username"),(0,D.kt)("td",{parentName:"tr",align:null},"Write the username of the end user.")),(0,D.kt)("tr",{parentName:"tbody"},(0,D.kt)("td",{parentName:"tr",align:null},"Email"),(0,D.kt)("td",{parentName:"tr",align:null},"Write the complete email address of the end user in the textbox.")),(0,D.kt)("tr",{parentName:"tbody"},(0,D.kt)("td",{parentName:"tr",align:null},"Password"),(0,D.kt)("td",{parentName:"tr",align:null},"(optional) Write a new password in the textbox. You can click on the eye icon for the password to be shown.")),(0,D.kt)("tr",{parentName:"tbody"},(0,D.kt)("td",{parentName:"tr",align:null},"Confirmed"),(0,D.kt)("td",{parentName:"tr",align:null},"(optional) Click ",(0,D.kt)("strong",{parentName:"td"},"ON")," for the end-user account to be confirmed.")),(0,D.kt)("tr",{parentName:"tbody"},(0,D.kt)("td",{parentName:"tr",align:null},"Blocked"),(0,D.kt)("td",{parentName:"tr",align:null},"(optional) Click ",(0,D.kt)("strong",{parentName:"td"},"ON")," to block the account of the end user, to prevent them to access content.")),(0,D.kt)("tr",{parentName:"tbody"},(0,D.kt)("td",{parentName:"tr",align:null},"Role"),(0,D.kt)("td",{parentName:"tr",align:null},"(optional) Indicate the role that should be granted to the new end user. If this field is not filled in, the end user will be attributed the role set as default (see ",(0,D.kt)("a",{parentName:"td",href:"/aberabook/user-docs/settings/configuring-users-permissions-plugin-settings"},"Managing Users & Permissions plugin settings"),").")))),(0,D.kt)("ol",{start:4},(0,D.kt)("li",{parentName:"ol"},"Click on the ",(0,D.kt)("strong",{parentName:"li"},"Save")," button.")))}j.isMDXComponent=!0},58196:(M,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy43MDc4IDAuMjk2ODA2QzIzLjUyMDMgMC4xMDkyNyAyMy4yNjU5IDAuMDAzOTExODkgMjMuMDAwNyAwLjAwMzkxMTg5TDIxLjAwMDcgMC4wMDM5MTE4OUMxOS4xNTM2IDAuMDAyMjQ4NjggMTcuMzI0NyAwLjM2ODU0NCAxNS42MjA3IDEuMDgxNDJDMTUuNDM4NiAxLjE1NzM3IDE1LjI4MzEgMS4yODU0OCAxNS4xNzM3IDEuNDQ5NjNDMTUuMDY0MiAxLjYxMzc4IDE1LjAwNTggMS44MDY2NCAxNS4wMDU3IDIuMDAzOTJWNC45MjE0MkMxNS4wMDY4IDQuOTI5MyAxNS4wMDUxIDQuOTM3MzEgMTUuMDAxIDQuOTQ0MTJDMTQuOTk3IDQuOTUwOTQgMTQuOTkwNyA0Ljk1NjE2IDE0Ljk4MzIgNC45NTg5M0wxMi45ODMyIDMuNDg4OTJDMTIuNzk4NyAzLjM1MDM3IDEyLjU3MTkgMy4yNzk5MSAxMi4zNDEzIDMuMjg5NDhDMTIuMTEwOCAzLjI5OTA1IDExLjg5MDYgMy4zODgwNiAxMS43MTgyIDMuNTQxNDJDMTAuMjM3MyA0Ljg1MzA3IDkuMDUxMjEgNi40NjM2NiA4LjIzODA3IDguMjY3MDZDNy40MjQ5MiAxMC4wNzA1IDcuMDAzMiAxMi4wMjU3IDcuMDAwNjkgMTQuMDAzOVYxNS41ODlMNC4yOTMxOSAxOC4yOTY1QzQuMTA1NTQgMTguNDg0MSA0LjAwMDEzIDE4LjczODYgNC4wMDAxMyAxOS4wMDRDNC4wMDAxMyAxOS4yNjkzIDQuMTA1NTQgMTkuNTIzOCA0LjI5MzE5IDE5LjcxMTVDNC40ODA4MyAxOS44OTkxIDQuNzM1MzIgMjAuMDA0NSA1LjAwMDY5IDIwLjAwNDVDNS4yNjYwNSAyMC4wMDQ1IDUuNTIwNTUgMTkuODk5MSA1LjcwODE5IDE5LjcxMTVMOC40MTU3IDE3LjAwNEgxMC4wMDA3QzEzLjcxMjUgMTcgMTcuMjcxMiAxNS41MjM3IDE5Ljg5NTggMTIuODk5MUMyMi41MjA1IDEwLjI3NDQgMjMuOTk2OCA2LjcxNTc0IDI0LjAwMDcgMy4wMDM5MlYxLjAwMzkyQzI0LjAwMDcgMC43Mzg2OTkgMjMuODk1NCAwLjQ4NDM0MyAyMy43MDc4IDAuMjk2ODA2Wk0xOCAyNC4wMDAxSDMuMDAwMDFDMi4yMDQzNiAyNC4wMDAxIDEuNDQxMjkgMjMuNjg0IDAuODc4NjgyIDIzLjEyMTRDMC4zMTYwNzEgMjIuNTU4OCAwIDIxLjc5NTggMCAyMS4wMDAxVjYuMDAwMDdDMCA1LjIwNDQyIDAuMzE2MDcxIDQuNDQxMzUgMC44Nzg2ODIgMy44Nzg3NEMxLjQ0MTI5IDMuMzE2MTMgMi4yMDQzNiAzLjAwMDA2IDMuMDAwMDEgMy4wMDAwNkg2LjAwMDAxQzYuMjY1MjMgMy4wMDAwNiA2LjUxOTU4IDMuMTA1NDIgNi43MDcxMiAzLjI5Mjk2QzYuODk0NjYgMy40ODA0OSA3LjAwMDAyIDMuNzM0ODUgNy4wMDAwMiA0LjAwMDA2QzcuMDAwMDIgNC4yNjUyOCA2Ljg5NDY2IDQuNTE5NjQgNi43MDcxMiA0LjcwNzE3QzYuNTE5NTggNC44OTQ3MSA2LjI2NTIzIDUuMDAwMDcgNi4wMDAwMSA1LjAwMDA3SDMuMDAwMDFDMi43MzQ3OSA1LjAwMDA3IDIuNDgwNDMgNS4xMDU0MiAyLjI5MjkgNS4yOTI5NkMyLjEwNTM2IDUuNDgwNSAyIDUuNzM0ODUgMiA2LjAwMDA3VjIxLjAwMDFDMiAyMS4yNjUzIDIuMTA1MzYgMjEuNTE5NyAyLjI5MjkgMjEuNzA3MkMyLjQ4MDQzIDIxLjg5NDcgMi43MzQ3OSAyMi4wMDAxIDMuMDAwMDEgMjIuMDAwMUgxOEMxOC4yNjUzIDIyLjAwMDEgMTguNTE5NiAyMS44OTQ3IDE4LjcwNzEgMjEuNzA3MkMxOC44OTQ3IDIxLjUxOTcgMTkgMjEuMjY1MyAxOSAyMS4wMDAxVjE4LjAwMDFDMTkgMTcuNzM0OSAxOS4xMDU0IDE3LjQ4MDUgMTkuMjkyOSAxNy4yOTNDMTkuNDgwNSAxNy4xMDU0IDE5LjczNDggMTcuMDAwMSAyMCAxNy4wMDAxQzIwLjI2NTMgMTcuMDAwMSAyMC41MTk2IDE3LjEwNTQgMjAuNzA3MiAxNy4yOTNDMjAuODk0NyAxNy40ODA1IDIxIDE3LjczNDkgMjEgMTguMDAwMVYyMS4wMDAxQzIxIDIxLjc5NTggMjAuNjg0IDIyLjU1ODggMjAuMTIxNCAyMy4xMjE0QzE5LjU1ODggMjMuNjg0IDE4Ljc5NTcgMjQuMDAwMSAxOCAyNC4wMDAxWiIgZmlsbD0iIzIxMjEzNCIvPgo8L3N2Zz4K"},60154:(M,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjY4MDgyIDkuMTkxOTlDMi4wODA4MiA5LjQ2Nzk5IDAuNTY2NDIzIDEwLjM3MjggMC4zNzQ0MjQgMTAuNDk1MkMwLjI1OTAxOCAxMC41NjY4IDAuMTYzOTY1IDEwLjY2NjkgMC4wOTgzOTk4IDEwLjc4NThDMC4wMzI4MzQ3IDEwLjkwNDggLTAuMDAxMDQzNjIgMTEuMDM4NiAyLjQ0OTYzZS0wNSAxMS4xNzQ0VjEyLjgyNTZDLTAuMDAwODE2NjQ0IDEyLjk2MzQgMC4wMzQxMjQxIDEzLjA5OTIgMC4xMDE0MzEgMTMuMjE5NUMwLjE2ODczNyAxMy4zMzk4IDAuMjY2MTA3IDEzLjQ0MDYgMC4zODQwMjMgMTMuNTEyQzAuNjM4NDI0IDEzLjY3MjggMi4xMTQ0MiAxNC41NTM2IDIuNjkwNDIgMTQuODE1MkwzLjQzNDQyIDE2LjYxNTJDMy4xOTQ0MiAxNy4yNDg4IDIuNzY0ODIgMTguOTQ4IDIuNzE0NDIgMTkuMTY4OEMyLjY4NDE2IDE5LjMwMDkgMi42ODgxMSAxOS40Mzg2IDIuNzI1OTEgMTkuNTY4OEMyLjc2MzcxIDE5LjY5OSAyLjgzNDEgMTkuODE3NCAyLjkzMDQyIDE5LjkxMjhMNC4wOTY4MiAyMS4wNzkyQzQuMTkyNDggMjEuMTc1MSA0LjMxMDg4IDIxLjI0NTMgNC40NDA5OSAyMS4yODNDNC41NzExIDIxLjMyMDggNC43MDg2NiAyMS4zMjUgNC44NDA4MiAyMS4yOTUyTDQuODcxMTQgMjEuMjg3NEM1LjIzMTg5IDIxLjE5NTEgNi44MTczNiAyMC43ODkzIDcuMzk0NDIgMjAuNTc1Mkw5LjE5NDQyIDIxLjMxOTJDOS40NzA0MiAyMS45MTkyIDEwLjM3NTIgMjMuNDMzNiAxMC40OTc2IDIzLjYyNTZDMTAuNTcwMSAyMy43NDAyIDEwLjY3MDMgMjMuODM0NiAxMC43ODkxIDIzLjkwMDFDMTAuOTA3OCAyMy45NjU2IDExLjA0MTIgMjMuOTk5OSAxMS4xNzY4IDI0SDEyLjgyNTZDMTIuOTYzNSAyNC4wMDA4IDEzLjA5OTIgMjMuOTY1OSAxMy4yMTk1IDIzLjg5ODZDMTMuMzM5OCAyMy44MzEzIDEzLjQ0MDYgMjMuNzMzOSAxMy41MTIgMjMuNjE2QzEzLjY3MjggMjMuMzYxNiAxNC41NTM2IDIxLjg4NTYgMTQuODE1MiAyMS4zMDk2TDE2LjYxNTIgMjAuNTY1NkMxNy4yNDg4IDIwLjgwNTYgMTguOTQ4IDIxLjIzNTIgMTkuMTY4OCAyMS4yODU2QzE5LjMwMSAyMS4zMTU4IDE5LjQzODYgMjEuMzExOSAxOS41Njg4IDIxLjI3NDFDMTkuNjk5IDIxLjIzNjMgMTkuODE3NCAyMS4xNjU5IDE5LjkxMjggMjEuMDY5NkwyMS4wNzkyIDE5LjkwMzJDMjEuMTc1MSAxOS44MDc1IDIxLjI0NTMgMTkuNjg5MSAyMS4yODMxIDE5LjU1OUMyMS4zMjA4IDE5LjQyODkgMjEuMzI1IDE5LjI5MTMgMjEuMjk1MiAxOS4xNTkyTDIxLjI4NzQgMTkuMTI4OUMyMS4xOTUxIDE4Ljc2ODEgMjAuNzg5MyAxNy4xODI3IDIwLjU3NTIgMTYuNjA1NkwyMS4zMTkyIDE0LjgwNTZDMjEuOTE5MiAxNC41Mjk2IDIzLjQzMzYgMTMuNjI0OCAyMy42MjU2IDEzLjUwMjRDMjMuNzQwMiAxMy40Mjk5IDIzLjgzNDcgMTMuMzI5NyAyMy45MDAxIDEzLjIxMDlDMjMuOTY1NiAxMy4wOTIyIDIzLjk5OTkgMTIuOTU4OCAyNCAxMi44MjMyVjExLjE3NDRDMjMuOTk5OSAxMS4wMzggMjMuOTY0NyAxMC45MDM5IDIzLjg5NzkgMTAuNzg1QzIzLjgzMTEgMTAuNjY2MSAyMy43MzQ4IDEwLjU2NjMgMjMuNjE4NCAxMC40OTUyQzIzLjM2NCAxMC4zMzQ0IDIxLjg4OCA5LjQ1MzU5IDIxLjMxMiA5LjE5MTk5TDIwLjU2OCA3LjM5MkMyMC44MDggNi43NTg0IDIxLjIzNzYgNS4wNTkyIDIxLjI4OCA0LjgzODRDMjEuMzE4MyA0LjcwNjI1IDIxLjMxNDMgNC41Njg1NyAyMS4yNzY1IDQuNDM4MzhDMjEuMjM4NyA0LjMwODE5IDIxLjE2ODMgNC4xODk3OSAyMS4wNzIgNC4wOTQ0TDE5LjkwNTYgMi45MjA4QzE5LjgwOTkgMi44MjQ4NiAxOS42OTE1IDIuNzU0NzIgMTkuNTYxNCAyLjcxNjk1QzE5LjQzMTMgMi42NzkxOCAxOS4yOTM4IDIuNjc1IDE5LjE2MTYgMi43MDQ4TDE5LjEzMTMgMi43MTI1NUMxOC43NzA3IDIuODA0ODcgMTcuMTg1MSAzLjIxMDcyIDE2LjYwOCAzLjQyNDhMMTQuODA4IDIuNjgwOEMxNC41MzIgMi4wODA4IDEzLjYyNzIgMC41NjY0IDEzLjUwNDggMC4zNzQ0QzEzLjQzMjQgMC4yNTk3ODIgMTMuMzMyMSAwLjE2NTM1IDEzLjIxMzMgMC4wOTk4OTAzQzEzLjA5NDYgMC4wMzQ0MzAyIDEyLjk2MTIgNi43OTI5MmUtMDUgMTIuODI1NiAwSDExLjE3NDRDMTEuMDM4IDAuMDAwMTQ5NDkyIDEwLjkwMzkgMC4wMzUzMTU4IDEwLjc4NSAwLjEwMjEzMkMxMC42NjYxIDAuMTY4OTQ3IDEwLjU2NjMgMC4yNjUxNzUgMTAuNDk1MiAwLjM4MTZDMTAuMzM0NCAwLjYzNiA5LjQ1MzYxIDIuMTEyIDkuMTkyMDEgMi42ODhMNy4zOTIwMiAzLjQzMkM2Ljc1ODQyIDMuMTkyIDUuMDU5MjIgMi43NjI0IDQuODM4NDIgMi43MTJDNC43MDYyOCAyLjY4MTc0IDQuNTY4NTkgMi42ODU2OSA0LjQzODQgMi43MjM0OUM0LjMwODIxIDIuNzYxMjkgNC4xODk4MiAyLjgzMTY4IDQuMDk0NDIgMi45MjhMMi45MjA4MiA0LjA5NDRDMi44MjQ4OCA0LjE5MDA1IDIuNzU0NzUgNC4zMDg0NiAyLjcxNjk3IDQuNDM4NTdDMi42NzkyIDQuNTY4NjggMi42NzUwMiA0LjcwNjI0IDIuNzA0ODIgNC44Mzg0QzIuNzA3MDkgNC44NDcyNCAyLjcwOTY4IDQuODU3MzcgMi43MTI1OCA0Ljg2ODcxQzIuODA0OTIgNS4yMjk0NCAzLjIxMDc1IDYuODE0OTMgMy40MjQ4MiA3LjM5MkwyLjY4MDgyIDkuMTkxOTlaTTEyIDE3QzE0Ljc2MTQgMTcgMTcgMTQuNzYxNCAxNyAxMkMxNyA5LjIzODU4IDE0Ljc2MTQgNyAxMiA3QzkuMjM4NTggNyA3IDkuMjM4NTggNyAxMkM3IDE0Ljc2MTQgOS4yMzg1OCAxNyAxMiAxN1oiIGZpbGw9IiMyMTIxMzQiLz4KPC9zdmc+Cg=="}}]);