(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,O=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.a.createElement(O,i(i({ref:t},l),{},{components:n})):r.a.createElement(O,i({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(130)),c={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"/"},i={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"Built-in Components",source:"@site/docs/components/overview.md",slug:"/",permalink:"/components/",editUrl:"https://github.com/polyhorn/polyhorn.github.io/edit/master/docs/components/overview.md",version:"current",sidebar_label:"Overview",sidebar:"componentsSidebar",next:{title:"Image",permalink:"/components/image"}},b=[{value:"Built-in Components",id:"built-in-components",children:[]},{value:"Roadmap",id:"roadmap",children:[]}],l={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"built-in-components"},"Built-in Components"),Object(o.b)("p",null,"These components are built into Polyhorn and accessible through:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"use polyhorn::*;\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/components/image/"}),"Image")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Renders an ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/api/image-source/"}),"ImageSource"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/components/keyboard-avoiding-view/"}),"KeyboardAvoidingView")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Automatically adjusts its position, size or padding when the system keyboard appears.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/components/modal/"}),"Modal")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Renders a view in a system-provided modal window.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/components/scrollable/"}),"Scrollable")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Implements scrolling gestures to facilitate layouts that exceed screen sizes.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/components/status-bar/"}),"StatusBar")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Controls the system status bar on iOS and Android.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/components/text/"}),"Text")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Renders (rich) text.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/components/text-input/"}),"TextInput")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts user input.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/components/view/"}),"View")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The base component.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/components/window/"}),"Window")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The root component.")))),Object(o.b)("h2",{id:"roadmap"},"Roadmap"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"There are some open issues that we would like to get some feedback on through\nour ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/polyhorn/polyhorn"}),"Github"),". Please chime in if you have\nsome thoughts."),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Currently, components are implemented by each platform individually.\nConformance to this specification is not checked statically. Potentially a\nbetter way to do this, would be to move the structs to the ",Object(o.b)("inlineCode",{parentName:"p"},"polyhorn"),' crate,\nand leave the component implementations in each platform\'s own crate. This\ndoes not violate the orphan rule since each platform must also define its own\n"platform-erased" component trait (at least until trait aliases land in Rust\nstable).')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Many components have some properties in common. For example, we want Image,\nKeyboardAvoidingView, ScrollView, Text, TextInput and View to receive at\nleast a common subset of event listeners. However, currently each component\nimplements that logic individually. We need to either:"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Find a way to share common logic between components in an ergonomic way."),Object(o.b)("li",{parentName:"ol"},"Reduce the number of components by merging overlapping components.")))))))}p.isMDXComponent=!0}}]);