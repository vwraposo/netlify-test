(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{R0sn:function(e,t,n){"use strict";var r=n("izhR");t.a=r.h},aZdg:function(e,t,n){"use strict";var r=n("2A+t"),o=n("izhR");t.a=function(e){var t=e.children,n=e.width,i=void 0===n?"100%":n,a=e.height,c=void 0===a?"100%":a;return Object(r.b)(o.d,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:c,width:i}},t)}},"p9/g":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r);var i=n("BsWD");function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||Object(i.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n("KQm4"),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=Object(r.useRef)(null),i=Object(r.useRef)(null),a=Object(r.useCallback)((function(n){var r,a=t.root,c=void 0===a?null:a,u=t.rootMargin,s=void 0===u?"0px 0px 0px 0px":u,l=t.threshold,d=void 0===l?0:l;o.current&&(null===(r=i.current)||void 0===r||r.unobserve(o.current)),n&&(i.current=new IntersectionObserver(e,{root:c,rootMargin:s,threshold:d}),i.current.observe(n),o.current=n)}),[o].concat(Object(c.a)(n)));return a},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(r.useState)({inView:!1,entry:null,observer:null}),o=a(n,2),i=o[0],c=o[1],s=Object(r.useCallback)((function(t,n){var r=a(t,1)[0];if(r&&n){var o=e.onEnter,i=e.onLeave,u=e.unobserveOnEnter,s=r.isIntersecting,l=r.intersectionRatio,d=n.thresholds;if(l>=0){var m=d.some((function(e){return l>=e}))&&s;c({inView:m,entry:r,observer:n}),m&&u&&n.disconnect(),m?o&&o(r,n):i&&i(r,n)}}}),[e]),l=e.root,d=void 0===l?null:l,m=e.rootMargin,f=void 0===m?"0px 0px 0px 0px":m,p=e.threshold,h=void 0===p?0:p,v=u(s,{root:d,rootMargin:f,threshold:h},t),b=e.target;return Object(r.useEffect)((function(){(null==b?void 0:b.current)&&v(b.current)}),[b,v]),[v,i.inView,i.entry,i.observer]},l=n("8RKT"),d=function(){};t.a=function(e){var t=e.fallback,n=e.children,i=e.preloader,a=void 0===i?d:i,c=e.rootMargin,u=void 0===c?"150px":c,m=e.threshold,f=s({unobserveOnEnter:!0,rootMargin:u,threshold:void 0===m?0:m}),p=f[0],h=f[1];return Object(l.a)((function(){a()}),[a]),h?o.a.createElement(r.Suspense,{fallback:t},n):o.a.createElement("div",{ref:p},t)}},rulN:function(e,t,n){"use strict";var r=n("cmrU"),o=n("p9/g"),i=n("izhR"),a=n("q1tI"),c=n.n(a),u=n("BSIa"),s=function(){return Promise.all([n.e(2),n.e(28)]).then(n.bind(null,"WRBS"))},l=Object(a.lazy)(s),d=Object(a.lazy)((function(){return n.e(44).then(n.bind(null,"i3Z1"))}));t.a=function(e){var t=e.children;return c.a.createElement(i.d,{variant:"mainLayout"},c.a.createElement(u.default,null),t,c.a.createElement(r.a,{fallback:null},c.a.createElement(d,null)),c.a.createElement(o.a,{fallback:null,preloader:s},c.a.createElement(l,null)))}},yBCY:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),i=(n("ls82"),n("HaE+")),a=n("QNvf"),c=n("WyAI"),u=n("aZdg"),s=n("izhR"),l=n("Wbzz"),d=n("q1tI"),m=n.n(d),f=n("R0sn"),p=n("rulN"),h=n("cmrU"),v=function(e){var t=this,n=e.account,r=e.workspace,a=e.path,c=e.locale,u=e.publicEndpoint,s=e.verbose,l=e.timeout;if(this.getRuntimeContext=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.runtime){e.next=3;break}return e.next=3,t.loadExtensionPointsContext();case 3:return e.abrupt("return",{runtime:t.runtime,scripts:t.scripts,styles:t.styles});case 4:case"end":return e.stop()}}),e)}))),this.load=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.runtime){e.next=3;break}return e.next=3,t.loadExtensionPointsContext();case 3:return t.styles&&t.styles.forEach(t.addStyleToPage),t.time("render-extension-loader:scripts"),e.next=7,Promise.all(t.scripts.map(t.addScriptToPage));case 7:return t.timeEnd("render-extension-loader:scripts"),e.abrupt("return",t.runtime);case 9:case"end":return e.stop()}}),e)}))),this.update=function(e){return t.runtime="function"==typeof e?e(t.runtime):Object.assign({},t.runtime,e),t.runtime},this.render=function(e,n,r){return r&&(t.runtime.extensions[e].props=Object.assign({},t.runtime.extensions[e].props,r)),t.time("render-extension-loader:render"),window["__RENDER_"+t.renderMajor+"_RUNTIME__"].render(e,t.runtime,n),t.timeEnd("render-extension-loader:render"),t.runtime},this.loadExtensionPointsContext=Object(i.a)(o.a.mark((function e(){var n,r,i,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.time("render-extension-loader:json"),e.next=3,t.get("https://"+t.workspace+"--"+t.account+"."+t.publicEndpoint+"/legacy-extensions"+t.path+"?__disableSSR&locale="+t.locale+"&v=3&origin="+window.location.hostname);case 3:for(c in n=e.sent,r=n.runtime,i=n.styles,a=n.scripts,t.timeEnd("render-extension-loader:json"),window.__RUNTIME__||{})Object.prototype.hasOwnProperty.call(window.__RUNTIME__,c)&&void 0===r[c]&&(r[c]=window.__RUNTIME__[c]);return t.setGlobalContext({runtime:r,styles:i,scripts:a}),e.abrupt("return",{runtime:r,styles:i,scripts:a});case 11:case"end":return e.stop()}}),e)}))),this.setGlobalContext=function(e){var n=e.runtime,r=e.styles,o=e.scripts;t.renderMajor=n.renderMajor||6,t.styles=r,t.scripts=o,t.runtime=Object.assign({},n,{start:!1})},this.getExistingScriptSrcs=function(){for(var e=[],t=0;t<document.scripts.length;t++)e.push(document.scripts.item(t).src);return e},this.scriptOnPage=function(e){return t.getExistingScriptSrcs().some((function(t){return-1!==t.indexOf(e)}))},this.addScriptToPage=function(e){return new Promise((function(n,r){if(t.scriptOnPage(e))return n();var o=document.createElement("script");o.crossOrigin="anonymous",o.onload=function(){return n()},o.onerror=function(){return r()},o.async=!1,o.src=e,document.head.appendChild(o)}))},this.addStyleToPage=function(e){var t=document.createElement("link");t.href=e,t.type="text/css",t.rel="stylesheet",document.head.appendChild(t)},this.time=function(e){t.verbose&&console.time(e)},this.timeEnd=function(e){t.verbose&&console.timeEnd(e)},this.account=n,this.workspace=r,this.path=a,this.locale=c||"en-US",this.verbose=s,this.timeout=l,this.publicEndpoint=u||(/myvtexdev\.com/.test(window.location.hostname)?"myvtexdev.com":"myvtex.com"),this.get=window.$?function(e){return window.$.ajax({url:e,timeout:t.timeout}).retry({timeout:2e3,times:2})}:window.fetch?function(e){return new Promise((function(n,r){var o=setTimeout((function(){r({error:"timeout"})}),t.timeout);window.fetch(e).then((function(e){return clearTimeout(o),e})).then((function(e){return e.json()})).then((function(e){return n(e)}))}))}:null,window.__RUNTIME__?(this.runtime=window.__RUNTIME__,this.renderMajor=7):window.__RUNTIME__={account:n,workspace:r,publicEndpoint:u},!this.get)throw new Error("Render Extension Loader requires either jQuery.ajax or window.fetch.")},b=n("pvD0"),w=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new v({account:"marinbrasil",workspace:"master",verbose:!1,publicEndpoint:void 0,timeout:6e3,path:"/account",locale:t}),r=document.getElementById("my-account"),!window.__RENDER_7_RUNTIME__){e.next=5;break}return n.render("my-account-portal",r,void 0),e.abrupt("return");case 5:return e.next=7,n.load();case 7:window.__RUNTIME__=n.render("my-account-portal",r,void 0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){return m.a.createElement(u.a,{height:"750px"},m.a.createElement(s.q,null))},x=function(){var e,t=Object(b.a)({stale:!1}),n="true"===(null==t||null===(e=t.isAuthenticated)||void 0===e?void 0:e.value),r=Object(d.useState)(!0),u=r[0],s=r[1],f=Object(a.useIntl)(),p=f.locale,h=f.defaultLocale;return Object(d.useEffect)((function(){Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n){e.next=5;break}return t=Object(c.a)(h,p,"/login"),Object(l.navigate)(t),e.abrupt("return");case 5:return e.next=7,w(p);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:return e.prev=12,s(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()}),[h,n,p]),n?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{id:"my-account"}),u&&m.a.createElement(E,null)):null};t.default=function(){return m.a.createElement(p.a,null,m.a.createElement(f.a,null,m.a.createElement(h.a,{fallback:m.a.createElement(E,null)},m.a.createElement(x,null))))}}}]);
//# sourceMappingURL=component---node-modules-vtex-gatsby-theme-vtex-src-pages-account-tsx-e26cdcccc9c632f4553b.js.map