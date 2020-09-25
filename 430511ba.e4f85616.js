(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),l=s(n),m=a,u=l["".concat(o,".").concat(m)]||l[m]||p[m]||i;return n?r.a.createElement(u,c(c({ref:t},d),{},{components:n})):r.a.createElement(u,c({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(117)),o={id:"keyboard-avoiding-view",title:"KeyboardAvoidingView",sidebar_label:"KeyboardAvoidingView",hide_title:!0},c={unversionedId:"keyboard-avoiding-view",id:"keyboard-avoiding-view",isDocsHomePage:!1,title:"KeyboardAvoidingView",description:"Unstable",source:"@site/docs/components/keyboard-avoiding-view.md",slug:"/keyboard-avoiding-view",permalink:"/components/keyboard-avoiding-view",editUrl:"https://github.com/polyhorn/polyhorn.github.io/edit/master/docs/components/keyboard-avoiding-view.md",version:"current",sidebar_label:"KeyboardAvoidingView",sidebar:"componentsSidebar",previous:{title:"Image",permalink:"/components/image"},next:{title:"Modal",permalink:"/components/modal"}},b=[{value:"Roadmap",id:"roadmap",children:[]}],d={rightToc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("span",{className:"badge badge--danger"},"Unstable"),Object(i.b)("h1",{style:{marginTop:0}},"KeyboardAvoidingView"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="Definition"',title:'"Definition"'}),"pub struct KeyboardAvoidingView {\n    pub transform: Arc<dyn Fn(f32) -> LayoutAdjustment + Send + Sync>,\n}\n")),Object(i.b)("h2",{id:"roadmap"},"Roadmap"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"There are some open issues that we would like to get some feedback on through\nour ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/polyhorn/polyhorn"}),"Github"),". Please chime in if you have\nsome thoughts."),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},"We're considering integrating the behavior of ",Object(i.b)("inlineCode",{parentName:"li"},"KeyboardAvoidingView")," with the\nbase ",Object(i.b)("inlineCode",{parentName:"li"},"View")," component. Specifically, we are considering adding a\n",Object(i.b)("inlineCode",{parentName:"li"},"keyboard_adjustment")," property to the ",Object(i.b)("inlineCode",{parentName:"li"},"View")," component that replaces the\n",Object(i.b)("inlineCode",{parentName:"li"},"KeyboardAvoidingView")," altogether."),Object(i.b)("li",{parentName:"ol"},"The transformation function must be thread-safe because it is executed on\nthe main thread. (Note that ",Object(i.b)("inlineCode",{parentName:"li"},"Arc<T>")," requires ",Object(i.b)("inlineCode",{parentName:"li"},"T: Send + Sync"),'.) The\ntransformation is done on the main thread because it is the only way to\n"piggyback" on iOS\'s keyboard sliding animation. Although this is an\neffective workaround, it might look better if we can abstract away this\ncomplex type signature.'),Object(i.b)("li",{parentName:"ol"},"It should not be necessary to write a custom transformation function for most\nuse cases. This should probably me an enum variant ",Object(i.b)("inlineCode",{parentName:"li"},"Transform::Custom(...)"),"\ninstead.")))))}s.isMDXComponent=!0}}]);