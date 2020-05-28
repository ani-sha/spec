(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(10),i=(n(0),n(165)),o={id:"overview",title:"Overview",sidebar_label:"Overview"},c={id:"overview",title:"Overview",description:"Areas covered",source:"@site/../docs/spec-overview.md",permalink:"/docs/next/overview",editUrl:"https://github.com/aerogear/GraphQLCRUD/edit/master/website/../docs/spec-overview.md",version:"next",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Reference implementations",permalink:"/docs/next/reference"},next:{title:"Create Operation",permalink:"/docs/next/create"}},s=[{value:"Areas covered",id:"areas-covered",children:[]},{value:"Focus on API",id:"focus-on-api",children:[]},{value:"SDL",id:"sdl",children:[]},{value:"Naming",id:"naming",children:[]},{value:"Base schema",id:"base-schema",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"areas-covered"},"Areas covered"),Object(i.b)("p",null,"This specification describes all aspects of a flexible GraphQL API suitable for relational databases."),Object(i.b)("h2",{id:"focus-on-api"},"Focus on API"),Object(i.b)("p",null,"GraphQLCRUD is a collection of specifications for GraphQL APIs that are abstracting from any database technologies. GraphQLCRUD is concerned with the API only and abstracts from the implementation. As such two implementations of GraphQLCRUD could choose to store data in different ways, but applications interacting with the data through the GraphQLCRUD API wouldn't be able to tell the difference."),Object(i.b)("h2",{id:"sdl"},"SDL"),Object(i.b)("p",null,"Examples are used throughout this spec to show the final schema generated for a specific data model. In all examples, the SDL notation is used to define the data model. The benefit of SDL is that it is database independent, so we can use the same notation accross all supported databases."),Object(i.b)("h2",{id:"naming"},"Naming"),Object(i.b)("p",null,"GraphQLCRUD does not specify how fields generated for each data type must be named. It is up to each GraphQLCRUD implementation to define a naming system. The reference implementation uses the naming convention as listed in the example queries"),Object(i.b)("h2",{id:"base-schema"},"Base schema"),Object(i.b)("p",null,"Specification is basing on the example model of Note and Comment.\nAny additional types will be directly referenced in the schema"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Note {\n  id: ID!\n  title: String!\n  description: String\n  comments: [Comment]!\n}\n\ntype Comment {\n  id: ID!\n  text: String\n  description: String\n  votes: Int\n  note: Note\n}\n\n")))}p.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);