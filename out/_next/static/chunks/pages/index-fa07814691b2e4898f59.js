_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,s){"use strict";t.__esModule=!0,t.isInAmpMode=r,t.useAmp=function(){return r(a.default.useContext(i.AmpStateContext))};var n,a=(n=s("q1tI"))&&n.__esModule?n:{default:n},i=s("lwAK");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,s=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,i=e.hasQuery,r=void 0!==i&&i;return s||a&&r}},"20a2":function(e,t,s){e.exports=s("nOHt")},"8Kt/":function(e,t,s){"use strict";s("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var s={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=n?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(s,a,i):s[a]=e[a]}s.default=e,t&&t.set(e,s);return s}(s("q1tI")),i=(n=s("Xuae"))&&n.__esModule?n:{default:n},r=s("lwAK"),c=s("FYa8"),l=s("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function o(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var j=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var s=a.default.Children.toArray(t.props.children);return e.concat(s)}),[]).reduce(o,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,s=new Set,n={};return function(a){var i=!0,r=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){r=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var l=0,u=j.length;l<u;l++){var d=j[l];if(a.props.hasOwnProperty(d))if("charSet"===d)s.has(d)?i=!1:s.add(d);else{var o=a.props[d],h=n[d]||new Set;"name"===d&&r||!h.has(o)?(h.add(o),n[d]=h):i=!1}}}return i}}()).reverse().map((function(e,t){var s=e.key||t;return a.default.cloneElement(e,{key:s})}))}function p(e){var t=e.children,s=(0,a.useContext)(r.AmpStateContext),n=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,l.isInAmpMode)(s)},t)}p.rewind=function(){};var b=p;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,s){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((n=s("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,s){var n=s("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},RIqP:function(e,t,s){var n=s("Ijbi"),a=s("EbDI"),i=s("ZhPi"),r=s("Bnag");e.exports=function(e){return n(e)||a(e)||i(e)||r()}},RNiq:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return i}));var n=s("nKUr"),a=(s("g4pe"),s("20a2"));function i(){Object(a.useRouter)();return Object(n.jsxs)("html",{children:[Object(n.jsxs)("head",{children:[Object(n.jsx)("title",{children:"Transitive by TEMPLATED"}),Object(n.jsx)("meta",{charset:"utf-8"}),Object(n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(n.jsx)("link",{rel:"stylesheet",href:"assets/css/main.css"})]}),Object(n.jsxs)("body",{children:[Object(n.jsxs)("header",{id:"header",class:"alt",children:[Object(n.jsx)("div",{class:"logo",children:Object(n.jsxs)("a",{href:"index.html",children:["Transitive ",Object(n.jsx)("span",{children:"by TEMPLATED"})]})}),Object(n.jsx)("a",{href:"#menu",class:"toggle",children:Object(n.jsx)("span",{children:"Menu"})})]}),Object(n.jsx)("nav",{id:"menu",children:Object(n.jsxs)("ul",{class:"links",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"index.html",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"generic.html",children:"Generic"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"elements.html",children:"Elements"})})]})}),Object(n.jsx)("section",{id:"banner","data-video":"../public/images/banner.mp4",children:Object(n.jsxs)("div",{class:"inner",children:[Object(n.jsx)("h1",{children:"Transitive"}),Object(n.jsxs)("p",{children:["A full responsive, business-oriented HTML5/CSS3 template",Object(n.jsx)("br",{}),"built by ",Object(n.jsx)("a",{href:"https://templated.co/",children:"Templated"})," and released under the"," ",Object(n.jsx)("a",{href:"https://templated.co/license",children:"Creative Commons"}),"."]}),Object(n.jsx)("a",{href:"#one",class:"button special scrolly",children:"Get Started"})]})}),Object(n.jsx)("section",{id:"one",class:"wrapper style2",children:Object(n.jsx)("div",{class:"inner",children:Object(n.jsx)("div",{children:Object(n.jsxs)("div",{class:"box",children:[Object(n.jsx)("div",{class:"image fit",children:Object(n.jsx)("img",{src:"../public/images/pic01.jpg",alt:""})}),Object(n.jsxs)("div",{class:"content",children:[Object(n.jsxs)("header",{class:"align-center",children:[Object(n.jsx)("h2",{children:"Lorem ipsum dolor"}),Object(n.jsx)("p",{children:"maecenas feugiat ex purus, quis volutpat lacus placerat"})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("p",{children:[" ","Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada. Praesent in sem ex. Morbi mattis sapien pretium tellus venenatis, at egestas urna ornare."]}),Object(n.jsx)("p",{children:"Vivamus fermentum nibh vel pharetra blandit. Cras a purus urna. Sed et libero ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id hendrerit felis. Nulla viverra tempor dui at congue. Pellentesque quis nulla ornare, congue nisi id, finibus nulla. Aliquam sit amet hendrerit purus. Donec libero massa, posuere fermentum eros sit amet, maximus fringilla augue. Maecenas at rhoncus lorem. Vivamus ultricies consequat est, efficitur convallis libero. Vivamus rutrum semper mauris, vitae consequat eros tempor ac. Pellentesque et ornare sapien"})]})]})})})}),Object(n.jsx)("section",{id:"two",class:"wrapper style3",children:Object(n.jsx)("div",{class:"inner",children:Object(n.jsxs)("div",{id:"flexgrid",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("header",{children:Object(n.jsx)("h3",{children:"Tempus Feugiat"})}),Object(n.jsx)("p",{children:"Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu"}),Object(n.jsx)("ul",{class:"actions",children:Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",class:"button alt",children:"Learn More"})})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("header",{children:Object(n.jsx)("h3",{children:"Aliquam Nulla"})}),Object(n.jsxs)("p",{children:["Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed"," "]}),Object(n.jsx)("ul",{class:"actions",children:Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",class:"button alt",children:"Learn More"})})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("header",{children:Object(n.jsx)("h3",{children:"Sed Magna"})}),Object(n.jsx)("p",{children:"Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula."}),Object(n.jsx)("ul",{class:"actions",children:Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",class:"button alt",children:"Learn More"})})})]})]})})}),Object(n.jsx)("section",{id:"three",class:"wrapper style2",children:Object(n.jsx)("div",{class:"inner",children:Object(n.jsxs)("div",{class:"grid-style",children:[Object(n.jsx)("div",{children:Object(n.jsxs)("div",{class:"box",children:[Object(n.jsx)("div",{class:"image fit",children:Object(n.jsx)("img",{src:"images/pic02.jpg",alt:""})}),Object(n.jsxs)("div",{class:"content",children:[Object(n.jsxs)("header",{class:"align-center",children:[Object(n.jsx)("h2",{children:"Lorem ipsum dolor"}),Object(n.jsx)("p",{children:"maecenas feugiat ex purus, quis volutpat lacus placerat"})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("p",{children:[" ","Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada. Praesent in sem ex. Morbi mattis sapien pretium tellus venenatis, at egestas urna ornare."]})]})]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{class:"box",children:[Object(n.jsx)("div",{class:"image fit",children:Object(n.jsx)("img",{src:"images/pic03.jpg",alt:""})}),Object(n.jsxs)("div",{class:"content",children:[Object(n.jsxs)("header",{class:"align-center",children:[Object(n.jsx)("h2",{children:"Vestibulum sit amet"}),Object(n.jsx)("p",{children:"mattis sapien pretium tellus venenatis"})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("p",{children:[" ","Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada. Praesent in sem ex. Morbi mattis sapien pretium tellus venenatis, at egestas urna ornare."]})]})]})})]})})}),Object(n.jsx)("section",{id:"four",class:"wrapper style3",children:Object(n.jsx)("div",{class:"inner",children:Object(n.jsxs)("header",{class:"align-center",children:[Object(n.jsx)("h2",{children:"Morbi interdum mollis sapien"}),Object(n.jsx)("p",{children:"Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada. Praesent in sem ex. Morbi mattis sapien pretium tellus venenatis, at egestas urna ornare."})]})})}),Object(n.jsx)("footer",{id:"footer",class:"wrapper",children:Object(n.jsxs)("div",{class:"inner",children:[Object(n.jsx)("section",{children:Object(n.jsx)("div",{class:"box",children:Object(n.jsxs)("div",{class:"content",children:[Object(n.jsx)("h2",{class:"align-center",children:"Get in Touch"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{action:"#",method:"post",children:[Object(n.jsxs)("div",{class:"field half first",children:[Object(n.jsx)("label",{for:"name",children:"Name"}),Object(n.jsx)("input",{name:"name",id:"name",type:"text",placeholder:"Name"})]}),Object(n.jsxs)("div",{class:"field half",children:[Object(n.jsx)("label",{for:"email",children:"Email"}),Object(n.jsx)("input",{name:"email",id:"email",type:"email",placeholder:"Email"})]}),Object(n.jsxs)("div",{class:"field",children:[Object(n.jsx)("label",{for:"dept",children:"Department"}),Object(n.jsx)("div",{class:"select-wrapper",children:Object(n.jsxs)("select",{name:"dept",id:"dept",children:[Object(n.jsx)("option",{value:"",children:"- Category -"}),Object(n.jsx)("option",{value:"1",children:"Manufacturing"}),Object(n.jsx)("option",{value:"1",children:"Shipping"}),Object(n.jsx)("option",{value:"1",children:"Administration"}),Object(n.jsx)("option",{value:"1",children:"Human Resources"})]})})]}),Object(n.jsxs)("div",{class:"field",children:[Object(n.jsx)("label",{for:"message",children:"Message"}),Object(n.jsx)("textarea",{name:"message",id:"message",rows:"6",placeholder:"Message"})]}),Object(n.jsx)("ul",{class:"actions align-center",children:Object(n.jsx)("li",{children:Object(n.jsx)("input",{value:"Send Message",class:"button special",type:"submit"})})})]})]})})}),Object(n.jsxs)("div",{class:"copyright",children:["\xa9 Untitled Design:"," ",Object(n.jsx)("a",{href:"https://templated.co/",children:"TEMPLATED"}),". Images"," ",Object(n.jsx)("a",{href:"https://unsplash.com/",children:"Unsplash"}),". Video"," ",Object(n.jsx)("a",{href:"http://coverr.co/",children:"Coverr"}),"."]})]})}),Object(n.jsx)("script",{src:"assets/js/jquery.min.js"}),Object(n.jsx)("script",{src:"assets/js/jquery.scrolly.min.js"}),Object(n.jsx)("script",{src:"assets/js/jquery.scrollex.min.js"}),Object(n.jsx)("script",{src:"assets/js/skel.min.js"}),Object(n.jsx)("script",{src:"assets/js/util.js"}),Object(n.jsx)("script",{src:"assets/js/main.js"})]})]})}},Xuae:function(e,t,s){"use strict";var n=s("RIqP"),a=s("lwsE"),i=s("W8MJ"),r=(s("PJYZ"),s("7W2i")),c=s("a1gu"),l=s("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=l(e);if(t){var a=l(this).constructor;s=Reflect.construct(n,arguments,a)}else s=n.apply(this,arguments);return c(this,s)}}t.__esModule=!0,t.default=void 0;var d=s("q1tI"),o=function(e){r(s,e);var t=u(s);function s(e){var i;return a(this,s),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(s,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),s}(d.Component);t.default=o},g4pe:function(e,t,s){e.exports=s("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}},lwAK:function(e,t,s){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=s("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},vlRD:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("RNiq")}])}},[["vlRD",0,2,1]]]);