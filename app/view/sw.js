var serviceWorkerOption = {
  "assets": [
    "/js/admin.7a7ab3f4.js",
    "/js/admin-vendor.48a9b7ba.js",
    "/js/common.8365c40c.js",
    "/js/main.6640b0fc.js",
    "/js/main-vendor.895be23d.js",
    "/js/4.cd5ba916.js",
    "/js/0.5b36219e.js",
    "/js/manifest.21745ffd.js",
    "/js/1.1280a003.js",
    "/js/2.ae448e12.js",
    "/js/3.5779b887.js",
    "/js/used-twice-main.a7b9ae29.js",
    "/css/admin.7a7ab3f4.css",
    "/css/main.6640b0fc.css",
    "/index.html",
    "/admin.html"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="//cdn.lindongzhou.com/",n(n.s="./client/sw.js")}({"./client/constants/index.js":function(e,t){e.exports={INITIAL_STATE:"INITIAL_STATE",LOADING_STATE:"LOADING_STATE",SUCCESS_STATE:"SUCCESS_STATE",FAILURE_STATE:"FAILURE_STATE",cacheName:"html-0-1",apiCacheName:"api-0-1"}},"./client/sw.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/url-parse/index.js"),o=n.n(r),s=n("./client/constants/index.js"),a=n.n(s),c=a.a.cacheName,i=a.a.apiCacheName,u=["/index.html"],l=["/","/about","/project","/article/","/archives"];self.addEventListener("install",function(e){var t=caches.open(c).then(function(e){return e.addAll(u)});e.waitUntil(t)}),self.addEventListener("activate",function(e){var t=caches.keys().then(function(e){return Promise.all(e.map(function(e){return e!==c&&e!==i?caches.delete(e):null}))});return e.waitUntil(t),self.clients.claim()});self.addEventListener("fetch",function(e){var t=e.request.url;if(function(e){var t=new o.a(e).pathname;return l.some(function(e,n){return 0===n?e===t:!!t.startsWith(e)})}(t)){var n=e.request.clone();e.respondWith(fetch(n).then(function(e){if(!e||200!==e.status)throw Error("response error");var t=e.clone();return caches.open(c).then(function(e){e.put(n,t)}),e}).catch(function(){return caches.match(e.request).then(function(e){return e||fetch("/index.html")})}))}else if(function(e){return"/graphql"===new o.a(e).pathname}(t)){var r=e.request.clone();e.respondWith(fetch(r).then(function(e){if(!e||200!==e.status)return e;var t=e.clone();return caches.open(i).then(function(e){e.put(r,t)}),e}).catch(function(){return caches.match(e.request)}))}})},"./node_modules/querystringify/index.js":function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty;function o(e){return decodeURIComponent(e.replace(/\+/g," "))}t.stringify=function(e,t){t=t||"";var n=[];for(var o in"string"!=typeof t&&(t="?"),e)r.call(e,o)&&n.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return n.length?t+n.join("&"):""},t.parse=function(e){for(var t,n=/([^=?&]+)=?([^&]*)/g,r={};t=n.exec(e);){var s=o(t[1]),a=o(t[2]);s in r||(r[s]=a)}return r}},"./node_modules/requires-port/index.js":function(e,t,n){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},"./node_modules/url-parse/index.js":function(e,t,n){"use strict";(function(t){var r=n("./node_modules/requires-port/index.js"),o=n("./node_modules/querystringify/index.js"),s=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,a=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,c=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],i={hash:1,query:1};function u(e){var n,r={},o=typeof(e=e||t.location||{});if("blob:"===e.protocol)r=new h(unescape(e.pathname),{});else if("string"===o)for(n in r=new h(e,{}),i)delete r[n];else if("object"===o){for(n in e)n in i||(r[n]=e[n]);void 0===r.slashes&&(r.slashes=a.test(e.href))}return r}function l(e){var t=s.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function h(e,t,n){if(!(this instanceof h))return new h(e,t,n);var s,a,i,p,f,d,m=c.slice(),v=typeof t,y=this,w=0;for("object"!==v&&"string"!==v&&(n=t,t=null),n&&"function"!=typeof n&&(n=o.parse),t=u(t),s=!(a=l(e||"")).protocol&&!a.slashes,y.slashes=a.slashes||s&&t.slashes,y.protocol=a.protocol||t.protocol||"",e=a.rest,a.slashes||(m[2]=[/(.*)/,"pathname"]);w<m.length;w++)i=(p=m[w])[0],d=p[1],i!=i?y[d]=e:"string"==typeof i?~(f=e.indexOf(i))&&("number"==typeof p[2]?(y[d]=e.slice(0,f),e=e.slice(f+p[2])):(y[d]=e.slice(f),e=e.slice(0,f))):(f=i.exec(e))&&(y[d]=f[1],e=e.slice(0,f.index)),y[d]=y[d]||s&&p[3]&&t[d]||"",p[4]&&(y[d]=y[d].toLowerCase());n&&(y.query=n(y.query)),s&&t.slashes&&"/"!==y.pathname.charAt(0)&&(""!==y.pathname||""!==t.pathname)&&(y.pathname=function(e,t){for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),r=n.length,o=n[r-1],s=!1,a=0;r--;)"."===n[r]?n.splice(r,1):".."===n[r]?(n.splice(r,1),a++):a&&(0===r&&(s=!0),n.splice(r,1),a--);return s&&n.unshift(""),"."!==o&&".."!==o||n.push(""),n.join("/")}(y.pathname,t.pathname)),r(y.port,y.protocol)||(y.host=y.hostname,y.port=""),y.username=y.password="",y.auth&&(p=y.auth.split(":"),y.username=p[0]||"",y.password=p[1]||""),y.origin=y.protocol&&y.host&&"file:"!==y.protocol?y.protocol+"//"+y.host:"null",y.href=y.toString()}h.prototype={set:function(e,t,n){var s=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||o.parse)(t)),s[e]=t;break;case"port":s[e]=t,r(t,s.protocol)?t&&(s.host=s.hostname+":"+t):(s.host=s.hostname,s[e]="");break;case"hostname":s[e]=t,s.port&&(t+=":"+s.port),s.host=t;break;case"host":s[e]=t,/:\d+$/.test(t)?(t=t.split(":"),s.port=t.pop(),s.hostname=t.join(":")):(s.hostname=t,s.port="");break;case"protocol":s.protocol=t.toLowerCase(),s.slashes=!n;break;case"pathname":case"hash":if(t){var a="pathname"===e?"/":"#";s[e]=t.charAt(0)!==a?a+t:t}else s[e]=t;break;default:s[e]=t}for(var i=0;i<c.length;i++){var u=c[i];u[4]&&(s[u[1]]=s[u[1]].toLowerCase())}return s.origin=s.protocol&&s.host&&"file:"!==s.protocol?s.protocol+"//"+s.host:"null",s.href=s.toString(),s},toString:function(e){e&&"function"==typeof e||(e=o.stringify);var t,n=this,r=n.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var s=r+(n.slashes?"//":"");return n.username&&(s+=n.username,n.password&&(s+=":"+n.password),s+="@"),s+=n.host+n.pathname,(t="object"==typeof n.query?e(n.query):n.query)&&(s+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(s+=n.hash),s}},h.extractProtocol=l,h.location=u,h.qs=o,e.exports=h}).call(t,n("./node_modules/webpack/buildin/global.js"))},"./node_modules/webpack/buildin/global.js":function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}});