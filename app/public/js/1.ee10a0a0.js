webpackJsonp([1],{

/***/ "./client/container/article/github-gist.min.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/container/article/github-markdown.min.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/container/article/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules
var es = __webpack_require__("./node_modules/react-redux/es/index.js");

// EXTERNAL MODULE: ./client/actions/index.js
var actions = __webpack_require__("./client/actions/index.js");

// EXTERNAL MODULE: ./client/constants/index.js
var constants = __webpack_require__("./client/constants/index.js");
var constants_default = /*#__PURE__*/__webpack_require__.n(constants);

// CONCATENATED MODULE: ./client/util/scroll.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function intval(v) {
  v = parseInt(v, 10);
  return isNaN(v) ? 0 : v;
}

// 获取元素信息
function getPos(e) {
  var l = 0;
  var t = 0;
  var w = intval(e.style.width);
  var h = intval(e.style.height);
  var wb = e.offsetWidth;
  var hb = e.offsetHeight;
  while (e.offsetParent) {
    l += e.offsetLeft + (e.currentStyle ? intval(e.currentStyle.borderLeftWidth) : 0);
    t += e.offsetTop + (e.currentStyle ? intval(e.currentStyle.borderTopWidth) : 0);
    e = e.offsetParent;
  }
  l += e.offsetLeft + (e.currentStyle ? intval(e.currentStyle.borderLeftWidth) : 0);
  t += e.offsetTop + (e.currentStyle ? intval(e.currentStyle.borderTopWidth) : 0);
  return { x: l, y: t, w: w, h: h, wb: wb, hb: hb };
}

// 获取滚动条信息
function getScroll() {
  var top = null;
  var left = null;
  var width = null;
  var height = null;

  if (document.documentElement && document.documentElement.scrollTop) {
    top = document.documentElement.scrollTop;
    left = document.documentElement.scrollLeft;
    width = document.documentElement.scrollWidth;
    height = document.documentElement.scrollHeight;
  } else if (document.body) {
    top = document.body.scrollTop;
    left = document.body.scrollLeft;
    width = document.body.scrollWidth;
    height = document.body.scrollHeight;
  }
  return { t: top, l: left, w: width, h: height };
}

// 锚点(Anchor)间平滑跳转
/* harmony default export */ var util_scroll = (function (el, duration, callback) {
  if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) !== 'object') {
    el = document.getElementById(el);
  }
  if (!el) return;

  var z = {};
  z.el = el;
  z.p = getPos(el);
  z.s = getScroll();
  z.clear = function () {
    window.clearInterval(z.timer);z.timer = null;
  };
  z.t = new Date().getTime();

  z.step = function () {
    var t = new Date().getTime();
    var p = (t - z.t) / duration;
    if (t >= duration + z.t) {
      z.clear();
      window.setTimeout(function () {
        z.scroll(z.p.y, z.p.x);callback && callback();
      }, 13);
    } else {
      var st = (-Math.cos(p * Math.PI) / 2 + 0.5) * (z.p.y - z.s.t) + z.s.t;
      var sl = (-Math.cos(p * Math.PI) / 2 + 0.5) * (z.p.x - z.s.l) + z.s.l;
      z.scroll(st, sl);
    }
  };
  z.scroll = function (t, l) {
    window.scrollTo(l, t);
  };
  z.timer = window.setInterval(function () {
    z.step();
  }, 13);
});
// EXTERNAL MODULE: ./client/container/article/github-gist.min.css
var github_gist_min = __webpack_require__("./client/container/article/github-gist.min.css");
var github_gist_min_default = /*#__PURE__*/__webpack_require__.n(github_gist_min);

// EXTERNAL MODULE: ./client/container/article/github-markdown.min.css
var github_markdown_min = __webpack_require__("./client/container/article/github-markdown.min.css");
var github_markdown_min_default = /*#__PURE__*/__webpack_require__.n(github_markdown_min);

// EXTERNAL MODULE: ./client/container/article/index.scss
var article = __webpack_require__("./client/container/article/index.scss");
var article_default = /*#__PURE__*/__webpack_require__.n(article);

// CONCATENATED MODULE: ./client/container/article/index.jsx
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state.article);
};

var article_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchArticleData: function fetchArticleData(options) {
      dispatch(actions["a" /* default */].fetchArticleData(options));
    }
  };
};

var article_Article = function (_Component) {
  _inherits(Article, _Component);

  function Article() {
    _classCallCheck(this, Article);

    return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
  }

  _createClass(Article, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.title = 'Hello Detail';
      var _props = this.props,
          state = _props.state,
          url = _props.article.url,
          _props$match$params$u = _props.match.params.url,
          nextUrl = _props$match$params$u === undefined ? '' : _props$match$params$u;

      if (state === constants["INITIAL_STATE"] || url !== nextUrl) {
        this.props.fetchArticleData({
          url: nextUrl
        });
      } else if (state === constants["SUCCESS_STATE"]) {
        console.log('isomorphism fetch article data');
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _nextProps$match$para = nextProps.match.params.url,
          nextUrl = _nextProps$match$para === undefined ? '' : _nextProps$match$para;
      var _props$match$params$u2 = this.props.match.params.url,
          url = _props$match$params$u2 === undefined ? '' : _props$match$params$u2;

      if (url !== nextUrl) {
        this.props.fetchArticleData({
          url: nextUrl
        });
      }
    }
  }, {
    key: 'scrollToContent',
    value: function scrollToContent(e) {
      e.preventDefault();
      try {
        var hash = e.target.hash.slice(1);
        var target = document.getElementById(hash);
        util_scroll.call(this, target, 500);
      } catch (e) {}
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          _props2$article = _props2.article,
          _props2$article$index = _props2$article.index,
          index = _props2$article$index === undefined ? [] : _props2$article$index,
          content = _props2$article.content,
          state = _props2.state;

      switch (state) {
        case constants["INITIAL_STATE"]:
          return react_default.a.createElement(
            'section',
            null,
            'initial state'
          );
        case constants["LOADING_STATE"]:
          return react_default.a.createElement(
            'section',
            null,
            'loading state'
          );
        case constants["SUCCESS_STATE"]:
          return react_default.a.createElement(
            'div',
            null,
            index && index.length !== 0 ? react_default.a.createElement(
              'ul',
              { onClickCapture: this.scrollToContent },
              index.map(function (_ref) {
                var anchor = _ref.anchor,
                    content = _ref.content;
                return react_default.a.createElement(
                  'li',
                  { key: anchor },
                  react_default.a.createElement(
                    'a',
                    { href: '#' + anchor },
                    content
                  )
                );
              })
            ) : null,
            react_default.a.createElement('hr', null),
            react_default.a.createElement('div', { className: 'article-wrapper markdown-body', dangerouslySetInnerHTML: { __html: content } })
          );
        default:
          return react_default.a.createElement(
            'section',
            null,
            'something error on page, please fresh!'
          );
      }
    }
  }]);

  return Article;
}(react["Component"]);

/* harmony default export */ var container_article = __webpack_exports__["default"] = (Object(es["connect"])(mapStateToProps, article_mapDispatchToProps)(article_Article));

/***/ }),

/***/ "./client/container/article/index.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});