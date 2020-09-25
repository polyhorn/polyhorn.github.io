(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{117:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),O=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=O(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=O(a),d=n,m=l["".concat(c,".").concat(d)]||l[d]||j[d]||b;return a?r.a.createElement(m,i(i({ref:t},p),{},{components:a})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<b;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return O}));var n=a(2),r=a(6),b=(a(0),a(117)),c={id:"ios",title:"iOS",sidebar_label:"iOS"},i={unversionedId:"platforms/ios",id:"platforms/ios",isDocsHomePage:!1,title:"iOS",description:"Development",source:"@site/docs/general/platforms/ios.md",slug:"/platforms/ios",permalink:"/docs/platforms/ios",editUrl:"https://github.com/polyhorn/polyhorn.github.io/edit/master/docs/general/platforms/ios.md",version:"current",sidebar_label:"iOS",sidebar:"someSidebar",previous:{title:"Android",permalink:"/docs/platforms/android"}},o=[{value:"Development",id:"development",children:[{value:"Running on iOS Simulator",id:"running-on-ios-simulator",children:[]},{value:"Running on an iOS Device",id:"running-on-an-ios-device",children:[]}]},{value:"Distribution",id:"distribution",children:[]},{value:"Device Support",id:"device-support",children:[]}],p={rightToc:o};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"development"},"Development"),Object(b.b)("p",null,"Make sure you have ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/xcode/"}),"Xcode")," installed."),Object(b.b)("h3",{id:"running-on-ios-simulator"},"Running on iOS Simulator"),Object(b.b)("p",null,"If you want to run your new app on the iOS Simulator, you don't need an Apple ID."),Object(b.b)("h3",{id:"running-on-an-ios-device"},"Running on an iOS Device"),Object(b.b)("p",null,"If you want to run your app on your own iOS device, you need to create a free\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/"}),"Apple developer account"),"."),Object(b.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Unimplemented")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"Running on an iOS device is not yet automated."))),Object(b.b)("h2",{id:"distribution"},"Distribution"),Object(b.b)("h2",{id:"device-support"},"Device Support"),Object(b.b)("p",null,"Rust has ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.rust-lang.org/2020/01/03/reducing-support-for-32-bit-apple-targets.html"}),"demoted 32-bit support")," in v. 1.42.0.\nAs such, Polyhorn is only supported on 64-bit iOS devices. The table below lists\nall devices that support every component and dependency of Polyhorn."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Min. OS"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Max. OS"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Market Share",Object(b.b)("sup",Object(n.a)({parentName:"th"},{id:"fnref-3"}),Object(b.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-3",className:"footnote-ref"}),"3"))))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iPhone 2G to 5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n.a.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iPhone 5s"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"iOS 8.0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"iOS 12.4.8",Object(b.b)("sup",Object(n.a)({parentName:"td"},{id:"fnref-2"}),Object(b.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1.27%")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iPhone 6 (Plus)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"iOS 12.4.8",Object(b.b)("sup",Object(n.a)({parentName:"td"},{id:"fnref-2"}),Object(b.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4.16%")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iPhone 6s (Plus)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4.88%")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iPhone SE 1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2.33%")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iPhone 7 (Plus)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"8.39%")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iPhone 8 (Plus)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"5.70%")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iPhone X"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"3.43%")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iPhone XR"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.66%")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iPhone XS (Max)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1.84%")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iPhone 11"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n.a.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iPhone 11 Pro (Max)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n.a.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"iPhone SE 2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"n.a.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"32.66%",Object(b.b)("sup",Object(n.a)({parentName:"td"},{id:"fnref-1"}),Object(b.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")))))),Object(b.b)("div",{className:"footnotes"},Object(b.b)("hr",{parentName:"div"}),Object(b.b)("ol",{parentName:"div"},Object(b.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-1"}),"Percentages are relative to all phones (incl. Android).",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")),Object(b.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-2"}),"Last iOS version provided by Apple.",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-2",className:"footnote-backref"}),"\u21a9")),Object(b.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-3"}),"Data provided by ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://deviceatlas.com/blog/most-popular-iphones"}),"DeviceAtlas"),".",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-3",className:"footnote-backref"}),"\u21a9")))))}O.isMDXComponent=!0}}]);