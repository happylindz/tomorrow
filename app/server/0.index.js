exports.ids = [0];
exports.modules = {

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_scroll__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__github_gist_min_css__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__github_gist_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__github_gist_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__github_markdown_min_css__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__github_markdown_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__github_markdown_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_scss__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__index_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state.article);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchArticleData: function fetchArticleData(options) {
      dispatch(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* default */].fetchArticleData(options));
    }
  };
};

var Article = function (_Component) {
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

      if (state === __WEBPACK_IMPORTED_MODULE_3__constants__["INITIAL_STATE"] || url !== nextUrl) {
        this.props.fetchArticleData({
          url: nextUrl
        });
      } else if (state === __WEBPACK_IMPORTED_MODULE_3__constants__["SUCCESS_STATE"]) {
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
        __WEBPACK_IMPORTED_MODULE_4__util_scroll__["a" /* default */].call(this, target, 500);
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
        case __WEBPACK_IMPORTED_MODULE_3__constants__["INITIAL_STATE"]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            null,
            'initial state'
          );
        case __WEBPACK_IMPORTED_MODULE_3__constants__["LOADING_STATE"]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            null,
            'loading state'
          );
        case __WEBPACK_IMPORTED_MODULE_3__constants__["SUCCESS_STATE"]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            index && index.length !== 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { onClickCapture: this.scrollToContent },
              index.map(function (_ref) {
                var anchor = _ref.anchor,
                    content = _ref.content;
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { key: anchor },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { href: '#' + anchor },
                    content
                  )
                );
              })
            ) : null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'article-wrapper markdown-body', dangerouslySetInnerHTML: { __html: content } })
          );
        default:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            null,
            'something error on page, please fresh!'
          );
      }
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Article;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Article);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/Mac/tomorrow/client/container/article/index.jsx');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/Mac/tomorrow/client/container/article/index.jsx');
  reactHotLoader.register(Article, 'Article', '/Users/Mac/tomorrow/client/container/article/index.jsx');
  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow/client/container/article/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(4);
var _this = this;

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var _default = {
  fetchProjectData: function fetchProjectData() {
    return function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["j" /* LOADING_PROJECT */]
                });
                _context.prev = 1;
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/project');

              case 4:
                res = _context.sent;

                if (!(res.status === 200)) {
                  _context.next = 9;
                  break;
                }

                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["l" /* LOADING_PROJECT_SUCCESS */],
                  payload: res.data
                });
                _context.next = 10;
                break;

              case 9:
                throw new Error('获取数据失败');

              case 10:
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](1);

                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["k" /* LOADING_PROJECT_FAILURE */]
                });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  },
  fetchPostsData: function fetchPostsData(options) {
    return function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["g" /* LOADING_POSTS */]
                });
                _context2.prev = 1;
                _context2.next = 4;
                return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/post', {
                  params: options
                });

              case 4:
                res = _context2.sent;

                if (!(res.status === 200)) {
                  _context2.next = 9;
                  break;
                }

                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["i" /* LOADING_POSTS_SUCCESS */],
                  payload: res.data
                });
                _context2.next = 10;
                break;

              case 9:
                throw new Error('获取数据失败');

              case 10:
                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2['catch'](1);

                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["h" /* LOADING_POSTS_FAILURE */]
                });

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this, [[1, 12]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
  },
  fetchArticleData: function fetchArticleData(options) {
    return function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["d" /* LOADING_ARTICLE */]
                });
                _context3.prev = 1;
                _context3.next = 4;
                return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/article', {
                  params: options
                });

              case 4:
                res = _context3.sent;

                if (!(res.status === 200)) {
                  _context3.next = 9;
                  break;
                }

                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["f" /* LOADING_ARTICLE_SUCCESS */],
                  payload: res.data
                });
                _context3.next = 10;
                break;

              case 9:
                throw new Error('获取数据失败');

              case 10:
                _context3.next = 15;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3['catch'](1);

                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["e" /* LOADING_ARTICLE_FAILURE */]
                });

              case 15:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this, [[1, 12]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();
  },
  fetchArchivesData: function fetchArchivesData(options) {
    return function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch) {
        var res;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["a" /* LOADING_ARCHIVES */]
                });
                _context4.prev = 1;
                _context4.next = 4;
                return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/archives');

              case 4:
                res = _context4.sent;

                if (!(res.status === 200)) {
                  _context4.next = 9;
                  break;
                }

                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["c" /* LOADING_ARCHIVES_SUCCESS */],
                  payload: res.data
                });
                _context4.next = 10;
                break;

              case 9:
                throw new Error('获取数据失败');

              case 10:
                _context4.next = 15;
                break;

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4['catch'](1);

                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["b" /* LOADING_ARCHIVES_FAILURE */]
                });

              case 15:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this, [[1, 12]]);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow/client/actions/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

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

var _default = function _default(el, duration, callback) {
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
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(intval, 'intval', '/Users/Mac/tomorrow/client/util/scroll.js');
  reactHotLoader.register(getPos, 'getPos', '/Users/Mac/tomorrow/client/util/scroll.js');
  reactHotLoader.register(getScroll, 'getScroll', '/Users/Mac/tomorrow/client/util/scroll.js');
  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow/client/util/scroll.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 126:
/***/ (function(module, exports) {



/***/ }),

/***/ 127:
/***/ (function(module, exports) {



/***/ }),

/***/ 128:
/***/ (function(module, exports) {



/***/ })

};;