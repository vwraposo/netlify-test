(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9vKe":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);var l=n("BsWD");function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(c){r=!0,l=c}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}return n}}(e,t)||Object(l.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n("KQm4"),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=Object(a.useRef)(null),l=Object(a.useRef)(null),i=Object(a.useCallback)((function(n){var a,i=t.root,o=void 0===i?null:i,c=t.rootMargin,u=void 0===c?"0px 0px 0px 0px":c,s=t.threshold,v=void 0===s?0:s;r.current&&(null===(a=l.current)||void 0===a||a.unobserve(r.current)),n&&(l.current=new IntersectionObserver(e,{root:o,rootMargin:u,threshold:v}),l.current.observe(n),r.current=n)}),[r].concat(Object(o.a)(n)));return i},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(a.useState)({inView:!1,entry:null,observer:null}),r=i(n,2),l=r[0],o=r[1],u=Object(a.useCallback)((function(t,n){var a=i(t,1)[0];if(a&&n){var r=e.onEnter,l=e.onLeave,c=e.unobserveOnEnter,u=a.isIntersecting,s=a.intersectionRatio,v=n.thresholds;if(s>=0){var d=v.some((function(e){return s>=e}))&&u;o({inView:d,entry:a,observer:n}),d&&c&&n.disconnect(),d?r&&r(a,n):l&&l(a,n)}}}),[e]),s=e.root,v=void 0===s?null:s,d=e.rootMargin,b=void 0===d?"0px 0px 0px 0px":d,f=e.threshold,g=void 0===f?0:f,m=c(u,{root:v,rootMargin:b,threshold:g},t),h=e.target;return Object(a.useEffect)((function(){(null==h?void 0:h.current)&&m(h.current)}),[h,m]),[m,l.inView,l.entry,l.observer]},s=n("p5si"),v=function(){};t.a=function(e){var t=e.fallback,n=e.children,l=e.preloader,i=void 0===l?v:l,o=e.rootMargin,c=void 0===o?"150px":o,d=e.threshold,b=u({unobserveOnEnter:!0,rootMargin:c,threshold:void 0===d?0:d}),f=b[0],g=b[1];return Object(s.a)((function(){i()}),[i]),g?r.a.createElement(a.Suspense,{fallback:t},n):r.a.createElement("div",{ref:f},t)}},OsZk:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("asHU"),r=n("tkDz"),l=n("Wbzz"),i=n("q1tI"),o=function(){var e=Object(a.useIntl)(),t=e.defaultLocale,n=e.locale;return Object(i.useCallback)((function(e){void 0===e&&(e="/");var a=Object(r.a)(t,n,e);Object(l.navigate)(a)}),[t,n])}},r3Ve:function(e,t,n){"use strict";var a=n("qn5I"),r=n("GCOn");t.a=function(e){var t=e.children,n=e.width,l=void 0===n?"100%":n,i=e.height,o=void 0===i?"100%":i;return Object(a.b)(r.d,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:o,width:l}},t)}},rulN:function(e,t,n){"use strict";var a=n("zkdT"),r=n("9vKe"),l=n("izhR"),i=n("q1tI"),o=n.n(i),c=n("BSIa"),u=function(){return Promise.all([n.e(2),n.e(28)]).then(n.bind(null,"WRBS"))},s=Object(i.lazy)(u),v=Object(i.lazy)((function(){return n.e(44).then(n.bind(null,"i3Z1"))}));t.a=function(e){var t=e.children;return o.a.createElement(l.b,{variant:"mainLayout"},o.a.createElement(c.default,null),t,o.a.createElement(a.a,{fallback:null},o.a.createElement(v,null)),o.a.createElement(r.a,{fallback:null,preloader:u},o.a.createElement(s,null)))}},ynY1:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("asHU"),i=n("r3Ve"),o=n("GCOn"),c=n("zLVn"),u=function(e){var t=e.variant,n=Object(c.a)(e,["variant"]),a=Object(l.useIntl)().formatMessage;return r.a.createElement(o.e,Object.assign({variant:t+".emailAndPassword",as:"button"},n),a({id:"login.page.emailAndPassword.button",defaultMessage:"Sign in with email and password"}))},s=function(e){var t=e.variant,n=Object(c.a)(e,["variant"]),a=Object(l.useIntl)().formatMessage;return r.a.createElement(o.e,Object.assign({variant:t+".emailVerification",as:"button"},n),a({id:"login.page.emailVerification.button",defaultMessage:"Receive access code by e-mail"}))},v=function(){return r.a.createElement("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",viewBox:"88.428 12.828 107.543 207.085"},r.a.createElement("path",{d:"M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z",fill:"#3c5a9a"}))},d=function(e){var t=e.variant,n=Object(c.a)(e,["variant"]),a=Object(l.useIntl)().formatMessage;return r.a.createElement(o.e,Object.assign({variant:t+".facebook",as:"button"},n),r.a.createElement(i.a,null,r.a.createElement(v,null),r.a.createElement(o.d,{ml:2},a({id:"login.page.facebookOAuth.button",defaultMessage:"Sign in with facebook"}))))},b=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"20",height:"20",viewBox:"0 0 48 48"},r.a.createElement("g",{id:"surface1"},r.a.createElement("path",{d:"M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 33.652344 32.65625 29.222656 36 24 36 C 17.371094 36 12 30.628906 12 24 C 12 17.371094 17.371094 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 12.953125 4 4 12.953125 4 24 C 4 35.046875 12.953125 44 24 44 C 35.046875 44 44 35.046875 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z ",style:{fill:"rgb(255, 193, 7)"}}),r.a.createElement("path",{d:"M 6.304688 14.691406 L 12.878906 19.511719 C 14.65625 15.109375 18.960938 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 16.316406 4 9.65625 8.335938 6.304688 14.691406 Z ",style:{fill:"rgb(255, 61, 0)"}}),r.a.createElement("path",{d:"M 24 44 C 29.164063 44 33.859375 42.023438 37.410156 38.808594 L 31.21875 33.570313 C 29.210938 35.089844 26.714844 36 24 36 C 18.796875 36 14.382813 32.683594 12.71875 28.054688 L 6.195313 33.078125 C 9.503906 39.554688 16.226563 44 24 44 Z ",style:{fill:"rgb(76, 175, 80)"}}),r.a.createElement("path",{d:"M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 34.511719 30.238281 33.070313 32.164063 31.214844 33.570313 C 31.21875 33.570313 31.21875 33.570313 31.21875 33.570313 L 37.410156 38.808594 C 36.972656 39.203125 44 34 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z ",style:{fill:"rgb(25, 118, 210)"}})))},f=function(e){var t=e.variant,n=Object(c.a)(e,["variant"]),a=Object(l.useIntl)().formatMessage;return r.a.createElement(o.e,Object.assign({variant:t+".google",as:"button"},n),r.a.createElement(i.a,null,r.a.createElement(b,null),r.a.createElement(o.d,{ml:2},a({id:"login.page.googleOAuth.button",defaultMessage:"Sign in with Google"}))))},g=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(36)]).then(n.bind(null,"SCak"))})),m=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(37)]).then(n.bind(null,"ep2h"))})),h=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(38)]).then(n.bind(null,"N8JT"))})),p=[{Component:g,Button:u},{Component:m,Button:s},{Component:Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(39)]).then(n.bind(null,"LcTx"))})),Button:f},{Component:h,Button:d}],E=n("rulN"),O=n("zkdT"),j=n("OsZk"),C=n("M2zQ"),w=function(){var e,t=Object(j.a)(),n=Object(l.useIntl)().formatMessage,c=Object(a.useState)(0),u=c[0],s=c[1],v=p[u].Component,d=Object(C.a)({stale:!1}),b="true"===(null==d||null===(e=d.isAuthenticated)||void 0===e?void 0:e.value);return Object(a.useEffect)((function(){b&&t("/account")}),[b,t]),b?r.a.createElement(i.a,{height:"200px"},r.a.createElement(o.o,null)):r.a.createElement(o.i,{variant:"login.page.container"},r.a.createElement(o.d,{variant:"login.page.group"},r.a.createElement(o.d,{variant:"login.page.group.title"},n({id:"login.page.title",defaultMessage:"Choose a sign in option"})),p.map((function(e,t){var n=e.Button;return t!==u?r.a.createElement(n,{key:t,variant:"login.page",onClick:function(){return s(t)}}):null}))),r.a.createElement(o.d,{variant:"login.page.group"},r.a.createElement(O.a,{fallback:r.a.createElement(i.a,{height:"200px"},r.a.createElement(o.o,null))},r.a.createElement(v,{variant:"page"}))))};t.default=function(){return r.a.createElement(E.a,null,r.a.createElement(O.a,{fallback:r.a.createElement(i.a,{height:"300px"},r.a.createElement(o.o,null))},r.a.createElement(w,null)))}}}]);
//# sourceMappingURL=component---faststore-packages-gatsby-theme-vtex-src-pages-login-tsx-0f0867cd92f0f67447da.js.map