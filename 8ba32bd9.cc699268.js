(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(i,".").concat(d)]||m[d]||b[d]||o;return n?r.a.createElement(u,c(c({ref:t},s),{},{components:n})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=(n(0),n(130));const o={id:"image",title:"Image",sidebar_label:"Image",hide_title:!0},i={unversionedId:"image",id:"image",isDocsHomePage:!1,title:"Image",description:"Unstable",source:"@site/docs/components/image.md",slug:"/image",permalink:"/components/image",editUrl:"https://github.com/polyhorn/polyhorn.github.io/edit/master/docs/components/image.md",version:"current",sidebar_label:"Image",sidebar:"componentsSidebar",previous:{title:"Overview",permalink:"/components/"},next:{title:"KeyboardAvoidingView",permalink:"/components/keyboard-avoiding-view"}},c=[{value:"Examples",id:"examples",children:[{value:"Showing a Local Image",id:"showing-a-local-image",children:[]},{value:"Colorizing a Grayscale Icon",id:"colorizing-a-grayscale-icon",children:[]}]},{value:"Roadmap",id:"roadmap",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("span",{className:"badge badge--danger"},"Unstable"),Object(r.b)("h1",{style:{marginTop:0}},"Image"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="Definition"',title:'"Definition"'}),"pub struct Image {\n    pub source: Option<ImageSource>,\n    pub tint_color: Option<Color>,\n}\n")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"showing-a-local-image"},"Showing a Local Image"),Object(r.b)("p",null,"Assuming that there is an image called ",Object(r.b)("inlineCode",{parentName:"p"},"welcome.svg")," or ",Object(r.b)("inlineCode",{parentName:"p"},"welcome.png")," in the\n",Object(r.b)("inlineCode",{parentName:"p"},"assets/")," folder of your project, you can use the following code to render it on\nyour screen."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),'poly!(<Image source={ asset!("welcome") } ... />)\n')),Object(r.b)("h3",{id:"colorizing-a-grayscale-icon"},"Colorizing a Grayscale Icon"),Object(r.b)("p",null,"In this example, we load a grayscale image called ",Object(r.b)("inlineCode",{parentName:"p"},"chevron.svg")," or\n",Object(r.b)("inlineCode",{parentName:"p"},"chevron.png")," from the ",Object(r.b)("inlineCode",{parentName:"p"},"assets/")," folder of a project and colorize it at runtime.\nFor example, this technique is used to colorize the icons in header and bottom\nbars of navigator UIs."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),'poly!(<Image source={ asset!("chevron") }\n         tint_color={ Color::from_hex(0x0073FF) } />)\n')),Object(r.b)("h2",{id:"roadmap"},"Roadmap"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"There are some open issues that we would like to get some feedback on through\nour ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/polyhorn/polyhorn"}),"Github"),". Please chime in if you have\nsome thoughts."),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"asset!(...)")," macro has not yet been implemented. Use\n",Object(r.b)("inlineCode",{parentName:"li"},"ImageSource::with_name(...)")," directly. See ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/api/image-source/"}),"ImageSource"),"\nfor more information."),Object(r.b)("li",{parentName:"ol"},"We're still adding some essential properties to the ",Object(r.b)("inlineCode",{parentName:"li"},"Image")," component.\nSpecifically: ",Object(r.b)("inlineCode",{parentName:"li"},"Image"),"s are not yet styled and don't generate pointer events\nby themselves unless wrapped in a ",Object(r.b)("inlineCode",{parentName:"li"},"View"),".")))))}s.isMDXComponent=!0}}]);