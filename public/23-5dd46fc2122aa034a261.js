(window.webpackJsonp=window.webpackJsonp||[]).push([[23,25],{"4H2T":function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("izhR"),c={fill:"none",width:"25",height:"25",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"};e.a=function(t){return a.a.createElement(i.d,Object.assign({},t,{as:"button",variant:t.variant+".arrow.right.button"}),a.a.createElement(i.d,Object.assign({as:"svg"},c,{variant:t.variant+".arrow.right.svg"}),a.a.createElement("use",{href:"#nav-thin-caret--right",xlinkHref:"#nav-thin-caret--right"},a.a.createElement("g",{id:"nav-thin-caret--right"},a.a.createElement("path",{d:"M5 15L12 8L5 1",stroke:"currentColor",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})))))}},"6mPD":function(t,e,n){"use strict";var r=n("izhR"),a=n("q1tI"),i=n.n(a);e.a=function(t){var e=t.productClusters,n=Object(a.useMemo)((function(){return null==e?void 0:e.findIndex((function(t){return"Frete Grátis"===t.name}))}),[e]);return void 0===n||n<0?null:i.a.createElement(r.d,{sx:{backgroundColor:"#cf3e00",fontSize:"9.6px",color:"white",py:"5px",px:"8px"}},"Frete Grátis Brasil")}},"9I8U":function(t,e,n){"use strict";var r=n("izhR"),a=n("q1tI"),i=n.n(a);e.a=function(t){var e=t.children,n=t.variant;return i.a.createElement(r.d,{variant:"offer."+n+".container"},e)}},"9TuN":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("QmIA"),a=n("DGpi"),i=function(t){return{src:Object(r.a)(null!=t?t:a.b,a.c.width,a.c.height),width:a.c.widthStr,height:a.c.heightStr}}},DGpi:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var r={width:200,height:200,widthStr:"200px",heightStr:"200px"},a=[{width:360,height:360,widthStr:"360px",heightStr:"360px",media:"(max-width: 40em) 30vw"},{width:540,height:540,widthStr:"540px",heightStr:"540px",media:"50vw"}],i="https://storecomponents.vtexassets.com/assets/faststore/images/product-not-found___29e298d98dd1d0744190f12619653717.jpg"},EZgX:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),a=0;for(e=0;e<n;e++)for(var i=arguments[e],c=0,o=i.length;c<o;c++,a++)r[a]=i[c];return r};function a(t){return JSON.stringify(t.map((function(t){return t&&"object"==typeof t?(e=t,Object.keys(e).sort().map((function(t){var n;return(n={})[t]=e[t],n}))):t;var e})))}var i=function(t,e){return void 0===e&&(e={}),function(){for(var n,i=[],c=0;c<arguments.length;c++)i[c]=arguments[c];var o=a(i),u=o&&e[o];return u||(u=new((n=t).bind.apply(n,r([void 0],i))),o&&(e[o]=u)),u}},c=n("iTBd"),o=n("QNvf"),u=i(Intl.NumberFormat),l=function(){var t=Object(c.a)()[0],e=Object(o.useIntl)().locale;return u(e,{currency:t,style:"currency"})}},EkHa:function(t,e,n){"use strict";n.r(e);var r=n("KQm4"),a=n("q1tI"),i=n.n(a),c=n("zLVn"),o=n("3ANG"),u=n("zvcV"),l=n("izhR"),s=n("vEvf"),f=function(t){var e=t.variant,n=Object(c.a)(t,["variant"]);return i.a.createElement(s.a,Object.assign({variant:"shelf."+e,"aria-label":"See shelf previous page"},n))},d=n("4H2T"),v=function(t){var e=t.variant,n=Object(c.a)(t,["variant"]);return i.a.createElement(d.a,Object.assign({variant:"shelf."+e,"aria-label":"See shelf next page"},n))},p=n("2A+t"),h=n("F57I"),m=function(t){var e=t.items,n=t.pageSizes,r=t.variant;return Object(p.b)(l.j,{variant:"shelf."+r+".page.container",gap:2,columns:n,sx:{width:"100%"}},e.map((function(t){return Object(p.b)(h.default,{key:t.productId,product:t})})))},g=n("L2eo"),b=function(t){return i.a.createElement(g.a,Object.assign({},t,{variant:"shelf."+t.variant}))},j=function(t){var e=t.children,n=t.variant;return i.a.createElement(l.d,{variant:"shelf."+n+".title"},e)},O=[1,3,5];e.default=function(t){var e=t.products,n=t.title,a=t.variant,s=void 0===a?"default":a,d=t.showArrows,p=t.showDots,h=t.autoplay,g=t.pageSizes,w=void 0===g?O:g,y=t.autoplayTimeout,x=function(t){var e=t.pageSizes,n=t.defaultIndex,r=Object(c.a)(t,["pageSizes","defaultIndex"]),a=Object(o.a)(e,{defaultIndex:n}),i=Object(u.a)(Object.assign({},r,{pageSize:a}));return Object.assign({},i,{pageSize:a})}({pageSizes:w,defaultIndex:w.length-1,allItems:e,autoplayTimeout:y,autoplay:h}),E=x.page,k=x.items,I=x.totalPages,S=x.setPage,z=x.setNextPage,P=x.setPreviousPage;return d=d&&e.length>=Math.max.apply(Math,Object(r.a)(w)),i.a.createElement(i.a.Fragment,null,n&&i.a.createElement(j,{variant:s},n),i.a.createElement(l.i,null,d&&i.a.createElement(f,{variant:s,onClick:function(){return P()}}),i.a.createElement(m,{variant:s,items:k,pageSizes:w}),d&&i.a.createElement(v,{variant:s,onClick:function(){return z()}})),p&&i.a.createElement(b,{variant:s,onSelect:S,selectedPage:E,totalPages:I}))}},F57I:function(t,e,n){"use strict";n.r(e),n.d(e,"fragment",(function(){return x}));var r=n("q1tI"),a=n.n(r),i=n("WkUc"),c=n("9TuN"),o=n("9I8U"),u=n("gmmj"),l=n("zLVn"),s=n("2A+t"),f=n("bFsN"),d=function(t){var e=t.children,n=t.variant,r=Object(l.a)(t,["children","variant"]);return Object(s.b)(f.a,Object.assign({state:{fromSummary:!0},sx:{variant:"productSummary."+n+".container"}},r),e)},v=n("Xojf"),p=n("izhR"),h=function(t){var e=t.variant,n=t.children;return a.a.createElement(p.d,{variant:"productSummary."+e+".title",as:"h3"},n)},m=n("S8uJ"),g=n("Psuc"),b=n("6mPD"),j=n("ykWA"),O=Object(s.b)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 511.343 511.343"},Object(s.b)("g",null,Object(s.b)("path",{d:"m490.334 106.668h-399.808l-5.943-66.207c-.972-10.827-10.046-19.123-20.916-19.123h-42.667c-11.598 0-21 9.402-21 21s9.402 21 21 21h23.468c12.825 142.882-20.321-226.415 24.153 269.089 1.714 19.394 12.193 40.439 30.245 54.739-32.547 41.564-2.809 102.839 50.134 102.839 43.942 0 74.935-43.826 59.866-85.334h114.936c-15.05 41.455 15.876 85.334 59.866 85.334 35.106 0 63.667-28.561 63.667-63.667s-28.561-63.667-63.667-63.667h-234.526c-15.952 0-29.853-9.624-35.853-23.646l335.608-19.724c9.162-.538 16.914-6.966 19.141-15.87l42.67-170.67c3.308-13.234-6.71-26.093-20.374-26.093zm-341.334 341.337c-11.946 0-21.666-9.72-21.666-21.667s9.72-21.667 21.666-21.667c11.947 0 21.667 9.72 21.667 21.667s-9.72 21.667-21.667 21.667zm234.667 0c-11.947 0-21.667-9.72-21.667-21.667s9.72-21.667 21.667-21.667 21.667 9.72 21.667 21.667-9.72 21.667-21.667 21.667zm47.366-169.726-323.397 19.005-13.34-148.617h369.142z"}))),w={borderColor:"transparent",borderBottomRightRadius:"4px",borderTopLeftRadius:"4px",backgroundColor:"white",alignSelf:"flex-end",marginRight:"-15px",cursor:"pointer",fill:"#757575",padding:"12px",height:"50px",width:"50px"},y=function(t){var e=t.sku,n=Object(j.a)(e,1),r=n.loading,a=Object(l.a)(n,["loading"]);return r?Object(s.b)(p.d,Object.assign({sx:Object.assign({},w,{backgroundColor:"#f2f2f2",display:"flex",justifyContent:"center",alignItems:"center"})},a),Object(s.b)(p.q,{size:"20px"})):Object(s.b)(p.d,Object.assign({sx:w},a,{className:"buyButton"}),O)},x=(n("aZdg"),"1361549284"),E=function(){return a.a.createElement(o.a,{variant:"productSummary"},a.a.createElement(u.a,{height:"20px"}),a.a.createElement(u.a,{height:"23px"}),a.a.createElement(u.a,{height:"20px"}))};e.default=function(t){var e=t.product,n=t.loading,r=void 0===n?"lazy":n,o=t.variant,u=void 0===o?"default":o,l=e,s=l.items[0],f=l.productName,j=l.productId,O=l.productClusters,w=s.images[0],x=w.imageUrl,k=w.imageText,I=s.sellers,S=function(t){return{to:"/"+t.linkText+"/p",onClick:function(e){return Object(i.a)({type:"vtex:productClick",data:{product:t}})}}}(e),z=Object(c.a)(x);return a.a.createElement(d,Object.assign({},S,{variant:u}),a.a.createElement(v.a,Object.assign({alt:null!=k?k:"Product Image",loading:r,variant:u},z)),a.a.createElement(h,{variant:u},f),a.a.createElement(p.i,{sx:{justifyContent:"space-between",minHeight:"25px",my:"5px"}},a.a.createElement(g.a,{productId:j}),a.a.createElement(b.a,{productClusters:O})),void 0===I?a.a.createElement(E,null):I.length>0?a.a.createElement(m.a,{variant:"productSummary",commercialOffer:I[0].commercialOffer}):null,a.a.createElement(y,{sku:s}))}},F581:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){var e;return null==t||null===(e=t.sellers)||void 0===e?void 0:e[0]}},L2eo:function(t,e,n){"use strict";var r=n("q1tI"),a=n("2A+t"),i=n("izhR");e.a=function(t){var e=t.variant,n=t.onSelect,c=t.totalPages,o=t.selectedPage,u=Object(r.useMemo)((function(){return Array.from(Array(c).keys())}),[c]);return Object(a.b)(i.d,{variant:e+".paginationDots.container",role:"group","aria-label":"Slider pagination dots"},u.map((function(t){var r=t===o;return Object(a.b)(i.d,{variant:e+".paginationDots."+(r?"activeDot":"dot"),key:t,tabIndex:0,onKeyDown:function(){return n(t)},onClick:function(){return n(t)},role:"button","aria-label":"Dot "+(t+1)+" of "+c,"data-testid":"paginationDot"})})))}},Psuc:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r);e.a=function(t){var e=t.productId;return a.a.createElement("div",{"data-trustvox-product-code":e})}},QmIA:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("q1tI"),a=n("pusE"),i=function(t,e,n){return Object(r.useMemo)((function(){return Object(a.a)(t,e,n)}),[t])}},S8uJ:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("EZgX"),c=n("9I8U"),o=n("izhR"),u=function(t){var e=t.children,n=t.variant;return a.a.createElement(o.d,{variant:"offer."+n+".soldout"},e)},l=function(t){var e=t.variant,n=t.children;return a.a.createElement(o.d,{variant:"offer."+e+".listPrice"},n)},s=function(t){var e=t.children,n=t.variant;return 0===e?null:a.a.createElement(o.d,{variant:"offer."+n+".discountBadge"},e)},f=function(t){var e=t.children,n=t.variant;return a.a.createElement(o.d,{variant:"offer."+n+".price"},e)},d=function(t){var e=t.children,n=t.variant;return a.a.createElement(o.d,{variant:"offer."+n+".installments"},e)},v=n("zMLq");e.a=function(t){var e=t.commercialOffer,n=t.commercialOffer.maxInstallments[0],r=t.variant,p=void 0===r?"offer":r,h=Object(i.a)().format,m=Object(v.a)(e),g=m.price,b=m.discount,j=function(t){var e=t.listPrice,n=t.price,r=Object(i.a)().format;return n===e?null:r(e)}(e),O=function(t){var e=t.price,n=t.listPrice;return 0===n?0:100-Math.round(e/n*100)}(e);return a.a.createElement(c.a,{variant:p},0===g?a.a.createElement(u,{variant:p},"Ops! Este produto esgotou :("):a.a.createElement(a.a.Fragment,null,a.a.createElement(o.d,{variant:"offer."+p+".discountBox"},a.a.createElement(l,{variant:p},j),a.a.createElement(s,{variant:p},O?"-"+O+"%":O)),a.a.createElement(f,{variant:p},h(g),a.a.createElement("span",null," ","à vista ",b>0?"("+b+"% off)":null)),a.a.createElement(d,{variant:p},n?a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null," ou ",n.numberOfInstallments,"x"),a.a.createElement("strong",null," ",h(n.value)," sem juros")):null)))}},WkUc:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c}));var r=n("m5AT"),a=n("8RKT"),i=function(t){try{window.postMessage(Object(r.b)(t),window.origin)}catch(e){console.error(e)}},c=function(t,e){void 0===e&&(e=""),Object(a.a)((function(){var e="function"==typeof t?t():t;Array.isArray(e)?e.forEach(i):i(e)}),[e])}},Xojf:function(t,e,n){"use strict";var r=n("izhR"),a=n("q1tI"),i=n.n(a);e.a=function(t){var e=t.loading,n=void 0===e?"lazy":e,a=t.height,c=t.width,o=t.variant,u=t.src,l=t.alt;return i.a.createElement(r.b,{variant:"productSummary."+o+".image",src:u,ratio:1,loading:n,alt:l,width:c,height:a})}},aZdg:function(t,e,n){"use strict";var r=n("2A+t"),a=n("izhR");e.a=function(t){var e=t.children,n=t.width,i=void 0===n?"100%":n,c=t.height,o=void 0===c?"100%":c;return Object(r.b)(a.d,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:o,width:i}},e)}},gmmj:function(t,e,n){"use strict";function r(t,e){return e||(e=t.slice(0)),t.raw=e,t}var a=n("qKvR");function i(){var t=r(["\n    0% {\n      transform: translateX(0);\n    }\n    50% {\n      transform: translateX(calc("," - 100px));\n    }\n    0% {\n      transform: translateX(0);\n    }\n  "]);return i=function(){return t},t}function c(){var t=r(["\n      background-color: ",";\n      border-radius: 4px;\n      display: block;\n      line-height: 1;\n      width: ",";\n      height: ",";\n      position: relative;\n      overflow: hidden;\n      margin-top: 4px;\n\n      ::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(to left, #eee, #ddd, #eee);\n        animation: "," 1.2s infinite;\n      }\n    "]);return c=function(){return t},t}e.a=function(t){var e=t.width,n=void 0===e?"100%":e,r=t.height,o=void 0===r?"50px":r;return Object(a.d)("div",{css:Object(a.c)(c(),"#eee",n,o,Object(a.e)(i(),n))})}},iTBd:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("Wbzz"),a=n("q1tI"),i=n("hB3p"),c=function(t){window.location.search=0===window.location.search.length?"?"+t:window.location.search+"&"+t},o=function(t,e){var n,r,o,u=(o=i.c?"":window.location.search,[Object(a.useMemo)((function(){return new URLSearchParams(o)}),[o]),c]),l=u[0],s=u[1],f=i.c?t:null!==(n=null!==(r=l.get(e))&&void 0!==r?r:localStorage.getItem(e))&&void 0!==n?n:t;return Object(a.useEffect)((function(){localStorage.setItem(e,f)}),[f]),[f,s]},u=function(){var t=Object(r.useStaticQuery)("958032024").allChannel.edges[0].node.defaultCurrency;return o(t,"currency")}},ldcK:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("q1tI"),a=n("T20M"),i=function(){return Object(r.useContext)(a.OrderForm)}},pusE:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t,e,n){void 0===e&&(e="auto"),void 0===n&&(n="auto");var r=t.split("/arquivos/ids/"),a=r[0],i=r[1],c=a.replace("vteximg.com.br","vtexassets.com");if(!i)return t;var o=i.split("?"),u=o[0],l=o[1],s=u.split("/")[0],f=s.split("-");return c+"/arquivos/ids/"+(f.length?f[0]:s)+"-"+e+"-"+n+"?"+(l||"")}},vEvf:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("izhR"),c={fill:"none",width:"25",height:"25",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"};e.a=function(t){return a.a.createElement(i.d,Object.assign({},t,{as:"button",variant:t.variant+".arrow.left.button"}),a.a.createElement(i.d,Object.assign({as:"svg"},c,{variant:t.variant+".arrow.left.svg"}),a.a.createElement("use",{href:"#nav-thin-caret--left",xlinkHref:"#nav-thin-caret--left"},a.a.createElement("g",{id:"nav-thin-caret--left"},a.a.createElement("path",{d:"M11 1L4 8L11 15",stroke:"currentColor",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})))))}},ykWA:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("o0o1"),a=n.n(r),i=(n("ls82"),n("HaE+")),c=n("q1tI"),o=n("WkUc"),u=n("ldcK"),l=n("F581"),s=function(t,e){var n=Object(c.useState)(!1),r=n[0],s=n[1],f=Object(l.a)(t),d=Object(u.a)(),v=r||!t||!(null==d?void 0:d.value)||!f;return{disabled:v,onClick:function(){var n=Object(i.a)(a.a.mark((function n(r){var i,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),!v){n.next=3;break}return n.abrupt("return");case 3:return i={id:Number(t.itemId),quantity:e,seller:f.sellerId},n.prev=4,s(!0),c=[i],n.next=9,d.addToCart(c);case 9:Object(o.a)({type:"vtex:addToCart",data:{items:c}}),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(4),console.error(n.t0);case 15:return n.prev=15,s(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[4,12,15,18]])})));return function(t){return n.apply(this,arguments)}}(),loading:r}}},zMLq:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function o(t,e,n){return(o=c()?Reflect.construct:function(t,e,n){var a=[null];a.push.apply(a,e);var i=new(Function.bind.apply(t,a));return n&&r(i,n.prototype),i}).apply(null,arguments)}function u(t){var e="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,a)}function a(){return o(t,arguments,i(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),r(a,t)})(t)}function l(t,e){l=function(t,e){return new c(t,void 0,e)};var n=u(RegExp),r=RegExp.prototype,i=new WeakMap;function c(t,e,r){var a=n.call(this,t,e);return i.set(a,r||i.get(t)),a}function o(t,e){var n=i.get(e);return Object.keys(n).reduce((function(e,r){return e[r]=t[n[r]],e}),Object.create(null))}return a(c,n),c.prototype.exec=function(t){var e=r.exec.call(this,t);return e&&(e.groups=o(e,this)),e},c.prototype[Symbol.replace]=function(t,e){if("string"==typeof e){var n=i.get(this);return r[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+n[e]})))}if("function"==typeof e){var a=this;return r[Symbol.replace].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!=typeof t[t.length-1]&&t.push(o(t,a)),e.apply(this,t)}))}return r[Symbol.replace].call(this,t,e)},l.apply(this,arguments)}n.d(e,"a",(function(){return f}));var s=l(/Boleto ([0-9]*)%/,{percentage:1}),f=function(t){var e,n,r,a,i=t.teasers,c=t.price,o=null===(r=(null!==(e=null===(n=i[0])||void 0===n?void 0:n.name)&&void 0!==e?e:"").match(s))||void 0===r||null===(a=r.groups)||void 0===a?void 0:a.percentage,u=Number(null!=o?o:"0");return{discount:u,price:c*(100-u)/100}}},zvcV:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("q1tI"),a=function(t){var e=t.allItems,n=t.pageSize,a=void 0===n?1:n,i=t.autoplay,c=void 0!==i&&i,o=t.autoplayTimeout,u=void 0===o?1e6:o,l=Math.ceil(e.length/a),s=Object(r.useState)(0),f=s[0],d=s[1],v=f<e.length?f:0;Object(r.useEffect)((function(){return d(0)}),[e.length]);var p,h,m,g=Object(r.useMemo)((function(){return e.slice(v*a,(v+1)*a)}),[e,v,a]),b=Object(r.useCallback)((function(){return d((function(t){return(t+1)%l}))}),[l]),j=Object(r.useCallback)((function(){return d((function(t){return((e=l)-(e-t+1)%e)%e;var e}))}),[l]);return p=function(){c&&b()},h=u,m=Object(r.useRef)(),Object(r.useEffect)((function(){m.current=p}),[p]),Object(r.useEffect)((function(){if(null!==h){var t=setInterval((function(){var t;return null==m||null===(t=m.current)||void 0===t?void 0:t.call(m)}),h);return function(){return clearInterval(t)}}return function(){}}),[h]),{totalPages:l,items:g,page:v,setPage:d,setNextPage:b,setPreviousPage:j}}}}]);
//# sourceMappingURL=23-5dd46fc2122aa034a261.js.map