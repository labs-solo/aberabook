"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[6063],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=s,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(83117),s=(n(67294),n(3905));const r={title:"Testing",displayed_sidebar:"devDocsSidebar",description:"Learn how to test your Strapi application."},i="Unit testing",o={unversionedId:"dev-docs/testing",id:"dev-docs/testing",title:"Testing",description:"Learn how to test your Strapi application.",source:"@site/docs/dev-docs/testing.md",sourceDirName:"dev-docs",slug:"/dev-docs/testing",permalink:"/aberabook/dev-docs/testing",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/testing.md",tags:[],version:"current",frontMatter:{title:"Testing",displayed_sidebar:"devDocsSidebar",description:"Learn how to test your Strapi application."},sidebar:"devDocsSidebar"},l={},p=[{value:"Install test tools",id:"install-test-tools",level:2},{value:"Set up a testing environment",id:"set-up-a-testing-environment",level:2},{value:"Create a Strapi instance",id:"create-a-strapi-instance",level:2},{value:"Test a Strapi instance",id:"test-a-strapi-instance",level:2},{value:"Test a basic endpoint controller",id:"test-a-basic-endpoint-controller",level:2},{value:"Test an <code>auth</code> endpoint controller",id:"test-an-auth-endpoint-controller",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},u=d("Tabs"),c=d("TabItem"),m={toc:p};function h(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"unit-testing"},"Unit testing"),(0,s.kt)("p",null,"In this guide we will see how you can run basic unit tests for a Strapi application using a testing framework."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"In this example we will use ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," Testing Framework with a focus on simplicity and\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/visionmedia/supertest"},"Supertest")," Super-agent driven library for testing node.js HTTP servers using a fluent API.")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Please note that this guide will not work if you are on Windows using the SQLite database due to how windows locks the SQLite file."),(0,s.kt)("li",{parentName:"ul"},"This page is a work-in-progress and might be outdated. It will be heavily reworked once Strapi v5 is out."))),(0,s.kt)("h2",{id:"install-test-tools"},"Install test tools"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Jest")," contains a set of guidelines or rules used for creating and designing test cases - a combination of practices and tools that are designed to help testers test more efficiently."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Supertest")," allows you to test all the ",(0,s.kt)("inlineCode",{parentName:"p"},"api")," routes as they were instances of ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.md#http_class_http_server"},"http.Server"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"sqlite3")," is used to create an on-disk database that is created and deleted between tests."),(0,s.kt)(u,{groupId:"yarn-npm",mdxType:"Tabs"},(0,s.kt)(c,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev jest supertest sqlite3\n"))),(0,s.kt)(c,{value:"npm",label:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install jest supertest sqlite3 --save-dev\n")))),(0,s.kt)("p",null,"Once this is done add this to ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," file"),(0,s.kt)("p",null,"add ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," command to ",(0,s.kt)("inlineCode",{parentName:"p"},"scripts")," section"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "develop": "strapi develop",\n    "start": "strapi start",\n    "build": "strapi build",\n    "strapi": "strapi",\n    "test": "jest --forceExit --detectOpenHandles"\n  },\n')),(0,s.kt)("p",null,"and add those lines at the bottom of file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'  "jest": {\n    "testPathIgnorePatterns": [\n      "/node_modules/",\n      ".tmp",\n      ".cache"\n    ],\n    "testEnvironment": "node"\n  }\n')),(0,s.kt)("p",null,"Those will inform ",(0,s.kt)("inlineCode",{parentName:"p"},"Jest")," not to look for test inside the folder where it shouldn't."),(0,s.kt)("h2",{id:"set-up-a-testing-environment"},"Set up a testing environment"),(0,s.kt)("p",null,"Test framework must have a clean empty environment to perform valid test and also not to interfere with current database."),(0,s.kt)("p",null,"Once ",(0,s.kt)("inlineCode",{parentName:"p"},"jest")," is running it uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," ",(0,s.kt)("a",{parentName:"p",href:"/dev-docs/configurations/environment"},"environment")," (switching ",(0,s.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"test"),")\nso we need to create a special environment setting for this purpose.\nCreate a new config for test env ",(0,s.kt)("inlineCode",{parentName:"p"},"./config/env/test/database.js")," and add the following value ",(0,s.kt)("inlineCode",{parentName:"p"},'"filename": ".tmp/test.db"'),"\u200a-\u200athe reason of that is that we want to have a separate sqlite database for tests, so our test will not touch real data.\nThis file will be temporary, each time test is finished, we will remove that file that every time tests are run on the clean database.\nThe whole file will look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="path: ./config/env/test/database.js"',title:'"path:','./config/env/test/database.js"':!0},"\nmodule.exports = ({ env }) => ({\n  connection: {\n    client: 'sqlite',\n    connection: {\n      filename: env('DATABASE_FILENAME', '.tmp/test.db'),\n    },\n    useNullAsDefault: true,\n    debug: false\n  },\n});\n")),(0,s.kt)("h2",{id:"create-a-strapi-instance"},"Create a Strapi instance"),(0,s.kt)("p",null,"In order to test anything we need to have a strapi instance that runs in the testing environment,\nbasically we want to get instance of strapi app as object, similar like creating an instance for ",(0,s.kt)("a",{parentName:"p",href:"/dev-docs/deployment/process-manager"},"process manager"),"."),(0,s.kt)("p",null,"These tasks require adding some files - let's create a folder ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," where all the tests will be put and inside it, next to folder ",(0,s.kt)("inlineCode",{parentName:"p"},"helpers")," where main Strapi helper will be in file strapi.js."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="path: ./tests/helpers/strapi.js"',title:'"path:','./tests/helpers/strapi.js"':!0},'const Strapi = require("@strapi/strapi");\nconst fs = require("fs");\n\nlet instance;\n\nasync function setupStrapi() {\n  if (!instance) {\n    await Strapi().load();\n    instance = strapi;\n    \n    await instance.server.mount();\n  }\n  return instance;\n}\n\nasync function cleanupStrapi() {\n  const dbSettings = strapi.config.get("database.connection");\n\n  //close server to release the db-file\n  await strapi.server.httpServer.close();\n\n  // close the connection to the database before deletion\n  await strapi.db.connection.destroy();\n\n  //delete test database after all tests have completed\n  if (dbSettings && dbSettings.connection && dbSettings.connection.filename) {\n    const tmpDbFile = dbSettings.connection.filename;\n    if (fs.existsSync(tmpDbFile)) {\n      fs.unlinkSync(tmpDbFile);\n    }\n  }\n}\n\nmodule.exports = { setupStrapi, cleanupStrapi };\n')),(0,s.kt)("h2",{id:"test-a-strapi-instance"},"Test a Strapi instance"),(0,s.kt)("p",null,"We need a main entry file for our tests, one that will also test our helper file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="path: ./tests/app.test.js"',title:'"path:','./tests/app.test.js"':!0},'const fs = require(\'fs\');\nconst { setupStrapi, cleanupStrapi } = require("./helpers/strapi");\n\nbeforeAll(async () => {\n  await setupStrapi();\n});\n\nafterAll(async () => {\n  await cleanupStrapi();\n});\n\nit("strapi is defined", () => {\n  expect(strapi).toBeDefined();\n});\n')),(0,s.kt)("p",null,"Actually this is all we need for writing unit tests. Just run ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn test")," and see a result of your first test"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run v1.13.0\n$ jest\n PASS  tests/app.test.js\n  \u2713 strapi is defined (2 ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        4.187 s\nRan all test suites.\n\u2728  Done in 5.73s.\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"If you receive a timeout error for Jest, please add the following line right before the ",(0,s.kt)("inlineCode",{parentName:"p"},"beforeAll")," method in the ",(0,s.kt)("inlineCode",{parentName:"p"},"app.test.js")," file: ",(0,s.kt)("inlineCode",{parentName:"p"},"jest.setTimeout(15000)")," and adjust the milliseconds value as you need.")),(0,s.kt)("h2",{id:"test-a-basic-endpoint-controller"},"Test a basic endpoint controller"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"In the example we'll use and example ",(0,s.kt)("inlineCode",{parentName:"p"},"Hello world")," ",(0,s.kt)("inlineCode",{parentName:"p"},"/hello")," endpoint from ",(0,s.kt)("a",{parentName:"p",href:"/dev-docs/backend-customization/controllers"},"controllers")," section.")),(0,s.kt)("p",null,"Some might say that API tests are not unit but limited integration tests, regardless of nomenclature, let's continue with testing first endpoint."),(0,s.kt)("p",null,"We'll test if our endpoint works properly and route ",(0,s.kt)("inlineCode",{parentName:"p"},"/hello")," does return ",(0,s.kt)("inlineCode",{parentName:"p"},"Hello World")),(0,s.kt)("p",null,"Let's create a separate test file where ",(0,s.kt)("inlineCode",{parentName:"p"},"supertest")," will be used to check if endpoint works as expected."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="path: ./tests/hello/index.js"',title:'"path:','./tests/hello/index.js"':!0},'\nconst request = require(\'supertest\');\n\nit("should return hello world", async () => {\n  await request(strapi.server.httpServer)\n    .get("/api/hello")\n    .expect(200) // Expect response http code 200\n    .then((data) => {\n      expect(data.text).toBe("Hello World!"); // expect the response text\n    });\n});\n\n')),(0,s.kt)("p",null,"Then include this code to ",(0,s.kt)("inlineCode",{parentName:"p"},"./tests/app.test.js")," at the bottom of that file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"require('./hello');\n")),(0,s.kt)("p",null,"and run ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn test")," which should return"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  my-project yarn test\nyarn run v1.13.0\n$ jest --detectOpenHandles\n PASS  tests/app.test.js (5.742 s)\n  \u2713 strapi is defined (4 ms)\n  \u2713 should return hello world (208 ms)\n\n[2020-05-22T14:37:38.018Z] debug GET /hello (58 ms) 200\nTest Suites: 1 passed, 1 total\nTests:       2 passed, 2 total\nSnapshots:   0 total\nTime:        6.635 s, estimated 7 s\nRan all test suites.\n\u2728  Done in 9.09s.\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"If you receive an error ",(0,s.kt)("inlineCode",{parentName:"p"},"Jest has detected the following 1 open handles potentially keeping Jest from exiting")," check ",(0,s.kt)("inlineCode",{parentName:"p"},"jest")," version as ",(0,s.kt)("inlineCode",{parentName:"p"},"26.6.3")," works without an issue.")),(0,s.kt)("h2",{id:"test-an-auth-endpoint-controller"},"Test an ",(0,s.kt)("inlineCode",{parentName:"h2"},"auth")," endpoint controller"),(0,s.kt)("p",null,"In this scenario we'll test authentication login endpoint with two tests"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Test ",(0,s.kt)("inlineCode",{parentName:"li"},"/auth/local")," that should login user and return ",(0,s.kt)("inlineCode",{parentName:"li"},"jwt")," token"),(0,s.kt)("li",{parentName:"ol"},"Test ",(0,s.kt)("inlineCode",{parentName:"li"},"/users/me")," that should return users data based on ",(0,s.kt)("inlineCode",{parentName:"li"},"Authorization")," header")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="path: ./tests/user/index.js"',title:'"path:','./tests/user/index.js"':!0},"const request = require('supertest');\n\n// user mock data\nconst mockUserData = {\n  username: \"tester\",\n  email: \"tester@strapi.com\",\n  provider: \"local\",\n  password: \"1234abc\",\n  confirmed: true,\n  blocked: null,\n};\n\nit(\"should login user and return jwt token\", async () => {\n  /** Creates a new user and save it to the database */\n  await strapi.plugins[\"users-permissions\"].services.user.add({\n    ...mockUserData,\n  });\n\n  await request(strapi.server.httpServer) // app server is an instance of Class: http.Server\n    .post(\"/api/auth/local\")\n    .set(\"accept\", \"application/json\")\n    .set(\"Content-Type\", \"application/json\")\n    .send({\n      identifier: mockUserData.email,\n      password: mockUserData.password,\n    })\n    .expect(\"Content-Type\", /json/)\n    .expect(200)\n    .then((data) => {\n      expect(data.body.jwt).toBeDefined();\n    });\n});\n\nit('should return users data for authenticated user', async () => {\n  /** Gets the default user role */\n  const defaultRole = await strapi.query('plugin::users-permissions.role').findOne({}, []);\n\n  const role = defaultRole ? defaultRole.id : null;\n\n  /** Creates a new user an push to database */\n  const user = await strapi.plugins['users-permissions'].services.user.add({\n    ...mockUserData,\n    username: 'tester2',\n    email: 'tester2@strapi.com',\n    role,\n  });\n\n  const jwt = strapi.plugins['users-permissions'].services.jwt.issue({\n    id: user.id,\n  });\n\n  await request(strapi.server.httpServer) // app server is an instance of Class: http.Server\n    .get('/api/users/me')\n    .set('accept', 'application/json')\n    .set('Content-Type', 'application/json')\n    .set('Authorization', 'Bearer ' + jwt)\n    .expect('Content-Type', /json/)\n    .expect(200)\n    .then(data => {\n      expect(data.body).toBeDefined();\n      expect(data.body.id).toBe(user.id);\n      expect(data.body.username).toBe(user.username);\n      expect(data.body.email).toBe(user.email);\n    });\n});\n")),(0,s.kt)("p",null,"Then include this code to ",(0,s.kt)("inlineCode",{parentName:"p"},"./tests/app.test.js")," at the bottom of that file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"require('./user');\n")),(0,s.kt)("p",null,"All the tests above should return an console output like"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  my-project git:(master) yarn test\n\nyarn run v1.13.0\n$ jest --forceExit --detectOpenHandles\n[2020-05-27T08:30:30.811Z] debug GET /hello (10 ms) 200\n[2020-05-27T08:30:31.864Z] debug POST /auth/local (891 ms) 200\n PASS  tests/app.test.js (6.811 s)\n  \u2713 strapi is defined (3 ms)\n  \u2713 should return hello world (54 ms)\n  \u2713 should login user and return jwt token (1049 ms)\n  \u2713 should return users data for authenticated user (163 ms)\n\nTest Suites: 1 passed, 1 total\nTests:       4 passed, 4 total\nSnapshots:   0 total\nTime:        6.874 s, estimated 9 s\nRan all test suites.\n\u2728  Done in 8.40s.\n")))}h.isMDXComponent=!0}}]);