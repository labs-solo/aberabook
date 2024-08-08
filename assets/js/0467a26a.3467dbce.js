"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[7784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(y,s(s({ref:t},u),{},{components:n})):a.createElement(y,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const o={title:"Ruby",displayed_sidebar:"devDocsSidebar",description:"Integrate Strapi with Ruby."},s="Getting Started with Ruby",i={unversionedId:"dev-docs/integrations/ruby",id:"dev-docs/integrations/ruby",title:"Ruby",description:"Integrate Strapi with Ruby.",source:"@site/docs/dev-docs/integrations/ruby.md",sourceDirName:"dev-docs/integrations",slug:"/dev-docs/integrations/ruby",permalink:"/aberabook/dev-docs/integrations/ruby",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/integrations/ruby.md",tags:[],version:"current",frontMatter:{title:"Ruby",displayed_sidebar:"devDocsSidebar",description:"Integrate Strapi with Ruby."},sidebar:"devDocsSidebar",previous:{title:"React",permalink:"/aberabook/dev-docs/integrations/react"},next:{title:"Sapper",permalink:"/aberabook/dev-docs/integrations/sapper"}},l={},p=[{value:"Create a Ruby file",id:"create-a-ruby-file",level:2},{value:"Use an HTTP client",id:"use-an-http-client",level:2},{value:"GET Request your collection type",id:"get-request-your-collection-type",level:2},{value:"Example",id:"example",level:3},{value:"POST Request your collection type",id:"post-request-your-collection-type",level:2},{value:"Example",id:"example-1",level:3},{value:"PUT Request your collection type",id:"put-request-your-collection-type",level:2},{value:"Example",id:"example-2",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=u("ApiCall"),d=u("Request"),m=u("Response"),y={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-ruby"},"Getting Started with Ruby"),(0,r.kt)("p",null,"This integration guide follows the ",(0,r.kt)("a",{parentName:"p",href:"/dev-docs/quick-start"},"Quick Start Guide"),' and assumes you have you have fully completed the "Hands-on" path. You should be able to consume the API by browsing the URL ',(0,r.kt)("a",{parentName:"p",href:"http://localhost:1337/api/restaurants"},"http://localhost:1337/api/restaurants"),"."),(0,r.kt)("p",null,"If you haven't gone through the Quick Start Guide, the way you request a Strapi API with ",(0,r.kt)("a",{parentName:"p",href:"https://www.ruby-lang.org/en/"},"Ruby")," remains the same except that you do not fetch the same content."),(0,r.kt)("h2",{id:"create-a-ruby-file"},"Create a Ruby file"),(0,r.kt)("p",null,"Be sure to have ",(0,r.kt)("a",{parentName:"p",href:"https://www.ruby-lang.org/en/documentation/installation/"},"Ruby installed")," on your computer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ruby-app && cd ruby-app\ntouch script.rb\n")),(0,r.kt)("h2",{id:"use-an-http-client"},"Use an HTTP client"),(0,r.kt)("p",null,"Many HTTP clients are available but in this documentation we'll use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jnunemaker/httparty"},"HTTParty"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Gemfile")," containing the following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'source "https://rubygems.org"\n\ngem "httparty"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install your gems by running the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bundle install\n")),(0,r.kt)("h2",{id:"get-request-your-collection-type"},"GET Request your collection type"),(0,r.kt)("p",null,"Execute a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request on the ",(0,r.kt)("inlineCode",{parentName:"p"},"restaurant")," collection type in order to fetch all your restaurants."),(0,r.kt)("p",null,"Be sure that you activated the ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," permission for the ",(0,r.kt)("inlineCode",{parentName:"p"},"restaurant")," collection type."),(0,r.kt)(c,{noSideBySide:!0,mdxType:"ApiCall"},(0,r.kt)(d,{title:"Example GET request",mdxType:"Request"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"HTTParty.get('http://localhost:1337/api/restaurants/')\n"))),(0,r.kt)(m,{title:"Example response",mdxType:"Response"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 1,\n      "attributes": {\n        "name": "Biscotte Restaurant",\n        "description": "Biscotte restaurant! Restaurant Biscotte offers a cuisine based on fresh, quality products, often local, organic when possible, and always produced by passionate producers.",\n        "createdAt": "2022-07-31T11:57:01.330Z",\n        "updatedAt": "2022-07-31T11:57:44.945Z",\n        "publishedAt": "2022-07-31T11:57:44.943Z"\n      }\n    }\n  ],\n  "meta": {\n    "pagination": {\n      "page": 1,\n      "pageSize": 25,\n      "pageCount": 1,\n      "total": 1\n    }\n  }\n}\n')))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'httparty'\n\nclass Restaurant\n  include HTTParty\n  base_uri 'http://localhost:1337/api'\n\n  def all\n    self.class.get('/restaurants')\n  end\nend\n\nrestaurant = Restaurant.new\nputs restaurant.all\n")),(0,r.kt)("h2",{id:"post-request-your-collection-type"},"POST Request your collection type"),(0,r.kt)("p",null,"Execute a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request on the ",(0,r.kt)("inlineCode",{parentName:"p"},"restaurant")," collection type in order to create a restaurant."),(0,r.kt)("p",null,"Be sure that you activated the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," permission for the ",(0,r.kt)("inlineCode",{parentName:"p"},"restaurant")," collection type and the ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," permission for the ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," Collection type.\nAdd the ",(0,r.kt)("inlineCode",{parentName:"p"},"?populate=categories")," query parameter to return the categories with the response."),(0,r.kt)("p",null,"In this example a ",(0,r.kt)("inlineCode",{parentName:"p"},"japanese")," category has been created which has the id: 3."),(0,r.kt)(c,{noSideBySide:!0,mdxType:"ApiCall"},(0,r.kt)(d,{title:"Example POST request",mdxType:"Request"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"HTTParty.post(\n  'http://localhost:1337/api/restaurants/',\n  body: {\n    data: {\n      name: 'Dolemon Sushi',\n      description: 'Unmissable Japanese Sushi restaurant. The cheese and salmon makis are delicious',\n      categories: [3]\n    }\n  },\n  header: {\n    'Content-Type': 'application/json'\n  },\n  query: {\n    'populate': 'categories'\n  }\n)\n"))),(0,r.kt)(m,{title:"Example response",mdxType:"Response"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "id": 2,\n    "attributes": {\n      "name": "Dolemon Sushi",\n      "description": "Unmissable Japanese Sushi restaurant. The cheese and salmon makis are delicious",\n      "createdAt": "2022-07-31T18:29:58.876Z",\n      "updatedAt": "2022-07-31T18:29:58.876Z",\n      "publishedAt": "2022-07-31T18:29:58.875Z",\n      "categories": {\n        "data": [\n          {\n            "id": 3,\n            "attributes": {\n              "name": "japanese",\n              "createdAt": "2022-07-31T11:57:35.040Z",\n              "updatedAt": "2022-07-31T11:57:35.631Z",\n              "publishedAt": "2022-07-31T11:57:35.629Z"\n            }\n          }\n        ]\n      }\n    }\n  },\n  "meta": {}\n}\n')))),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'httparty'\n\nclass Restaurant\n  include HTTParty\n  base_uri 'http://localhost:1337/api'\n\n  def initialize\n    @options = {\n      header: { 'Content-Type': 'application/json' },\n      query: { 'populate': 'categories' }\n    }\n  end\n\n  def all\n    self.class.get('/restaurants')\n  end\n\n  def create(params)\n    @options[:body] = {\n      data: {\n        name: params[:name],\n        description: params[:description],\n        categories: params[:categories]\n      }\n    }\n\n    self.class.post('/restaurants', @options)\n  end\nend\n\nrestaurant = Restaurant.new\nputs restaurant.create({\n  name: 'Dolemon Sushi',\n  description: 'Unmissable Japanese Sushi restaurant. The cheese and salmon makis are delicious',\n  categories: [3]\n})\n")),(0,r.kt)("h2",{id:"put-request-your-collection-type"},"PUT Request your collection type"),(0,r.kt)("p",null,"Execute a ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," request on the ",(0,r.kt)("inlineCode",{parentName:"p"},"restaurant")," collection type in order to update the category of a restaurant."),(0,r.kt)("p",null,"Be sure that you activated the ",(0,r.kt)("inlineCode",{parentName:"p"},"put")," permission for the ",(0,r.kt)("inlineCode",{parentName:"p"},"restaurant")," collection type.\nAdd the ",(0,r.kt)("inlineCode",{parentName:"p"},"?populate=categories")," query parameter to return the categories with the response."),(0,r.kt)(c,{noSideBySide:!0,mdxType:"ApiCall"},(0,r.kt)(d,{title:"Example PUT request",mdxType:"Request"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"HTTParty.put(\n  'http://localhost:1337/api/restaurants/2',\n  body: {\n    data: {\n      categories: [2]\n    }\n  },\n  header: {\n    'Content-Type': 'application/json'\n  },\n  query: {\n    'populate': 'categories'\n  }\n)\n"))),(0,r.kt)(m,{title:"Example response",mdxType:"Response"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "id": 2,\n    "attributes": {\n      "name": "Dolemon Sushi",\n      "description": "Unmissable Japanese Sushi restaurant. The cheese and salmon makis are delicious",\n      "createdAt": "2022-07-31T18:15:09.290Z",\n      "updatedAt": "2022-07-31T18:16:53.448Z",\n      "publishedAt": "2022-07-31T18:15:09.289Z",\n      "categories": {\n        "data": [\n          {\n            "id": 2,\n            "attributes": {\n              "name": "Brunch",\n              "createdAt": "2022-07-31T11:57:23.472Z",\n              "updatedAt": "2022-07-31T11:57:25.180Z",\n              "publishedAt": "2022-07-31T11:57:25.179Z"\n            }\n          }\n        ]\n      }\n    }\n  },\n  "meta": {}\n}\n')))),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'httparty'\n\nclass Restaurant\n  include HTTParty\n  base_uri 'http://localhost:1337/api'\n\n  def initialize\n    @options = {\n      header: { 'Content-Type': 'application/json' },\n      query: { 'populate': 'categories' }\n    }\n  end\n\n  def all\n    self.class.get('/restaurants')\n  end\n\n  def create(params)\n    @options[:body] = {\n      data: {\n        name: params[:name],\n        description: params[:description],\n        categories: params[:categories]\n      }\n    }\n\n    self.class.post('/restaurants', @options)\n  end\n\n  def update(id, params)\n    @options[:body] = {\n      data: {\n        categories: params[:categories]\n      }\n    }\n    self.class.put(\"/restaurants/#{id}\", @options)\n  end\nend\n\nrestaurant = Restaurant.new\nputs restaurant.update(16, { categories: [2] })\n")))}h.isMDXComponent=!0}}]);