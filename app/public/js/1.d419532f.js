webpackJsonp([1],{"./client/components/Comments/index.scss":function(e,t){},"./client/container/article/github-gist.min.css":function(e,t){},"./client/container/article/github-markdown.min.css":function(e,t){},"./client/container/article/index.jsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/react-redux/es/index.js"),c=n("./client/actions/index.js"),l=n("./client/constants/index.js"),i=n.n(l),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function u(e){return e=parseInt(e,10),isNaN(e)?0:e}var m=function(e,t,n){if("object"!==(void 0===e?"undefined":s(e))&&(e=document.getElementById(e)),e){var r,o,a,c,l={};l.el=e,l.p=function(e){for(var t=0,n=0,r=u(e.style.width),o=u(e.style.height),a=e.offsetWidth,c=e.offsetHeight;e.offsetParent;)t+=e.offsetLeft+(e.currentStyle?u(e.currentStyle.borderLeftWidth):0),n+=e.offsetTop+(e.currentStyle?u(e.currentStyle.borderTopWidth):0),e=e.offsetParent;return{x:t+=e.offsetLeft+(e.currentStyle?u(e.currentStyle.borderLeftWidth):0),y:n+=e.offsetTop+(e.currentStyle?u(e.currentStyle.borderTopWidth):0),w:r,h:o,wb:a,hb:c}}(e),l.s=(r=null,o=null,a=null,c=null,document.documentElement&&document.documentElement.scrollTop?(r=document.documentElement.scrollTop,o=document.documentElement.scrollLeft,a=document.documentElement.scrollWidth,c=document.documentElement.scrollHeight):document.body&&(r=document.body.scrollTop,o=document.body.scrollLeft,a=document.body.scrollWidth,c=document.body.scrollHeight),{t:r,l:o,w:a,h:c}),l.clear=function(){window.clearInterval(l.timer),l.timer=null},l.t=(new Date).getTime(),l.step=function(){var e=(new Date).getTime(),r=(e-l.t)/t;if(e>=t+l.t)l.clear(),window.setTimeout(function(){l.scroll(l.p.y,l.p.x),n&&n()},13);else{var o=(-Math.cos(r*Math.PI)/2+.5)*(l.p.y-l.s.t)+l.s.t,a=(-Math.cos(r*Math.PI)/2+.5)*(l.p.x-l.s.l)+l.s.l;l.scroll(o,a)}},l.scroll=function(e,t){window.scrollTo(t,e)},l.timer=window.setInterval(function(){l.step()},13)}},f=(n("./client/container/article/github-gist.min.css"),n("./client/container/article/github-markdown.min.css"),n("./client/container/article/index.scss"),n("./client/components/Comments/index.scss"),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),p=function e(t){var n=t.name,r=t.createdTime,a=t.content,c=(t.postId,t.refTo),l=t.index,i=t.replyMessage,s=t._id;return o.a.createElement("div",{className:"comment"},o.a.createElement("p",null,n," ",!isNaN(l+1)&&o.a.createElement("span",null,l+1," 楼")),o.a.createElement("p",null,r),o.a.createElement("p",null,a),!isNaN(l+1)&&o.a.createElement("button",{onClick:function(){return i({_id:s,name:n})}},"回复"),c&&o.a.createElement(e,f({replyMessage:i},c)))},d=function(e){var t=e.comments,n=e.replyMessage;return o.a.createElement("section",{className:"comments-wrap"},t.map(function(e,t){return o.a.createElement(p,f({replyMessage:n,key:e.postId},e,{index:t}))}))},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var b=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=r=y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state={name:"",email:"",content:""},r.handleName=function(e){r.setState({name:e.target.value})},r.handleEmail=function(e){r.setState({email:e.target.value})},r.handleContent=function(e){r.setState({content:e.target.value})},r.handleSubmit=function(){r.props.submit({name:r.state.name,email:r.state.email,content:r.state.content}),r.reset()},r.reset=function(){r.setState({name:"",email:"",content:""}),r.props.cancelReply()},y(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),h(t,[{key:"render",value:function(){var e=this.props.record,t=this.state,n=t.name,r=t.email,a=t.content;return o.a.createElement("div",{className:"message-submit-wrap"},o.a.createElement("div",null,e&&o.a.createElement("label",{htmlFor:"messageName"},"正在回复: ",e.name," ",o.a.createElement("button",{onClick:this.reset},"取消回复"))),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"messageName"},"昵称",o.a.createElement("input",{name:"messageName",onChange:this.handleName,value:n}))),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"messageEmail"},"邮箱 ",o.a.createElement("input",{name:"messageEmail",onChange:this.handleEmail,value:r}))),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"content"},"留言"),o.a.createElement("textarea",{name:"content",onChange:this.handleContent,value:a,cols:"30",rows:"10"})),o.a.createElement("button",{onClick:this.handleSubmit}," 提交"))}}]),t}(),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=r=E(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state={record:null},r.replyMessage=function(e){r.setState({record:e})},r.cancelReply=function(){r.setState({record:null})},r.submitMessage=function(e){r.state.record&&(e.ref=r.state.record._id),r.props.submit(e)},E(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),v(t,[{key:"render",value:function(){var e=this.props,t=e.state,n=e.comments,r=this.state.record;return o.a.createElement("section",{className:"message-board-wrap"},t===i.a.SUCCESS_STATE&&o.a.createElement(d,{replyMessage:this.replyMessage,comments:n}),o.a.createElement(b,{record:r,cancelReply:this.cancelReply,submit:this.submitMessage}))}}]),t}(),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=r=_(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.addComment=function(e){e.postId=r.props.article._id,e.createdTime=Date.now(),r.props.addComment(e)},_(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),w(t,[{key:"componentDidMount",value:function(){document.title="Hello Detail";var e=this.props,t=e.state,n=e.article.url;this.fetchArticleData(this.props,n,t)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.match.params.url,n=void 0===t?"":t;this.fetchArticleData(e,n)}},{key:"fetchCommentData",value:function(e){this.props.fetchCommentData(e)}},{key:"fetchArticleData",value:function(e,t,n){var r=e.match.params.url,o=void 0===r?"":r,a=e.article._id,c=e.commentState;n===l.INITIAL_STATE||t!==o?e.fetchArticleData({url:o}):l.SUCCESS_STATE,a&&c===l.INITIAL_STATE&&e.fetchCommentData({postId:a})}},{key:"scrollToContent",value:function(e){e.preventDefault();try{var t=e.target.hash.slice(1),n=document.getElementById(t);m.call(this,n,500)}catch(e){}}},{key:"render",value:function(){var e=this.props,t=e.article,n=t.index,r=void 0===n?[]:n,a=t.content,c=e.state,i=e.commentState,s=e.commentsData;switch(c){case l.INITIAL_STATE:return o.a.createElement("section",null,"initial state");case l.LOADING_STATE:return o.a.createElement("section",null,"loading state");case l.SUCCESS_STATE:return o.a.createElement("div",null,r&&0!==r.length?o.a.createElement("ul",{onClickCapture:this.scrollToContent},r.map(function(e){var t=e.anchor,n=e.content;return o.a.createElement("li",{key:t},o.a.createElement("a",{href:"#"+t},n))})):null,o.a.createElement("hr",null),o.a.createElement("div",{className:"article-wrapper markdown-body",dangerouslySetInnerHTML:{__html:a}}),o.a.createElement("hr",null),o.a.createElement(g,{submit:this.addComment,state:i,comments:s}));default:return o.a.createElement("section",null,"something error on page, please fresh!")}}}]),t}();t.default=Object(a.connect)(function(e){return S({},e.article,e.comment)},function(e,t){return{fetchArticleData:function(t){e(Object(c.c)(t))},addComment:function(t){e(Object(c.a)(t))},fetchCommentData:function(t){e(Object(c.d)(t))}}})(T)},"./client/container/article/index.scss":function(e,t){}});