(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),i=(n(0),n(130)),a={id:"view",title:"View",hide_title:!0,sidebar_label:"View"},c={unversionedId:"view",id:"view",isDocsHomePage:!1,title:"View",description:"Unstable",source:"@site/docs/components/view.md",slug:"/view",permalink:"/components/view",editUrl:"https://github.com/polyhorn/polyhorn.github.io/edit/master/docs/components/view.md",version:"current",sidebar_label:"View",sidebar:"componentsSidebar",previous:{title:"TextInput",permalink:"/components/text-input"},next:{title:"Window",permalink:"/components/window"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("span",{className:"badge badge--danger"},"Unstable"),Object(i.b)("h1",{style:{marginTop:0}},"View"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust",metastring:'title="Definition"',title:'"Definition"'}),"pub struct View {\n    pub style: Style,\n    pub on_pointer_cancel: EventListener<()>,\n    pub on_pointer_down: EventListener<()>,\n    pub on_pointer_up: EventListener<()>,\n    pub reference: Option<Reference<ViewHandle>>,\n}\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"There are some open issues that we would like to get some feedback on through\nour ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/polyhorn/polyhorn"}),"Github"),". Please chime in if you have\nsome thoughts."),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},"Event listeners are implemented, but the events are void because we haven't\ndecided on a particular event API yet. This means it is possible to get a\ncallback when a view is pressed, but no context is provided as to where the\nview is pressed."),Object(i.b)("li",{parentName:"ol"},"It might be worthwhile to consider merging the functionality of either\n",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/components/keyboard-avoiding-view/"}),"KeyboardAvoidingView")," and/or\n",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/components/scrollable/"}),"ScrollView")," with this component.")))))}l.isMDXComponent=!0},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(a,".").concat(m)]||b[m]||u[m]||i;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);