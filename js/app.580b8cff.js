(function(){"use strict";var e={1356:function(e,t,n){var r=n(5130),o=n(6768);const a={class:"content"};function u(e,t,n,r,u,i){const c=(0,o.g2)("Header"),l=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(c),(0,o.Lk)("div",a,[(0,o.bF)(l)])],64)}var i=n(4232),c=n.p+"img/CTMB_title.d2a8b456.png";const l={class:"header gay",ref:"amH"},s={class:"logo gay ini",src:c,alt:"logo",ref:"logoImg"},f={class:"gay",ref:"amN"};function d(e,t,n,r,a,u){const c=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("header",l,[(0,o.Lk)("img",s,null,512),(0,o.Lk)("nav",f,[(0,o.bF)(c,{to:"/",style:{"margin-left":"180px"},class:(0,i.C4)({blyat:"home"===e.$route.name})},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("HOME")]))),_:1},8,["class"]),(0,o.bF)(c,{to:"/olds",class:(0,i.C4)({blyat:"olds"===e.$route.name})},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)("OLDS")]))),_:1},8,["class"]),(0,o.bF)(c,{to:"/chr",class:(0,i.C4)({blyat:"chr"===e.$route.name})},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("CHR")]))),_:1},8,["class"]),(0,o.bF)(c,{to:"/about",class:(0,i.C4)({blyat:"about"===e.$route.name})},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.eW)("ABOUT")]))),_:1},8,["class"]),(0,o.bF)(c,{to:"/saygex",class:(0,i.C4)({blyat:"saygex"===e.$route.name})},{default:(0,o.k6)((()=>t[4]||(t[4]=[(0,o.eW)("SAYGEX")]))),_:1},8,["class"]),(0,o.bF)(c,{to:"/RickRoll",class:(0,i.C4)({blyat:"RickRoll"===e.$route.name})},{default:(0,o.k6)((()=>t[5]||(t[5]=[(0,o.eW)("RICKROLL")]))),_:1},8,["class"])],512)],512)}var m=n(144),p=n(1387),h={setup(){const e=(0,p.lq)(),t=(0,m.KR)(null),n=(0,m.KR)(null),r=(0,m.KR)(null);return(0,o.sV)((()=>{setTimeout((()=>{t.value&&t.value.classList.remove("ini")}),100),setTimeout((()=>{t.value&&(t.value.classList.remove("gay"),n.value.classList.remove("gay"),r.value.classList.remove("gay"))}),1500)})),{route:e,logoImg:t,amH:n,amN:r}}},v=n(1241);const b=(0,v.A)(h,[["render",d],["__scopeId","data-v-95f14bf4"]]);var g=b,y={name:"App",components:{Header:g}};const k=(0,v.A)(y,[["render",u]]);var C=k;const O=[{path:"/",name:"home",component:()=>n.e(251).then(n.bind(n,9919))},{path:"/olds",name:"olds",component:()=>n.e(612).then(n.bind(n,1612))},{path:"/chr",name:"chr",component:()=>n.e(900).then(n.bind(n,2358))},{path:"/about",name:"about",component:()=>n.e(641).then(n.bind(n,5641))},{path:"/saygex",name:"saygex",component:()=>n.e(720).then(n.bind(n,8720))},{path:"/RickRoll",name:"RickRoll",component:()=>n.e(580).then(n.bind(n,6557))},{path:"/test",name:"test",component:()=>n.e(569).then(n.bind(n,8569))}],E=(0,p.aE)({history:(0,p.LA)("/"),routes:O});var L=E;const w=(0,r.Ef)(C);w.use(L),w.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var i=!0,c=0;c<r.length;c++)(!1&a||u>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,a<u&&(u=a));if(i){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{251:"8f3a7c0d",569:"266ceba8",580:"b3642362",612:"c136921e",641:"37e287e5",720:"94d804b2",900:"8c3ba8f9"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{251:"d6217429",569:"ca7c5bcf",580:"fc856954",612:"d70e8339"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="uranium:";n.l=function(r,o,a,u){if(e[r])e[r].push(o);else{var i,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){i=f;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[o];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,a){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",n.nc&&(u.nonce=n.nc);var i=function(n){if(u.onerror=u.onload=null,"load"===n.type)o();else{var r=n&&n.type,i=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+i+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=i,u.parentNode&&u.parentNode.removeChild(u),a(c)}};return u.onerror=u.onload=i,u.href=t,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var u=n.miniCssF(r),i=n.p+u;if(t(u,i))return o();e(r,i,null,o,a)}))},o={524:0};n.f.miniCss=function(e,t){var n={251:1,569:1,580:1,612:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var u=n.p+n.u(t),i=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,o[1](i)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,u=r[0],i=r[1],c=r[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var s=c(n)}for(t&&t(r);l<u.length;l++)a=u[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self["webpackChunkuranium"]=self["webpackChunkuranium"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1356)}));r=n.O(r)})();
//# sourceMappingURL=app.580b8cff.js.map