(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(2),r=(a(0),a(130)),o=a(132);const s={id:"image-source",title:"ImageSource",sidebar_label:"ImageSource"},c={unversionedId:"image-source",id:"image-source",isDocsHomePage:!1,title:"ImageSource",description:"An image source describes a source of PNG-encoded image data that can be",source:"@site/docs/api/image-source.md",slug:"/image-source",permalink:"/api/image-source",editUrl:"https://github.com/polyhorn/polyhorn.github.io/edit/master/docs/api/image-source.md",version:"current",sidebar_label:"ImageSource",sidebar:"apiSidebar",previous:{title:"Font",permalink:"/api/font"},next:{title:"Transforms",permalink:"/api/transforms"}},i=[{value:"Sources",id:"sources",children:[{value:"Placeholders",id:"placeholders",children:[]},{value:"Assets",id:"assets",children:[]},{value:"Bytes",id:"bytes",children:[]}]}],l={rightToc:i};function b({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)(o.a,{level:1,path:"polyhorn_ui/assets/enum.ImageSource.html",mdxType:"Status"}),Object(r.b)("p",null,"An image source describes a source of PNG-encoded image data that can be\npassed to e.g. the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/components/image/"}),"Image")," component. An image source can\neither be a placeholder, an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./asset/"}),"Asset")," or a\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.rs/bytes/latest/bytes/struct.Bytes.html"}),"Bytes")," (3rd party\ncrate) object."),Object(r.b)("h2",{id:"sources"},"Sources"),Object(r.b)("h3",{id:"placeholders"},"Placeholders"),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("img",{src:"/img/image-sources-without-placeholders-before.png"})),Object(r.b)("div",{className:"col col--6"},Object(r.b)("img",{src:"/img/image-sources-without-placeholders-after.png"}))),Object(r.b)("p",null,"If you're loading an remote image, you might want to show a placeholder instead.\nThe placeholder is entirely transparent (unless you give the containing\ncomponent an opaque background color) but does have a size. This size is\nsubsequently used in calculating the layout."),Object(r.b)("p",null,"The benefit of this is that when the image is eventually completely loaded, and\nthe component re-renders to show that image, the rest of the layout will not\nchange because it already anticipated the correct size of the image."),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("img",{src:"/img/image-sources-with-placeholders-before.png"})),Object(r.b)("div",{className:"col col--6"},Object(r.b)("img",{src:"/img/image-sources-with-placeholders-after.png"}))),Object(r.b)("p",null,"The estimated size is not a strict requirement. For example, if the image you\nload turns out to have a different size than the placeholder size, we will\nrecalculate the layout and include the real dimensions of the image."),Object(r.b)("p",null,"In other words: make an educated guess when providing placeholders with the\nestimated size, but don't worry if the estimate is occasionally wrong: Polyhorn\nwill automatically correct the layout given the final dimensions."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Using placeholders might seem similar to setting the ",Object(r.b)("inlineCode",{parentName:"p"},"width")," and ",Object(r.b)("inlineCode",{parentName:"p"},"height")," CSS\nattributes of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/components/image/"}),"Image")," component, but there is a subtle\ndifference."),Object(r.b)("p",{parentName:"div"},"When you replace a placeholder with an image that does not have the estimated\nsize given to the placeholder, Polyhorn will adjust the layout to accommodate\nthe real dimensions of the image."),Object(r.b)("p",{parentName:"div"},"If you use the ",Object(r.b)("inlineCode",{parentName:"p"},"width")," and ",Object(r.b)("inlineCode",{parentName:"p"},"height")," CSS attributes instead of using a\nplaceholder, the layout will not be adjusted when the real dimensions of the\neventual image do not match the given CSS width and height."))),Object(r.b)("h4",{id:"related-example-code"},"Related Example Code"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/polyhorn/examples/blob/master/image-placeholders/src/lib.rs"}),"examples/image-placeholders"))),Object(r.b)("h3",{id:"assets"},"Assets"),Object(r.b)("p",null,"The easiest way to load icons directly from your app's bundle, is to use the\n",Object(r.b)("inlineCode",{parentName:"p"},"asset!(...)")," macro. You can read more about the macro's purpose\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/api/asset"}),"here"),'. Assuming you have a SVG file named "icon.svg" in your\n',Object(r.b)("inlineCode",{parentName:"p"},"assets/")," folder, this is all it takes to render it to screen:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),'<Image source=asset!("icon") />\n')),Object(r.b)("h4",{id:"related-example-code-1"},"Related Example Code"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/polyhorn/examples/blob/master/image-placeholders/src/lib.rs"}),"examples/image-placeholders"))),Object(r.b)("h3",{id:"bytes"},"Bytes"),Object(r.b)("p",null,"Every Polyhorn platform should also be able to decode and render PNG images.\nThis is a small example that shows how to render a PNG-encoded image:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),'let bytes = include_bytes!("../assets/emoji-polyhorn.png");\n\npoly!(<Image source={ &bytes[..] } ... />)\n')),Object(r.b)("p",null,"However, if you're loading a local image, always use ",Object(r.b)("inlineCode",{parentName:"p"},"asset!(...)")," because it\ncomes with a few additional advantages (e.g. image assets implement\n",Object(r.b)("inlineCode",{parentName:"p"},"ImageQuery")," so you can measure their size ahead of time)."),Object(r.b)("h4",{id:"remote-images"},"Remote Images"),Object(r.b)("p",null,"Networking is generally out of scope for the Polyhorn core itself. If you want\nto load remote images, we recommend using the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.rs/reqwest"}),"reqwest")," crate."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),'let source = use_reference!(manager, ImageSource::placeholder(96.0, 96.0));\n\n// Turn it into a weak RC so we can modify\n// its value asynchronously.\nlet weak_source = source.weak(manager);\n\nuse_async!(manager, async move {\n    let bytes = reqwest::get("https://polyhorn.com/img/emoji-polyhorn.png")\n        .await\n        .unwrap()\n        .bytes()\n        .await\n        .unwrap();\n\n    weak_source.replace(bytes);\n    weak_source.queue_rerender();\n});\n\npoly!(<Image source={ source.cloned(manager) } />)\n')),Object(r.b)("h4",{id:"related-example-code-2"},"Related Example Code"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/polyhorn/examples/blob/master/image-bytes-png/src/lib.rs"}),"examples/image-bytes-png")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/polyhorn/examples/blob/master/image-reqwest/src/lib.rs"}),"examples/image-reqwest"))))}b.isMDXComponent=!0},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=b(a),u=n,d=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return a?r.a.createElement(d,c(c({ref:t},l),{},{components:a})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},132:function(e,t,a){"use strict";var n=a(0);t.a=({level:e,path:t})=>n.createElement("p",{style:{display:"flex",alignItems:"center",lineHeight:0}},0==e&&n.createElement("span",{className:"badge badge--danger",style:{marginRight:10}},"Unstable"),1==e&&n.createElement("span",{className:"badge badge--warning",style:{marginRight:10}},"Release Candidate"),function(e){if(!e)return;const t=e.split("/")[0];return n.createElement("a",{href:`https://docs.rs/${t}/*/${e}`,target:"blank"},n.createElement("span",{className:"badge badge--primary"},"Reference \u2192"))}(t))}}]);