var serviceWorkerOption = {
  "assets": [
    "/js/admin.7a7ab3f4.js",
    "/js/admin-vendor.48a9b7ba.js",
    "/js/common.8365c40c.js",
    "/js/main.cda1c796.js",
    "/js/main-vendor.895be23d.js",
    "/js/4.a41cf807.js",
    "/js/0.d43ddd59.js",
    "/js/manifest.23b245f6.js",
    "/js/1.1280a003.js",
    "/js/2.87c0ca59.js",
    "/js/3.5779b887.js",
    "/js/used-twice-main.d2c70b0b.js",
    "/css/admin.7a7ab3f4.css",
    "/css/main.cda1c796.css",
    "/index.html",
    "/admin.html"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="//cdn.lindongzhou.com/",n(n.s="./client/sw.js")}({"./client/constants/index.js":function(e,t){e.exports={INITIAL_STATE:"INITIAL_STATE",LOADING_STATE:"LOADING_STATE",SUCCESS_STATE:"SUCCESS_STATE",FAILURE_STATE:"FAILURE_STATE",cacheName:"html-0-1",apiCacheName:"api-0-1"}},"./client/sw.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./client/constants/index.js"),c=n.n(r),a=c.a.cacheName,i=c.a.apiCacheName,u=["/index.html"],o="http://127.0.0.1:7001",s=["/","/about","/project","/article/","/archives"];self.addEventListener("install",function(e){var t=caches.open(a).then(function(e){return e.addAll(u)});e.waitUntil(t)}),self.addEventListener("activate",function(e){var t=caches.keys().then(function(e){return Promise.all(e.map(function(e){return e!==a&&e!==i?caches.delete(e):null}))});return e.waitUntil(t),self.clients.claim()});self.addEventListener("fetch",function(e){var t=e.request.url;if(function(e){return s.map(function(e){return o+e}).some(function(t,n){return 0===n?t===e:!!e.startsWith(t)})}(t)){var n=e.request.clone();e.respondWith(fetch(n).then(function(e){if(!e||200!==e.status)throw Error("response error");var t=e.clone();return caches.open(a).then(function(e){e.put(n,t)}),e}).catch(function(){return caches.match(e.request).then(function(e){return e||fetch("/index.html")})}))}else if(function(e){return e.startsWith(o+"/graphql?")}(t)){var r=e.request.clone();e.respondWith(fetch(r).then(function(e){if(!e||200!==e.status)return e;var t=e.clone();return caches.open(i).then(function(e){e.put(r,t)}),e}).catch(function(){return caches.match(e.request)}))}})}});