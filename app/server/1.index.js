exports.ids = [1];
exports.modules = {

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_index_js__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tags__ = __webpack_require__(123);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var mapStateToProps = function mapStateToProps(state, ownProps) {
  var postsData = state.archives.postsData;
  var search = ownProps.location.search;

  var tagsRes = {
    'all': postsData.length
  };
  var posts = {};
  var topic = '';
  if (search !== '') {
    topic = decodeURI(Object(__WEBPACK_IMPORTED_MODULE_5__util_index_js__["a" /* query */])(search).topic) || '';
  }
  postsData.forEach(function (post) {
    try {
      var tags = post.tags;
      if (topic === '') {
        var year = post.year;
        if (!posts[year]) {
          posts[year] = [];
        }
        posts[year].push(post);
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tag = _step.value;

          if (tag === topic) {
            var _year = post.year;
            if (!posts[_year]) {
              posts[_year] = [];
            }
            posts[_year].push(post);
          }
          if (tagsRes[tag]) {
            tagsRes[tag] += 1;
          } else {
            tagsRes[tag] = 1;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } catch (e) {}
  });
  return _extends({}, state.archives, {
    tags: tagsRes,
    topic: topic,
    posts: posts
  });
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchArchivesData: function fetchArchivesData(options) {
      dispatch(__WEBPACK_IMPORTED_MODULE_3__actions__["a" /* default */].fetchArchivesData(options));
    }
  };
};

var Archives = function (_Component) {
  _inherits(Archives, _Component);

  function Archives() {
    _classCallCheck(this, Archives);

    return _possibleConstructorReturn(this, (Archives.__proto__ || Object.getPrototypeOf(Archives)).apply(this, arguments));
  }

  _createClass(Archives, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.title = 'Hello Archives';
      var state = this.props.state;

      if (state === __WEBPACK_IMPORTED_MODULE_4__constants__["INITIAL_STATE"] || state === __WEBPACK_IMPORTED_MODULE_4__constants__["FAILURE_STATE"]) {
        this.props.fetchArchivesData();
      } else if (state === __WEBPACK_IMPORTED_MODULE_4__constants__["SUCCESS_STATE"]) {
        console.log('isomorphism fetch archives data');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          posts = _props.posts,
          state = _props.state,
          tags = _props.tags,
          topic = _props.topic;

      switch (state) {
        case __WEBPACK_IMPORTED_MODULE_4__constants__["INITIAL_STATE"]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            null,
            'initial state'
          );
        case __WEBPACK_IMPORTED_MODULE_4__constants__["LOADING_STATE"]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            null,
            'loading state'
          );
        case __WEBPACK_IMPORTED_MODULE_4__constants__["SUCCESS_STATE"]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__tags__["a" /* default */], { tags: tags, topic: topic }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
            Object.keys(posts).map(function (year) {
              return parseInt(year, 10);
            }).sort(function (a, b) {
              return b - a;
            }).map(function (year) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: year },
                year,
                posts[year].map(function (post) {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { key: post._id },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h2',
                      null,
                      post.time,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
                        { to: '/article/' + post.url },
                        post.title
                      )
                    )
                  );
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null)
              );
            })
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

  return Archives;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Archives);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/Mac/tomorrow/client/container/archives/index.jsx');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/Mac/tomorrow/client/container/archives/index.jsx');
  reactHotLoader.register(Archives, 'Archives', '/Users/Mac/tomorrow/client/container/archives/index.jsx');
  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow/client/container/archives/index.jsx');
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

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return query; });
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var query = function query(_url) {
  var pattern = /(\w+)=(\S+)/ig;
  var parames = {};
  _url.replace(pattern, function (a, b, c) {
    parames[b] = c;
  });
  return parames;
};
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(query, "query", "/Users/Mac/tomorrow/client/util/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tags_scss__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tags_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__tags_scss__);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();




var activeStyle = {
  fontWeight: 'bold',
  color: 'red'
};

var _default = function _default(_ref) {
  var tags = _ref.tags,
      topic = _ref.topic;

  var all = tags['all'];
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
      { strict: true, to: '/archives', isActive: function isActive() {
          return topic === '';
        }, activeStyle: activeStyle, className: 'tag' },
      '\u5168\u90E8(' + all + ')'
    ),
    Object.keys(tags).map(function (tag) {
      if (tag === 'all') {
        return null;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
        { strict: true, isActive: function isActive() {
            return topic === tag;
          }, key: tag, activeStyle: activeStyle, to: '/archives?topic=' + encodeURI(tag), className: 'tag' },
        tag + '(' + tags[tag] + ')'
      );
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(activeStyle, 'activeStyle', '/Users/Mac/tomorrow/client/container/archives/tags.jsx');
  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow/client/container/archives/tags.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 124:
/***/ (function(module, exports) {



/***/ })

};;