(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=(a(0),a(130)),i=a(132);const c={id:"asset",title:"Asset",sidebar_label:"Asset"},b={unversionedId:"asset",id:"asset",isDocsHomePage:!1,title:"Asset",description:"Most apps contain assets: icons, pictures, fonts, etc. In Polyhorn projects,",source:"@site/docs/api/asset.md",slug:"/asset",permalink:"/api/asset",editUrl:"https://github.com/polyhorn/polyhorn.github.io/edit/master/docs/api/asset.md",version:"current",sidebar_label:"Asset",sidebar:"apiSidebar",previous:{title:"Overview",permalink:"/api/"},next:{title:"Color",permalink:"/api/color"}},l=[{value:"Inference",id:"inference",children:[{value:"Accepted Characters",id:"accepted-characters",children:[]},{value:"Namespacing",id:"namespacing",children:[]}]},{value:"Images",id:"images",children:[{value:"Multi-DPI Assets",id:"multi-dpi-assets",children:[]},{value:"App Icons and Artwork",id:"app-icons-and-artwork",children:[]},{value:"Queries",id:"queries",children:[]}]},{value:"Fonts",id:"fonts",children:[{value:"Queries",id:"queries-1",children:[]}]}],o={rightToc:l};function s({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)(i.a,{level:0,path:"polyhorn_ui/assets/trait.Asset.html",mdxType:"Status"}),Object(r.b)("p",null,"Most apps contain assets: icons, pictures, fonts, etc. In Polyhorn projects,\nthese assets should be stored in the ",Object(r.b)("inlineCode",{parentName:"p"},"assets/")," folder."),Object(r.b)("h2",{id:"inference"},"Inference"),Object(r.b)("p",null,"Whenever you invoke the ",Object(r.b)("inlineCode",{parentName:"p"},"asset!(...)")," macro with the name of an asset\n(excluding its extension), Polyhorn will automatically infers the type of the\nasset based on its original suffix (see table). Note that, as a consequence,\nassets must be unique regardless of their suffix / extension."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Suffix"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"*.png")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#images"}),"Images"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"*.svg")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#images"}),"Images"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"*.ttf")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#fonts"}),"Fonts"))))),Object(r.b)("h3",{id:"accepted-characters"},"Accepted Characters"),Object(r.b)("p",null,"Assets may contain lowercase letters and dashes only."),Object(r.b)("h3",{id:"namespacing"},"Namespacing"),Object(r.b)("p",null,"The macro will automatically recognize and distinguish the calling package.\nSpecifically: different packages are allowed to have assets with an identical\nname. Conversely, packages cannot access assets that originate from a\ndifferent package. If you want to know the name of the package that an asset\noriginated from, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"package()")," function of the ",Object(r.b)("inlineCode",{parentName:"p"},"Asset")," trait."),Object(r.b)("p",null,"Polyhorn does not accept aliasing dependencies with assets, as it would\nresults in undefined behavior if the original name clashes with another\ndependency's name."),Object(r.b)("h2",{id:"images"},"Images"),Object(r.b)("p",null,"When you add image assets to the ",Object(r.b)("inlineCode",{parentName:"p"},"assets/")," folder of your Polyhorn project, we\nwill automatically convert your images to improve their appearance on different\ndevices and (if necessary) transcode them to the format of preference on a\nparticular platform."),Object(r.b)("p",null,"Images must be in either scalable vector graphics (SVG) or portable network\ngraphics (PNG) format. Other formats are not supported."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),'<Image source=asset!("back-icon") />\n')),Object(r.b)("h3",{id:"multi-dpi-assets"},"Multi-DPI Assets"),Object(r.b)("p",null,"If you want your app to look perfect on every possible display, you have to\nconsider different DPIs too. Dots Per Inch (DPI) refers to the density of\nLEDs on a display. Higher DPIs mean that there are more LEDs on the same\nsurface area, which in turn means that assets can look sharper, provided that\na few basic guidelines are followed."),Object(r.b)("p",null,"If you want your icons to look good on both low-DPI and high-DPI with minimal\neffort, we recommend saving your assets as scalable vector graphics (SVG). This\nis the easiest way to get good results. You save a single SVG that serves as the\nbase from which we derive multiple higher (and lower) DPI versions."),Object(r.b)("p",null,"If you want to maintain control over this scaling procedure, you can manually\nexport your icons with DPI suffices. Specifically:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"If your asset is named ",Object(r.b)("inlineCode",{parentName:"li"},"icon.svg"),", we automatically convert it to PNGs for\nall DPIs we need. The source SVG will not be present in the resulting app\nbundle."),Object(r.b)("li",{parentName:"ol"},"If your asset is named ",Object(r.b)("inlineCode",{parentName:"li"},"icon.png"),", we will not generate multi-DPI versions.\nInstead, the icons will be resized at runtime. This will most likely result\nin ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Pixelation"}),"pixelation")," and is generally\nnot appreciated. ",Object(r.b)("em",{parentName:"li"},"This is not recommended.")),Object(r.b)("li",{parentName:"ol"},"If your asset is named ",Object(r.b)("inlineCode",{parentName:"li"},"icon@___.png"),", we will automatically generate\nmulti-DPI versions for all DPIs that are lower than the file's suffix\nindicates.")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Suffix"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Scale"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"DPI"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Suffix"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Scale"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"DPI"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("em",{parentName:"td"},"Apple")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("em",{parentName:"td"},"Android")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"@ldpi")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0.75x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"~120")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"@1x")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1.0x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"132 / 163"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"@mdpi")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1.0x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"~160")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"@hdpi")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1.5x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"~240")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"@2x")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"2.0x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"264 / 326"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"@xhdpi")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"2.0x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"~320")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"@3x")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"3.0x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"401 / 458"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"@xxhdpi")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"3.0x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"~480")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"@xxxhdpi")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"4.0x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"~640")))),Object(r.b)("h3",{id:"app-icons-and-artwork"},"App Icons and Artwork"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Tip for Designers")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Do not")," apply rounded corners to your icons."))),Object(r.b)("h3",{id:"queries"},"Queries"),Object(r.b)("p",null,"Image assets implement the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.rs/polyhorn-ui/*/polyhorn_ui/queries/trait.ImageQuery.html"}),"ImageQuery"),"\ntrait, so you can easily retrieve the width, height and color space (and some\nmore characteristics) at compile-time. ",Object(r.b)("em",{parentName:"p"},"(Note: although this information is\nknown at compile-time, constant functions in Rust traits have not yet landed\nin stable and therefore, this information cannot yet be queried from within\nconstant functions.)")),Object(r.b)("h2",{id:"fonts"},"Fonts"),Object(r.b)("h3",{id:"queries-1"},"Queries"),Object(r.b)("p",null,"Font assets implement the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.rs/polyhorn-ui/*/polyhorn_ui/queries/trait.FontQuery.html"}),"FontQuery"),"\ntrait, and as such you can easily retrieve the name, style, weight etc. of a\nfont."))}s.isMDXComponent=!0},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,O=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return a?r.a.createElement(O,b(b({ref:t},o),{},{components:a})):r.a.createElement(O,b({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var o=2;o<i;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},132:function(e,t,a){"use strict";var n=a(0);t.a=({level:e,path:t})=>n.createElement("p",{style:{display:"flex",alignItems:"center",lineHeight:0}},0==e&&n.createElement("span",{className:"badge badge--danger",style:{marginRight:10}},"Unstable"),1==e&&n.createElement("span",{className:"badge badge--warning",style:{marginRight:10}},"Release Candidate"),function(e){if(!e)return;const t=e.split("/")[0];return n.createElement("a",{href:`https://docs.rs/${t}/*/${e}`,target:"blank"},n.createElement("span",{className:"badge badge--primary"},"Reference \u2192"))}(t))}}]);