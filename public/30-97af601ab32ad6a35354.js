(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{GgDe:function(e,a,r){"use strict";r.d(a,"a",(function(){return i}));var t=r("VtrM"),n=r("gOi2"),i=function(e){return Object(t.a)(function(e){return e.sha256Hash+"::"+JSON.stringify(e.variables)}(e),Object.assign({fetcher:function(){return Object(n.a)(e)}},e))}},T6Aq:function(e,a,r){"use strict";r.d(a,"a",(function(){return s}));var t=r("o0o1"),n=r.n(t),i=(r("ls82"),r("HaE+")),s=function(){var e=Object(i.a)(n.a.mark((function e(a,r){var t,i,s,o,c,l,u,d,m,p,f;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.query,i=r.sha256Hash,s=r.operationName,o=r.variables,c=r.fetchOptions,l=s.endsWith("Query")?"GET":"POST",u={persistedQuery:{sha256Hash:i}},d=new URLSearchParams({operationName:s,extensions:u&&JSON.stringify(u),variables:"GET"===l?JSON.stringify(o):void 0}),m=a+"?"+d.toString(),p="POST"===l?JSON.stringify({operationName:s,extensions:u,variables:o,query:t}):void 0,e.next=8,fetch(m,Object.assign({method:l,body:p},c));case 8:return f=e.sent,e.abrupt("return",f.json());case 10:case"end":return e.stop()}}),e)})));return function(a,r){return e.apply(this,arguments)}}()},WQPT:function(e,a,r){"use strict";r.r(a);var t=r("q1tI"),n=r.n(t),i=r("R0sn"),s=r("mF83"),o=r("EkHa"),c=r("oMqd"),l=(r("T6Aq"),r("GgDe")),u={query:void 0,sha256Hash:"218493321a38cbdf90ec8fd5b6a32e26d61ac5b8c82fc6a674bdd0b2bddf379b",operationName:"ProductsShelfQuery"},d=r("aZdg"),m=r("izhR"),p=r("8lWP"),f=r("GUcP"),b=function(e){var a,r,t,i,s=e.title,c=e.searchParams,d=(a=c,i=Object(l.a)(Object.assign({},u,{variables:a,suspense:!0})).data,{products:null!==(r=null==i||null===(t=i.vtex)||void 0===t?void 0:t.products)&&void 0!==r?r:null}).products;return d?n.a.createElement(o.default,{products:d,title:n.a.createElement(p.a,null,s),pageSizes:f.a,showDots:!0}):null},h=function(e){return n.a.createElement(c.a,null,n.a.createElement(t.Suspense,{fallback:n.a.createElement(d.a,{height:"100%"},n.a.createElement(m.q,null))},n.a.createElement(b,e)))};a.default=function(){return n.a.createElement(i.a,null,n.a.createElement(h,{title:"Cubas e Tanques",searchParams:{from:0,to:11,orderBy:"OrderByTopSaleDESC",collection:"140",hideUnavailableItems:!1}}),n.a.createElement(s.a,{banners:[{href:"/lixeira-tramontina-util-em-aco-inox-polido-com-revestimento-gold-5-l-94540051/p",src:"https://marinbrasil.vteximg.com.br/arquivos/ids/162866/banner_peq_lixeira.jpg?v=637004823029000000img.com.br/arquivos/ids/164793/banner-cadeira-marin.gif?v=637232872009830000",alt:"Banner Esquerda"},{href:"/panela-wok-aluminio-antiaderente-36-cm-vermelha/p",src:"https://marinbrasil.vteximg.com.br/arquivos/ids/162871/banner_peq_wok.jpg?v=637005347263530000nbrasil.vteximg.com.br/arquivos/ids/162865/banner_peq_eletroportateis.jpg?v=637004822221200000",alt:"Banner Direita"}]}),n.a.createElement(h,{title:"Os queridinhos",searchParams:{from:0,to:11,orderBy:"OrderByTopSaleDESC",hideUnavailableItems:!1}}),n.a.createElement(s.a,{banners:[{href:"/cadeira-sofia-encosto-horizontal-vermelha-tramontina-92237040/p",src:"https://marinbrasil.vteximg.com.br/arquivos/ids/162868/banner_peq_sofia.jpg?v=637004824374870000",alt:"Banner Esquerda"},{href:"/eletrodomesticos/coifas-e-depuradores",src:"https://marinbrasil.vteximg.com.br/arquivos/ids/162872/banner_peq_coifa.jpg?v=637005353826970000",alt:"Banner Direita"}]}),n.a.createElement(h,{title:"Cadeiras",searchParams:{from:0,to:11,orderBy:"OrderByTopSaleDESC",collection:"144",hideUnavailableItems:!1}}))}},gOi2:function(e,a,r){"use strict";r.d(a,"a",(function(){return o}));var t=r("o0o1"),n=r.n(t),i=(r("ls82"),r("HaE+")),s=r("T6Aq"),o=function(){var e=Object(i.a)(n.a.mark((function e(a){var r,t,i,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)("/graphql/",Object.assign({},a,{fetchOptions:Object.assign({credentials:"omit"},a.fetchOptions,{headers:Object.assign({"x-vtex-graphql-referer":window.location.host},null===(r=a.fetchOptions)||void 0===r?void 0:r.headers)})}));case 2:if(t=e.sent,i=t.data,!(null==(o=t.errors)?void 0:o.length)){e.next=7;break}throw o[0];case 7:return e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=30-97af601ab32ad6a35354.js.map