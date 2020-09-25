(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),r=(n(0),n(117)),o={id:"modal",title:"Modal",sidebar_label:"Modal",hide_title:!0},l={unversionedId:"modal",id:"modal",isDocsHomePage:!1,title:"Modal",description:"Unstable",source:"@site/docs/components/modal.md",slug:"/modal",permalink:"/components/modal",editUrl:"https://github.com/polyhorn/polyhorn.github.io/edit/master/docs/components/modal.md",version:"current",sidebar_label:"Modal",sidebar:"componentsSidebar",previous:{title:"KeyboardAvoidingView",permalink:"/components/keyboard-avoiding-view"},next:{title:"ScrollView",permalink:"/components/scroll-view"}},c=[{value:"Roadmap",id:"roadmap",children:[]}],s={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("span",{className:"badge badge--danger"},"Unstable"),Object(r.b)("h1",{style:{marginTop:0}},"Modal"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="Definition"',title:'"Definition"'}),"pub struct Modal {\n    pub visible: bool,\n    pub on_dismiss: EventListener<()>,\n}\n")),Object(r.b)("h2",{id:"roadmap"},"Roadmap"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"There are some open issues that we would like to get some feedback on through\nour ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/polyhorn/polyhorn"}),"Github"),". Please chime in if you have\nsome thoughts."),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},"Currently, ",Object(r.b)("inlineCode",{parentName:"li"},"on_dismiss")," is also called when the modal is hidden explicitly\nby changing visible from ",Object(r.b)("inlineCode",{parentName:"li"},"true")," to ",Object(r.b)("inlineCode",{parentName:"li"},"false"),". The event listener is not passed\nany context to indicate if the dismissal was programmatic or user-initiated."),Object(r.b)("li",{parentName:"ol"},"Currently, the modal's dismissal is only animated if hidden through the\n",Object(r.b)("inlineCode",{parentName:"li"},"visible")," property. Specifically: if it is unmounted while its still visible,\nits dismissal will not be animated. This is due to the fact all children of\nthe modal are immediately unmounted by Polyhorn. An empty modal remains, and\nthat's before the dismissal animation is issued by the OS. We should probably\nproperly document this behavior and verify if this is also the case with\nother UI frameworks. As a work-around, wrap the modal in an\n",Object(r.b)("inlineCode",{parentName:"li"},"AnimatedPresence")," and call the ",Object(r.b)("inlineCode",{parentName:"li"},"SafeToRemove")," function in the ",Object(r.b)("inlineCode",{parentName:"li"},"on_dismiss"),"\nevent listener.")))))}d.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(n),b=a,u=m["".concat(o,".").concat(b)]||m[b]||p[b]||r;return n?i.a.createElement(u,l(l({ref:t},s),{},{components:n})):i.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);