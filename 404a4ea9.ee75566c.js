(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{130:function(e,t,o){"use strict";o.d(t,"a",(function(){return m})),o.d(t,"b",(function(){return h}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function b(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},m=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),m=s(o),p=n,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||r;return o?a.a.createElement(h,c(c({ref:t},i),{},{components:o})):a.a.createElement(h,c({ref:t},i))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<r;i++)l[i]=o[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},132:function(e,t,o){"use strict";var n=o(0);t.a=({level:e,path:t})=>n.createElement("p",{style:{display:"flex",alignItems:"center",lineHeight:0}},0==e&&n.createElement("span",{className:"badge badge--danger",style:{marginRight:10}},"Unstable"),1==e&&n.createElement("span",{className:"badge badge--warning",style:{marginRight:10}},"Release Candidate"),function(e){if(!e)return;const t=e.split("/")[0];return n.createElement("a",{href:`https://docs.rs/${t}/*/${e}`,target:"blank"},n.createElement("span",{className:"badge badge--primary"},"Reference \u2192"))}(t))},133:function(e,t,o){"use strict";function n(e){var t,o,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=n(e[t]))&&(a&&(a+=" "),a+=o);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,o=0,a="";o<arguments.length;)(e=arguments[o++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},137:function(e,t,o){"use strict";var n=o(0);const a=Object(n.createContext)(void 0);t.a=a},138:function(e,t,o){"use strict";var n=o(0),a=o(137);t.a=function(){const e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},148:function(e,t,o){"use strict";var n=o(0),a=o.n(n),r=o(138),l=o(133),c=o(52),b=o.n(c);const i=37,s=39;t.a=function(e){const{block:t,children:o,defaultValue:c,values:m,groupId:d}=e,{tabGroupChoices:p,setTabGroupChoices:h}=Object(r.a)(),[u,y]=Object(n.useState)(c),[x,O]=Object(n.useState)(!1);if(null!=d){const e=p[d];null!=e&&e!==u&&m.some(t=>t.value===e)&&y(e)}const j=e=>{y(e),null!=d&&h(d,e)},g=[],C=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},f=()=>{O(!1)};return Object(n.useEffect)(()=>{window.addEventListener("keydown",C),window.addEventListener("mousedown",f)},[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},m.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":u===e,className:Object(l.a)("tabs__item",b.a.tabItem,{"tabs__item--active":u===e}),style:x?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,o)=>{switch(o.keyCode){case s:((e,t)=>{const o=e.indexOf(t)+1;e[o]?e[o].focus():e[0].focus()})(e,t);break;case i:((e,t)=>{const o=e.indexOf(t)-1;e[o]?e[o].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),C(e)},onFocus:()=>j(e),onClick:()=>{j(e),O(!1)},onPointerDown:()=>O(!1)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(o).filter(e=>e.props.value===u)[0]))}},149:function(e,t,o){"use strict";var n=o(0),a=o.n(n);t.a=function(e){return a.a.createElement("div",null,e.children)}},73:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return b})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return s})),o.d(t,"Color",(function(){return m})),o.d(t,"default",(function(){return p}));var n=o(2),a=(o(0),o(130)),r=o(132),l=o(148),c=o(149);const b={id:"color",title:"Color",sidebar_label:"Color"},i={unversionedId:"color",id:"color",isDocsHomePage:!1,title:"Color",description:"export const Color = ({ hex, name }) => {",source:"@site/docs/api/color.md",slug:"/color",permalink:"/api/color",editUrl:"https://github.com/polyhorn/polyhorn.github.io/edit/master/docs/api/color.md",version:"current",sidebar_label:"Color",sidebar:"apiSidebar",previous:{title:"Asset",permalink:"/api/asset"},next:{title:"Font",permalink:"/api/font"}},s=[{value:"Color Spaces",id:"color-spaces",children:[{value:"sRGB",id:"srgb",children:[]},{value:"Display-P3",id:"display-p3",children:[]}]},{value:"Light Linearity",id:"light-linearity",children:[{value:"Color Blending",id:"color-blending",children:[]},{value:"Compositing",id:"compositing",children:[]}]},{value:"Images",id:"images",children:[]},{value:"Related Work",id:"related-work",children:[]}],m=({hex:e,name:t})=>Object(a.b)("div",{style:{border:"1px solid #f0f1f2",marginBottom:-1,padding:4,display:"flex",alignItems:"center"}},Object(a.b)("div",{style:{backgroundColor:e,flexShrink:0,width:64,height:24,border:"1px solid rgba(0, 0, 0, 0.25)",borderRadius:4,display:"inline-block",marginRight:10}}),Object(a.b)("div",{style:{backgroundColor:"var(--ifm-code-background)",borderRadius:"var(--ifm-code-border-radius)",color:"var(--ifm-code-color)",fontFamily:"var(--ifm-font-family-monospace)",fontSize:"var(--ifm-code-font-size)",margin:0,wordBreak:"break-all",padding:"var(--ifm-code-padding-vertical) var(--ifm-code-padding-horizontal)"}},t)),d={rightToc:s,Color:m};function p({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)(r.a,{level:1,path:"polyhorn_ui/color/struct.Color.html",mdxType:"Status"}),Object(a.b)("p",null,"Polyhorn is ",Object(a.b)("em",{parentName:"p"},"color managed"),", which essentially means that we keep track of color\nspaces when working with colors. This helps developers and designers using\nPolyhorn to get a uniform color presentation regardless of the display that\ntheir design is rendered to. We do this using the 3rd-party\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://crates.io/crates/palette"}),"palette")," crate."),Object(a.b)("h2",{id:"color-spaces"},"Color Spaces"),Object(a.b)("p",null,"Different displays have different characteristics. For example, recent iPhones\nhave been able to show a shade of red that is more vivid than was previously\npossible. On the other hand, older computer displays might not be able to\nrepresent all colors very well."),Object(a.b)("p",null,"In order to get a uniform color presentation, we work with color spaces. In a\nnutshell, if the designer of your app selects one of the supported color\nspaces in their visual editor (e.g. Figma or Sketch), then their colors will\nlook exactly the same on any other physical display that your Polyhorn app\nruns on."),Object(a.b)("h3",{id:"srgb"},"sRGB"),Object(a.b)("p",null,"Standard RGB (sRGB) is the default color space on all platforms. When you\nspecify a color in our ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/style/view-style/"}),"style")," macro using the\n",Object(a.b)("inlineCode",{parentName:"p"},"hex(...)"),", ",Object(a.b)("inlineCode",{parentName:"p"},"rgb(...)"),", ",Object(a.b)("inlineCode",{parentName:"p"},"rgba(...)"),", ",Object(a.b)("inlineCode",{parentName:"p"},"hsl(...)")," or ",Object(a.b)("inlineCode",{parentName:"p"},"hsla(...)")," functions,\nyour color is assumed to be in sRGB color space."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Tip for Designers")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"It is recommended to use sRGB in your design stage to make sure that the\ncolors you see in your design application (Figma, Sketch, etc.) are identical\nto the colors you will see when it is running on your phone or a different\nscreen."),Object(a.b)(l.a,{defaultValue:"figma",values:[{label:"Figma",value:"figma"},{label:"Sketch",value:"sketch"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"figma",mdxType:"TabItem"},Object(a.b)("h3",null,"On macOS:"),Object(a.b)("ol",null,Object(a.b)("li",null,"Open ",Object(a.b)("strong",null,"Figma.app")," and select ",Object(a.b)("strong",null,"Figma")," in the main menu bar (in the top left corner of your screen)."),Object(a.b)("li",null,"Select ",Object(a.b)("strong",null,"Color Space")," and make sure ",Object(a.b)("strong",null,"sRGB")," is checked. Make sure that ",Object(a.b)("strong",null,"Unmanaged")," is unchecked."))),Object(a.b)(c.a,{value:"sketch",mdxType:"TabItem"},Object(a.b)("h3",null,"New documents:"),Object(a.b)("ol",null,Object(a.b)("li",null,"Open ",Object(a.b)("strong",null,"Sketch.app")," and select ",Object(a.b)("strong",null,"Sketch")," in the main menu bar (in the top left corner of your screen)."),Object(a.b)("li",null,"Select ",Object(a.b)("strong",null,"Preferences")," to open the preferences window."),Object(a.b)("li",null,"If necessary, go to the ",Object(a.b)("strong",null,"General")," tab."),Object(a.b)("li",null,"Next to ",Object(a.b)("strong",null,"Color Profile"),", select ",Object(a.b)("strong",null,"sRGB IEC61966-2.1"),".")),Object(a.b)("h3",null,"Existing documents:"),Object(a.b)("ol",null,Object(a.b)("li",null,"Open your document in ",Object(a.b)("strong",null,"Sketch.app")," and select ",Object(a.b)("strong",null,"File")," in the main menu bar (in the top left corner of your screen)."),Object(a.b)("li",null,"Select ",Object(a.b)("strong",null,"Change Color Profile"),"."),Object(a.b)("li",null,"Next to ",Object(a.b)("strong",null,"Color Profile"),", select ",Object(a.b)("strong",null,"sRGB IEC61966-2.1"),"."),Object(a.b)("li",null,"Next to ",Object(a.b)("strong",null,"Change"),", make sure to select ",Object(a.b)("strong",null,"Convert")," to preserve the colors you have used."),Object(a.b)("li",null,"Confirm by clicking on ",Object(a.b)("strong",null,"Change Profile"),".")))))),Object(a.b)("h4",{id:"named-colors"},"Named Colors"),Object(a.b)("p",null,"The following colors are in sRGB color space and can be referred to by name."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"<View style=!{\n    background: lightsalmon;\n} />\n")),Object(a.b)("div",{className:"row"},Object(a.b)("div",{className:"col col--6"},Object(a.b)(m,{hex:"#F0F8FF",name:"aliceblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#FAEBD7",name:"antiquewhite",mdxType:"Color"}),Object(a.b)(m,{hex:"#00FFFF",name:"aqua",mdxType:"Color"}),Object(a.b)(m,{hex:"#7FFFD4",name:"aquamarine",mdxType:"Color"}),Object(a.b)(m,{hex:"#F0FFFF",name:"azure",mdxType:"Color"}),Object(a.b)(m,{hex:"#F5F5DC",name:"beige",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFE4C4",name:"bisque",mdxType:"Color"}),Object(a.b)(m,{hex:"#000000",name:"black",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFEBCD",name:"blanchedalmond",mdxType:"Color"}),Object(a.b)(m,{hex:"#0000FF",name:"blue",mdxType:"Color"}),Object(a.b)(m,{hex:"#8A2BE2",name:"blueviolet",mdxType:"Color"}),Object(a.b)(m,{hex:"#A52A2A",name:"brown",mdxType:"Color"}),Object(a.b)(m,{hex:"#DEB887",name:"burlywood",mdxType:"Color"}),Object(a.b)(m,{hex:"#5F9EA0",name:"cadetblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#7FFF00",name:"chartreuse",mdxType:"Color"}),Object(a.b)(m,{hex:"#D2691E",name:"chocolate",mdxType:"Color"}),Object(a.b)(m,{hex:"#FF7F50",name:"coral",mdxType:"Color"}),Object(a.b)(m,{hex:"#6495ED",name:"cornflowerblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFF8DC",name:"cornsilk",mdxType:"Color"}),Object(a.b)(m,{hex:"#DC143C",name:"crimson",mdxType:"Color"}),Object(a.b)(m,{hex:"#00FFFF",name:"cyan",mdxType:"Color"}),Object(a.b)(m,{hex:"#00008B",name:"darkblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#008B8B",name:"darkcyan",mdxType:"Color"}),Object(a.b)(m,{hex:"#B8860B",name:"darkgoldenrod",mdxType:"Color"}),Object(a.b)(m,{hex:"#A9A9A9",name:"darkgray",mdxType:"Color"}),Object(a.b)(m,{hex:"#006400",name:"darkgreen",mdxType:"Color"}),Object(a.b)(m,{hex:"#A9A9A9",name:"darkgrey",mdxType:"Color"}),Object(a.b)(m,{hex:"#BDB76B",name:"darkkhaki",mdxType:"Color"}),Object(a.b)(m,{hex:"#8B008B",name:"darkmagenta",mdxType:"Color"}),Object(a.b)(m,{hex:"#556B2F",name:"darkolivegreen",mdxType:"Color"}),Object(a.b)(m,{hex:"#FF8C00",name:"darkorange",mdxType:"Color"}),Object(a.b)(m,{hex:"#9932CC",name:"darkorchid",mdxType:"Color"}),Object(a.b)(m,{hex:"#8B0000",name:"darkred",mdxType:"Color"}),Object(a.b)(m,{hex:"#E9967A",name:"darksalmon",mdxType:"Color"}),Object(a.b)(m,{hex:"#8FBC8F",name:"darkseagreen",mdxType:"Color"}),Object(a.b)(m,{hex:"#483D8B",name:"darkslateblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#2F4F4F",name:"darkslategray",mdxType:"Color"}),Object(a.b)(m,{hex:"#2F4F4F",name:"darkslategrey",mdxType:"Color"}),Object(a.b)(m,{hex:"#00CED1",name:"darkturquoise",mdxType:"Color"}),Object(a.b)(m,{hex:"#9400D3",name:"darkviolet",mdxType:"Color"}),Object(a.b)(m,{hex:"#FF1493",name:"deeppink",mdxType:"Color"}),Object(a.b)(m,{hex:"#00BFFF",name:"deepskyblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#696969",name:"dimgray",mdxType:"Color"}),Object(a.b)(m,{hex:"#696969",name:"dimgrey",mdxType:"Color"}),Object(a.b)(m,{hex:"#1E90FF",name:"dodgerblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#B22222",name:"firebrick",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFFAF0",name:"floralwhite",mdxType:"Color"}),Object(a.b)(m,{hex:"#228B22",name:"forestgreen",mdxType:"Color"}),Object(a.b)(m,{hex:"#FF00FF",name:"fuchsia",mdxType:"Color"}),Object(a.b)(m,{hex:"#DCDCDC",name:"gainsboro",mdxType:"Color"}),Object(a.b)(m,{hex:"#F8F8FF",name:"ghostwhite",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFD700",name:"gold",mdxType:"Color"}),Object(a.b)(m,{hex:"#DAA520",name:"goldenrod",mdxType:"Color"}),Object(a.b)(m,{hex:"#808080",name:"gray",mdxType:"Color"}),Object(a.b)(m,{hex:"#008000",name:"green",mdxType:"Color"}),Object(a.b)(m,{hex:"#ADFF2F",name:"greenyellow",mdxType:"Color"}),Object(a.b)(m,{hex:"#808080",name:"grey",mdxType:"Color"}),Object(a.b)(m,{hex:"#F0FFF0",name:"honeydew",mdxType:"Color"}),Object(a.b)(m,{hex:"#FF69B4",name:"hotpink",mdxType:"Color"}),Object(a.b)(m,{hex:"#CD5C5C",name:"indianred",mdxType:"Color"}),Object(a.b)(m,{hex:"#4B0082",name:"indigo",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFFFF0",name:"ivory",mdxType:"Color"}),Object(a.b)(m,{hex:"#F0E68C",name:"khaki",mdxType:"Color"}),Object(a.b)(m,{hex:"#E6E6FA",name:"lavender",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFF0F5",name:"lavenderblush",mdxType:"Color"}),Object(a.b)(m,{hex:"#7CFC00",name:"lawngreen",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFFACD",name:"lemonchiffon",mdxType:"Color"}),Object(a.b)(m,{hex:"#ADD8E6",name:"lightblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#F08080",name:"lightcoral",mdxType:"Color"}),Object(a.b)(m,{hex:"#E0FFFF",name:"lightcyan",mdxType:"Color"}),Object(a.b)(m,{hex:"#FAFAD2",name:"lightgoldenrodyellow",mdxType:"Color"}),Object(a.b)(m,{hex:"#D3D3D3",name:"lightgray",mdxType:"Color"}),Object(a.b)(m,{hex:"#90EE90",name:"lightgreen",mdxType:"Color"}),Object(a.b)(m,{hex:"#D3D3D3",name:"lightgrey",mdxType:"Color"})),Object(a.b)("div",{className:"col col--6"},Object(a.b)(m,{hex:"#FFB6C1",name:"lightpink",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFA07A",name:"lightsalmon",mdxType:"Color"}),Object(a.b)(m,{hex:"#20B2AA",name:"lightseagreen",mdxType:"Color"}),Object(a.b)(m,{hex:"#87CEFA",name:"lightskyblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#778899",name:"lightslategray",mdxType:"Color"}),Object(a.b)(m,{hex:"#778899",name:"lightslategrey",mdxType:"Color"}),Object(a.b)(m,{hex:"#B0C4DE",name:"lightsteelblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFFFE0",name:"lightyellow",mdxType:"Color"}),Object(a.b)(m,{hex:"#00FF00",name:"lime",mdxType:"Color"}),Object(a.b)(m,{hex:"#32CD32",name:"limegreen",mdxType:"Color"}),Object(a.b)(m,{hex:"#FAF0E6",name:"linen",mdxType:"Color"}),Object(a.b)(m,{hex:"#FF00FF",name:"magenta",mdxType:"Color"}),Object(a.b)(m,{hex:"#800000",name:"maroon",mdxType:"Color"}),Object(a.b)(m,{hex:"#66CDAA",name:"mediumaquamarine",mdxType:"Color"}),Object(a.b)(m,{hex:"#0000CD",name:"mediumblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#BA55D3",name:"mediumorchid",mdxType:"Color"}),Object(a.b)(m,{hex:"#9370DB",name:"mediumpurple",mdxType:"Color"}),Object(a.b)(m,{hex:"#3CB371",name:"mediumseagreen",mdxType:"Color"}),Object(a.b)(m,{hex:"#7B68EE",name:"mediumslateblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#00FA9A",name:"mediumspringgreen",mdxType:"Color"}),Object(a.b)(m,{hex:"#48D1CC",name:"mediumturquoise",mdxType:"Color"}),Object(a.b)(m,{hex:"#C71585",name:"mediumvioletred",mdxType:"Color"}),Object(a.b)(m,{hex:"#191970",name:"midnightblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#F5FFFA",name:"mintcream",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFE4E1",name:"mistyrose",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFE4B5",name:"moccasin",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFDEAD",name:"navajowhite",mdxType:"Color"}),Object(a.b)(m,{hex:"#000080",name:"navy",mdxType:"Color"}),Object(a.b)(m,{hex:"#FDF5E6",name:"oldlace",mdxType:"Color"}),Object(a.b)(m,{hex:"#808000",name:"olive",mdxType:"Color"}),Object(a.b)(m,{hex:"#6B8E23",name:"olivedrab",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFA500",name:"orange",mdxType:"Color"}),Object(a.b)(m,{hex:"#FF4500",name:"orangered",mdxType:"Color"}),Object(a.b)(m,{hex:"#DA70D6",name:"orchid",mdxType:"Color"}),Object(a.b)(m,{hex:"#EEE8AA",name:"palegoldenrod",mdxType:"Color"}),Object(a.b)(m,{hex:"#98FB98",name:"palegreen",mdxType:"Color"}),Object(a.b)(m,{hex:"#AFEEEE",name:"paleturquoise",mdxType:"Color"}),Object(a.b)(m,{hex:"#DB7093",name:"palevioletred",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFEFD5",name:"papayawhip",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFDAB9",name:"peachpuff",mdxType:"Color"}),Object(a.b)(m,{hex:"#CD853F",name:"peru",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFC0CB",name:"pink",mdxType:"Color"}),Object(a.b)(m,{hex:"#DDA0DD",name:"plum",mdxType:"Color"}),Object(a.b)(m,{hex:"#B0E0E6",name:"powderblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#800080",name:"purple",mdxType:"Color"}),Object(a.b)(m,{hex:"#663399",name:"rebeccapurple",mdxType:"Color"}),Object(a.b)(m,{hex:"#FF0000",name:"red",mdxType:"Color"}),Object(a.b)(m,{hex:"#BC8F8F",name:"rosybrown",mdxType:"Color"}),Object(a.b)(m,{hex:"#4169E1",name:"royalblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#8B4513",name:"saddlebrown",mdxType:"Color"}),Object(a.b)(m,{hex:"#FA8072",name:"salmon",mdxType:"Color"}),Object(a.b)(m,{hex:"#F4A460",name:"sandybrown",mdxType:"Color"}),Object(a.b)(m,{hex:"#2E8B57",name:"seagreen",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFF5EE",name:"seashell",mdxType:"Color"}),Object(a.b)(m,{hex:"#A0522D",name:"sienna",mdxType:"Color"}),Object(a.b)(m,{hex:"#C0C0C0",name:"silver",mdxType:"Color"}),Object(a.b)(m,{hex:"#87CEEB",name:"skyblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#6A5ACD",name:"slateblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#708090",name:"slategray",mdxType:"Color"}),Object(a.b)(m,{hex:"#708090",name:"slategrey",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFFAFA",name:"snow",mdxType:"Color"}),Object(a.b)(m,{hex:"#00FF7F",name:"springgreen",mdxType:"Color"}),Object(a.b)(m,{hex:"#4682B4",name:"steelblue",mdxType:"Color"}),Object(a.b)(m,{hex:"#D2B48C",name:"tan",mdxType:"Color"}),Object(a.b)(m,{hex:"#008080",name:"teal",mdxType:"Color"}),Object(a.b)(m,{hex:"#D8BFD8",name:"thistle",mdxType:"Color"}),Object(a.b)(m,{hex:"#FF6347",name:"tomato",mdxType:"Color"}),Object(a.b)(m,{hex:"#40E0D0",name:"turquoise",mdxType:"Color"}),Object(a.b)(m,{hex:"#EE82EE",name:"violet",mdxType:"Color"}),Object(a.b)(m,{hex:"#F5DEB3",name:"wheat",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFFFFF",name:"white",mdxType:"Color"}),Object(a.b)(m,{hex:"#F5F5F5",name:"whitesmoke",mdxType:"Color"}),Object(a.b)(m,{hex:"#FFFF00",name:"yellow",mdxType:"Color"}),Object(a.b)(m,{hex:"#9ACD32",name:"yellowgreen",mdxType:"Color"}))),Object(a.b)("h3",{id:"display-p3"},"Display-P3"),Object(a.b)("p",null,"Display-P3 is an RGB-based color space used by Apple on iOS devices.\nDisplay-P3 uses the same transfer function as sRGB, but uses a different set\nof primaries. What it means practically, is that colors in this color space can\nbe more vivid than in sRGB. For example: the most vivid red in Display-P3 is\nmuch more vivid than in sRGB."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"<View style=!{\n    background: color(display_p3, 1.0, 0.0, 0.0, 1.0);\n} />\n")),Object(a.b)("p",null,"If you choose to specify colors in Display-P3 color space, but the user has an\nincompatible display, Polyhorn automatically converts those colors to sRGB and\napplies clamping if necessary. For vivid colors in Display-P3 that do not\nexist in sRGB (and cannot be shown on the user's display), this means that we\nchoose a color that is less vivid but resembles the original color as closely\nas possible."),Object(a.b)("h2",{id:"light-linearity"},"Light Linearity"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"This section is a short summary of\n",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://blog.johnnovak.net/2016/09/21/what-every-coder-should-know-about-gamma/"}),"What Every Coder Should Know About Gamma"),".\nThis article is definitely worth reading if you want to know more about the\ntechnical implementation of colors.")),Object(a.b)("p",null,"There are a few more subtleties that we need to address when it comes to\nblending colors."),Object(a.b)("h3",{id:"color-blending"},"Color Blending"),Object(a.b)("p",null,"When you mix two colors together using one of the Polyhorn Color APIs, we\nautomatically convert your color to linear light before applying the\noperation, and convert back to non-linear light afterwards."),Object(a.b)("div",{className:"row"},Object(a.b)("div",{className:"col col--6"},Object(a.b)("img",{src:"/img/color-blending-srgb.png"})),Object(a.b)("div",{className:"col col--6"},Object(a.b)("img",{src:"/img/color-blending-linear-srgb.png"}))),Object(a.b)("p",null,"Left shows the result of naively averaging over each channel in sRGB space.\nBecause the sRGB space is non-linear with respect to lightness, the shade of\nthe purple intersection is much darker than it should be. On the right, the\nresult of applying gamma correction to the blending operation: the purple\nintersection has the same light intensity as the average of the blue and red\nsections. (You can verify this by using the built-in ",Object(a.b)("strong",{parentName:"p"},"Digital Color Meter")," on\nmacOS and switching to ",Object(a.b)("strong",{parentName:"p"},"L","*","a*b","*")," where ",Object(a.b)("strong",{parentName:"p"},"L","*")," is lightness)."),Object(a.b)("div",{className:"row"},Object(a.b)("div",{className:"col col--6"},Object(a.b)("img",{src:"/img/color-blending-srgb-grayscale.png"})),Object(a.b)("div",{className:"col col--6"},Object(a.b)("img",{src:"/img/color-blending-linear-srgb-grayscale.png"}))),Object(a.b)("p",null,"The problem becomes even more apparent when we convert the colors to grayscale."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Tip for Designers")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Unfortunately, most design software doesn't support gamma-correct blending.\nIf you use color blending in your design documents, it probably looks like the\ngamma-incorrect examples on the left."))),Object(a.b)("h3",{id:"compositing"},"Compositing"),Object(a.b)("p",null,"For alpha blending, we're at the mercy of the target platform's display\ncompositor. On Apple's OSes, this is\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Quartz_Compositor"}),"Quartz Compositor"),"."),Object(a.b)("p",null,"Unfortunately, most OSes do not support gamma-correct blending."),Object(a.b)("p",null,"For that reason, we strongly disrecommend using translucent colors. Instead,\ntry to pre-compute the color you want by blending them at compile-time. Here\nis an example of how to convert existing code to pre-computed code:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),'  <View style=!{\n      background: red;\n  }>\n      <Text style=!{\n-         color: rgba(black, 50%);\n+         color: mix(black, red, 50%);\n      }>\n          "Hello World!"\n      </Text>\n  </View>\n')),Object(a.b)("p",null,"Additionally, for large surface areas, specifying an opaque color instead of\ntranslucent colors will result in drastically improved performance of your app\ndue to the fact that the renderer can skip rendering views that are behind the\nopaque background."),Object(a.b)("h2",{id:"images"},"Images"),Object(a.b)("p",null,"We currently do not yet make guarantees about the color precision of images you\nshow in your app (this includes both pictures and icons)."),Object(a.b)("h2",{id:"related-work"},"Related Work"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This API is modelled after the\n",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.w3.org/TR/css-color-4/"}),"CSS Color Module Level 4")," working draft."),Object(a.b)("li",{parentName:"ul"},"This is by far one of the best overviews of gamma-correction, (non)linear light and more: ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://blog.johnnovak.net/2016/09/21/what-every-coder-should-know-about-gamma/"}),"What Every Coder Should Know About Gamma"),".")))}p.isMDXComponent=!0}}]);