(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(117)),i={id:"introduction",title:"Hooks",sidebar_label:"Overview",slug:"/hooks/"},c={unversionedId:"hooks/introduction",id:"hooks/introduction",isDocsHomePage:!1,title:"Hooks",description:"Background",source:"@site/docs/general/hooks/introduction.md",slug:"/hooks/",permalink:"/docs/hooks/",editUrl:"https://github.com/polyhorn/polyhorn.github.io/edit/master/docs/general/hooks/introduction.md",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Instances",permalink:"/docs/concepts/instances"},next:{title:"State Hooks",permalink:"/docs/hooks/state-hooks"}},s=[{value:"Background",id:"background",children:[{value:"Keys",id:"keys",children:[]}]},{value:"Roadmap",id:"roadmap",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"background"},"Background"),Object(o.b)("p",null,"In Polyhorn, all components are backed by a stateless render function."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="src/counter.rs"',title:'"src/counter.rs"'}),'pub struct Counter;\n\nimpl Component for Counter {\n    fn counter(&self, manager: &mut Manager) -> Element {\n        poly!(\n            <Button title={ format!("Increment") } />\n        )\n    }\n}\n')),Object(o.b)("p",null,'Obviously, this is problematic because we need to capture some statefulness to\nget a useful application. In order to enable that, Polyhorn provides "hooks". For\nusers familiar with React or React Native, they\'re exactly the same thing.'),Object(o.b)("p",null,"Let's look at how we can use a ",Object(o.b)("inlineCode",{parentName:"p"},"use_state!(...)")," hook to make the\nprevious example interactive."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'{5} title="src/counter.rs"',"{5}":!0,title:'"src/counter.rs"'}),'pub struct Counter;\n\nimpl Component for Counter {\n    fn render(manager: &mut Manager -> Element {\n        let value = use_state!(manager, 0);\n\n        poly!(\n            <Button title={ format!("Increment {}", &value) }\n                 on_press={ |_| value.replace(value.to_owned() + 1) } />\n        )\n    }\n}\n')),Object(o.b)("p",null,"Hooks are extremely expressive and can capture any additional non-reactive logic\nyou might need."),Object(o.b)("h3",{id:"keys"},"Keys"),Object(o.b)("p",null,"Unlike React, Polyhorn developers don't have to provide a name for their\nhooks, nor do we use globals or indices to track uniqueness. Specifically, we\nuse macros to automatically assign unique identifiers to each invocation of a\nhook at compile-time:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"let a = use_state!(manager);\nlet b = use_state!(manager);\n")),Object(o.b)("p",null,"In order to distinguish between two calls, the macro creates an anonymous type\nand uses ",Object(o.b)("inlineCode",{parentName:"p"},"std::any::TypeId::of::<T>()"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"let a = manager.use_state({ struct ID; std::any::TypeId::of::<ID>() });\nlet b = manager.use_state({ struct ID; std::any::TypeId::of::<ID>() });\n")),Object(o.b)("p",null,"The compiler assigns a number to each unique type, which assists Polyhorn in\ndistinguishing between the two hooks. It also means that you can use hooks\neven in conditional logic, since the IDs are stable."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"let a = if self.condition {\n    Some(use_state!(manager))\n} else {\n    None\n};\n")),Object(o.b)("h2",{id:"roadmap"},"Roadmap"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},"There are two useful undocumented hooks (",Object(o.b)("inlineCode",{parentName:"li"},"UseAsync")," in ",Object(o.b)("inlineCode",{parentName:"li"},"polyhorn-core")," and\n",Object(o.b)("inlineCode",{parentName:"li"},"UseChannel")," in ",Object(o.b)("inlineCode",{parentName:"li"},"polyhorn-channel"),") that will need to be stabilized before\ndocumentation.")))))}u.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);