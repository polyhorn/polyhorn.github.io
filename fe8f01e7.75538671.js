(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{124:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),i=(r(0),r(130)),a={id:"editors",title:"Editors",sidebar_label:"Editors"},c={unversionedId:"workflow/editors",id:"workflow/editors",isDocsHomePage:!1,title:"Editors",description:"This guide will help you set up your editor to write apps that run on a",source:"@site/docs/general/workflow/editors.md",slug:"/workflow/editors",permalink:"/docs/workflow/editors",editUrl:"https://github.com/polyhorn/polyhorn.github.io/edit/master/docs/general/workflow/editors.md",version:"current",sidebar_label:"Editors",sidebar:"someSidebar",previous:{title:"Workflow",permalink:"/docs/ci/"},next:{title:"Continuous Integration",permalink:"/docs/workflow/ci"}},u=[{value:"Visual Studio Code",id:"visual-studio-code",children:[]}],l={rightToc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This guide will help you set up your editor to write apps that run on a\ndifferent platform. This requires a bit more work because in the traditional\nworkflow, you write programs on the same platform that runs them (PC), whereas\nnow, you're writing apps that run on a mobile device (or a simulator)."),Object(i.b)("h2",{id:"visual-studio-code"},"Visual Studio Code"),Object(i.b)("p",null,"If you're using VS Code with rust-analyzer (which we recommend), make sure to\ncorrectly configure the target. If you're targeting iOS, use the\n",Object(i.b)("inlineCode",{parentName:"p"},"x86_64-apple-ios")," target (or any other ",Object(i.b)("inlineCode",{parentName:"p"},"*-apple-ios")," target)."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title=".vscode/settings.json"',title:'".vscode/settings.json"'}),'{\n    "rust-analyzer.cargo.target": "x86_64-apple-ios"\n}\n')),Object(i.b)("p",null,"If you're targeting both iOS and Android, you can choose either target. If\nyou're writing platform-specific code, you can also switch between targets."))}s.isMDXComponent=!0},130:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);