webpackJsonp([1],{"./client/components/home/index.scss":function(e,t){},"./client/components/skeleton-home/index.scss":function(e,t){},"./client/components/skeleton-home/skeleton-item/index.scss":function(e,t){},"./client/container/home/index.jsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("./node_modules/react/index.js"),s=n.n(a),o=n("./node_modules/react-redux/es/index.js"),c=n("./node_modules/react-router-dom/es/index.js"),r=n("./node_modules/classnames/index.js"),i=n.n(r),l=(n("./client/components/home/index.scss"),n("./client/constants/index.js")),m=n.n(l),u=(n("./client/components/skeleton-home/skeleton-item/index.scss"),function(){return s.a.createElement("div",{className:"skeleton-home-item"},s.a.createElement("div",{className:"animated-background title"}),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"banner"},s.a.createElement("div",{className:"animated-background"})),s.a.createElement("div",{className:"desc-wrapper"},s.a.createElement("div",{className:"desc"},s.a.createElement("div",{className:"animated-background"})),s.a.createElement("div",{className:"desc"},s.a.createElement("div",{className:"animated-background"})))))}),d=function(){return s.a.createElement("div",{className:"skeleton-home"},[1,2,3,4,5,6].map(function(e){return s.a.createElement(u,{key:e})}))},p=function(e){var t=e.posts,n=e.end,a=e.loading,o=e.state;return s.a.createElement("section",{className:"home-wrapper"},s.a.createElement("div",{id:"posts-main",className:"posts-main"},t.length>0?t.map(function(e){return s.a.createElement("section",{className:"post-item",key:e._id},s.a.createElement("h3",{className:"title"},s.a.createElement(c.b,{onClick:function(){window.scrollTo(0,0)},to:"/article/"+e.url},e.title)),s.a.createElement("p",{className:"subtitle"},s.a.createElement("span",{className:"time"},s.a.createElement("i",{className:"iconfont icon-time"}),e.date)," ",s.a.createElement("span",{className:"tags"},s.a.createElement("i",{className:"iconfont icon-tag"}),e.tags.split(",").map(function(e){return s.a.createElement(c.b,{to:"/archives?topic="+encodeURI(e),key:e},e)}))," "),s.a.createElement(c.b,{onClick:function(){window.scrollTo(0,0)},to:"/article/"+e.url,className:"content"},e.cover&&s.a.createElement("div",{className:"cover"},s.a.createElement("img",{src:e.cover})),s.a.createElement("div",{className:"desc"},s.a.createElement("span",{className:"text"},e.desc))),s.a.createElement("div",{className:"footer"},s.a.createElement("span",null,"阅读(",e.readCount,")"),s.a.createElement(c.b,{to:"/article/"+e.url+"#comments"},"评论(",e.commentCount,")")))}):s.a.createElement("p",{className:"no-posts"},"暂无博文")),s.a.createElement("div",{id:"loading",className:i()({loading:!0,active:a===m.a.LOADING_STATE&&o===m.a.SUCCESS_STATE,failure:a===m.a.FAILURE_STATE&&o===m.a.SUCCESS_STATE})},a===m.a.LOADING_STATE?s.a.createElement(u,null):"系统繁忙，请稍后重试"),s.a.createElement("p",{className:i()({"no-more-posts":!0,active:n&&t.length>0})},"没有更多的文章了"))},f=(n("./client/components/skeleton-home/index.scss"),function(){return s.a.createElement("section",{className:"skeleton-wrapper"},s.a.createElement(d,null))}),E=n("./client/actions/index.js"),h=n("./client/services/sql.js"),v=n.n(h),b=n("./client/util/eventUtil.js"),N=n("./client/util/throttle.js"),g=n("./client/util/cache.js");n("./client/container/home/index.scss");n.d(t,"default",function(){return w});var T,y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};var w=Object(o.b)(function(e){return _({},e.posts)},function(e){return{fetchPostsData:function(t){e(Object(E.f)(t))}}})(T=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=Array(n),s=0;s<n;s++)a[s]=arguments[s];var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a)));return o.fetchPostsData=function(){var e=o.props,t=e.posts,n=e.end,a=e.loading,s=t.length;if(!n&&a!==l.LOADING_STATE&&a!==l.FAILURE_STATE){var c={time:t[s-1].time},r=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;document.getElementById("posts-main").getBoundingClientRect().bottom<r&&o.props.fetchPostsData(c)}},o.fetchPostsData=Object(N.a)(o.fetchPostsData,100),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["PureComponent"]),y(t,[{key:"componentDidMount",value:function(){setTimeout(function(){window.scrollTo(0,0)});var e=this.props.state;if(e===l.INITIAL_STATE||e===l.FAILURE_STATE)this.props.fetchPostsData();else{var t=v.a.postsSQL({size:10});Object(g.a)("/graphql?query="+v.a.encode(t.query),{data:{posts:{posts:this.props.posts,end:this.props.end}}})}b.a.addHandler(window,"scroll",this.fetchPostsData)}},{key:"componentWillUnmount",value:function(){b.a.removeHandler(window,"scroll",this.fetchPostsData)}},{key:"render",value:function(){var e=this.props,t=e.posts,n=e.state,a=e.end,o=e.loading;switch(n){case l.INITIAL_STATE:case l.LOADING_STATE:return s.a.createElement(f,null);case l.SUCCESS_STATE:return s.a.createElement(p,{posts:t,end:a,loading:o,state:n});default:return s.a.createElement("section",{className:"loading-failure"},"系统繁忙，请稍后重试")}}}]),t}())||T},"./client/container/home/index.scss":function(e,t){}});