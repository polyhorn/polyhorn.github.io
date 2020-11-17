(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,u=m["".concat(i,".").concat(d)]||m[d]||b[d]||o;return n?r.a.createElement(u,c(c({ref:t},p),{},{components:n})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(130)),i={id:"image",title:"Image",sidebar_label:"Image",hide_title:!0},c={unversionedId:"image",id:"image",isDocsHomePage:!1,title:"Image",description:"Unstable",source:"@site/docs/components/image.md",slug:"/image",permalink:"/components/image",editUrl:"https://github.com/polyhorn/polyhorn.github.io/edit/master/docs/components/image.md",version:"current",sidebar_label:"Image",sidebar:"componentsSidebar",previous:{title:"Overview",permalink:"/components/"},next:{title:"KeyboardAvoidingView",permalink:"/components/keyboard-avoiding-view"}},l=[{value:"Examples",id:"examples",children:[{value:"Showing a Local Image",id:"showing-a-local-image",children:[]},{value:"Colorizing a Grayscale Icon",id:"colorizing-a-grayscale-icon",children:[]}]},{value:"Roadmap",id:"roadmap",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("span",{className:"badge badge--danger"},"Unstable"),Object(o.b)("h1",{style:{marginTop:0}},"Image"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="Definition"',title:'"Definition"'}),"pub struct Image {\n    pub source: Option<ImageSource>,\n    pub tint_color: Option<Color>,\n}\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"showing-a-local-image"},"Showing a Local Image"),Object(o.b)("p",null,"Assuming that there is an image called ",Object(o.b)("inlineCode",{parentName:"p"},"welcome.svg")," or ",Object(o.b)("inlineCode",{parentName:"p"},"welcome.png")," in the\n",Object(o.b)("inlineCode",{parentName:"p"},"assets/")," folder of your project, you can use the following code to render it on\nyour screen."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),'poly!(<Image source={ asset!("welcome") } ... />)\n')),Object(o.b)("h3",{id:"colorizing-a-grayscale-icon"},"Colorizing a Grayscale Icon"),Object(o.b)("p",null,"In this example, we load a grayscale image called ",Object(o.b)("inlineCode",{parentName:"p"},"chevron.svg")," or\n",Object(o.b)("inlineCode",{parentName:"p"},"chevron.png")," from the ",Object(o.b)("inlineCode",{parentName:"p"},"assets/")," folder of a project and colorize it at runtime.\nFor example, this technique is used to colorize the icons in header and bottom\nbars of navigator UIs."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),'poly!(<Image source={ asset!("chevron") }\n         tint_color={ Color::from_hex(0x0073FF) } />)\n')),Object(o.b)("h2",{id:"roadmap"},"Roadmap"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"There are some open issues that we would like to get some feedback on through\nour ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/polyhorn/polyhorn"}),"Github"),". Please chime in if you have\nsome thoughts."),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"asset!(...)")," macro has not yet been implemented. Use\n",Object(o.b)("inlineCode",{parentName:"li"},"ImageSource::with_name(...)")," directly. See ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/api/image-source/"}),"ImageSource"),"\nfor more information."),Object(o.b)("li",{parentName:"ol"},"We're still adding some essential properties to the ",Object(o.b)("inlineCode",{parentName:"li"},"Image")," component.\nSpecifically: ",Object(o.b)("inlineCode",{parentName:"li"},"Image"),"s are not yet styled and don't generate pointer events\nby themselves unless wrapped in a ",Object(o.b)("inlineCode",{parentName:"li"},"View"),".")))))}s.isMDXComponent=!0}}]);