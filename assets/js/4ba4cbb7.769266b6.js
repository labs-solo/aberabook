"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[4564],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>N});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var M=i.createContext({}),l=function(e){var t=i.useContext(M),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=l(e.components);return i.createElement(M.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,M=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=l(n),N=a,d=p["".concat(M,".").concat(N)]||p[N]||u[N]||r;return n?i.createElement(d,s(s({ref:t},g),{},{components:n})):i.createElement(d,s({ref:t},g))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var o={};for(var M in t)hasOwnProperty.call(t,M)&&(o[M]=t[M]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>M,contentTitle:()=>s,default:()=>N,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(83117),a=(n(67294),n(3905));const r={sidebar_position:2},s="Configuring Users & Permissions plugin settings",o={unversionedId:"user-docs/settings/configuring-users-permissions-plugin-settings",id:"user-docs/settings/configuring-users-permissions-plugin-settings",title:"Configuring Users & Permissions plugin settings",description:"The Users & Permissions plugin is managed from the Users & Permissions plugin settings section, accessible from Settings icon Settings in the main navigation of the admin panel. This settings section allows to configure the available providers, email templates and the advanced settings of the plugin. It also allows to define the end-users roles and their related permissions (see Configuring end-user roles).",source:"@site/docs/user-docs/settings/configuring-users-permissions-plugin-settings.md",sourceDirName:"user-docs/settings",slug:"/user-docs/settings/configuring-users-permissions-plugin-settings",permalink:"/aberabook/user-docs/settings/configuring-users-permissions-plugin-settings",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/user-docs/settings/configuring-users-permissions-plugin-settings.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2}},M={},l=[{value:"Configuring providers",id:"configuring-providers",level:2},{value:"Configuring email templates",id:"configuring-email-templates",level:2},{value:"Configuring advanced settings",id:"configuring-advanced-settings",level:2}],g=(u="ThemedImage",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const p={toc:l};function N(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-users--permissions-plugin-settings"},"Configuring Users & Permissions plugin settings"),(0,a.kt)("p",null,"The Users & Permissions plugin is managed from the ",(0,a.kt)("em",{parentName:"p"},"Users & Permissions plugin")," settings section, accessible from ",(0,a.kt)("img",{alt:"Settings icon",src:n(60154).Z,width:"16",height:"16"})," ",(0,a.kt)("em",{parentName:"p"},"Settings")," in the main navigation of the admin panel. This settings section allows to configure the available providers, email templates and the advanced settings of the plugin. It also allows to define the end-users roles and their related permissions (see ",(0,a.kt)("a",{parentName:"p",href:"/aberabook/user-docs/users-roles-permissions/configuring-end-users-roles"},"Configuring end-user roles"),")."),(0,a.kt)("h2",{id:"configuring-providers"},"Configuring providers"),(0,a.kt)("p",null,'The Users & Permissions plugin allows to enable and configure providers, for end users to login via a third-party provider to access the content of a front-end application through the Strapi application API. By default, a list of providers is available including one, "Email", enabled by default for all Strapi applications with the Users & Permissions plugin installed.'),(0,a.kt)(g,{alt:"Providers interface",sources:{light:"/img/assets/settings/up_providers.png",dark:"/img/assets/settings/up_providers_DARK.png"},mdxType:"ThemedImage"}),(0,a.kt)("p",null,"To enable and configure a provider:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("em",{parentName:"li"},"Users & Permissions plugin > Providers")," sub-section of the settings interface."),(0,a.kt)("li",{parentName:"ol"},"Click on the provider to enable and configure."),(0,a.kt)("li",{parentName:"ol"},"In the provider edition window, click on the ",(0,a.kt)("strong",{parentName:"li"},"ON")," button of the ",(0,a.kt)("em",{parentName:"li"},"Enable")," option."),(0,a.kt)("li",{parentName:"ol"},"Fill in the provider's configurations. Each provider has its own specific set of configurations, detailed in our developer documentation (see ",(0,a.kt)("a",{parentName:"li",href:"/dev-docs/plugins/users-permissions#setting-up-the-provider---examples"},"Setting up the provider"),")."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Save")," button.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Other providers that are not proposed by default by Strapi can be added manually through the code of your Strapi application (see ",(0,a.kt)("a",{parentName:"p",href:"/dev-docs/providers"},"Developer documentation"),").")),(0,a.kt)("h2",{id:"configuring-email-templates"},"Configuring email templates"),(0,a.kt)("p",null,'The Users & Permissions plugin uses 2 email templates, "Email address confirmation" and "Reset password", that are sent to end users:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if their account must be confirmed to be activated,"),(0,a.kt)("li",{parentName:"ul"},"if they need to reset the password of their Strapi account.")),(0,a.kt)(g,{alt:"Email templates interface",sources:{light:"/img/assets/settings/up_email-templates.png",dark:"/img/assets/settings/up_email-templates_DARK.png"},mdxType:"ThemedImage"}),(0,a.kt)("p",null,"To configure and edit email templates:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("em",{parentName:"li"},"Users & Permissions plugin > Email templates")," sub-section of the settings interface."),(0,a.kt)("li",{parentName:"ol"},"Click on the name of the email template to configure and edit."),(0,a.kt)("li",{parentName:"ol"},"Configure the email template:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Setting name"),(0,a.kt)("th",{parentName:"tr",align:null},"Instructions"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Shipper name"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicate the name of the shipper of the email.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Shipper email"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicate the email address of the shipper of the email.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Response email"),(0,a.kt)("td",{parentName:"tr",align:null},"(optional) Indicate the email address to which responses emails from the end users will be sent.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Subject"),(0,a.kt)("td",{parentName:"tr",align:null},"Write the subject of the email. Variables can be used (see ",(0,a.kt)("a",{parentName:"td",href:"https://strapi.io/documentation/developer-docs/latest/development/plugins/users-permissions.html#templating-emails"},"Developer documentation"),").")))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},'Edit the content of the email in the "Message" textbox. Email templates content is in HTML and uses variables (see ',(0,a.kt)("a",{parentName:"li",href:"https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html#templating-emails"},"Developer documentation"),")."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Save")," button.")),(0,a.kt)("h2",{id:"configuring-advanced-settings"},"Configuring advanced settings"),(0,a.kt)("p",null,"All settings related to the Users & Permissions plugin are managed from the ",(0,a.kt)("em",{parentName:"p"},"Advanced Settings")," sub-section, including the choice of a default role for end users, the enablement of sign-ups and email confirmation, as well as the choice of landing page for resetting a password."),(0,a.kt)(g,{alt:"Advanced settings interface",sources:{light:"/img/assets/settings/up_settings.png",dark:"/img/assets/settings/up_settings_DARK.png"},mdxType:"ThemedImage"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("em",{parentName:"li"},"Users & Permissions plugin > Advanced settings")," sub-section of the settings interface."),(0,a.kt)("li",{parentName:"ol"},"Configure the settings:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Setting name"),(0,a.kt)("th",{parentName:"tr",align:null},"Instructions"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Default role for authenticated users"),(0,a.kt)("td",{parentName:"tr",align:null},"Click the drop-down list to choose the default role for new end users.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"One account per email address"),(0,a.kt)("td",{parentName:"tr",align:null},"Click on the ",(0,a.kt)("strong",{parentName:"td"},"ON")," button to limit to 1 the number of end-user accounts with the same email address. Click on ",(0,a.kt)("strong",{parentName:"td"},"OFF")," to disable this limitation and allow several end-user accounts to be associated with the same email address (e.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"kai.doe@strapi.io")," can be used when logging in via several different providers).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable sign-ups"),(0,a.kt)("td",{parentName:"tr",align:null},"Click on the ",(0,a.kt)("strong",{parentName:"td"},"ON")," button to enable end-user sign-ups. Click on ",(0,a.kt)("strong",{parentName:"td"},"OFF")," to prevent end-user registration to your front-end application(s).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Reset password page"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicate the URL of the reset password page for your front-end application(s).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable email confirmation"),(0,a.kt)("td",{parentName:"tr",align:null},"Click on the ",(0,a.kt)("strong",{parentName:"td"},"ON")," button to enable end-user account confirmation by sending them a confirmation email. Click on ",(0,a.kt)("strong",{parentName:"td"},"OFF")," to disable account confirmation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Redirection url"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicate the URL of the page where end users should be redirected after confirming their Strapi account.")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Save")," button.")))}N.isMDXComponent=!0},60154:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjY4MDgyIDkuMTkxOTlDMi4wODA4MiA5LjQ2Nzk5IDAuNTY2NDIzIDEwLjM3MjggMC4zNzQ0MjQgMTAuNDk1MkMwLjI1OTAxOCAxMC41NjY4IDAuMTYzOTY1IDEwLjY2NjkgMC4wOTgzOTk4IDEwLjc4NThDMC4wMzI4MzQ3IDEwLjkwNDggLTAuMDAxMDQzNjIgMTEuMDM4NiAyLjQ0OTYzZS0wNSAxMS4xNzQ0VjEyLjgyNTZDLTAuMDAwODE2NjQ0IDEyLjk2MzQgMC4wMzQxMjQxIDEzLjA5OTIgMC4xMDE0MzEgMTMuMjE5NUMwLjE2ODczNyAxMy4zMzk4IDAuMjY2MTA3IDEzLjQ0MDYgMC4zODQwMjMgMTMuNTEyQzAuNjM4NDI0IDEzLjY3MjggMi4xMTQ0MiAxNC41NTM2IDIuNjkwNDIgMTQuODE1MkwzLjQzNDQyIDE2LjYxNTJDMy4xOTQ0MiAxNy4yNDg4IDIuNzY0ODIgMTguOTQ4IDIuNzE0NDIgMTkuMTY4OEMyLjY4NDE2IDE5LjMwMDkgMi42ODgxMSAxOS40Mzg2IDIuNzI1OTEgMTkuNTY4OEMyLjc2MzcxIDE5LjY5OSAyLjgzNDEgMTkuODE3NCAyLjkzMDQyIDE5LjkxMjhMNC4wOTY4MiAyMS4wNzkyQzQuMTkyNDggMjEuMTc1MSA0LjMxMDg4IDIxLjI0NTMgNC40NDA5OSAyMS4yODNDNC41NzExIDIxLjMyMDggNC43MDg2NiAyMS4zMjUgNC44NDA4MiAyMS4yOTUyTDQuODcxMTQgMjEuMjg3NEM1LjIzMTg5IDIxLjE5NTEgNi44MTczNiAyMC43ODkzIDcuMzk0NDIgMjAuNTc1Mkw5LjE5NDQyIDIxLjMxOTJDOS40NzA0MiAyMS45MTkyIDEwLjM3NTIgMjMuNDMzNiAxMC40OTc2IDIzLjYyNTZDMTAuNTcwMSAyMy43NDAyIDEwLjY3MDMgMjMuODM0NiAxMC43ODkxIDIzLjkwMDFDMTAuOTA3OCAyMy45NjU2IDExLjA0MTIgMjMuOTk5OSAxMS4xNzY4IDI0SDEyLjgyNTZDMTIuOTYzNSAyNC4wMDA4IDEzLjA5OTIgMjMuOTY1OSAxMy4yMTk1IDIzLjg5ODZDMTMuMzM5OCAyMy44MzEzIDEzLjQ0MDYgMjMuNzMzOSAxMy41MTIgMjMuNjE2QzEzLjY3MjggMjMuMzYxNiAxNC41NTM2IDIxLjg4NTYgMTQuODE1MiAyMS4zMDk2TDE2LjYxNTIgMjAuNTY1NkMxNy4yNDg4IDIwLjgwNTYgMTguOTQ4IDIxLjIzNTIgMTkuMTY4OCAyMS4yODU2QzE5LjMwMSAyMS4zMTU4IDE5LjQzODYgMjEuMzExOSAxOS41Njg4IDIxLjI3NDFDMTkuNjk5IDIxLjIzNjMgMTkuODE3NCAyMS4xNjU5IDE5LjkxMjggMjEuMDY5NkwyMS4wNzkyIDE5LjkwMzJDMjEuMTc1MSAxOS44MDc1IDIxLjI0NTMgMTkuNjg5MSAyMS4yODMxIDE5LjU1OUMyMS4zMjA4IDE5LjQyODkgMjEuMzI1IDE5LjI5MTMgMjEuMjk1MiAxOS4xNTkyTDIxLjI4NzQgMTkuMTI4OUMyMS4xOTUxIDE4Ljc2ODEgMjAuNzg5MyAxNy4xODI3IDIwLjU3NTIgMTYuNjA1NkwyMS4zMTkyIDE0LjgwNTZDMjEuOTE5MiAxNC41Mjk2IDIzLjQzMzYgMTMuNjI0OCAyMy42MjU2IDEzLjUwMjRDMjMuNzQwMiAxMy40Mjk5IDIzLjgzNDcgMTMuMzI5NyAyMy45MDAxIDEzLjIxMDlDMjMuOTY1NiAxMy4wOTIyIDIzLjk5OTkgMTIuOTU4OCAyNCAxMi44MjMyVjExLjE3NDRDMjMuOTk5OSAxMS4wMzggMjMuOTY0NyAxMC45MDM5IDIzLjg5NzkgMTAuNzg1QzIzLjgzMTEgMTAuNjY2MSAyMy43MzQ4IDEwLjU2NjMgMjMuNjE4NCAxMC40OTUyQzIzLjM2NCAxMC4zMzQ0IDIxLjg4OCA5LjQ1MzU5IDIxLjMxMiA5LjE5MTk5TDIwLjU2OCA3LjM5MkMyMC44MDggNi43NTg0IDIxLjIzNzYgNS4wNTkyIDIxLjI4OCA0LjgzODRDMjEuMzE4MyA0LjcwNjI1IDIxLjMxNDMgNC41Njg1NyAyMS4yNzY1IDQuNDM4MzhDMjEuMjM4NyA0LjMwODE5IDIxLjE2ODMgNC4xODk3OSAyMS4wNzIgNC4wOTQ0TDE5LjkwNTYgMi45MjA4QzE5LjgwOTkgMi44MjQ4NiAxOS42OTE1IDIuNzU0NzIgMTkuNTYxNCAyLjcxNjk1QzE5LjQzMTMgMi42NzkxOCAxOS4yOTM4IDIuNjc1IDE5LjE2MTYgMi43MDQ4TDE5LjEzMTMgMi43MTI1NUMxOC43NzA3IDIuODA0ODcgMTcuMTg1MSAzLjIxMDcyIDE2LjYwOCAzLjQyNDhMMTQuODA4IDIuNjgwOEMxNC41MzIgMi4wODA4IDEzLjYyNzIgMC41NjY0IDEzLjUwNDggMC4zNzQ0QzEzLjQzMjQgMC4yNTk3ODIgMTMuMzMyMSAwLjE2NTM1IDEzLjIxMzMgMC4wOTk4OTAzQzEzLjA5NDYgMC4wMzQ0MzAyIDEyLjk2MTIgNi43OTI5MmUtMDUgMTIuODI1NiAwSDExLjE3NDRDMTEuMDM4IDAuMDAwMTQ5NDkyIDEwLjkwMzkgMC4wMzUzMTU4IDEwLjc4NSAwLjEwMjEzMkMxMC42NjYxIDAuMTY4OTQ3IDEwLjU2NjMgMC4yNjUxNzUgMTAuNDk1MiAwLjM4MTZDMTAuMzM0NCAwLjYzNiA5LjQ1MzYxIDIuMTEyIDkuMTkyMDEgMi42ODhMNy4zOTIwMiAzLjQzMkM2Ljc1ODQyIDMuMTkyIDUuMDU5MjIgMi43NjI0IDQuODM4NDIgMi43MTJDNC43MDYyOCAyLjY4MTc0IDQuNTY4NTkgMi42ODU2OSA0LjQzODQgMi43MjM0OUM0LjMwODIxIDIuNzYxMjkgNC4xODk4MiAyLjgzMTY4IDQuMDk0NDIgMi45MjhMMi45MjA4MiA0LjA5NDRDMi44MjQ4OCA0LjE5MDA1IDIuNzU0NzUgNC4zMDg0NiAyLjcxNjk3IDQuNDM4NTdDMi42NzkyIDQuNTY4NjggMi42NzUwMiA0LjcwNjI0IDIuNzA0ODIgNC44Mzg0QzIuNzA3MDkgNC44NDcyNCAyLjcwOTY4IDQuODU3MzcgMi43MTI1OCA0Ljg2ODcxQzIuODA0OTIgNS4yMjk0NCAzLjIxMDc1IDYuODE0OTMgMy40MjQ4MiA3LjM5MkwyLjY4MDgyIDkuMTkxOTlaTTEyIDE3QzE0Ljc2MTQgMTcgMTcgMTQuNzYxNCAxNyAxMkMxNyA5LjIzODU4IDE0Ljc2MTQgNyAxMiA3QzkuMjM4NTggNyA3IDkuMjM4NTggNyAxMkM3IDE0Ljc2MTQgOS4yMzg1OCAxNyAxMiAxN1oiIGZpbGw9IiMyMTIxMzQiLz4KPC9zdmc+Cg=="}}]);