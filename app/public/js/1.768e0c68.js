webpackJsonp([1],{"./client/container/article/github-gist.min.css":function(e,t){},"./client/container/article/github-markdown.min.css":function(e,t){},"./client/container/article/index.jsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/react-redux/es/index.js"),l=n("./client/actions/index.js"),c=n("./client/constants/index.js"),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function u(e){return e=parseInt(e,10),isNaN(e)?0:e}var s=function(e,t,n){if("object"!==(void 0===e?"undefined":i(e))&&(e=document.getElementById(e)),e){var r,o,a,l,c={};c.el=e,c.p=function(e){for(var t=0,n=0,r=u(e.style.width),o=u(e.style.height),a=e.offsetWidth,l=e.offsetHeight;e.offsetParent;)t+=e.offsetLeft+(e.currentStyle?u(e.currentStyle.borderLeftWidth):0),n+=e.offsetTop+(e.currentStyle?u(e.currentStyle.borderTopWidth):0),e=e.offsetParent;return{x:t+=e.offsetLeft+(e.currentStyle?u(e.currentStyle.borderLeftWidth):0),y:n+=e.offsetTop+(e.currentStyle?u(e.currentStyle.borderTopWidth):0),w:r,h:o,wb:a,hb:l}}(e),c.s=(r=null,o=null,a=null,l=null,document.documentElement&&document.documentElement.scrollTop?(r=document.documentElement.scrollTop,o=document.documentElement.scrollLeft,a=document.documentElement.scrollWidth,l=document.documentElement.scrollHeight):document.body&&(r=document.body.scrollTop,o=document.body.scrollLeft,a=document.body.scrollWidth,l=document.body.scrollHeight),{t:r,l:o,w:a,h:l}),c.clear=function(){window.clearInterval(c.timer),c.timer=null},c.t=(new Date).getTime(),c.step=function(){var e=(new Date).getTime(),r=(e-c.t)/t;if(e>=t+c.t)c.clear(),window.setTimeout(function(){c.scroll(c.p.y,c.p.x),n&&n()},13);else{var o=(-Math.cos(r*Math.PI)/2+.5)*(c.p.y-c.s.t)+c.s.t,a=(-Math.cos(r*Math.PI)/2+.5)*(c.p.x-c.s.l)+c.s.l;c.scroll(o,a)}},c.scroll=function(e,t){window.scrollTo(t,e)},c.timer=window.setInterval(function(){c.step()},13)}},m=(n("./client/container/article/github-gist.min.css"),n("./client/container/article/github-markdown.min.css"),n("./client/container/article/index.scss"),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}());function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state={name:"",email:"",message:""},r.handleName=function(e){r.setState({name:e.target.value})},r.handleEmail=function(e){r.setState({email:e.target.value})},r.handleMessage=function(e){r.setState({message:e.target.value})},r.handleSubmit=function(){r.props.submit({name:r.state.name,email:r.state.email,message:r.state.message})},f(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),m(t,[{key:"render",value:function(){return o.a.createElement("section",null,o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"messageName"},"昵称",o.a.createElement("input",{name:"messageName",onChange:this.handleName}))),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"messageEmail"},"邮箱 ",o.a.createElement("input",{name:"messageEmail",onChange:this.handleEmail}))),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"message"},"留言"),o.a.createElement("textarea",{name:"message",onChange:this.handleMessage,cols:"30",rows:"10"})),o.a.createElement("button",{onClick:this.handleSubmit}," 提交"))}}]),t}(),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),d(t,[{key:"componentDidMount",value:function(){document.title="Hello Detail";var e=this.props,t=e.state,n=e.article.url,r=e.match.params.url,o=void 0===r?"":r;t===c.INITIAL_STATE||n!==o?this.props.fetchArticleData({url:o}):c.SUCCESS_STATE}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.url,n=void 0===t?"":t,r=this.props.match.params.url;(void 0===r?"":r)!==n&&this.props.fetchArticleData({url:n})}},{key:"scrollToContent",value:function(e){e.preventDefault();try{var t=e.target.hash.slice(1),n=document.getElementById(t);s.call(this,n,500)}catch(e){}}},{key:"render",value:function(){var e=this.props,t=e.article,n=t.index,r=void 0===n?[]:n,a=t.content,l=e.state,i=e.addComment;switch(l){case c.INITIAL_STATE:return o.a.createElement("section",null,"initial state");case c.LOADING_STATE:return o.a.createElement("section",null,"loading state");case c.SUCCESS_STATE:return o.a.createElement("div",null,r&&0!==r.length?o.a.createElement("ul",{onClickCapture:this.scrollToContent},r.map(function(e){var t=e.anchor,n=e.content;return o.a.createElement("li",{key:t},o.a.createElement("a",{href:"#"+t},n))})):null,o.a.createElement("hr",null),o.a.createElement("div",{className:"article-wrapper markdown-body",dangerouslySetInnerHTML:{__html:a}}),o.a.createElement("hr",null),o.a.createElement(p,{submit:i}));default:return o.a.createElement("section",null,"something error on page, please fresh!")}}}]),t}();t.default=Object(a.connect)(function(e){return h({},e.article)},function(e){return{fetchArticleData:function(t){e(Object(l.c)(t))},addComment:function(t){e(Object(l.a)(t))}}})(y)},"./client/container/article/index.scss":function(e,t){}});