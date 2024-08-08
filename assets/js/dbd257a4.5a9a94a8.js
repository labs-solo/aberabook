"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[7654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const i={title:"11ty",displayed_sidebar:"devDocsSidebar",description:"Integrate Strapi with 11ty."},o="Getting Started with 11ty",l={unversionedId:"dev-docs/integrations/11ty",id:"dev-docs/integrations/11ty",title:"11ty",description:"Integrate Strapi with 11ty.",source:"@site/docs/dev-docs/integrations/11ty.md",sourceDirName:"dev-docs/integrations",slug:"/dev-docs/integrations/11ty",permalink:"/aberabook/dev-docs/integrations/11ty",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/integrations/11ty.md",tags:[],version:"current",frontMatter:{title:"11ty",displayed_sidebar:"devDocsSidebar",description:"Integrate Strapi with 11ty."},sidebar:"devDocsSidebar",previous:{title:"Integrations",permalink:"/aberabook/dev-docs/integrations"},next:{title:"Angular",permalink:"/aberabook/dev-docs/integrations/angular"}},s={},p=[{value:"Create an 11ty app",id:"create-an-11ty-app",level:2},{value:"Configure 11ty",id:"configure-11ty",level:2},{value:"GET Request your collection type",id:"get-request-your-collection-type",level:2},{value:"Example",id:"example",level:3},{value:"Example",id:"example-1",level:3},{value:"User Stories",id:"user-stories",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=u("Tabs"),c=u("TabItem"),m=u("ApiCall"),y=u("Request"),g=u("Response"),h={toc:p};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-11ty"},"Getting Started with 11ty"),(0,r.kt)("p",null,"This integration guide follows the ",(0,r.kt)("a",{parentName:"p",href:"/dev-docs/quick-start"},"Quick Start Guide"),' and assumes you have you have fully completed the "Hands-on" path. You should be able to consume the API by browsing the URL ',(0,r.kt)("a",{parentName:"p",href:"http://localhost:1337/api/restaurants"},"http://localhost:1337/api/restaurants"),"."),(0,r.kt)("p",null,"If you haven't gone through the Quick Start Guide, the way you request a Strapi API with ",(0,r.kt)("a",{parentName:"p",href:"https://www.11ty.dev/"},"11ty")," remains the same except that you do not fetch the same content."),(0,r.kt)("h2",{id:"create-an-11ty-app"},"Create an 11ty app"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file, install and save Eleventy into your project."),(0,r.kt)(d,{groupId:"yarn-npm",mdxType:"Tabs"},(0,r.kt)(c,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init -y\nyarn add @11ty/eleventy\n"))),(0,r.kt)(c,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\nnpm install @11ty/eleventy\n")))),(0,r.kt)("p",null,"Confirm the installation went ok:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @11ty/eleventy\n# Wrote 0 files in 0.02 seconds (v0.11.0)\n")),(0,r.kt)("h2",{id:"configure-11ty"},"Configure 11ty"),(0,r.kt)("p",null,"11ty does not create any file structure for you. It's up to you to do it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"./src/_data")," folder containing a ",(0,r.kt)("inlineCode",{parentName:"li"},"categories.js")," and a ",(0,r.kt)("inlineCode",{parentName:"li"},"restaurants.js")," file. They will be used to fetch your content from Strapi."),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"./src/_templates")," folder containing a ",(0,r.kt)("inlineCode",{parentName:"li"},"default.liquid")," file. It will be the default template of your project.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta content="width=device-width, initial-scale=1.0" name="viewport" />\n    <title>\n      {{ renderData.title }}\n    </title>\n  </head>\n\n  <body>\n    <a href="/">Home</a>\n    {{ content }}\n  </body>\n</html>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"./src/index.md"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"./src/restaurant.md")," and a ",(0,r.kt)("inlineCode",{parentName:"li"},"./src/category.md")," file. They will define how you'll present the data."),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},".eleventy.js")," file containing the following (make sure to prefix the file's name with the dot):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const HtmlMin = require('html-minifier');\nconst ErrorOverlay = require('eleventy-plugin-error-overlay');\n\nmodule.exports = eleventyConfig => {\n  eleventyConfig.setTemplateFormats(['md']);\n  eleventyConfig.addPlugin(ErrorOverlay);\n  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {\n    if (outputPath.endsWith('.html')) {\n      let minified = HtmlMin.minify(content, {\n        useShortDoctype: true,\n        removeComments: true,\n        collapseWhitespace: true,\n      });\n      return minified;\n    }\n    return content;\n  });\n  return {\n    dir: {\n      input: 'src',\n      output: 'dist',\n      includes: '_templates',\n      data: '_data',\n    },\n    jsDataFileSuffix: '.data',\n  };\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finally, add the following packages to your application:")),(0,r.kt)(d,{groupId:"yarn-npm",mdxType:"Tabs"},(0,r.kt)(c,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add axios eleventy-plugin-error-overlay html-minifier\n"))),(0,r.kt)(c,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install axios eleventy-plugin-error-overlay html-minifier\n")))),(0,r.kt)("h2",{id:"get-request-your-collection-type"},"GET Request your collection type"),(0,r.kt)("p",null,"Execute a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request on the ",(0,r.kt)("inlineCode",{parentName:"p"},"restaurant")," collection type in order to fetch all your restaurants."),(0,r.kt)("p",null,"Be sure that you activated the ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," permission for the ",(0,r.kt)("inlineCode",{parentName:"p"},"restaurant")," collection type."),(0,r.kt)(m,{noSideBySide:!0,mdxType:"ApiCall"},(0,r.kt)(y,{title:"Example GET request",mdxType:"Request"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { default: axios } = require('axios');\n\nmodule.exports = async () => {\n  try {\n    const res = await axios.get('http://localhost:1337/api/restaurants?populate=*');\n    return res.data;\n  } catch (error) {\n    console.error(error);\n  }\n};\n"))),(0,r.kt)(g,{title:"Example response",mdxType:"Response"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "id": 1,\n            "attributes": {\n                "name": "Biscotte Restaurant",\n                "description": "Welcome to Biscotte restaurant! Restaurant Biscotte offers a cuisine based on fresh, quality products, often local, organic when possible, and always produced by passionate producers.",\n                "createdAt": "2022-05-23T09:41:46.762Z",\n                "updatedAt": "2022-05-23T09:44:32.424Z",\n                "publishedAt": "2022-05-23T09:44:32.423Z",\n                "categories": {\n                    "data": [\n                        {\n                            "id": 2,\n                            "attributes": {\n                                "name": "Brunch",\n                                "createdAt": "2022-05-23T09:42:16.764Z",\n                                "updatedAt": "2022-05-23T09:44:21.534Z",\n                                "publishedAt": "2022-05-23T09:44:21.532Z"\n                            }\n                        }\n                    ]\n                }\n            }\n        }\n    ],\n    "meta": {\n        "pagination": {\n            "page": 1,\n            "pageSize": 25,\n            "pageCount": 1,\n            "total": 1\n        }\n    }\n}\n')))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"./src/_data/restaurants.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { default: axios } = require('axios');\n\nmodule.exports = async () => {\n  try {\n    const res = await axios.get('http://localhost:1337/api/restaurants?populate=*');\n    return res.data;\n  } catch (error) {\n    console.error(error);\n  }\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"./src/index.md")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: Restaurants\nlayout: default.liquid\npagination:\n  data: restaurants.data\n  size: 100\n  alias: restaurants\n---\n\n# Restaurants\n\n<ul>\n{%- for restaurant in restaurants -%}\n  <li><a href="/restaurants/{{ restaurant.id }}/">{{ restaurant.attributes.name }}</a></li>\n{%- endfor -%}\n</ul>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"./src/restaurant.md")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"---\neleventyComputed:\n  title: {{ restaurant.attributes.name }}\nlayout: default.liquid\npagination:\n  data: restaurants.data\n  size: 1\n  alias: restaurant\npermalink: 'restaurants/{{ restaurant.id }}/'\n---\n\n# {{ restaurant.attributes.name }}\n\n{{ restaurant.attributes.description }}\n\n## Categories\n\n{% for category in restaurant.attributes.categories.data %}\n\n  <li><a href=\"/categories/{{ category.id }}/\">{{ category.attributes.name }}</a></li>\n{% endfor %}\n")),(0,r.kt)("p",null,"Execute a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request on the ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," collection type in order to fetch a specific category with all the associated restaurants."),(0,r.kt)("p",null,"Be sure that you activated the ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," permission for the ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," collection type."),(0,r.kt)(m,{noSideBySide:!0,mdxType:"ApiCall"},(0,r.kt)(y,{title:"Example GET request",mdxType:"Request"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { default: axios } = require('axios');\n\nmodule.exports = async () => {\n  try {\n    const res = await axios.get('http://localhost:1337/api/categories?populate=*');\n    return res.data;\n  } catch (error) {\n    console.error(error);\n  }\n};\n"))),(0,r.kt)(g,{title:"Example response",mdxType:"Response"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "id": 1,\n            "attributes": {\n                "name": "French Food",\n                "createdAt": "2022-05-23T09:42:04.679Z",\n                "updatedAt": "2022-05-23T09:44:25.309Z",\n                "publishedAt": "2022-05-23T09:44:25.308Z",\n                "restaurants": {\n                    "data": []\n                }\n            }\n        },\n        {\n            "id": 2,\n            "attributes": {\n                "name": "Brunch",\n                "createdAt": "2022-05-23T09:42:16.764Z",\n                "updatedAt": "2022-05-23T09:44:21.534Z",\n                "publishedAt": "2022-05-23T09:44:21.532Z",\n                "restaurants": {\n                    "data": [\n                        {\n                            "id": 1,\n                            "attributes": {\n                                "name": "Biscotte Restaurant",\n                                "description": "Welcome to Biscotte restaurant! **Restaurant Biscotte** offers a cuisine based on fresh, quality products, often local, organic when possible, and always produced by passionate producers.",\n                                "createdAt": "2022-05-23T09:41:46.762Z",\n                                "updatedAt": "2022-05-23T09:44:32.424Z",\n                                "publishedAt": "2022-05-23T09:44:32.423Z"\n                            }\n                        }\n                    ]\n                }\n            }\n        }\n    ],\n    "meta": {\n        "pagination": {\n            "page": 1,\n            "pageSize": 25,\n            "pageCount": 1,\n            "total": 2\n        }\n    }\n}\n')))),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"./src/_data/categories.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { default: axios } = require('axios');\n\nmodule.exports = async () => {\n  try {\n    const res = await axios.get('http://localhost:1337/api/categories?populate=*');\n    return res.data;\n  } catch (error) {\n    console.error(error);\n  }\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"./src/category.md")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"---\neleventyComputed:\n  title: {{ category.attributes.name }}\nlayout: default.liquid\npagination:\n  data: categories.data\n  size: 1\n  alias: category\npermalink: 'categories/{{ category.id }}/'\n---\n\n# {{ category.name }}\n\n## Restaurants\n\n{% for restaurant in category.attributes.restaurants.data %}\n\n<li><a href=\"/restaurants/{{ restaurant.id }}/\">{{ restaurant.attributes.name }}</a></li>\n{% endfor %}\n")),(0,r.kt)("p",null,"You can find your restaurants and categories by browsing ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8081/restaurants/<id-of-restaurant>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8081/categories/<id-of-category>"),"."),(0,r.kt)("h2",{id:"user-stories"},"User Stories"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How ",(0,r.kt)("a",{parentName:"li",href:"https://strapi.io/user-stories/paradigma-digital-brand"},"Paradigma Digital")," switched from Wordpress to Strapi and Eleventy.")))}f.isMDXComponent=!0}}]);