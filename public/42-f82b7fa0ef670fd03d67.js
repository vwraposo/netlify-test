(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{LUCx:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("aZdg"),s=a("izhR"),u=a("QNvf"),i=(a("T6Aq"),a("GgDe")),c=a("qzfY"),o={query:"query AutocompleteSuggestionsQuery($fullText: String!) {\n  vtex {\n    autocompleteSearchSuggestions(fullText: $fullText) {\n      searches {\n        term\n        key: term\n      }\n    }\n  }\n}\n",sha256Hash:"85174d418018b5219606c7121dba3623fea4807351ebf07da5fad79455173646",operationName:"AutocompleteSuggestionsQuery"},m=a("xEwg"),g=a("drkt"),f=a("qegT"),v=function(e){var t,a=e.variant,n=e.term,m=Object(u.useIntl)().formatMessage,v=function(e){var t=e.term,a=Object(c.c)(),n=Object(i.a)(Object.assign({},o,{variables:{fullText:t},suspense:!0}));return Object.assign({query:n},a)}({term:n}),d=v.query,h=d.data,E=d.error,p=v.setTerm,b=v.searchBar.onSearch,y=null==h||null===(t=h.vtex.autocompleteSearchSuggestions)||void 0===t?void 0:t.searches,w=y&&Object(c.b)(y);return E||!y?null:0===y.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:a,title:m({id:"suggestions.autocomplete.title",defaultMessage:"Suggestions"})}),r.a.createElement(l.a,null,m({id:"suggestions.autocomplete.notFound",defaultMessage:"No suggestions"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:a,title:m({id:"suggestions.autocomplete.title",defaultMessage:"Suggestions"})}),r.a.createElement(f.a,{items:w,variant:a},(function(e){var t=e.item.term,a=e.variant;return r.a.createElement(s.d,{as:"span",variant:a,onClick:function(){return b(t)},onMouseEnter:function(){return p(t)}},t)})))},d=function(e){var t=e.variant,a=void 0===t?"autocomplete":t,n=e.term;return r.a.createElement(m.a,{variant:a,fallback:null},r.a.createElement(v,{variant:a,term:n}))},h=a("YpBF"),E=function(){var e=Object(n.useState)(null),t=e[0],r=e[1];return Object(n.useEffect)((function(){Promise.resolve().then(a.bind(null,"Y67u")).then((function(e){r(e.history)}))}),[]),t},p=function(){return r.a.createElement("svg",{className:"vtex__icon-clock  ",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 22 10",fill:"none"},r.a.createElement("path",{d:"M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14C4.7 14 2 11.3 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14Z",fill:"currentColor"}),r.a.createElement("path",{d:"M2 0H0V5H5V3H2V0Z",transform:"translate(7 4)",fill:"currentColor"}))},b=function(e){var t=e.variant,a=Object(u.useIntl)().formatMessage,n=function(){var e=Object(c.c)(),t=E(),a=null==t?void 0:t.get().map((function(e){return{term:e,key:e}}));return Object.assign({searches:a},e)}(),i=n.searches,o=n.searchBar.onSearch,m=a({id:"suggestions.history.title",defaultMessage:"History"});return i?0===i.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:t,title:m}),r.a.createElement(l.a,null,a({id:"suggestions.history.empty",defaultMessage:"No history yet"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:t,title:a({id:"suggestions.history.title",defaultMessage:"History"})}),r.a.createElement(f.a,{items:i,variant:t},(function(e){var t=e.item.term,a=e.variant;return r.a.createElement(s.d,{onClick:function(){return o(t)},variant:a},r.a.createElement("span",null,r.a.createElement(p,null)),t)}))):null},y=function(e){var t=e.variant,a=void 0===t?"history":t;return r.a.createElement(m.a,{variant:a,fallback:null},r.a.createElement(b,{variant:a}))},w=a("CbJf");t.default=function(){var e=Object(c.c)(),t=e.term,a=e.searchBar.asyncTerm;return 0===t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement(y,null)):r.a.createElement(r.a.Fragment,null,a?r.a.createElement(d,{term:a}):null,t?r.a.createElement(h.a,{maxItems:3,term:t}):null)}}}]);
//# sourceMappingURL=42-f82b7fa0ef670fd03d67.js.map