"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[5599],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),k=n,g=c["".concat(s,".").concat(k)]||c[k]||p[k]||o;return a?i.createElement(g,r(r({ref:t},d),{},{components:a})):i.createElement(g,r({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},27062:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=a(83117),n=(a(67294),a(3905));const o={},r="Creating and Managing Liquidity Pools on Kodiak",l={unversionedId:"user-docs/manage-liquidity-pools",id:"user-docs/manage-liquidity-pools",title:"Creating and Managing Liquidity Pools on Kodiak",description:"Introduction",source:"@site/docs/user-docs/manage-liquidity-pools.md",sourceDirName:"user-docs",slug:"/user-docs/manage-liquidity-pools",permalink:"/user-docs/manage-liquidity-pools",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/user-docs/manage-liquidity-pools.md",tags:[],version:"current",frontMatter:{},sidebar:"userDocsSidebar",previous:{title:"Key Concepts: Liquidity, Islands",permalink:"/user-docs/kodiak-concepts"},next:{title:"Liquidity Strategies with AquaBera",permalink:"/user-docs/liquidity-strategies"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Steps to Get a New AquaBera Vault Working",id:"steps-to-get-a-new-aquabera-vault-working",level:2},{value:"1. Confirm the Pool on Kodiak V3",id:"1-confirm-the-pool-on-kodiak-v3",level:3},{value:"2. Contact AquaBera for a New Vault",id:"2-contact-aquabera-for-a-new-vault",level:3},{value:"3. Confirm Tokens in Kodiak UI",id:"3-confirm-tokens-in-kodiak-ui",level:3},{value:"4. Deposit to the AquaBera Vault",id:"4-deposit-to-the-aquabera-vault",level:3},{value:"5. Request a Gauge on the Vault",id:"5-request-a-gauge-on-the-vault",level:3},{value:"6. (Optional) Provide Additional Incentives",id:"6-optional-provide-additional-incentives",level:3},{value:"Advantages of Using AquaBera with Kodiak",id:"advantages-of-using-aquabera-with-kodiak",level:2}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creating-and-managing-liquidity-pools-on-kodiak"},"Creating and Managing Liquidity Pools on Kodiak"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Creating and managing liquidity pools on Kodiak V3 allows users to optimize liquidity provision and maximize returns. AquaBera seamlessly integrates with Kodiak, enhancing your ability to manage directional liquidity, optimize capital efficiency, and support your token's liquidity strength."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"steps-to-get-a-new-aquabera-vault-working"},"Steps to Get a New AquaBera Vault Working"),(0,n.kt)("h3",{id:"1-confirm-the-pool-on-kodiak-v3"},"1. Confirm the Pool on Kodiak V3"),(0,n.kt)("p",null,"Ensure the pool exists on Kodiak V3. If not, create it by following these steps:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to Create a Pool on Kodiak V3:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Navigate to the Pool Interface"),': Access the Kodiak V3 user interface and select "Create Pool."'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Select Tokens"),": Choose the token pairs for your pool."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Set Price Range"),": Define the price range for your liquidity."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Deposit Liquidity"),": Enter the amount of each token to deposit."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Confirm and Add Liquidity"),": Finalize the pool creation by confirming the transaction.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"2-contact-aquabera-for-a-new-vault"},"2. Contact AquaBera for a New Vault"),(0,n.kt)("p",null,"Once the pool is set up, contact AquaBera to create a new vault on top of this pool. AquaBera will deploy the on-chain contracts necessary to manage the directional liquidity, optimizing returns and reducing risk."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"3-confirm-tokens-in-kodiak-ui"},"3. Confirm Tokens in Kodiak UI"),(0,n.kt)("p",null,"Ensure that both tokens in your pool are listed in the Kodiak UI. If either token is missing, follow these steps:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to Add Your Token to Kodiak\u2019s Interface:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Token Verification"),": Ensure your token meets Kodiak's listing requirements."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Submit for Listing"),": Use Kodiak\u2019s submission interface to propose your token for listing."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Integrate into Pools"),": Once approved, your token will be available for integration into liquidity pools.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"4-deposit-to-the-aquabera-vault"},"4. Deposit to the AquaBera Vault"),(0,n.kt)("p",null,"With the vault created, deposit your assets into the AquaBera vault. AquaBera\u2019s advanced strategies will manage the liquidity and optimize returns."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"5-request-a-gauge-on-the-vault"},"5. Request a Gauge on the Vault"),(0,n.kt)("p",null,"Request a gauge on the vault from Berachain governance to direct $BGT emissions towards your vault, enhancing rewards."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"6-optional-provide-additional-incentives"},"6. (Optional) Provide Additional Incentives"),(0,n.kt)("p",null,"To further increase $BGT emissions and attract more deposits, provide additional incentives on the gauge. This step helps ensure your vault receives more attention and resources, leading to higher rewards for all participants."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"advantages-of-using-aquabera-with-kodiak"},"Advantages of Using AquaBera with Kodiak"),(0,n.kt)("p",null,"AquaBera enhances the liquidity management process on Kodiak by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Directional Liquidity"),": Tools for managing liquidity that align with your market outlook, avoiding the need for active management of price ranges."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"No Gas Fees for Adjustments"),": All liquidity management is on-chain and automated, so you don't have to worry about paying gas fees for rebalancing."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Continuous Earnings"),": Automation keeps your liquidity earning even as market conditions change, reducing the risk of underperformance."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Minimized Risk"),": AquaBera helps avoid over-selling your deposit asset, thereby minimizing exposure to market fluctuations."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cost Efficiency"),": AquaBera's inventory management enables protocols to pay less for additional liquidity while also providing benefits to depositors through automation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Increased Rewards"),": Generate higher fee income compared to traditional AMMs, with the system's design focused on optimizing returns for all participants.")))}p.isMDXComponent=!0}}]);