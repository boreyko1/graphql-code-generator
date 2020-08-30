(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return l}));var n=a(4),p=a(9),r=(a(0),a(320)),o={id:"typescript-react-apollo",title:"TypeScript React Apollo"},i={unversionedId:"plugins/typescript-react-apollo",id:"plugins/typescript-react-apollo",isDocsHomePage:!1,title:"TypeScript React Apollo",description:"{@import ../plugins/client-note.md}",source:"@site/docs/plugins/typescript-react-apollo.md",permalink:"/docs/plugins/typescript-react-apollo",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-react-apollo.md",sidebar:"sidebar",previous:{title:"TypeScript GraphQL-Request",permalink:"/docs/plugins/typescript-graphql-request"},next:{title:"TypeScript Vue Apollo",permalink:"/docs/plugins/typescript-vue-apollo"}},b=[{value:"Usage Example",id:"usage-example",children:[{value:"With React Hooks",id:"with-react-hooks",children:[]},{value:"Generate Data Component",id:"generate-data-component",children:[]},{value:"Generate HOC",id:"generate-hoc",children:[]}]}],c={rightToc:b};function l(e){var t=e.components,a=Object(p.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("div",Object(n.a)({parentName:"p"},{className:"admonition admonition-caution alert alert--warning"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Usage Requirements")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In order to use this GraphQL Codegen plugin, please make sure that you have GraphQL operations (",Object(r.b)("inlineCode",{parentName:"p"},"query")," / ",Object(r.b)("inlineCode",{parentName:"p"},"mutation")," / ",Object(r.b)("inlineCode",{parentName:"p"},"subscription")," and ",Object(r.b)("inlineCode",{parentName:"p"},"fragment"),") set as ",Object(r.b)("inlineCode",{parentName:"p"},"documents: ...")," in your ",Object(r.b)("inlineCode",{parentName:"p"},"codegen.yml"),"."),Object(r.b)("p",{parentName:"div"},"Without loading your GraphQL operations (query, mutation, subscription and fragment), you won't see any change in the generated output.")))),Object(r.b)("p",null,Object(r.b)("p",{parentName:"p"},"This plugin generates React Apollo components and HOC with TypeScript typings."),Object(r.b)("p",{parentName:"p"},"It extends the basic TypeScript plugins: ",Object(r.b)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript"),", ",Object(r.b)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript-operations")," - and thus shares a similar configuration."),Object(r.b)("h2",{parentName:"p"},"Installation"),Object(r.b)("img",{alt:"typescript-react-apollo plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-react-apollo?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(r.b)("div",Object(n.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(r.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(r.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/typescript-react-apollo\n")))),Object(r.b)("h2",{parentName:"p"},"API Reference"),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"withComponent")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Customize the output by enabling/disabling the generated Component (deprecated since Apollo-Client v3). For more details: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/api/react/components/"}),"https://www.apollographql.com/docs/react/api/react/components/")),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   withComponent: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"withHOC")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Customize the output by enabling/disabling the HOC (deprecated since Apollo-Client v3). For more details: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/api/react/hoc/"}),"https://www.apollographql.com/docs/react/api/react/hoc/")),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   withHOC: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"withHooks")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",{parentName:"p"},"Customized the output by enabling/disabling the generated React Hooks. For more details: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/api/react/hooks/"}),"https://www.apollographql.com/docs/react/api/react/hooks/")),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   withHooks: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"withMutationFn")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",{parentName:"p"},"Customized the output by enabling/disabling the generated mutation function signature."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   withMutationFn: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"withRefetchFn")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Enable generating a function to be used with refetchQueries"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   withRefetchFn: false\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"apolloReactCommonImportFrom")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},'"')),Object(r.b)("p",{parentName:"p"},"Customize the package where apollo-react common lib is loaded from."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"apolloReactComponentsImportFrom")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},'"')),Object(r.b)("p",{parentName:"p"},"Customize the package where apollo-react component lib is loaded from."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"apolloReactHocImportFrom")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},'"')),Object(r.b)("p",{parentName:"p"},"Customize the package where apollo-react HOC lib is loaded from."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"apolloReactHooksImportFrom")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},'"')),Object(r.b)("p",{parentName:"p"},"Customize the package where apollo-react hooks lib is loaded from."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"componentSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"Component")),Object(r.b)("p",{parentName:"p"},"You can specify a suffix that gets attached to the name of the generated component."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"reactApolloVersion")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"number (values: 2, 3)"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"3")),Object(r.b)("p",{parentName:"p"},"Sets the version of react-apollo.\nIf you are using the old (deprecated) package of ",Object(r.b)("inlineCode",{parentName:"p"},"react-apollo"),", please set this configuration to ",Object(r.b)("inlineCode",{parentName:"p"},"2"),".\nIf you are using Apollo-Client v3, please set this to ",Object(r.b)("inlineCode",{parentName:"p"},"3"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   reactApolloVersion: 2\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"withResultType")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",{parentName:"p"},"Customized the output by enabling/disabling the generated result type."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   withResultType: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"withMutationOptionsType")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",{parentName:"p"},"Customized the output by enabling/disabling the generated mutation option type."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   withMutationOptionsType: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"addDocBlocks")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",{parentName:"p"},"Allows you to enable/disable the generation of docblocks in generated code.\nSome IDE's (like VSCode) add extra inline information with docblocks, you can disable this feature if your preferred IDE does not."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   addDocBlocks: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"noGraphQLTag")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Deprecated. Changes the documentMode to ",Object(r.b)("inlineCode",{parentName:"p"},"documentNode"),"."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"gqlImport")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tag#gql")),Object(r.b)("p",{parentName:"p"},"Customize from which module will ",Object(r.b)("inlineCode",{parentName:"p"},"gql")," be imported from.\nThis is useful if you want to use modules other than ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tag"),", e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"graphql.macro"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"graphql.macro"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: graphql.macro#gql\n")),Object(r.b)("h5",{parentName:"p"},"Gatsby"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: gatsby#graphql\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"documentNodeImport")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"graphql#DocumentNode")),Object(r.b)("p",{parentName:"p"},"Customize from which module will ",Object(r.b)("inlineCode",{parentName:"p"},"DocumentNode")," be imported from.\nThis is useful if you want to use modules other than ",Object(r.b)("inlineCode",{parentName:"p"},"graphql"),", e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"@graphql-typed-document-node"),"."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"noExport")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Set this configuration to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you wish to tell codegen to generate code with no ",Object(r.b)("inlineCode",{parentName:"p"},"export")," identifier."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"dedupeOperationSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Set this configuration to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you wish to make sure to remove duplicate operation name suffix."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"omitOperationSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Set this configuration to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you wish to disable auto add suffix of operation name, like ",Object(r.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Mutation"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Subscription"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Fragment"),"."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"operationResultSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Adds a suffix to generated operation result type names"),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"documentVariablePrefix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Changes the GraphQL operations variables prefix."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"documentVariableSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"Document")),Object(r.b)("p",{parentName:"p"},"Changes the GraphQL operations variables suffix."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"fragmentVariablePrefix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Changes the GraphQL fragments variables prefix."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"fragmentVariableSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"FragmentDoc")),Object(r.b)("p",{parentName:"p"},"Changes the GraphQL fragments variables suffix."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"documentMode")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"DocumentMode"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"graphQLTag")),Object(r.b)("p",{parentName:"p"},"Declares how DocumentNode are created:"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"graphQLTag"),": ",Object(r.b)("inlineCode",{parentName:"li"},"graphql-tag")," or other modules (check ",Object(r.b)("inlineCode",{parentName:"li"},"gqlImport"),") will be used to generate document nodes. If this is used, document nodes are generated on client side i.e. the module used to generate this will be shipped to the client"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"documentNode"),": document nodes will be generated as objects when we generate the templates."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"documentNodeImportFragments"),": Similar to documentNode except it imports external fragments instead of embedding them."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"external"),": document nodes are imported from an external file. To be used with ",Object(r.b)("inlineCode",{parentName:"li"},"importDocumentNodeExternallyFrom"))),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"importOperationTypesFrom")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"This config is used internally by presets, but you can use it manually to tell codegen to prefix all base types that it's using.\nThis is useful if you wish to generate base types from ",Object(r.b)("inlineCode",{parentName:"p"},"typescript-operations")," plugin into a different file, and import it from there."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"importDocumentNodeExternallyFrom")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"This config should be used if ",Object(r.b)("inlineCode",{parentName:"p"},"documentMode")," is ",Object(r.b)("inlineCode",{parentName:"p"},"external"),". This has 2 usage:"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},"any string: This would be the path to import document nodes from. This can be used if we want to manually create the document nodes e.g. Use ",Object(r.b)("inlineCode",{parentName:"li"},"graphql-tag")," in a separate file and export the generated document"),Object(r.b)("li",{parentName:"ul"},"'near-operation-file': This is a special mode that is intended to be used with ",Object(r.b)("inlineCode",{parentName:"li"},"near-operation-file")," preset to import document nodes from those files. If these files are ",Object(r.b)("inlineCode",{parentName:"li"},".graphql")," files, we make use of webpack loader.")),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: path/to/document-node-file\n")),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: near-operation-file\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"pureMagicComment")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"This config adds PURE magic comment to the static variables to enforce treeshaking for your bundler."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"scalars")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(r.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(r.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(r.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(r.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(r.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Override All Names"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(r.b)("h5",{parentName:"p"},"Upper-case enum values"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(r.b)("h5",{parentName:"p"},"Keep names as is"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(r.b)("h5",{parentName:"p"},"Remove Underscores"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Suffixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesSuffix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Automatically adds ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Will use ",Object(r.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(r.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option')),Object(r.b)("h2",{id:"usage-example"},"Usage Example"),Object(r.b)("h3",{id:"with-react-hooks"},"With React Hooks"),Object(r.b)("p",null,"For the given input:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"query Test {\n  feed {\n    id\n    commentCount\n    repository {\n      full_name\n      html_url\n      owner {\n        avatar_url\n      }\n    }\n  }\n}\n")),Object(r.b)("p",null,"And the following configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'schema: YOUR_SCHEMA_HERE\ndocuments: "./src/**/*.graphql"\ngenerates:\n  ./generated-types.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-react-apollo\n')),Object(r.b)("p",null,"Codegen will pre-compile the GraphQL operation into a ",Object(r.b)("inlineCode",{parentName:"p"},"DocumentNode")," object, and generate a ready-to-use React Hook for each operation you have."),Object(r.b)("p",null,"In you application code, you can import it from the generated file, and use the React Hook in your component code: "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import { useTest } from './generated-types';\n\nexport const MyComponent: React.FC = () => {\n  const { data, error, loading } = useTest();\n\n  return (<div> ... </div>)\n};\n")),Object(r.b)("h3",{id:"generate-data-component"},"Generate Data Component"),Object(r.b)("p",null,"Codegen also supports generating data Components (deprecated in ",Object(r.b)("inlineCode",{parentName:"p"},"@apollo/client")," v3), you can turn it on this way:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"config:\n  withComponent: true\n")),Object(r.b)("h3",{id:"generate-hoc"},"Generate HOC"),Object(r.b)("p",null,"Codegen also supports generating High-Order-Components (deprecated in ",Object(r.b)("inlineCode",{parentName:"p"},"@apollo/client")," v3), you can turn it on this way:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"config:\n  withHOC: true\n")))}l.isMDXComponent=!0},320:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),p=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var c=p.a.createContext({}),l=function(e){var t=p.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return p.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=p.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,O=m["".concat(o,".").concat(d)]||m[d]||s[d]||r;return a?p.a.createElement(O,i(i({ref:t},c),{},{components:a})):p.a.createElement(O,i({ref:t},c))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);