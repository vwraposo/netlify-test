(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3Pd9":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("Wbzz"),a=n("q1tI"),i=n("bTm8"),o=function(t){window.location.search=0===window.location.search.length?"?"+t:window.location.search+"&"+t},c=function(t,e){var n,r,c,u=(c=i.c?"":window.location.search,[Object(a.useMemo)((function(){return new URLSearchParams(c)}),[c]),o]),l=u[0],s=u[1],f=i.c?t:null!==(n=null!==(r=l.get(e))&&void 0!==r?r:localStorage.getItem(e))&&void 0!==n?n:t;return Object(a.useEffect)((function(){localStorage.setItem(e,f)}),[f]),[f,s]},u=function(){var t=Object(r.useStaticQuery)("958032024").allChannel.edges[0].node.defaultCurrency;return c(t,"currency")}},"6mPD":function(t,e,n){"use strict";var r=n("izhR"),a=n("q1tI"),i=n.n(a);e.a=function(t){var e=t.productClusters,n=Object(a.useMemo)((function(){return null==e?void 0:e.findIndex((function(t){return"Frete Grátis"===t.name}))}),[e]);return void 0===n||n<0?null:i.a.createElement(r.b,{sx:{backgroundColor:"#cf3e00",fontSize:"9.6px",color:"white",py:"5px",px:"8px"}},"Frete Grátis Brasil")}},"7yIz":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("q1tI"),a=n("hg3N"),i=function(){return Object(r.useContext)(a.OrderForm)}},"8lWP":function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("izhR");e.a=function(t){var e=t.children;return a.a.createElement(a.a.Fragment,null,e,a.a.createElement(i.b,{variant:"shelf.default.title.bar"}))}},"9I8U":function(t,e,n){"use strict";var r=n("izhR"),a=n("q1tI"),i=n.n(a);e.a=function(t){var e=t.children,n=t.variant;return i.a.createElement(r.b,{variant:"offer."+n+".container"},e)}},"9Yq8":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var r={width:200,height:200,widthStr:"200px",heightStr:"200px"},a=[{width:360,height:360,widthStr:"360px",heightStr:"360px",media:"(max-width: 40em) 30vw"},{width:540,height:540,widthStr:"540px",heightStr:"540px",media:"50vw"}],i="https://storecomponents.vtexassets.com/assets/faststore/images/product-not-found___29e298d98dd1d0744190f12619653717.jpg"},"9vKe":function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r);var i=n("BsWD");function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(t,e)||Object(i.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n("KQm4"),u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=Object(r.useRef)(null),i=Object(r.useRef)(null),o=Object(r.useCallback)((function(n){var r,o=e.root,c=void 0===o?null:o,u=e.rootMargin,l=void 0===u?"0px 0px 0px 0px":u,s=e.threshold,f=void 0===s?0:s;a.current&&(null===(r=i.current)||void 0===r||r.unobserve(a.current)),n&&(i.current=new IntersectionObserver(t,{root:c,rootMargin:l,threshold:f}),i.current.observe(n),a.current=n)}),[a].concat(Object(c.a)(n)));return o},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(r.useState)({inView:!1,entry:null,observer:null}),a=o(n,2),i=a[0],c=a[1],l=Object(r.useCallback)((function(e,n){var r=o(e,1)[0];if(r&&n){var a=t.onEnter,i=t.onLeave,u=t.unobserveOnEnter,l=r.isIntersecting,s=r.intersectionRatio,f=n.thresholds;if(s>=0){var d=f.some((function(t){return s>=t}))&&l;c({inView:d,entry:r,observer:n}),d&&u&&n.disconnect(),d?a&&a(r,n):i&&i(r,n)}}}),[t]),s=t.root,f=void 0===s?null:s,d=t.rootMargin,v=void 0===d?"0px 0px 0px 0px":d,p=t.threshold,h=void 0===p?0:p,b=u(l,{root:f,rootMargin:v,threshold:h},e),m=t.target;return Object(r.useEffect)((function(){(null==m?void 0:m.current)&&b(m.current)}),[m,b]),[b,i.inView,i.entry,i.observer]},s=n("p5si"),f=function(){};e.a=function(t){var e=t.fallback,n=t.children,i=t.preloader,o=void 0===i?f:i,c=t.rootMargin,u=void 0===c?"150px":c,d=t.threshold,v=l({unobserveOnEnter:!0,rootMargin:u,threshold:void 0===d?0:d}),p=v[0],h=v[1];return Object(s.a)((function(){o()}),[o]),h?a.a.createElement(r.Suspense,{fallback:e},n):a.a.createElement("div",{ref:p},e)}},"Evs+":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("QR2T"),a=n("9Yq8"),i=function(t){return{src:Object(r.a)(null!=t?t:a.b,a.c.width,a.c.height),width:a.c.widthStr,height:a.c.heightStr}}},GUcP:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=[2,3,4]},Hhlv:function(t,e,n){"use strict";var r=n("Wbzz"),a=n("q1tI"),i=n.n(a),o=n("wMvp"),c=n("bTm8");e.a=function(t){var e=t.description,n=t.lang,a=void 0===n?"en":n,u=t.meta,l=void 0===u?[]:u,s=t.title,f=Object(r.useStaticQuery)("3706350286").site.siteMetadata,d=null!=e?e:f.description,v=!c.a;return i.a.createElement(o.Helmet,{defer:v,async:v,htmlAttributes:{lang:a},title:null!=s?s:f.title,titleTemplate:"%s | "+f.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:f.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(l)})}},MUpH:function(t,e,n){"use strict";function r(t,e){return e||(e=t.slice(0)),t.raw=e,t}n.d(e,"a",(function(){return r}))},Psuc:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r);e.a=function(t){var e=t.productId;return a.a.createElement("div",{"data-trustvox-product-code":e})}},QR2T:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("q1tI"),a=n("RwTr"),i=function(t,e,n){return Object(r.useMemo)((function(){return Object(a.a)(t,e,n)}),[t])}},RwTr:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t,e,n){void 0===e&&(e="auto"),void 0===n&&(n="auto");var r=t.split("/arquivos/ids/"),a=r[0],i=r[1],o=a.replace("vteximg.com.br","vtexassets.com");if(!i)return t;var c=i.split("?"),u=c[0],l=c[1],s=u.split("/")[0],f=s.split("-");return o+"/arquivos/ids/"+(f.length?f[0]:s)+"-"+e+"-"+n+"?"+(l||"")}},S8uJ:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("hbN7"),o=n("9I8U"),c=n("izhR"),u=function(t){var e=t.children,n=t.variant;return a.a.createElement(c.b,{variant:"offer."+n+".soldout"},e)},l=function(t){var e=t.variant,n=t.children;return a.a.createElement(c.b,{variant:"offer."+e+".listPrice"},n)},s=function(t){var e=t.children,n=t.variant;return 0===e?null:a.a.createElement(c.b,{variant:"offer."+n+".discountBadge"},e)},f=function(t){var e=t.children,n=t.variant;return a.a.createElement(c.b,{variant:"offer."+n+".price"},e)},d=function(t){var e=t.children,n=t.variant;return a.a.createElement(c.b,{variant:"offer."+n+".installments"},e)},v=n("zMLq");e.a=function(t){var e=t.commercialOffer,n=t.commercialOffer.maxInstallments[0],r=t.variant,p=void 0===r?"offer":r,h=Object(i.a)().format,b=Object(v.a)(e),m=b.price,y=b.discount,g=function(t){var e=t.listPrice,n=t.price,r=Object(i.a)().format;return n===e?null:r(e)}(e),w=function(t){var e=t.price,n=t.listPrice;return 0===n?0:100-Math.round(e/n*100)}(e);return a.a.createElement(o.a,{variant:p},0===m?a.a.createElement(u,{variant:p},"Ops! Este produto esgotou :("):a.a.createElement(a.a.Fragment,null,a.a.createElement(c.b,{variant:"offer."+p+".discountBox"},a.a.createElement(l,{variant:p},g),a.a.createElement(s,{variant:p},w?"-"+w+"%":w)),a.a.createElement(f,{variant:p},h(m),a.a.createElement("span",null," ","à vista ",y>0?"("+y+"% off)":null)),a.a.createElement(d,{variant:p},n?a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null," ou ",n.numberOfInstallments,"x"),a.a.createElement("strong",null," ",h(n.value)," sem juros")):null)))}},TZ6P:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("o0o1"),a=n.n(r),i=(n("otvA"),n("HaE+")),o=n("q1tI"),c=n("y/BZ"),u=n("7yIz"),l=n("lXiQ"),s=function(t,e){var n=Object(o.useState)(!1),r=n[0],s=n[1],f=Object(l.a)(t),d=Object(u.a)(),v=r||!t||!(null==d?void 0:d.value)||!f;return{disabled:v,onClick:function(){var n=Object(i.a)(a.a.mark((function n(r){var i,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),!v){n.next=3;break}return n.abrupt("return");case 3:return i={id:Number(t.itemId),quantity:e,seller:f.sellerId},n.prev=4,s(!0),o=[i],n.next=9,d.addToCart(o);case 9:Object(c.a)({type:"vtex:addToCart",data:{items:o}}),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(4),console.error(n.t0);case 15:return n.prev=15,s(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[4,12,15,18]])})));return function(t){return n.apply(this,arguments)}}(),loading:r}}},YuT6:function(t,e,n){"use strict";var r=n("GCOn");e.a=r.h},gmmj:function(t,e,n){"use strict";var r=n("MUpH"),a=n("qKvR");function i(){var t=Object(r.a)(["\n    0% {\n      transform: translateX(0);\n    }\n    50% {\n      transform: translateX(calc("," - 100px));\n    }\n    0% {\n      transform: translateX(0);\n    }\n  "]);return i=function(){return t},t}function o(){var t=Object(r.a)(["\n      background-color: ",";\n      border-radius: 4px;\n      display: block;\n      line-height: 1;\n      width: ",";\n      height: ",";\n      position: relative;\n      overflow: hidden;\n      margin-top: 4px;\n\n      ::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(to left, #eee, #ddd, #eee);\n        animation: "," 1.2s infinite;\n      }\n    "]);return o=function(){return t},t}e.a=function(t){var e=t.width,n=void 0===e?"100%":e,r=t.height,c=void 0===r?"50px":r;return Object(a.c)("div",{css:Object(a.b)(o(),"#eee",n,c,Object(a.d)(i(),n))})}},hbN7:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),a=0;for(e=0;e<n;e++)for(var i=arguments[e],o=0,c=i.length;o<c;o++,a++)r[a]=i[o];return r};function a(t){return JSON.stringify(t.map((function(t){return t&&"object"==typeof t?(e=t,Object.keys(e).sort().map((function(t){var n;return(n={})[t]=e[t],n}))):t;var e})))}var i=function(t,e){return void 0===e&&(e={}),function(){for(var n,i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];var c=a(i),u=c&&e[c];return u||(u=new((n=t).bind.apply(n,r([void 0],i))),c&&(e[c]=u)),u}},o=n("3Pd9"),c=n("asHU"),u=i(Intl.NumberFormat),l=function(){var t=Object(o.a)()[0],e=Object(c.useIntl)().locale;return u(e,{currency:t,style:"currency"})}},lXiQ:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){var e;return null==t||null===(e=t.sellers)||void 0===e?void 0:e[0]}},r3Ve:function(t,e,n){"use strict";var r=n("qn5I"),a=n("GCOn");e.a=function(t){var e=t.children,n=t.width,i=void 0===n?"100%":n,o=t.height,c=void 0===o?"100%":o;return Object(r.b)(a.d,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:c,width:i}},e)}},rulN:function(t,e,n){"use strict";var r=n("zkdT"),a=n("9vKe"),i=n("izhR"),o=n("q1tI"),c=n.n(o),u=n("BSIa"),l=function(){return Promise.all([n.e(2),n.e(28)]).then(n.bind(null,"WRBS"))},s=Object(o.lazy)(l),f=Object(o.lazy)((function(){return n.e(44).then(n.bind(null,"i3Z1"))}));e.a=function(t){var e=t.children;return c.a.createElement(i.b,{variant:"mainLayout"},c.a.createElement(u.default,null),e,c.a.createElement(r.a,{fallback:null},c.a.createElement(f,null)),c.a.createElement(a.a,{fallback:null,preloader:l},c.a.createElement(s,null)))}},"y/BZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var r=n("aaZ+"),a=n("p5si"),i=function(t){try{window.postMessage(Object(r.b)(t),window.origin)}catch(e){console.error(e)}},o=function(t,e){void 0===e&&(e=""),Object(a.a)((function(){var e="function"==typeof t?t():t;Array.isArray(e)?e.forEach(i):i(e)}),[e])}},zMLq:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t,e,n){return(c=o()?Reflect.construct:function(t,e,n){var a=[null];a.push.apply(a,e);var i=new(Function.bind.apply(t,a));return n&&r(i,n.prototype),i}).apply(null,arguments)}function u(t){var e="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,a)}function a(){return c(t,arguments,i(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),r(a,t)})(t)}function l(t,e){l=function(t,e){return new o(t,void 0,e)};var n=u(RegExp),r=RegExp.prototype,i=new WeakMap;function o(t,e,r){var a=n.call(this,t,e);return i.set(a,r||i.get(t)),a}function c(t,e){var n=i.get(e);return Object.keys(n).reduce((function(e,r){return e[r]=t[n[r]],e}),Object.create(null))}return a(o,n),o.prototype.exec=function(t){var e=r.exec.call(this,t);return e&&(e.groups=c(e,this)),e},o.prototype[Symbol.replace]=function(t,e){if("string"==typeof e){var n=i.get(this);return r[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+n[e]})))}if("function"==typeof e){var a=this;return r[Symbol.replace].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!=typeof t[t.length-1]&&t.push(c(t,a)),e.apply(this,t)}))}return r[Symbol.replace].call(this,t,e)},l.apply(this,arguments)}n.d(e,"a",(function(){return f}));var s=l(/Boleto ([0-9]*)%/,{percentage:1}),f=function(t){var e,n,r,a,i=t.teasers,o=t.price,c=null===(r=(null!==(e=null===(n=i[0])||void 0===n?void 0:n.name)&&void 0!==e?e:"").match(s))||void 0===r||null===(a=r.groups)||void 0===a?void 0:a.percentage,u=Number(null!=c?c:"0");return{discount:u,price:o*(100-u)/100}}}}]);
//# sourceMappingURL=658bb9cd039abfe2dca621eabc453257701fbe6e-5b2fac0f7b66e7ca990e.js.map