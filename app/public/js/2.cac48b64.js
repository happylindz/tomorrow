webpackJsonp([2],{"./client/container/archives/index.jsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/react/index.js"),a=n.n(r),c=n("./node_modules/react-redux/es/index.js"),o=n("./node_modules/react-router-dom/es/index.js"),i=n("./client/actions/index.js"),s=n("./client/constants/index.js"),l=n("./client/util/index.js"),u=(n("./client/container/archives/tags.scss"),{fontWeight:"bold",color:"red"}),f=function(e){var t=e.tags,n=e.topic,r=t.all;return a.a.createElement("div",null,a.a.createElement(o.NavLink,{strict:!0,to:"/archives",isActive:function(){return""===n},activeStyle:u,className:"tag"},"全部("+r+")"),Object.keys(t).map(function(e){return"all"===e?null:a.a.createElement(o.NavLink,{strict:!0,isActive:function(){return n===e},key:e,activeStyle:u,to:"/archives?topic="+encodeURI(e),className:"tag"},e+"("+t[e]+")")}))},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),p(t,[{key:"componentDidMount",value:function(){document.title="Hello Archives";var e=this.props.state;e===s.INITIAL_STATE||e===s.FAILURE_STATE?this.props.fetchArchivesData():s.SUCCESS_STATE}},{key:"render",value:function(){var e=this.props,t=e.posts,n=e.state,r=e.tags,c=e.topic;switch(n){case s.INITIAL_STATE:return a.a.createElement("section",null,"initial state");case s.LOADING_STATE:return a.a.createElement("section",null,"loading state");case s.SUCCESS_STATE:return a.a.createElement("section",null,a.a.createElement(f,{tags:r,topic:c}),a.a.createElement("hr",null),Object.keys(t).map(function(e){return parseInt(e,10)}).sort(function(e,t){return t-e}).map(function(e){return a.a.createElement("div",{key:e},e,t[e].map(function(e){return a.a.createElement("section",{key:e._id},a.a.createElement("h2",null,e.time,a.a.createElement(o.Link,{to:"/article/"+e.url},e.title)))}),a.a.createElement("hr",null))}));default:return a.a.createElement("section",null,"something error on page, please fresh!")}}}]),t}();t.default=Object(c.connect)(function(e,t){var n=e.archives.postsData,r=t.location.search,a={all:n.length},c={},o="";return""!==r&&(o=decodeURI(Object(l.a)(r).topic)||""),n.forEach(function(e){try{var t=e.tags;if(""===o){var n=e.year;c[n]||(c[n]=[]),c[n].push(e)}var r=!0,i=!1,s=void 0;try{for(var l,u=t[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var f=l.value;if(f===o){var p=e.year;c[p]||(c[p]=[]),c[p].push(e)}a[f]?a[f]+=1:a[f]=1}}catch(e){i=!0,s=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw s}}}catch(e){}}),h({},e.archives,{tags:a,topic:o,posts:c})},function(e){return{fetchArchivesData:function(t){e(Object(i.b)(t))}}})(v)},"./client/container/archives/tags.scss":function(e,t){}});