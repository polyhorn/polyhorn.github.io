(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(i,".").concat(d)]||m[d]||b[d]||o;return n?r.a.createElement(u,c(c({ref:t},s),{},{components:n})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=(n(0),n(130));const o={id:"elements",title:"Elements",sidebar_label:"Elements"},i={unversionedId:"concepts/elements",id:"concepts/elements",isDocsHomePage:!1,title:"Elements",description:"Types of Elements",source:"@site/docs/general/concepts/elements.md",slug:"/concepts/elements",permalink:"/docs/concepts/elements",editUrl:"https://github.com/polyhorn/polyhorn.github.io/edit/master/docs/general/concepts/elements.md",version:"current",sidebar_label:"Elements",sidebar:"someSidebar",previous:{title:"Components",permalink:"/docs/concepts/components"},next:{title:"Instances",permalink:"/docs/concepts/instances"}},c=[{value:"Types of Elements",id:"types-of-elements",children:[]},{value:"Syntactic Sugar",id:"syntactic-sugar",children:[]},{value:"Roadmap",id:"roadmap",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"types-of-elements"},"Types of Elements"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Built-Ins.")," Built-ins are provided by the ",Object(r.b)("inlineCode",{parentName:"li"},"Platform")," and represent\nnative UI elements (e.g. DOM elements, UIViews, etc.) Built-in elements can\nhave only one child element, but this can be a fragment."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Components.")," Components are implementations of the ",Object(r.b)("inlineCode",{parentName:"li"},"Component")," trait and\ncan be written by anyone. Component elements can have only one child element,\nbut this can be a fragment."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Context Providers.")," Context providers are special elements that insert\nvalues into the context tree. The context tree is a linked list of type maps.",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"Element::context::<T>(value: T)\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Fragments.")," Fragments are arrays of elements."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Strings.")," String elements are mainly used for the\n",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/components/text/"}),"Text")," component.")),Object(r.b)("h2",{id:"syntactic-sugar"},"Syntactic Sugar"),Object(r.b)("p",null,"We recommend using the ",Object(r.b)("inlineCode",{parentName:"p"},"poly!(...)")," macro to write your UI. This macro is\nsimilar to JSX when using React. The result of this macro will always be an\n",Object(r.b)("inlineCode",{parentName:"p"},"Element"),". The macro must be given only one root element."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),'poly!(<Window title="Hello World!" />)\n')),Object(r.b)("h2",{id:"roadmap"},"Roadmap"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"There are some remaining issues with elements (and in particular the\nshort-hand syntax). We would really appreciate your input at our\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/polyhorn/polyhorn"}),"Github"),"."),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"For elements of components that implement the ",Object(r.b)("inlineCode",{parentName:"p"},"Default")," trait, we offer a\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts/components#default-values"}),"short-hand syntax")," for\ninitializing the remaining properties. However, since this is so commonly the\ncase, we might want to make it opt-out instead of opt-in.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The reason we need the special syntax for 1) is that the syntactic sugar is\ndesugared during the macro expansion phase of Rust compilation and we don't\nyet know at that point if a type implements ",Object(r.b)("inlineCode",{parentName:"p"},"Default")," or not (so we cannot\ninfer automatically).")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the other hand, we're not sure what the consequences will be of\nassuming that all components will always implement ",Object(r.b)("inlineCode",{parentName:"p"},"Default"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Short-hand syntax does not (effectively) support higher-order components.\nFor example, our animated library provides a wrapper around ",Object(r.b)("inlineCode",{parentName:"p"},"View")," that\naccepts the same properties as the core ",Object(r.b)("inlineCode",{parentName:"p"},"View")," and directly forwards most\nproperties to that core ",Object(r.b)("inlineCode",{parentName:"p"},"View"),". It has to do that manually. A possible syntax\nconstruction might be the following:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"pub struct RedView(View);\n\nimpl Component for RedView {\n   fn render(&self, manager: &mut Manager) -> Element {\n      poly!(<View style={ Style {\n         background_color: Color::red(),\n         ..self.0.style\n      } } ..self.0 />)\n   }\n}\n\npoly!(<RedView(View) style={ ... } on_pointer_down={ ... } />)\n")))))))}s.isMDXComponent=!0}}]);