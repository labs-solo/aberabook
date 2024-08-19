(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[6031],{71410:(e,t,a)=>{const o=a(7694),r=a(13618),s={title:"AquaBera Documentation",tagline:"Automate and optimize your crypto liquidity provision with AquaBera.",url:"https://labs-solo.github.io",baseUrl:"/aberabook/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"https://aquabera.com/assets/favicon-32x32.png",customFields:{prefabApiKey:{}.REACT_APP_PREFAB_FRONTEND_PRODUCTION_API_KEY||"398-Development-P435-E907-FRONTEND-b3f733ec-b1b7-464f-8b6f-9cf91d23a434"},i18n:{defaultLocale:"en",locales:["en"]},markdown:{mermaid:!0},themes:["@docusaurus/theme-live-codeblock","@docusaurus/theme-mermaid"],scripts:[{src:"/js/hotjar.js",type:"module",async:!0},{src:"/js/particle.js",type:"module",async:!0},{src:"/js/firework.js",type:"module",async:!0},{src:"/js/ball.js",type:"module",async:!0},{src:"/js/bar.js",type:"module",async:!0},{src:"/js/game.js",type:"module",async:!0},{src:"/js/particleProfiles.js",type:"module",async:!0}],presets:[["@docusaurus/preset-classic",{docs:{routeBasePath:"/",sidebarPath:86679,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus",admonitions:{tag:":::",keywords:["note","tip","info","caution","danger","callout","prerequisites","aquabera","warning"]}},blog:!1,theme:{customCss:56189}}],["redocusaurus",{specs:[{spec:"docs/dev-docs/api/openapi.yaml",route:"/openapi/"}],theme:{primaryColor:"#4945FF"}}]],themeConfig:{announcementBar:{id:"aquabera-launch",content:"\ud83d\ude80 AquaBera is launching on Bartio Testnet Soon! Be ready to automate your liquidity.",backgroundColor:"#e0f7fa",textColor:"#005662",isCloseable:!0},docs:{sidebar:{hideable:!0,autoCollapseCategories:!0}},algolia:{appId:"392RJ63O14",apiKey:"ed62374a794e8da5accb298e13618614",indexName:"aquaberaDocsNext",contextualSearch:!0},navbar:{hideOnScroll:!0,logo:{alt:"AquaBera Documentation",src:"img/logo.png",srcDark:"img/logo-dark.png"},items:[{type:"doc",docId:"user-docs/intro",position:"left",label:"User Guide"},{type:"doc",docId:"dev-docs/intro",position:"left",label:"Developer Docs"},{label:"Community",position:"left",items:[{label:"Tokenomics",to:"/community/tokenomics"},{label:"Socials",to:"/community/socials"},{label:"Forum",to:"/community/forum"},{label:"Discord",href:"https://discord.aquabera.com/"},{label:"Twitter",href:"https://twitter.com/aquabera"}]},{href:"https://aquabera.com",label:"AquaBera.com",position:"right"},{href:"https://github.com/labs-solo/aberabook",label:"GitHub",position:"right"}]},footer:{style:"dark",links:[{title:"AquaBera Documentation",items:[{label:"User Guide",to:"/user-docs/intro"},{label:"Developer Documentation",to:"/dev-docs/intro"},{label:"FAQ",to:"/user-docs/faq"}]},{title:"Community",items:[{label:"Tokenomics",to:"/community/tokenomics"},{label:"Socials",to:"/community/socials"},{label:"Forum",to:"/community/forum"},{label:"Discord",href:"https://discord.aquabera.com/"},{label:"Twitter",href:"https://twitter.com/aquabera"}]},{title:"Developer Resources",items:[{label:"Deployed Contracts",to:"/dev-docs/deployed-contracts"},{label:"Audits",to:"/dev-docs/audits"},{label:"GitHub",href:"https://github.com/labs-solo/aberabook"}]},{title:"More",items:[{label:"Blog",to:"https://aquabera.com/blog"},{label:"About Us",to:"/about-us"},{label:"Contact",to:"/contact"}]}],copyright:`Copyright \xa9 ${(new Date).getFullYear()} AquaBera. Built with \u2764\ufe0f by the AquaBera community.`},prism:{theme:o,darkTheme:r},zoom:{selector:".markdown img",background:{light:"rgba(255, 255, 255, 0.8)",dark:"rgba(0, 0, 0, 0.8)"},config:{}},hubspot:{accountId:6893032,async:!0,defer:!0}},plugins:[["@docusaurus/plugin-google-tag-manager",{containerId:"GTM-WT49VGT"}],"docusaurus-plugin-hubspot","docusaurus-plugin-sass","docusaurus-plugin-image-zoom",["posthog-docusaurus",{apiKey:"phc_DETCfjmHIm184mceL8duwutdQgOnVTZSC59xontNRWN",appUrl:"https://eu.i.posthog.com",enableInDevelopment:!1}]]};e.exports=s},86679:e=>{e.exports={userDocsSidebar:[{type:"category",collapsed:!1,label:"\ud83d\ude80 Getting Started",items:[{type:"doc",id:"user-docs/intro",label:"Welcome!"},{type:"doc",id:"user-docs/prerequisites",label:"Prerequisites"},{type:"doc",id:"user-docs/quick-start-guide",label:"Quick Start Guide"},{type:"doc",id:"user-docs/dashboard-navigation",label:"Navigating the Dashboard"}]},{type:"category",collapsed:!0,label:"\ud83c\udf0d Introduction to AquaBera",items:[{type:"doc",id:"user-docs/aquabera-overview",label:"Overview of AquaBera"},{type:"doc",id:"user-docs/what-is-aquabera",label:"What is AquaBera?"},{type:"doc",id:"user-docs/features-benefits",label:"Key Features and Benefits"},{type:"doc",id:"user-docs/relationship-kodiak-berachain",label:"Relationship with Kodiak and BeraChain"},{type:"doc",id:"user-docs/why-aquabera",label:"Why Use AquaBera?"}]},{type:"category",collapsed:!0,label:"\ud83d\udee1\ufe0f Understanding BeraChain\u2019s Proof-of-Liquidity (PoL)",items:[{type:"doc",id:"user-docs/intro-pol",label:"Introduction to PoL"},{type:"doc",id:"user-docs/what-is-pol",label:"What is Proof-of-Liquidity?"},{type:"doc",id:"user-docs/pol-mechanics",label:"How PoL Works on BeraChain"},{type:"doc",id:"user-docs/pol-importance",label:"Importance of PoL"},{type:"category",label:"\ud83d\udc65 Key Participants in PoL",items:[{type:"doc",id:"user-docs/pol-validators",label:"Validators"},{type:"doc",id:"user-docs/pol-bgt-holders-farmers",label:"$BGT Holders & Farmers"},{type:"doc",id:"user-docs/pol-bera-foundation",label:"Bera Foundation"},{type:"doc",id:"user-docs/pol-ecosystem-projects",label:"Ecosystem Projects"}]},{type:"doc",id:"user-docs/gauges-roles",label:"Gauges and Their Roles"},{type:"doc",id:"user-docs/incentives-pol",label:"Incentives in PoL"}]},{type:"category",collapsed:!0,label:"\ud83c\udf10 Liquidity Management on Kodiak via AquaBera",items:[{type:"doc",id:"user-docs/intro-kodiak",label:"Introduction to Kodiak"},{type:"doc",id:"user-docs/kodiak-amm-overview",label:"Kodiak AMM Model Overview"},{type:"doc",id:"user-docs/kodiak-concepts",label:"Key Concepts: Liquidity, Islands"},{type:"doc",id:"user-docs/manage-liquidity-pools",label:"Creating and Managing Liquidity Pools"},{type:"doc",id:"user-docs/liquidity-strategies",label:"Liquidity Provision Strategies"},{type:"doc",id:"user-docs/unique-features",label:"Unique Features of AquaBera"}]},{type:"category",collapsed:!0,label:"\ud83d\uddf3\ufe0f Gauges and Voting Mechanisms",items:[{type:"doc",id:"user-docs/gauges-overview",label:"Understanding Gauges"},{type:"doc",id:"user-docs/gauge-voting",label:"Voting on Gauges"}]},{type:"category",collapsed:!0,label:"\ud83c\udf81 Incentives and Rewards",items:[{type:"doc",id:"user-docs/incentives-overview",label:"Overview of Incentives"},{type:"doc",id:"user-docs/rewards-management",label:"Maximizing Rewards with AquaBera"}]}],communitySidebar:[{type:"doc",id:"community/intro",label:"Introduction to Community"},{type:"category",collapsed:!1,label:"\ud83d\udca7 Tokenomics",items:[{type:"doc",id:"community/tokenomics/tokenomics",label:"AquaBera Tokenomics Story"},{type:"doc",id:"community/tokenomics/tokenomics-tldr",label:"TL;DR of AquaBera Tokenomics"},{type:"doc",id:"community/tokenomics/aquabera-model",label:"The AquaBera Tokenomics Model"},{type:"doc",id:"community/tokenomics/benefits-and-implications",label:"Benefits and Implications"}]},{type:"category",collapsed:!1,label:"\ud83e\udd1d Partners",items:[{type:"doc",id:"community/partners/amplifi",label:"Amplifi"},{type:"doc",id:"community/partners/aegis",label:"Aegis"}]}]}},56918:(e,t,a)=>{"use strict";a.d(t,{z:()=>i});var o=a(83117),r=a(86010),s=a(67294),l=a(39960);const n={button:"button_Vhl8",button__decorative:"button__decorative_Jqlm","button--huge":"button--huge_OWRo","button--secondary":"button--secondary_gb6N"};function i(e){let{href:t,to:a,children:i,className:c,decorative:d,size:u="",variant:m="primary",...p}=e;const _=a?l.Z:t?"a":"button";return s.createElement(_,(0,o.Z)({},p,t?{href:t,target:"_blank"}:{},a?{to:a}:{},{className:(0,r.Z)("button",m&&n[`button--${m}`],u&&n[`button--${u}`],n.button,n[m],c)}),i,d&&s.createElement("span",{className:n.button__decorative},d))}},44422:(e,t,a)=>{"use strict";a.d(t,{zx:()=>o.z,Zb:()=>g,SZ:()=>p,Mo:()=>b,RI:()=>_,ll:()=>m,lr:()=>I,qs:()=>C,W2:()=>A,CT:()=>F,VM:()=>z,$4:()=>H,LR:()=>G,st:()=>P,SK:()=>$,xu:()=>J});var o=a(56918),r=a(83117),s=a(67294),l=a(86010),n=a(39960);const i={card:"card_wesb",card__title:"card__title_R7iO",card__title__arrow:"card__title__arrow__PIP",card__description:"card__description_mNDO",card__img:"card__img_D7Zl","card__img-bg":"card__img-bg_cTkx","card--cloud":"card--cloud_bhYD","card--validators":"card--validators_rj6t","card--cta":"card--cta_nClz","card--content-delimited":"card--content-delimited_Q_tF"};var c;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},d.apply(this,arguments)}const u=e=>{let{title:t,titleId:a,...o}=e;return s.createElement("svg",d({width:"0.75rem",height:"0.75rem",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-labelledby":a},o),t?s.createElement("title",{id:a},t):null,c||(c=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m8.68 6.982-2.95 3.18c-.388.418-.378 1.105 0 1.524a.942.942 0 0 0 1.405 0l4.574-4.929a1.13 1.13 0 0 0 0-1.514L7.135.314a.942.942 0 0 0-1.404 0c-.187.2-.292.473-.292.757 0 .284.105.557.292.757l2.96 3.19H1.064C.477 5.018 0 5.458 0 6s.477.982 1.065.982H8.68Z",fill:"currentColor"})))};function m(e){let{as:t,children:a,className:o,withArrow:n,...c}=e;const d=t||"h3";return s.createElement(d,(0,r.Z)({className:(0,l.Z)(i.card__title,o)},c),a,n&&s.createElement("span",{className:i.card__title__arrow},s.createElement(u,null)))}function p(e){let{as:t,className:a,...o}=e;const n=t||"div";return s.createElement(n,(0,r.Z)({className:(0,l.Z)(i.card__description,a)},o))}function _(e){let{className:t,...a}=e;return s.createElement("img",(0,r.Z)({className:(0,l.Z)(i["card__img-bg"],t)},a))}function b(e){let{className:t,...a}=e;return s.createElement("img",(0,r.Z)({className:(0,l.Z)(i.card__img,t)},a))}function g(e){let{className:t,href:a,isContentDelimited:o,to:c,variant:d,...u}=e;const m=!(!a&&!c),p=c?n.Z:a?"a":"div";return s.createElement(p,(0,r.Z)({},a?{href:a,target:"_blank"}:{},c?{to:c}:{},{className:(0,l.Z)(i.card,m&&i["card--cta"],o&&i["card--content-delimited"],d&&i[`card--${d}`],t)},u))}var h,y=a(25585),f=a(22074);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},v.apply(this,arguments)}const w=e=>{let{title:t,titleId:a,...o}=e;return s.createElement("svg",v({width:"1rem",height:"1rem",viewBox:"0 0 10 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-labelledby":a},o),t?s.createElement("title",{id:a},t):null,h||(h=s.createElement("path",{d:"M9.88 14.12 3.773 8 9.88 1.88 8 0 0 8l8 8 1.88-1.88Z",fill:"currentColor"})))};var k;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},E.apply(this,arguments)}const Z=e=>{let{title:t,titleId:a,...o}=e;return s.createElement("svg",E({width:"1rem",height:"1rem",viewBox:"0 0 10 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-labelledby":a},o),t?s.createElement("title",{id:a},t):null,k||(k=s.createElement("path",{d:"M0 1.88 6.107 8 0 14.12 1.88 16l8-8-8-8L0 1.88Z",fill:"currentColor"})))};var N=a(80269);const q={carousel:"carousel_iA77",carousel__viewport:"carousel__viewport_UsLo",carousel__container:"carousel__container_gw2g",carousel__slide:"carousel__slide_Cvwr","carousel__slide--dark":"carousel__slide--dark_rToz","carousel__slide--light":"carousel__slide--light_fJ1o",carousel__arrow:"carousel__arrow_pTCD",carousel__pagination__btn:"carousel__pagination__btn_aFpz",carousel__arrow__svg:"carousel__arrow__svg_vNwf","carousel__arrow--prev":"carousel__arrow--prev_bbuA","carousel__arrow--next":"carousel__arrow--next_zlgr",carousel__pagination:"carousel__pagination_u5A5","carousel__pagination__btn--active":"carousel__pagination__btn--active_ieZg"};function C(e){let{className:t,textStyle:a,...o}=e;return s.createElement("div",(0,r.Z)({className:(0,l.Z)(q.carousel__slide,t)},o),s.createElement("div",{className:(0,l.Z)(q.carousel__text),style:a},o.children))}function I(e){let{className:t,options:a,...o}=e;const[n,i]=(0,s.useState)(0),[c,d]=(0,s.useState)([]),[u,m]=(0,y.Z)({loop:!0,...a||{}},[(0,f.Z)({delay:1e4})]),p=(0,s.useCallback)((()=>m&&m.scrollPrev()),[m]),_=(0,s.useCallback)((()=>m&&m.scrollNext()),[m]),b=(0,s.useCallback)((e=>m&&m.scrollTo(e)),[m]),g=(0,s.useCallback)((()=>{if(!m)return;i(m.selectedScrollSnap());const e=m.slideNodes()[m.selectedScrollSnap()],t=e.querySelector("img");if(t){const a=new N.Z;t.onload=()=>{const o=a.getColor(t),r=(.299*o[0]+.587*o[1]+.114*o[2])/255>.5?"#000000":"#FFFFFF";e.querySelector(`.${q.carousel__text}`).style.color=r}}}),[m]);return(0,s.useEffect)((()=>{m&&(g(),d(m.scrollSnapList()),m.on("select",g),m.on("reInit",g))}),[m,d,g]),s.createElement("div",{className:(0,l.Z)(q.carousel,t)},s.createElement("div",{ref:u,className:q.carousel__viewport},s.createElement("div",(0,r.Z)({className:q.carousel__container},o))),s.createElement("button",{"aria-label":"Previous slide",onClick:p,className:(0,l.Z)(q.carousel__arrow,q["carousel__arrow--prev"])},s.createElement(w,null)),s.createElement("button",{"aria-label":"Next slide",onClick:_,className:(0,l.Z)(q.carousel__arrow,q["carousel__arrow--next"])},s.createElement(Z,null)),s.createElement("div",{className:q.carousel__pagination},c.map(((e,t)=>s.createElement("button",{key:t,"aria-hidden":!0,tabIndex:-1,onClick:()=>b(t),className:(0,l.Z)(q.carousel__pagination__btn,t===n&&q["carousel__pagination__btn--active"])})))))}const B="container_PBms";function A(e){let{className:t,...a}=e;return s.createElement("div",(0,r.Z)({className:(0,l.Z)(B,t)},a))}const S={"features-list":"features-list_GMQ2","features-list__item":"features-list__item_lCjJ","features-list__item__icon":"features-list__item__icon_Koru","features-list__item__icon--green":"features-list__item__icon--green_isRV"},D="lwa_cuB0",T="lwa__icon_qH3s",L="lwa--apart_str9",j="lwa__content_Ktvc";function P(e){let{apart:t=!1,children:a,className:o,href:i,to:c,...d}=e;const m=c?n.Z:"a";return s.createElement(m,(0,r.Z)({className:(0,l.Z)(D,t&&L,o)},i&&{href:i,target:"_blank"},c&&{to:c},d),s.createElement("span",{className:j},a),s.createElement(u,{className:T}))}function x(e){let{children:t,className:a,href:o,icon:n,iconColor:i,label:c,to:d,...u}=e;const m=o||d?P:"span",p=o||d?"a":"span";return s.createElement("li",{className:(0,l.Z)(S["features-list__item"],a)},n&&s.createElement(p,(0,r.Z)({className:(0,l.Z)(S["features-list__item__icon"],i&&S[`features-list__item__icon--${i}`]),href:o,to:d},"a"===p?{href:d||o}:{}),s.createElement(n,null)),s.createElement(m,(0,r.Z)({className:S["features-list__item__content"],href:o,to:d},u),t||c))}function F(e){let{className:t,id:a,icon:o,iconColor:n,items:i,...c}=e;const d=`featureListItem${Math.random()}`;return s.createElement("ul",(0,r.Z)({className:(0,l.Z)(S["features-list"],t)},c),i?.map(((e,t)=>s.createElement(x,(0,r.Z)({key:`${a||d}${t}`,icon:o,iconColor:n},e)))))}const M="hero_hQsd",O="hero__title_ducK",R="hero__description_fzxk";function G(e){let{className:t,...a}=e;return s.createElement("h1",(0,r.Z)({className:(0,l.Z)(O,t)},a))}function H(e){let{className:t,...a}=e;return s.createElement("div",(0,r.Z)({className:(0,l.Z)(R,t)},a))}function z(e){let{className:t,...a}=e;return s.createElement("header",(0,r.Z)({className:(0,l.Z)(M,t)},a))}a(71410);const K="sbs-column_G69e",U="sbs-column__content_m_qN";function $(e){let{children:t,className:a,...o}=e;return s.createElement("div",(0,r.Z)({className:(0,l.Z)(K,a)},o),s.createElement("div",{className:(0,l.Z)(U,a)},t))}const W="sbs-container--spaced_YDAa",V="sbs-container_uJZe";function J(e){let{className:t,spaced:a=!0,...o}=e;return s.createElement(s.Fragment,null,s.createElement("style",{id:"side-by-side-container--styles-overrides",dangerouslySetInnerHTML:{__html:"\n            /**\n             * Overrides applied by the component 'SideBySideContainer'\n             */\n            @media (min-width: 997px) {\n\n              /**\n               * Increase the general container size\n               */\n              main article:first-child:not(.col),\n              main article:first-child:not(.col) + nav {\n                --custom-main-width: 120rem;\n              }\n            }\n\n            @media (max-width: 1536px) {\n              /**\n               * Hide the right-side nav (table of contents)\n               */\n              .container > .row > .col.col--3 {\n                display: none;\n              }\n\n              /**\n               * Increase the content-column size\n               */\n              .container > .row > .col:first-child {\n                max-width: 100% !important;\n              }\n            }\n          "}}),s.createElement("div",(0,r.Z)({className:(0,l.Z)(V,a&&W,t)},o)))}},22795:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});var o=a(83117),r=a(67294),s=a(86010),l=a(7452);const n="home_TvO7",i="home__carousel_NfFa",c="home__carousel__cta_SFWc",d="home__categories_fSIZ",u="home__categories__item_psfj",m="home__huitd_mJQD",p="home__huitd__link_HDAY";var _=a(44422);const b={page:{title:"AquaBera\u2019s documentation",description:"Automate and optimize participation in Berachain's Proof-of-Liquidity."},carousel:[{backgroundImgSrc:a(25547).Z,variant:"validators",title:"Validators",description:r.createElement(r.Fragment,null,"Maximize Delegation with Focused Strategies."),button:{label:"Learn More",decorative:"\ud83d\udcca",to:"/user-docs/pol-validators"}},{backgroundImgSrc:a(37381).Z,variant:"cloud",title:"$GBT & LP Token Holders",description:r.createElement(r.Fragment,null,"Asset Preservation & Growth."),button:{label:"Learn More",decorative:"\ud83d\udcb0",to:"/user-docs/pol-bgt-holders-farmers"}}],categories:[{cardLink:"/user-docs/intro",cardTitle:"\ud83d\udcd8 User Guide",cardDescription:"Get the most out of AquaBera with our user guide",cardImgSrc:a(19862).Z,linksIconColor:"blue",links:[{label:"\u2139\ufe0f Introduction to AquaBera",to:"user-docs/intro"},{label:"\ud83d\udd17 Understanding BeraChain\u2019s Proof-of-Liquidity (PoL)",to:"/user-docs/intro-pol"},{label:"\ud83c\udf0a Liquidity Management on Kodiak via AquaBera",to:"/user-docs/intro-kodiak"},{label:"\ud83d\uddf3\ufe0f Gauges and Voting Mechanisms",to:"/user-docs/gauges-overview"},{label:"\ud83c\udf81 Incentives and Rewards",to:"/user-docs/incentives-overview"}]},{cardLink:"/community/intro",cardTitle:"\ud83d\udc65 Community",cardDescription:"Join and engage with the AquaBera community.",cardImgSrc:a(6245).Z,linksIconColor:"purple",links:[{label:"\ud83d\udcb0 Tokenomics",to:"/community/tokenomics"},{label:"\ud83d\udcf1 Socials",to:"/community/socials"},{label:"\ud83d\udcac Forum",to:"/community/forum"}]},{cardLink:"/dev-docs/intro",cardTitle:"\ud83d\udcbb Developer Documentation",cardDescription:"All you need to get your project up-and-running, and become an AquaBera expert",cardImgSrc:a(25786).Z,linksIconColor:"green",links:[{label:"\ud83d\udcdc Deployed Contracts",to:"/dev-docs/deployed-contracts"},{label:"\ud83d\udd0d Audits",to:"/dev-docs/audits"},{label:"\ud83d\udd27 GitHub",to:"https://github.com/labs-solo/aberabook"}]}],huitd:{label:"Help us improve the documentation",href:"https://github.com/labs-solo/aberabook"}};function g(){const[e,t]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{function e(){t(window.scrollY<=36)}return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),r.createElement(l.Z,{title:b.page.title,description:b.page.description},e&&r.createElement("style",{dangerouslySetInnerHTML:{__html:"\n              .navbar {\n                --ifm-navbar-background-color: transparent;\n                --ifm-navbar-shadow: none;\n              }\n            "}}),r.createElement("style",{dangerouslySetInnerHTML:{__html:"\n            html[data-theme='dark'] {\n              --ifm-background-color: #181826;\n              --ifm-navbar-background-color: #181826;\n\n              --strapi-primary-600: #4945FF;\n            }\n\n            html[data-theme='dark'] .navbar .DocSearch-Button {\n              background: var(--strapi-neutral-0);\n            }\n          "}}),r.createElement("main",{className:(0,s.Z)("font-poppins",n)},r.createElement(_.VM,{id:"homeHero"},r.createElement(_.W2,null,r.createElement(_.LR,null,b.page.title),r.createElement(_.$4,null,b.page.description))),r.createElement("section",{id:"homeCarousel",className:i},r.createElement(_.W2,null,r.createElement(_.lr,null,b.carousel.map(((e,t)=>{let{backgroundImgSrc:a,title:s,description:l,button:n,...i}=e;return r.createElement(_.qs,{key:`pageHomeCarouselItem${t}`},r.createElement(_.Zb,(0,o.Z)({isContentDelimited:!0},i),a&&r.createElement(_.RI,{src:a}),s&&r.createElement(_.ll,{as:"h2"},s),l&&r.createElement(_.SZ,null,l),n&&r.createElement("div",{className:c},r.createElement(_.zx,(0,o.Z)({size:"huge"},n),n.children||n.label))))}))))),r.createElement("section",{id:"homeCategories",className:d},r.createElement(_.W2,null,r.createElement("div",{className:"row row--huge"},b.categories.map(((e,t)=>{let{cardTitle:a,cardDescription:o,cardImgSrc:l,cardLink:n,...i}=e;return r.createElement("div",{key:`pageHomeCategoryItem${t}`,className:(0,s.Z)("col","col--6",u)},r.createElement(_.Zb,{to:n},a&&r.createElement(_.ll,{withArrow:!0},a),o&&r.createElement(_.SZ,null,o),l&&r.createElement(_.Mo,{src:l})),i.links&&r.createElement(_.CT,{icon:i.linksIconSrc,iconColor:i.linksIconColor,items:i.links}))}))))),r.createElement("section",{id:"homeHelpUsImproveTheDocumentation",className:m},r.createElement(_.W2,null,r.createElement(_.st,(0,o.Z)({apart:!0,className:p},b.huitd),b.huitd.label)))))}},37381:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/Asset_owners-16243c378cdd4084af0c9353988ec326.jpg"},25547:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/Validators-4c0a1ae11d5751eb74d3697c560a4209.jpg"},6245:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/preview--community-ce98ebaa54935aca70a64547138733b2.jpg"},25786:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/preview--dev-docs-21463ac411816ffc205320352956c8a4.jpg"},19862:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/preview--user-guides-52664ce0a61c93a5efcd07e0ee0e341a.jpg"}}]);