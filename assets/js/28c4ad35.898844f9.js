"use strict";(self.webpackChunkstrapi_docs=self.webpackChunkstrapi_docs||[]).push([[4813],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,v=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return t?i.createElement(v,o(o({ref:n},d),{},{components:t})):i.createElement(v,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},70077:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(83117),r=(t(67294),t(3905));const a={title:"Providers",description:"Install and use providers to extend the functionality of available plugins."},o="Providers",l={unversionedId:"dev-docs/providers",id:"dev-docs/providers",title:"Providers",description:"Install and use providers to extend the functionality of available plugins.",source:"@site/docs/dev-docs/providers.md",sourceDirName:"dev-docs",slug:"/dev-docs/providers",permalink:"/dev-docs/providers",draft:!1,editUrl:"https://github.com/labs-solo/aberabook/edit/main/docusaurus/docs/dev-docs/providers.md",tags:[],version:"current",frontMatter:{title:"Providers",description:"Install and use providers to extend the functionality of available plugins."}},p={},s=[{value:"Installing providers",id:"installing-providers",level:2},{value:"Configuring providers",id:"configuring-providers",level:2},{value:"Configuration per environment",id:"configuration-per-environment",level:3},{value:"Creating providers",id:"creating-providers",level:2},{value:"Local providers",id:"local-providers",level:3},{value:"Creating private providers",id:"creating-private-providers",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},u=d("Tabs"),c=d("TabItem"),m=d("FeedbackPlaceholder"),v={toc:s};function g(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"providers"},"Providers"),(0,r.kt)("p",null,"Certain ",(0,r.kt)("a",{parentName:"p",href:"../../../user-docs/plugins"},"plugins")," can be extended via the installation and configuration of additional ",(0,r.kt)("a",{parentName:"p",href:"../../../user-docs/plugins#providers"},"providers"),"."),(0,r.kt)("p",null,"Providers add an extension to the core capabilities of the plugin, for example to upload media files to AWS S3 instead of the local server, or using Amazon SES for emails instead of Sendmail."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Only the ",(0,r.kt)("a",{parentName:"p",href:"/dev-docs/plugins/upload"},"Upload")," and ",(0,r.kt)("a",{parentName:"p",href:"/dev-docs/plugins/email"},"Email")," plugins are currently designed to work with providers. ")),(0,r.kt)("p",null,"For the relevant plugins, there are both official providers maintained by Strapi \u2014 discoverable via the ",(0,r.kt)("a",{parentName:"p",href:"../../../user-docs/plugins/installing-plugins-via-marketplace"},"Marketplace")," \u2014 and many community maintained providers available via ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),"."),(0,r.kt)("p",null,"A provider can be configured to be ",(0,r.kt)("a",{parentName:"p",href:"#creating-private-providers"},"private")," to ensure asset URLs will be signed for secure access."),(0,r.kt)("p",null,":::strapi Providers for Strapi Cloud\nThis page describes how providers work for the Strapi CMS (self-hosted version). ",(0,r.kt)("a",{parentName:"p",href:"/cloud/advanced/email"},"Email providers")," and ",(0,r.kt)("a",{parentName:"p",href:"/cloud/advanced/upload"},"upload providers")," for Strapi Cloud are described in the Cloud documentation.\n:::"),(0,r.kt)("h2",{id:"installing-providers"},"Installing providers"),(0,r.kt)("p",null,"New providers can be installed using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," using the following format ",(0,r.kt)("inlineCode",{parentName:"p"},"@strapi/provider-<plugin>-<provider> --save"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)(u,{groupId:"yarn-npm",mdxType:"Tabs"},(0,r.kt)(c,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Install the AWS S3 provider for the Upload plugin\n\nyarn add @strapi/provider-upload-aws-s3\n\n# Install the Sendgrid provider for the Email plugin\nyarn add @strapi/provider-email-sendgrid --save\n\n"))),(0,r.kt)(c,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Install the AWS S3 provider for the Upload plugin\n\nnpm install @strapi/provider-upload-aws-s3 --save\n\n# Install the Sendgrid provider for the Email plugin\nnpm install @strapi/provider-email-sendgrid --save\n\n")))),(0,r.kt)("h2",{id:"configuring-providers"},"Configuring providers"),(0,r.kt)("p",null,"Newly installed providers are enabled and configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"./config/plugins.js")," file. If this file does not exist you must create it."),(0,r.kt)("p",null,"Each provider will have different configuration settings available. Review the respective entry for that provider in the ",(0,r.kt)("a",{parentName:"p",href:"../../../user-docs/plugins/installing-plugins-via-marketplace"},"Marketplace")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," to learn more."),(0,r.kt)("p",null,"Below are example configurations for the Upload and Email plugins."),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(c,{value:"Upload",title:"Upload",mdxType:"TabItem"},(0,r.kt)(u,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(c,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/plugins.js"',title:'"./config/plugins.js"'},"\nmodule.exports = ({ env }) => ({\n  // ...\n  upload: {\n    config: {\n      provider: 'aws-s3', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')\n      providerOptions: {\n        accessKeyId: env('AWS_ACCESS_KEY_ID'),\n        secretAccessKey: env('AWS_ACCESS_SECRET'),\n        region: env('AWS_REGION'),\n        params: {\n          ACL: env('AWS_ACL', 'public-read'), // 'private' if you want to make the uploaded files private\n          Bucket: env('AWS_BUCKET'),\n        },\n      },\n    },\n  },\n  // ...\n});\n"))),(0,r.kt)(c,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./config/plugins.ts"',title:'"./config/plugins.ts"'},"\nexport default ({ env }) => ({\n  // ...\n  upload: {\n    config: {\n      provider: 'aws-s3', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')\n      providerOptions: {\n        accessKeyId: env('AWS_ACCESS_KEY_ID'),\n        secretAccessKey: env('AWS_ACCESS_SECRET'),\n        region: env('AWS_REGION'),\n        params: {\n          ACL: env('AWS_ACL', 'public-read'), // 'private' if you want to make the uploaded files private\n          Bucket: env('AWS_BUCKET'),\n        },\n      },\n    },\n  },\n  // ...\n});\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Strapi has a default ",(0,r.kt)("a",{parentName:"p",href:"/dev-docs/configurations/middlewares#security"},(0,r.kt)("inlineCode",{parentName:"a"},"security")," middleware")," that has a very strict ",(0,r.kt)("inlineCode",{parentName:"p"},"contentSecurityPolicy")," that limits loading images and media to ",(0,r.kt)("inlineCode",{parentName:"p"},"\"'self'\"")," only, see the example configuration on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@strapi/provider-upload-aws-s3"},"provider page")," or the ",(0,r.kt)("a",{parentName:"p",href:"/dev-docs/configurations/middlewares#security"},"middleware documentation")," for more information."))),(0,r.kt)(c,{value:"Email",title:"Email",mdxType:"TabItem"},(0,r.kt)(u,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(c,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./config/plugins.js"',title:'"./config/plugins.js"'},"\nmodule.exports = ({ env }) => ({\n  // ...\n  email: {\n    config: {\n      provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')\n      providerOptions: {\n        apiKey: env('SENDGRID_API_KEY'),\n      },\n      settings: {\n        defaultFrom: 'juliasedefdjian@strapi.io',\n        defaultReplyTo: 'juliasedefdjian@strapi.io',\n        testAddress: 'juliasedefdjian@strapi.io',\n      },\n    },\n  },\n  // ...\n});\n"))),(0,r.kt)(c,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./config/plugins.ts"',title:'"./config/plugins.ts"'},"\nexport default ({ env }) => ({\n  // ...\n  email: {\n    config: {\n      provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')\n      providerOptions: {\n        apiKey: env('SENDGRID_API_KEY'),\n      },\n      settings: {\n        defaultFrom: 'juliasedefdjian@strapi.io',\n        defaultReplyTo: 'juliasedefdjian@strapi.io',\n        testAddress: 'juliasedefdjian@strapi.io',\n      },\n    },\n  },\n  // ...\n});\n")))),(0,r.kt)("admonition",{title:"Sendmail",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you prefer to use Sendmail over Sendgrid, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@strapi/provider-email-sendmail"},(0,r.kt)("inlineCode",{parentName:"a"},"@strapi/provider-email-sendmail"))," documentation.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"When using a different provider per environment, specify the correct configuration in ",(0,r.kt)("inlineCode",{parentName:"li"},"./config/env/${yourEnvironment}/plugins.js")," (See ",(0,r.kt)("a",{parentName:"li",href:"/dev-docs/configurations/environment"},"Environments"),")."),(0,r.kt)("li",{parentName:"ul"},"Only one email provider will be active at a time. If the email provider setting isn't picked up by Strapi, verify the ",(0,r.kt)("inlineCode",{parentName:"li"},"plugins.js")," file is in the correct folder."),(0,r.kt)("li",{parentName:"ul"},"When testing the new email provider with those two email templates created during strapi setup, the ",(0,r.kt)("em",{parentName:"li"},"shipper email")," on the template defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"no-reply@strapi.io")," and needs to be updated according to your email provider, otherwise it will fail the test (See ",(0,r.kt)("a",{parentName:"li",href:"/user-docs//settings/configuring-users-permissions-plugin-settings#configuring-email-templates"},"Configure templates locally"),")."))))),(0,r.kt)("h3",{id:"configuration-per-environment"},"Configuration per environment"),(0,r.kt)("p",null,"When configuring your provider you might want to change the configuration based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable or use environment specific credentials."),(0,r.kt)("p",null,"You can set a specific configuration in the ",(0,r.kt)("inlineCode",{parentName:"p"},"./config/env/{env}/plugins.js")," configuration file and it will be used to overwrite the default configuration."),(0,r.kt)("h2",{id:"creating-providers"},"Creating providers"),(0,r.kt)("p",null,"To implement your own custom provider you must ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/creating-node-js-modules"},"create a Node.js module"),"."),(0,r.kt)("p",null,"The interface that must be exported depends on the plugin you are developing the provider for. Below are templates for the Upload and Email plugins:"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(c,{value:"Upload",title:"Upload",mdxType:"TabItem"},(0,r.kt)(u,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(c,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  init(providerOptions) {\n    // init your provider if necessary\n\n    return {\n      upload(file) {\n        // upload the file in the provider\n        // file content is accessible by `file.buffer`\n      },\n      uploadStream(file) {\n        // upload the file in the provider\n        // file content is accessible by `file.stream`\n      },\n      delete(file) {\n        // delete the file in the provider\n      },\n      checkFileSize(file, { sizeLimit }) {\n        // (optional)\n        // implement your own file size limit logic\n      },\n      getSignedUrl(file) {\n        // (optional)\n        // Generate a signed URL for the given file.\n        // The signed URL allows secure access to the file.\n        // Only Content Manager assets will be signed.\n        // Returns an object {url: string}.\n      },\n      isPrivate() {\n        // (optional)\n        // if it is private, file urls will be signed\n        // Returns a boolean\n      },\n    };\n  },\n};\n"))),(0,r.kt)(c,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export {\n  init(providerOptions) {\n    // init your provider if necessary\n\n    return {\n      upload(file) {\n        // upload the file in the provider\n        // file content is accessible by `file.buffer`\n      },\n      uploadStream(file) {\n        // upload the file in the provider\n        // file content is accessible by `file.stream`\n      },\n      delete(file) {\n        // delete the file in the provider\n      },\n      checkFileSize(file, { sizeLimit }) {\n        // (optional)\n        // implement your own file size limit logic\n      },\n      getSignedUrl(file) {\n        // (optional)\n        // Generate a signed URL for the given file.\n        // The signed URL allows secure access to the file.\n        // Only Content Manager assets will be signed.\n        // Returns an object {url: string}.\n      },\n      isPrivate() {\n        // (optional)\n        // if it is private, file urls will be signed\n        // Returns a boolean\n      },\n    };\n  },\n};\n"))))),(0,r.kt)(c,{value:"Email",title:"Email",mdxType:"TabItem"},(0,r.kt)(u,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(c,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  init: (providerOptions = {}, settings = {}) => {\n    return {\n      send: async options => {},\n    };\n  },\n};\n"))),(0,r.kt)(c,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export {\n  init: (providerOptions = {}, settings = {}) => {\n    return {\n      send: async options => {},\n    };\n  },\n};\n")))))),(0,r.kt)("p",null,"In the send function you will have access to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"providerOptions")," that contains configurations written in ",(0,r.kt)("inlineCode",{parentName:"li"},"plugins.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"settings")," that contains configurations written in ",(0,r.kt)("inlineCode",{parentName:"li"},"plugins.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," that contains options you send when you call the send function from the email plugin service")),(0,r.kt)("p",null,"You can review the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strapi/strapi/tree/master/packages/providers"},"Strapi maintained providers")," for example implementations."),(0,r.kt)("p",null,"After creating your new provider you can ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages"},"publish it to npm")," to share with the community or ",(0,r.kt)("a",{parentName:"p",href:"#local-providers"},"use it locally")," for your project only."),(0,r.kt)("h3",{id:"local-providers"},"Local providers"),(0,r.kt)("p",null,":::strapi Providers for Strapi Cloud\nThis section describes how providers work for the Strapi CMS (self-hosted version). ",(0,r.kt)("a",{parentName:"p",href:"/cloud/advanced/email"},"Email providers")," and ",(0,r.kt)("a",{parentName:"p",href:"/cloud/advanced/upload"},"upload providers")," for Strapi Cloud are described in the Cloud documentation.\n:::"),(0,r.kt)("p",null,"If you want to create your own provider without publishing it on npm you can follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"providers")," folder in your application."),(0,r.kt)("li",{parentName:"ol"},"Create your provider (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"./providers/strapi-provider-<plugin>-<provider>"),")"),(0,r.kt)("li",{parentName:"ol"},"Then update your ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," to link your ",(0,r.kt)("inlineCode",{parentName:"li"},"strapi-provider-<plugin>-<provider>")," dependency to the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/files/package.json#local-paths"},"local path")," of your new provider.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "dependencies": {\n    ...\n    "strapi-provider-<plugin>-<provider>": "file:providers/strapi-provider-<plugin>-<provider>",\n    ...\n  }\n}\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Update your ",(0,r.kt)("inlineCode",{parentName:"li"},"./config/plugins.js")," file to ",(0,r.kt)("a",{parentName:"li",href:"#configuring-providers"},"configure the provider"),"."),(0,r.kt)("li",{parentName:"ol"},"Finally, run ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn install")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install")," to install your new custom provider.")),(0,r.kt)("h2",{id:"creating-private-providers"},"Creating private providers"),(0,r.kt)("p",null,"You can set up a private provider, meaning that every asset URL displayed in the Content Manager will be signed for secure access."),(0,r.kt)("p",null,"To enable private providers, you must implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"isPrivate()")," method and return ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"In the backend, Strapi generates a signed URL for each asset using the ",(0,r.kt)("inlineCode",{parentName:"p"},"getSignedUrl(file)")," method implemented in the provider. The signed URL includes an encrypted signature that allows the user to access the asset (but normally only for a limited time and with specific restrictions, depending on the provider)."),(0,r.kt)("p",null,"Note that for security reasons, the content API will not provide any signed URLs. Instead, developers using the API should sign the urls themselves."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"To create a private ",(0,r.kt)("inlineCode",{parentName:"p"},"aws-s3")," provider:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"./providers/aws-s3")," folder in your application. See ",(0,r.kt)("a",{parentName:"li",href:"#local-providers"},"Local Providers")," for more information."),(0,r.kt)("li",{parentName:"ol"},"Implement the ",(0,r.kt)("inlineCode",{parentName:"li"},"isPrivate()")," method in the ",(0,r.kt)("inlineCode",{parentName:"li"},"aws-s3")," provider to return ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ol"},"Implement the ",(0,r.kt)("inlineCode",{parentName:"li"},"getSignedUrl(file)")," method in the ",(0,r.kt)("inlineCode",{parentName:"li"},"aws-s3")," provider to generate a signed URL for the given file.")),(0,r.kt)(u,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(c,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./providers/aws-s3/index.js"',title:'"./providers/aws-s3/index.js"'},'// aws-s3 provider\n\nmodule.exports = {\n  init: (config) => {\n    const s3 = new AWS.S3(config);\n\n    return {\n      async upload(file) {\n        // code to upload file to S3\n      },\n\n      async delete(file) {\n        // code to delete file from S3\n      },\n\n      async isPrivate() {\n        return true;\n      },\n\n      async getSignedUrl(file) {\n        const params = {\n          Bucket: config.params.Bucket,\n          Key: file.path,\n          Expires: 60, // URL expiration time in seconds\n        };\n\n        const signedUrl = await s3.getSignedUrlPromise("getObject", params);\n        return { url: signedUrl };\n      },\n    };\n  },\n};\n'))),(0,r.kt)(c,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./providers/aws-s3/index.ts"',title:'"./providers/aws-s3/index.ts"'},'// aws-s3 provider\n\nexport = {\n  init: (config) => {\n    const s3 = new AWS.S3(config);\n\n    return {\n      async upload(file) {\n        // code to upload file to S3\n      },\n\n      async delete(file) {\n        // code to delete file from S3\n      },\n\n      async isPrivate() {\n        return true;\n      },\n\n      async getSignedUrl(file) {\n        const params = {\n          Bucket: config.params.Bucket,\n          Key: file.path,\n          Expires: 60, // URL expiration time in seconds\n        };\n\n        const signedUrl = await s3.getSignedUrlPromise("getObject", params);\n        return { url: signedUrl };\n      },\n    };\n  },\n};\n')))),(0,r.kt)(m,{mdxType:"FeedbackPlaceholder"}))}g.isMDXComponent=!0}}]);