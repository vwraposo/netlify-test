(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4H2T":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("izhR"),c={fill:"none",width:"25",height:"25",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"};t.a=function(e){return n.a.createElement(i.d,Object.assign({},e,{as:"button",variant:e.variant+".arrow.right.button"}),n.a.createElement(i.d,Object.assign({as:"svg"},c,{variant:e.variant+".arrow.right.svg"}),n.a.createElement("use",{href:"#nav-thin-caret--right",xlinkHref:"#nav-thin-caret--right"},n.a.createElement("g",{id:"nav-thin-caret--right"},n.a.createElement("path",{d:"M5 15L12 8L5 1",stroke:"currentColor",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})))))}},L2eo:function(e,t,a){"use strict";var r=a("q1tI"),n=a("2A+t"),i=a("izhR");t.a=function(e){var t=e.variant,a=e.onSelect,c=e.totalPages,l=e.selectedPage,o=Object(r.useMemo)((function(){return Array.from(Array(c).keys())}),[c]);return Object(n.b)(i.d,{variant:t+".paginationDots.container",role:"group","aria-label":"Slider pagination dots"},o.map((function(e){var r=e===l;return Object(n.b)(i.d,{variant:t+".paginationDots."+(r?"activeDot":"dot"),key:e,tabIndex:0,onKeyDown:function(){return a(e)},onClick:function(){return a(e)},role:"button","aria-label":"Dot "+(e+1)+" of "+c,"data-testid":"paginationDot"})})))}},lEwM:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return pe}));var r=a("q1tI"),n=a.n(r),i=a("4hiV"),c=a("yq/Q"),l=a("rulN"),o=a("R0sn"),u=a("zvcV"),s=a("2A+t"),m=a("izhR"),d=a("vEvf"),p=function(e){return Object(s.b)(d.a,Object.assign({backgroundColor:"transparent",color:"black","aria-label":"Previous Product Image"},e))},g=a("4H2T"),f=function(e){return Object(s.b)(g.a,Object.assign({backgroundColor:"transparent",color:"black","aria-label":"Next Product Image"},e))},v=a("L2eo").a,h=a("zLVn"),b=function(e){var t=e.targetProps,a=e.placeholderProps,i=e.as,c=void 0===i?"img":i,l=Object(h.a)(e,["targetProps","placeholderProps","as"]),o=Object(r.useState)(a),u=o[0],s=o[1];return Object(r.useEffect)((function(){return s(a)}),[a]),Object(r.useEffect)((function(){if(u.sizes!==t.sizes||u.srcSet!==t.srcSet||u.src!==t.src){var e=new Image;e.onload=function(){return s(t)};for(var a=0,r=["sizes","srcSet","src"];a<r.length;a++){var n=r[a];n in t&&e.setAttribute(n.toLowerCase(),t[n])}}}),[u,t]),n.a.createElement(c,Object.assign({},l,u))},E=function(e){var t=e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return t&&11===t[7].length?t[7]:null},j=function(e){var t,a,r,i,c,l,o=(a=(t=e).loop,r=t.autoplay,i=t.title,c=t.url,l="autoplay="+r+"&loop="+a+"&title="+i+"&enablejsapi=1&iv_load_policy=3&modestbranding=1","https://www.youtube.com/embed/"+E(c)+"?"+l),u=Object.assign({},e,{src:o,frameBorder:0,allowFullScreen:!0});return n.a.createElement(m.d,Object.assign({},u,{as:"iframe"}))},w=function(e){var t=e.variant+".video";return n.a.createElement(m.c,{ratio:1,sx:{paddingTop:"20%"}},n.a.createElement(m.c,{ratio:4/3},n.a.createElement(j,Object.assign({},e,{sx:{width:"100%",height:"100%"},variant:t}))))},x=function(e){var t=e.item,a=e.variant;return"image"===t.type?n.a.createElement(b,Object.assign({},t.props,{variant:a+".img",ratio:1,as:m.b})):n.a.createElement(w,Object.assign({},t.props,{variant:a,url:t.props.src}))},O=function(e){var t=e.allItems,a=e.showArrows,r=void 0===a||a,n=e.showDots,i=void 0===n||n,c=e.autoplay,l=e.autoplayTimeout,o=Object(u.a)({allItems:t,pageSize:1,autoplay:c,autoplayTimeout:l}),d=o.page,g=o.items,h=o.totalPages,b=o.setPage,E=o.setNextPage,j=o.setPreviousPage,w=g[0];return Object(s.b)(m.d,{variant:"productImageGallery"},Object(s.b)(m.d,{variant:"productImageGallery.group"},r&&Object(s.b)(p,{variant:"productImageGallery",onClick:function(){return j()}}),Object(s.b)(x,{variant:"productImageGallery",item:w}),r&&Object(s.b)(f,{variant:"productImageGallery",onClick:function(){return E()}})),i&&Object(s.b)(v,{variant:"productImageGallery",onSelect:b,selectedPage:d,totalPages:h}))},y=a("Cj0F"),P=function(e){var t=e.variant,a=e.children;return n.a.createElement(m.d,{variant:"productDetails."+t+".title",as:"h1"},a)},k=function(e){var t=e.variant,a=e.children;return n.a.createElement(m.d,{variant:"productDetails."+t+".reference"},a)},I=a("YwZP"),S=a("pusE"),C=a("DGpi"),D=[{imageUrl:C.b,imageText:"Product Image"}],z=C.a[C.a.length-1].widthStr,L=C.a[C.a.length-1].heightStr,_=C.a.map((function(e){return e.media})).join(", "),T=a("cmrU"),M=a("KQm4"),N=function(e){var t=e.children;return Object(s.b)(m.d,{sx:{borderColor:"#f3f3f3",borderStyle:"solid",borderWidth:"1px",minWidth:"250px",minHeight:"600px",padding:4}},t)},U=a("gmmj"),q=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(U.a,{height:"23px"}),n.a.createElement(U.a,{height:"50px"}),n.a.createElement(U.a,{height:"23px"}),n.a.createElement(U.a,{height:"100px"}),n.a.createElement(U.a,{height:"50px"}),n.a.createElement(U.a,{height:"23px"}),n.a.createElement(U.a,{height:"50px"}),n.a.createElement(U.a,{height:"23px"}))},H=a("6mPD"),R=a("QNvf"),A=function(e){var t=e.variant,a=void 0===t?"productDescription":t,r=e.children;return n.a.createElement(m.k,{variant:a+".title"},r)},G=function(e){var t=e.data,a=e.variant,r=void 0===a?"productDescription":a;return Object(s.b)("div",{dangerouslySetInnerHTML:{__html:t},sx:{variant:r+".description"}})},V=function(e){var t=e.product.description,a=Object(R.useIntl)().formatMessage;return null==t||""===t?null:n.a.createElement(r.Fragment,null,n.a.createElement(m.i,{variant:"productDescription.container"},n.a.createElement(m.l,{width:"36px",height:"36px",loading:"lazy",src:"https://marinbrasil.myvtexdev.com/assets/faststore/images/product-description___ce58032835db06b74c144ac20449249f.png",alt:"Product Description"}),n.a.createElement(A,null,a({id:"product.description.title"}))),n.a.createElement(G,{data:t}))},B=function(){return Object(s.b)("img",{alt:"logo tramontina",srcSet:"https://marinbrasil.vtexassets.com/assets/faststore/images/tramontina-logo___d264c78c1f9e404a64ce4ac6e38f0205.png 130w, https://marinbrasil.vtexassets.com/assets/faststore/images/tramontina-logo___d264c78c1f9e404a64ce4ac6e38f0205.png?width=342&height=69 342w",src:"https://marinbrasil.vtexassets.com/assets/faststore/images/tramontina-logo___d264c78c1f9e404a64ce4ac6e38f0205.png",height:"26px",width:"130px",loading:"lazy",sx:{my:3}})},F=a("Psuc"),Q=a("aZdg"),W=Object(r.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(34)]).then(a.bind(null,"LbPh"))})),J=function(e){var t=e.data.vtex.product,a=e.slug,i=t,c=i.productId,l=i.productReference,u=i.productClusters,s=i.productName,d=i.categoryTree,p=void 0===d?[]:d,g=i.items[0],f=g.images,v=g.videos,h=function(e,t,a){return Object(r.useMemo)((function(){var r=e.map((function(e){return{type:"image",props:e}})),n=t.map((function(e){return{type:"video",props:{src:e.videoUrl,title:a}}}));return[].concat(Object(M.a)(r),Object(M.a)(n))}),[e,t])}(function(e){var t=Object(I.useLocation)().state,a=null!=e?e:D;return Object(r.useMemo)((function(){return a.map((function(e,a){var r=e.imageUrl,n=e.imageText,i=null!=r?r:C.b,c=(null==t?void 0:t.fromSummary)&&0===a,l=C.a.map((function(e){var t=e.width,a=e.height;return Object(S.a)(i,t,a)+" "+t+"w"})).join(", "),o=c?Object(S.a)(i,C.c.width,C.c.height):l;return{targetProps:{sizes:_,srcSet:l},placeholderProps:{sizes:c?"(minWidth: 0px) 100vw":_,srcSet:o},src:r,alt:n,loading:"eager",width:z,height:L}}))}),[a])}(f),v,s);return n.a.createElement(o.a,null,n.a.createElement(y.a,{breadcrumb:p,type:"PRODUCT"}),n.a.createElement(m.d,{variant:"productDetails.default.container"},n.a.createElement(B,null),n.a.createElement(P,{variant:"default"},s),n.a.createElement(F.a,{productId:c}),n.a.createElement(m.i,{sx:{justifyContent:"space-between",my:4}},n.a.createElement(k,{variant:"default"},"Cod.: ",l),n.a.createElement(H.a,{productClusters:u})),n.a.createElement(m.j,{my:4,mx:"auto",gap:[0,3],columns:[1,2]},n.a.createElement(O,{allItems:h}),n.a.createElement(N,null,n.a.createElement(T.a,{fallback:n.a.createElement(q,null)},n.a.createElement(W,{slug:a}))))),n.a.createElement(V,{product:t}))},K=function(){return n.a.createElement(o.a,null,n.a.createElement(m.i,{variant:"productPage.container"},n.a.createElement(U.a,{width:"500px",height:"45px"}),n.a.createElement(m.j,{my:4,mx:"auto",gap:[0,3],columns:[1,2]},n.a.createElement(U.a,{width:"500px",height:"500px"}),n.a.createElement(m.f,null,n.a.createElement(U.a,{width:"500px",height:"20px"}),n.a.createElement(U.a,{width:"500px",height:"20px"}),n.a.createElement(U.a,{width:"500px",height:"20px"}),n.a.createElement(U.a,{width:"500px",height:"20px"})))))},X=function(){return n.a.createElement(Q.a,{height:"500px"},n.a.createElement(m.q,null))},Z=a("p9/g"),Y=a("GgDe"),$={query:void 0,sha256Hash:"911cda4b215f8e520c356a7fd5f86bcd28039742c9cd2383aa9ecaa23e965b9f",operationName:"ProductPageQuery"},ee=a("8RKT"),te=a("hB3p"),ae=a("jy8r"),re=a("rid2"),ne=a("iTBd"),ie=function(e){var t=function(e,t){return Object(r.useMemo)((function(){if(null===e)return"";var a=e.productName,r=e.items,n=e.description,i=e.brand,c=r[0],l=c.images.map((function(e){return e.imageUrl})),o=function(e,t){var a;return null===(a=e.sellers)||void 0===a?void 0:a.map((function(e){return{"@type":"Offer",price:e.commercialOffer.price,priceCurrency:t,priceValidUntil:""+e.commercialOffer.priceValidUntil,availability:e.commercialOffer.availableQuantity>0?"http://schema.org/InStock":"http://schema.org/OutOfStock"}}))}(c,t);return c&&l&&o&&0!==o.length&&i?{"@context":"https://schema.org/","@type":"Product",name:a,image:l,offers:o,sku:c.itemId,brand:{"@type":"Brand",name:i},description:n}:null}),[e,t])}(e.data.vtex.product,Object(ne.a)()[0]);return null==t?null:n.a.createElement(re.Helmet,{defer:!1,async:!1,script:[{type:"application/ld+json",innerHTML:JSON.stringify(t)}]})},ce=te.a||te.b,le=function(e){var t=Object(r.useState)(ce),a=t[0],i=t[1];return Object(ee.a)((function(){return i(!0)}),[]),a?n.a.createElement(n.a.Fragment,null,n.a.createElement(ae.a,e),n.a.createElement(ie,e)):null},oe=a("A5AQ"),ue=a("WkUc"),se=function(){return Promise.all([a.e(1),a.e(3),a.e(45)]).then(a.bind(null,"hN+9"))},me=Object(r.lazy)(se),de=function(e){var t,a,i,c=e.data,l=e.pageContext,o=e.slug,u=l.staticPath,s=null!==(t=l.slug)&&void 0!==t?t:o,m=Object(Y.a)(Object.assign({},$,{variables:{slug:s,staticPath:!0},suspense:!0,initialData:u?c:void 0})).data;Object(ue.b)((function(){return[{type:"vtex:pageView",data:{pageUrl:window.location.href,pageTitle:document.title,referrer:document.referrer,accountName:"marinbrasil"}},{type:"vtex:productView",data:{product:null==m?void 0:m.vtex.product}}]}),null!==(a=null==m||null===(i=m.vtex.product)||void 0===i?void 0:i.productId)&&void 0!==a?a:"");var d=Object.assign({},e,{data:m,slug:s});return n.a.createElement(r.Fragment,null,n.a.createElement(J,d),n.a.createElement(le,d),n.a.createElement(Z.a,{fallback:n.a.createElement(X,null),preloader:se},n.a.createElement(me,d)))},pe="3834292091";t.default=function(e){var t=e.pageContext.staticPath;return n.a.createElement(l.a,null,n.a.createElement(c.a,{isPrerendered:t,fallback:n.a.createElement(K,null)},n.a.createElement(i.a,{fallback:function(e){return n.a.createElement(oe.a,{error:e})}},n.a.createElement(de,e))))}},vEvf:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("izhR"),c={fill:"none",width:"25",height:"25",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"};t.a=function(e){return n.a.createElement(i.d,Object.assign({},e,{as:"button",variant:e.variant+".arrow.left.button"}),n.a.createElement(i.d,Object.assign({as:"svg"},c,{variant:e.variant+".arrow.left.svg"}),n.a.createElement("use",{href:"#nav-thin-caret--left",xlinkHref:"#nav-thin-caret--left"},n.a.createElement("g",{id:"nav-thin-caret--left"},n.a.createElement("path",{d:"M11 1L4 8L11 15",stroke:"currentColor",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})))))}},zvcV:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("q1tI"),n=function(e){var t=e.allItems,a=e.pageSize,n=void 0===a?1:a,i=e.autoplay,c=void 0!==i&&i,l=e.autoplayTimeout,o=void 0===l?1e6:l,u=Math.ceil(t.length/n),s=Object(r.useState)(0),m=s[0],d=s[1],p=m<t.length?m:0;Object(r.useEffect)((function(){return d(0)}),[t.length]);var g,f,v,h=Object(r.useMemo)((function(){return t.slice(p*n,(p+1)*n)}),[t,p,n]),b=Object(r.useCallback)((function(){return d((function(e){return(e+1)%u}))}),[u]),E=Object(r.useCallback)((function(){return d((function(e){return((t=u)-(t-e+1)%t)%t;var t}))}),[u]);return g=function(){c&&b()},f=o,v=Object(r.useRef)(),Object(r.useEffect)((function(){v.current=g}),[g]),Object(r.useEffect)((function(){if(null!==f){var e=setInterval((function(){var e;return null==v||null===(e=v.current)||void 0===e?void 0:e.call(v)}),f);return function(){return clearInterval(e)}}return function(){}}),[f]),{totalPages:u,items:h,page:p,setPage:d,setNextPage:b,setPreviousPage:E}}}}]);
//# sourceMappingURL=component---node-modules-vtex-gatsby-theme-vtex-src-templates-product-tsx-e51d9ca4edc32b37b97a.js.map