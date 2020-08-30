(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{291:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(4),o=t(9),i=(t(0),t(320)),r={id:"write-your-plugin",title:"Write your first Plugin"},c={unversionedId:"custom-codegen/write-your-plugin",id:"custom-codegen/write-your-plugin",isDocsHomePage:!1,title:"Write your first Plugin",description:"Basic Plugin",source:"@site/docs/custom-codegen/write-your-plugin.md",permalink:"/docs/custom-codegen/write-your-plugin",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/custom-codegen/write-your-plugin.md",sidebar:"sidebar",previous:{title:"What are Plugins?",permalink:"/docs/custom-codegen/index"},next:{title:"Validate Plugin Configuration",permalink:"/docs/custom-codegen/validate-configuration"}},l=[{value:"Basic Plugin",id:"basic-plugin",children:[]},{value:"Using the <code>GraphQLSchema</code>",id:"using-the-graphqlschema",children:[]},{value:"Using the documents",id:"using-the-documents",children:[]},{value:"Add plugin configuration",id:"add-plugin-configuration",children:[]},{value:"Packing your Plugin",id:"packing-your-plugin",children:[]}],u={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"basic-plugin"},"Basic Plugin"),Object(i.b)("p",null,"To get started with writing your GraphQL Code-Generator plugin, start by creating a simple ",Object(i.b)("inlineCode",{parentName:"p"},"my-plugin.js")," file in your project, with the following content:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  plugin: (schema, documents, config) => {\n    return 'Hi!';\n  },\n};\n")),Object(i.b)("p",null,"The exported object should match the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-code-generator/blob/master/packages/utils/plugins-helpers/src/types.ts#L89-L93"}),Object(i.b)("inlineCode",{parentName:"a"},"CodegenPlugin"))," interface."),Object(i.b)("p",null,"Now, let's try to load and use it with the codegen. Specify the path to your ",Object(i.b)("inlineCode",{parentName:"p"},".js")," file in your ",Object(i.b)("inlineCode",{parentName:"p"},"codegen.yml")," config file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema: my-schema.graphql\ndocuments: './src/**/*.graphql'\ngenerates:\n  output.ts:\n    - my-plugin.js\n")),Object(i.b)("p",null,"Now, run the ",Object(i.b)("inlineCode",{parentName:"p"},"@graphql-codegen/cli")," using ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-codegen")," command, and it will create a file called ",Object(i.b)("inlineCode",{parentName:"p"},"output.ts")," with ",Object(i.b)("inlineCode",{parentName:"p"},"Hi!")),Object(i.b)("h2",{id:"using-the-graphqlschema"},"Using the ",Object(i.b)("inlineCode",{parentName:"h2"},"GraphQLSchema")),Object(i.b)("p",null,"The first argument of your ",Object(i.b)("inlineCode",{parentName:"p"},"plugin")," function is the ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLSchema"),". The code-generator will make sure to merge all ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLSchema"),"s into a single, easy-to-use object, that you can use to create your output."),Object(i.b)("p",null,"You can find the full, typed, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/graphql/graphql-js/blob/master/src/type/schema.d.ts#L44"}),"API of ",Object(i.b)("inlineCode",{parentName:"a"},"GraphQLSchema")," here")),Object(i.b)("p",null,"So let's use a very basic method from ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLSchema"),", and return a list of all GraphQL types declared in the schema:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  plugin: (schema, documents, config, info) => {\n    const typesMap = schema.getTypeMap();\n\n    return Object.keys(typesMap).join('\\n');\n  },\n};\n")),Object(i.b)("h2",{id:"using-the-documents"},"Using the documents"),Object(i.b)("p",null,"The second argument of your ",Object(i.b)("inlineCode",{parentName:"p"},"plugin")," method is an array of GraphQL documents. This array contains a list of ",Object(i.b)("inlineCode",{parentName:"p"},"{ location: string, document: DocumentNode }"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"location")," field is the path of the file, and ",Object(i.b)("inlineCode",{parentName:"p"},"DocumentNode")," is an object containing all GraphQL documents that has been found in that file."),Object(i.b)("p",null,"You can find the full, typed, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/graphql/graphql-js/blob/master/src/language/ast.d.ts#L198-L202"}),"API of ",Object(i.b)("inlineCode",{parentName:"a"},"DocumentNode")," here")),Object(i.b)("p",null,"Let's print a list of all documents files, and the name of operations in this file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  plugin: (schema, documents, config, info) => {\n    return documents\n      .map(doc => {\n        const docsNames = doc.document.definitions.map(def => def.name.value);\n\n        return `File ${doc.location} contains: ${docsNames.join(', ')}`;\n      })\n      .join('\\n');\n  },\n};\n")),Object(i.b)("h2",{id:"add-plugin-configuration"},"Add plugin configuration"),Object(i.b)("p",null,"The third argument of your function is ",Object(i.b)("inlineCode",{parentName:"p"},"config")," and it includes an object with the configuration passed to your plugin."),Object(i.b)("p",null,"You can use it to tweak the behavior of your plugin and allow developers to customize the output easily."),Object(i.b)("p",null,"You can pass configuration to your plugin in the following this way:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema: my-schema.graphql\ndocuments: './src/**/*.graphql'\ngenerates:\n  output.ts:\n    - my-plugin.js:\n        myConfig: 'some-value'\n")),Object(i.b)("p",null,"And then, you can use in your plugin:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  plugin: (schema, documents, config, info) => {\n    if (extname(info.outputFile) === '.graphql') {\n      return 'baz';\n    }\n\n    if (config.myConfig === 'some-value') {\n      return 'foo';\n    } else {\n      return 'bar';\n    }\n  },\n};\n")),Object(i.b)("h2",{id:"packing-your-plugin"},"Packing your Plugin"),Object(i.b)("p",null,"To pack your Plugin as package, create a simple ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file and add the ",Object(i.b)("inlineCode",{parentName:"p"},"main")," field, pointing to your Plugin file."),Object(i.b)("p",null,"Then, publish it to npm using ",Object(i.b)("inlineCode",{parentName:"p"},"npm publish")," and test it by installing the published package from npm, and use it in your YML config file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema: my-schema.graphql\ndocuments: './src/**/*.graphql'\ngenerates:\n  output.ts:\n    - my-custom-plugin-package\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you are using TypeScript to write your plugin, don't forget to compile your ",Object(i.b)("inlineCode",{parentName:"p"},".ts")," file using ",Object(i.b)("inlineCode",{parentName:"p"},"tsc"),", and point ",Object(i.b)("inlineCode",{parentName:"p"},"main")," to the compiled file.")))}p.isMDXComponent=!0},320:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=a,m=s["".concat(r,".").concat(d)]||s[d]||b[d]||i;return t?o.a.createElement(m,c(c({ref:n},u),{},{components:t})):o.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var u=2;u<i;u++)r[u]=t[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);