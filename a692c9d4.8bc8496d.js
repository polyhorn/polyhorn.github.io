(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(117)),o={id:"state-hooks",title:"State Hooks",sidebar_label:"State Hooks"},s={unversionedId:"hooks/state-hooks",id:"hooks/state-hooks",isDocsHomePage:!1,title:"State Hooks",description:"Overview",source:"@site/docs/general/hooks/state.md",slug:"/hooks/state-hooks",permalink:"/docs/hooks/state-hooks",editUrl:"https://github.com/polyhorn/polyhorn.github.io/edit/master/docs/general/hooks/state.md",version:"current",sidebar_label:"State Hooks",sidebar:"someSidebar",previous:{title:"Hooks",permalink:"/docs/hooks/"},next:{title:"Effect Hooks",permalink:"/docs/hooks/effect-hooks"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Declaration",id:"declaration",children:[]},{value:"Usage",id:"usage",children:[]},{value:"API Reference",id:"api-reference",children:[]},{value:"Roadmap",id:"roadmap",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"By default, components are pure functions of their properties (i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"&self"),").\nHowever, often we want to add some state to components. For example, forms\nshould be able to save the text that is entered into a text field. The state\nhook facilitates this."),Object(i.b)("h2",{id:"declaration"},"Declaration"),Object(i.b)("p",null,"The state hook is declared with a ",Object(i.b)("inlineCode",{parentName:"p"},"UseState")," trait. The hook can be used on\nany type that implements this trait."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="Definition"',title:'"Definition"'}),"pub trait UseState {\n    fn use_state<T, F>(&mut self, key: Key, initializer: F) -> State<T>\n    where\n        T: Serialize + Deserialize + 'static,\n        F: FnOnce() -> T;\n}\n")),Object(i.b)("p",null,"It is recommended to use the macro instead of interfacing with the trait\ndirectly. The macro will generate a unique invocation ID and wrap the default\nvalue in a closure so that it is only called during the initial render."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="Definition"',title:'"Definition"'}),"use_state!($manager:expr, $default_value:expr) => {\n    UseState::use_state($manager, use_id!(), || $default_value)\n}\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"use_state!(...)")," macro returns a ",Object(i.b)("inlineCode",{parentName:"p"},"State<T>")," value. The generic\nparameter ",Object(i.b)("inlineCode",{parentName:"p"},"T")," is automatically inferred when you use it. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="Example"',title:'"Example"'}),"let clicked = use_state!(manager, false);\n\npoly!(\n    <View on_pointer_up={ |_|\n        clicked.replace(true);\n    } ... />\n)\n")),Object(i.b)("p",null,"In this case, the Rust compiler will automatically infer that ",Object(i.b)("inlineCode",{parentName:"p"},"clicked")," is a\n",Object(i.b)("inlineCode",{parentName:"p"},"State<bool>"),"."),Object(i.b)("p",null,"Keep in mind that (in a future version of Polyhorn) the entire state will be\nserialized when the user closes your app. This means that everything you\nstore in your state, must be serializable. Specifically: don't use state to\nstore WebSockets or API clients."),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)("p",null,"State objects hold a weak pointer to an entry in the state map of\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts/instances/"}),"an instance"),". Since it is impossible to obtain a\nreference to the instance itself, this eliminates any risk of introducing a\nreference cycle."),Object(i.b)("p",null,"However, as a consequence, it is up to the developer to ensure that the state is\nno longer used after its corresponding component is unmounted. If any of the\nmethods are called after the component is unmounted, Polyhorn will ",Object(i.b)("inlineCode",{parentName:"p"},"panic!"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="Definition"',title:'"Definition"'}),"impl State<T> where T: Serialize + Deserialize {\n    /// Replaces the current value with the given value and returns the old\n    /// value afterwards.\n    pub fn replace(&self, value: impl Into<T>) -> T;\n\n    /// Clones the current value and returns it.\n    pub fn to_owned(&self) -> T::Owned where T: ToOwned;\n}\n")),Object(i.b)("h2",{id:"roadmap"},"Roadmap"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We're still working on a better API for state. If you have thoughts, please\nlet us know on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/polyhorn/polyhorn"}),"our Github"),". For example:"),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Currently, ",Object(i.b)("inlineCode",{parentName:"p"},"State<T>")," is not ",Object(i.b)("inlineCode",{parentName:"p"},"Copy"),", which makes it a bit less ergonomic\nwhen passing it to callbacks (since it requires cloning). We might want to\nconsider an arena-based approach where ",Object(i.b)("inlineCode",{parentName:"p"},"State<T>")," simply contains the index\nof an instance's state entry and requires a manager to obtain a value.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Similarly, since state is accessed through a weak pointer and stored in\n",Object(i.b)("inlineCode",{parentName:"p"},"RefCell"),"s, it's not very ergonomic to obtain a reference to its value.\nSpecifically: we can't return the ",Object(i.b)("inlineCode",{parentName:"p"},"RefCell"),"'s ",Object(i.b)("inlineCode",{parentName:"p"},"RefMut")," since its lifetime is\ntied to the weak pointer's upgrade, which is bound to the accessor function:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"impl State<T> {\n    // Hypothetical implementation of `get_mut`.\n    fn get_mut(&self) -> RefMut<'_, T> {\n        // Upgrade the weak pointer to a strong pointer.\n        let instance: Rc<Instance> = self.weak.upgrade().unwrap();\n\n        // Obtain the state's entry.\n        let entry: &'instance RefCell<T> = instance.state.get(&self.key);\n\n        // Borrow its value mutably.\n        let borrow: BorrowMut<'entry, T> = entry.borrow_mut();\n\n        // ERR: the borrow is tied to the entry, which is tied to the\n        // instance, which is dropped once we return.\n        borrow\n    }\n}\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"State<T>")," should be valid during its entire lifetime: it should never panic.\nThis could potentially be solved as a consequence of 1)."))))))}p.isMDXComponent=!0}}]);