exports.ids = [3];
exports.modules = {

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_skeleton_home__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sql__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__services_sql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_eventUtil__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_throttle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_cache__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__index_scss__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__index_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state.posts);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchPostsData: function fetchPostsData(options) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions__["f" /* fetchPostsData */])(options));
    }
  };
};

var _default = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps), _dec(_class = function (_PureComponent) {
  _inherits(_default, _PureComponent);

  function _default() {
    var _ref;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args)));

    _this.fetchPostsData = function () {
      var _this$props = _this.props,
          posts = _this$props.posts,
          end = _this$props.end,
          loading = _this$props.loading;

      var len = posts.length;
      if (!end && loading !== __WEBPACK_IMPORTED_MODULE_5__constants__["LOADING_STATE"] && loading !== __WEBPACK_IMPORTED_MODULE_5__constants__["FAILURE_STATE"]) {
        var options = {
          time: posts[len - 1].time
        };
        var cHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var main = document.getElementById('posts-main');
        if (main.getBoundingClientRect().bottom < cHeight) {
          _this.props.fetchPostsData(options);
        }
      }
    };

    _this.fetchPostsData = Object(__WEBPACK_IMPORTED_MODULE_8__util_throttle__["a" /* default */])(_this.fetchPostsData, 100);
    return _this;
  }

  _createClass(_default, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      setTimeout(function () {
        window.scrollTo(0, 0);
      });
      var state = this.props.state;

      if (state === __WEBPACK_IMPORTED_MODULE_5__constants__["INITIAL_STATE"] || state === __WEBPACK_IMPORTED_MODULE_5__constants__["FAILURE_STATE"]) {
        this.props.fetchPostsData();
      } else {
        var params = __WEBPACK_IMPORTED_MODULE_6__services_sql___default.a.postsSQL({
          size: 10
        });
        // save API data
        Object(__WEBPACK_IMPORTED_MODULE_9__util_cache__["a" /* saveAPIData */])('/graphql?query=' + __WEBPACK_IMPORTED_MODULE_6__services_sql___default.a.encode(params.query), {
          data: {
            posts: {
              posts: this.props.posts,
              end: this.props.end
            }
          }
        });
      }
      __WEBPACK_IMPORTED_MODULE_7__util_eventUtil__["a" /* default */].addHandler(window, 'scroll', this.fetchPostsData);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      __WEBPACK_IMPORTED_MODULE_7__util_eventUtil__["a" /* default */].removeHandler(window, 'scroll', this.fetchPostsData);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          posts = _props.posts,
          state = _props.state,
          end = _props.end,
          loading = _props.loading;

      switch (state) {
        case __WEBPACK_IMPORTED_MODULE_5__constants__["INITIAL_STATE"]:
        case __WEBPACK_IMPORTED_MODULE_5__constants__["LOADING_STATE"]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_skeleton_home__["a" /* default */], null);
        case __WEBPACK_IMPORTED_MODULE_5__constants__["SUCCESS_STATE"]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_home__["a" /* default */], { posts: posts, end: end, loading: loading, state: state });
        default:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            { className: 'loading-failure' },
            '\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5'
          );
      }
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"])) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/Mac/tomorrow1/client/container/home/index.jsx');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/Mac/tomorrow1/client/container/home/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

exports.encode = function (val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
};

exports.postsSQL = function (options) {
  var query = null;
  if (options.time && options.size) {
    query = '(time: "' + options.time + '", size: ' + options.size + ')';
  } else if (options.size) {
    query = '(size: ' + options.size + ')';
  }
  return {
    query: '{\n      posts' + query + ' {\n        posts {\n          cover\n          desc\n          date\n          title\n          readCount\n          commentCount\n          _id\n          tags\n          url\n          time\n        }\n        end\n      }\n    }'
  };
};

exports.postSQL = function (options) {
  return {
    query: '{\n      post(url: "' + options.url + '") {\n        _id\n        title\n        tags\n        content\n        date\n        next {\n          title\n          url\n        }\n        index {\n          tag\n          content\n          anchor\n        }\n        previous {\n          title\n          url\n        }\n        comments {\n          _id\n          name\n          time\n          content\n          refTo {\n            _id\n            name\n            content\n          }\n        }\n      }\n    }'
  };
};

exports.archivesSQL = function () {
  return {
    query: '{\n      posts {\n        posts {\n          title\n          _id\n          tags\n          url\n          year\n          day\n        }\n      }\n    }'
  };
};

exports.infoSQL = function () {
  return {
    query: '{\n      info {\n        _id\n        html\n        comments {\n          _id\n          name\n          time\n          content\n          refTo {\n            _id\n            name\n            content\n          }\n        }\n      }\n    }'
  };
};

exports.projectsSQL = function () {
  return {
    query: '{\n      projects {\n        projects {\n          _id\n          title\n          href\n          html\n        }\n      }\n    }'
  };
};

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return fetchProjectData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fetchInfoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return fetchPostsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchArchivesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchPostData; });
/* unused harmony export fetchCommentData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComment; });
/* unused harmony export fetchMessageData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(133);
var _this = this;

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var pageSize = 10;
var fetchProjectData = function fetchProjectData() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["x" /* LOADING_PROJECT */]
              });
              _context.prev = 1;
              _context.next = 4;
              return Object(__WEBPACK_IMPORTED_MODULE_1__services__["i" /* queryProjects */])();

            case 4:
              res = _context.sent;

              if (!(res.status === 200 && res.data && res.data.data && res.data.data.projects)) {
                _context.next = 9;
                break;
              }

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["z" /* LOADING_PROJECT_SUCCESS */],
                payload: res.data.data.projects
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
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["y" /* LOADING_PROJECT_FAILURE */]
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
};

var fetchInfoData = function fetchInfoData() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["c" /* LOADING_ABOUT */]
              });
              _context2.prev = 1;
              _context2.next = 4;
              return Object(__WEBPACK_IMPORTED_MODULE_1__services__["e" /* queryInfo */])();

            case 4:
              res = _context2.sent;

              if (!(res.status === 200 && res.data && res.data.data && res.data.data.info)) {
                _context2.next = 10;
                break;
              }

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["e" /* LOADING_ABOUT_SUCCESS */],
                payload: res.data.data.info
              });
              if (res.data.data.info.comments) {
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["q" /* LOADING_MESSAGE_SUCCESS */],
                  payload: {
                    comments: res.data.data.info.comments
                  }
                });
              }
              _context2.next = 11;
              break;

            case 10:
              throw new Error('获取数据失败');

            case 11:
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2['catch'](1);

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["d" /* LOADING_ABOUT_FAILURE */]
              });

            case 16:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this, [[1, 13]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var fetchPostsData = function fetchPostsData(options) {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      var res, payload;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (options && options.time) {
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["t" /* LOADING_POSTS_MORE */]
                });
              } else {
                options = {};
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["r" /* LOADING_POSTS */]
                });
              }
              options.size = pageSize;
              _context3.prev = 2;
              _context3.next = 5;
              return Object(__WEBPACK_IMPORTED_MODULE_1__services__["h" /* queryPosts */])(options);

            case 5:
              res = _context3.sent;

              if (!(res.status === 200 && res.data && res.data.data && res.data.data.posts)) {
                _context3.next = 11;
                break;
              }

              payload = res.data.data.posts;

              if (options && options.time) {
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["v" /* LOADING_POSTS_MORE_SUCCESS */],
                  payload: payload
                });
              } else {
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["w" /* LOADING_POSTS_SUCCESS */],
                  payload: payload
                });
              }
              _context3.next = 12;
              break;

            case 11:
              throw new Error('获取数据失败');

            case 12:
              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3['catch'](2);

              if (options && options.time) {
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["u" /* LOADING_POSTS_MORE_FAILURE */]
                });
              } else {
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["s" /* LOADING_POSTS_FAILURE */]
                });
              }

            case 17:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this, [[2, 14]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var fetchArchivesData = function fetchArchivesData() {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["f" /* LOADING_ARCHIVES */]
              });
              _context4.prev = 1;
              _context4.next = 4;
              return Object(__WEBPACK_IMPORTED_MODULE_1__services__["c" /* queryArchives */])();

            case 4:
              res = _context4.sent;

              if (!(res.status === 200 && res.data && res.data.data && res.data.data.posts)) {
                _context4.next = 9;
                break;
              }

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["h" /* LOADING_ARCHIVES_SUCCESS */],
                payload: res.data.data.posts
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
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["g" /* LOADING_ARCHIVES_FAILURE */]
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
};

var fetchPostData = function fetchPostData(options) {
  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch) {
      var res, comments;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["i" /* LOADING_ARTICLE */]
              });
              _context5.prev = 1;
              _context5.next = 4;
              return Object(__WEBPACK_IMPORTED_MODULE_1__services__["g" /* queryPost */])(options);

            case 4:
              res = _context5.sent;

              if (!(res.status === 200 && res.data && res.data.data && res.data.data.post)) {
                _context5.next = 12;
                break;
              }

              comments = res.data.data.post.comments;

              res.data.data.post.comments = null;
              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["k" /* LOADING_ARTICLE_SUCCESS */],
                payload: res.data.data.post
              });
              if (comments) {
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["n" /* LOADING_COMMENT_SUCCESS */],
                  payload: {
                    comments: comments
                  }
                });
              }
              _context5.next = 13;
              break;

            case 12:
              throw new Error('获取数据失败');

            case 13:
              _context5.next = 18;
              break;

            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5['catch'](1);

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["j" /* LOADING_ARTICLE_FAILURE */]
              });

            case 18:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this, [[1, 15]]);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var fetchCommentData = function fetchCommentData(options) {
  return function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["l" /* LOADING_COMMENT */]
              });
              _context6.prev = 1;
              _context6.next = 4;
              return Object(__WEBPACK_IMPORTED_MODULE_1__services__["d" /* queryComments */])(options);

            case 4:
              res = _context6.sent;

              if (!(res.status === 200 && res.data && res.data.data && res.data.data.comments)) {
                _context6.next = 9;
                break;
              }

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["n" /* LOADING_COMMENT_SUCCESS */],
                payload: res.data.data.comments
              });
              _context6.next = 10;
              break;

            case 9:
              throw new Error('获取数据失败');

            case 10:
              _context6.next = 15;
              break;

            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6['catch'](1);

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["m" /* LOADING_COMMENT_FAILURE */]
              });

            case 15:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this, [[1, 12]]);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
};

var addComment = function addComment(options) {
  return function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return Object(__WEBPACK_IMPORTED_MODULE_1__services__["a" /* addComment */])(options);

            case 3:
              res = _context7.sent;

              if (res.status === 200 && res.data.code === 0) {
                dispatch(fetchCommentData({
                  postId: options.postId
                }));
              }
              return _context7.abrupt('return', res.data);

            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7['catch'](0);

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["a" /* ADD_COMMENT_FAILURE */]
              });

            case 11:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this, [[0, 8]]);
    }));

    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }();
};

var fetchMessageData = function fetchMessageData() {
  return function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["o" /* LOADING_MESSAGE */]
              });
              _context8.prev = 1;
              _context8.next = 4;
              return Object(__WEBPACK_IMPORTED_MODULE_1__services__["f" /* queryMessage */])();

            case 4:
              res = _context8.sent;

              if (!(res.status === 200 && res.data && res.data.data && res.data.data.message)) {
                _context8.next = 9;
                break;
              }

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["q" /* LOADING_MESSAGE_SUCCESS */],
                payload: res.data.data.message
              });
              _context8.next = 10;
              break;

            case 9:
              throw new Error('获取数据失败');

            case 10:
              _context8.next = 15;
              break;

            case 12:
              _context8.prev = 12;
              _context8.t0 = _context8['catch'](1);

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["p" /* LOADING_MESSAGE_FAILURE */]
              });

            case 15:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this, [[1, 12]]);
    }));

    return function (_x8) {
      return _ref8.apply(this, arguments);
    };
  }();
};

var addMessage = function addMessage(options) {
  return function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return Object(__WEBPACK_IMPORTED_MODULE_1__services__["b" /* addMessage */])(options);

            case 3:
              res = _context9.sent;

              if (res.status === 200 && res.data.code === 0) {
                dispatch(fetchMessageData());
              }
              return _context9.abrupt('return', res.data);

            case 8:
              _context9.prev = 8;
              _context9.t0 = _context9['catch'](0);

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["b" /* ADD_MESSAGE_FAILURE */]
              });

            case 11:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, _this, [[0, 8]]);
    }));

    return function (_x9) {
      return _ref9.apply(this, arguments);
    };
  }();
};
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(pageSize, 'pageSize', '/Users/Mac/tomorrow1/client/actions/index.js');
  reactHotLoader.register(fetchProjectData, 'fetchProjectData', '/Users/Mac/tomorrow1/client/actions/index.js');
  reactHotLoader.register(fetchInfoData, 'fetchInfoData', '/Users/Mac/tomorrow1/client/actions/index.js');
  reactHotLoader.register(fetchPostsData, 'fetchPostsData', '/Users/Mac/tomorrow1/client/actions/index.js');
  reactHotLoader.register(fetchArchivesData, 'fetchArchivesData', '/Users/Mac/tomorrow1/client/actions/index.js');
  reactHotLoader.register(fetchPostData, 'fetchPostData', '/Users/Mac/tomorrow1/client/actions/index.js');
  reactHotLoader.register(fetchCommentData, 'fetchCommentData', '/Users/Mac/tomorrow1/client/actions/index.js');
  reactHotLoader.register(addComment, 'addComment', '/Users/Mac/tomorrow1/client/actions/index.js');
  reactHotLoader.register(fetchMessageData, 'fetchMessageData', '/Users/Mac/tomorrow1/client/actions/index.js');
  reactHotLoader.register(addMessage, 'addMessage', '/Users/Mac/tomorrow1/client/actions/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return queryProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return queryPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return queryArchives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return queryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return queryPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return queryComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return queryMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sql__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__sql__);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();



function getCookie(name) {
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  var arr = document.cookie.match(reg);
  if (arr) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}
function csrfSafeMethod(method) {
  return (/^(get|head|options|trace)$/.test(method)
  );
}

__WEBPACK_IMPORTED_MODULE_0_axios___default.a.interceptors.request.use(function (config) {
  var xtoken = getCookie('csrfToken');
  if (!csrfSafeMethod(config.method)) {
    config.headers['x-csrf-token'] = xtoken;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

var queryProjects = function queryProjects() {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/graphql', {
    params: __WEBPACK_IMPORTED_MODULE_1__sql___default.a.projectsSQL()
  });
};

var queryPosts = function queryPosts(options) {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/graphql', {
    params: __WEBPACK_IMPORTED_MODULE_1__sql___default.a.postsSQL(options)
  });
};

var queryArchives = function queryArchives() {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/graphql', {
    params: __WEBPACK_IMPORTED_MODULE_1__sql___default.a.archivesSQL()
  });
};

var queryInfo = function queryInfo() {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/graphql', {
    params: __WEBPACK_IMPORTED_MODULE_1__sql___default.a.infoSQL()
  });
};

var queryPost = function queryPost(options) {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/graphql', {
    params: __WEBPACK_IMPORTED_MODULE_1__sql___default.a.postSQL(options)
  });
};

var queryComments = function queryComments(options) {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/graphql', {
    params: {
      query: '{\n        comments(postId: "' + options.postId + '"){\n          comments {\n            _id\n            name\n            time\n            content\n            refTo {\n              _id\n              name\n              time\n              content\n            }\n          }\n        }\n      }'
    }
  });
};

var queryMessage = function queryMessage() {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/graphql', {
    params: {
      query: '{\n        message{\n          comments {\n            _id\n            name\n            time\n            content\n            refTo {\n              _id\n              name\n              time\n              content\n            }\n          }\n        }\n      }'
    }
  });
};

var addComment = function addComment(options) {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/comment', options);
};

var addMessage = function addMessage(options) {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/message', options);
};
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getCookie, 'getCookie', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(csrfSafeMethod, 'csrfSafeMethod', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(queryProjects, 'queryProjects', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(queryPosts, 'queryPosts', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(queryArchives, 'queryArchives', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(queryInfo, 'queryInfo', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(queryPost, 'queryPost', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(queryComments, 'queryComments', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(queryMessage, 'queryMessage', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(addComment, 'addComment', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(addMessage, 'addMessage', '/Users/Mac/tomorrow1/client/services/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return saveAPIData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__constants__);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();


var apiCacheName = __WEBPACK_IMPORTED_MODULE_0__constants___default.a.apiCacheName;

var saveAPIData = function saveAPIData(url, data) {
  if ('caches' in window) {
    caches.open(apiCacheName).then(function (cache) {
      cache.put(url, new Response(JSON.stringify(data), { status: 200 }));
    });
  }
};
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(apiCacheName, 'apiCacheName', '/Users/Mac/tomorrow1/client/util/cache.js');
  reactHotLoader.register(saveAPIData, 'saveAPIData', '/Users/Mac/tomorrow1/client/util/cache.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkeletonItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();




var SkeletonItem = function SkeletonItem() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'skeleton-home-item' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background title' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'content' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'banner' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'desc-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'desc' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'desc' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background' })
        )
      )
    )
  );
};

var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'skeleton-home' },
    [1, 2, 3, 4, 5, 6].map(function (item) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SkeletonItem, { key: item });
    })
  );
};

/* harmony default export */ __webpack_exports__["b"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SkeletonItem, 'SkeletonItem', '/Users/Mac/tomorrow1/client/components/skeleton-home/skeleton-item/index.jsx');
  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow1/client/components/skeleton-home/skeleton-item/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__skeleton_home_skeleton_item__ = __webpack_require__(145);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();








var _default = function _default(_ref) {
  var posts = _ref.posts,
      end = _ref.end,
      loading = _ref.loading,
      state = _ref.state;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    { className: 'home-wrapper' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'posts-main', className: 'posts-main' },
      posts.length > 0 ? posts.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { className: 'post-item', key: item._id },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            { className: 'title' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
              { onClick: function onClick() {
                  window.scrollTo(0, 0);
                }, to: '/article/' + item.url },
              item.title
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'subtitle' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'time' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'iconfont icon-time' }),
              item.date
            ),
            ' ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'tags' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'iconfont icon-tag' }),
              item.tags.split(',').map(function (tag) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
                  { to: '/archives?topic=' + encodeURI(tag), key: tag },
                  tag
                );
              })
            ),
            ' '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
            { onClick: function onClick() {
                window.scrollTo(0, 0);
              }, to: '/article/' + item.url, className: 'content' },
            item.cover && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'cover' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: item.cover })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'desc' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'text' },
                item.desc
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'footer' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              '\u9605\u8BFB(',
              item.readCount,
              ')'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
              { to: '/article/' + item.url + '#comments' },
              '\u8BC4\u8BBA(',
              item.commentCount,
              ')'
            )
          )
        );
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'no-posts' },
        '\u6682\u65E0\u535A\u6587'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'loading', className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
          'loading': true,
          'active': loading === __WEBPACK_IMPORTED_MODULE_4__constants___default.a.LOADING_STATE && state === __WEBPACK_IMPORTED_MODULE_4__constants___default.a.SUCCESS_STATE,
          'failure': loading === __WEBPACK_IMPORTED_MODULE_4__constants___default.a.FAILURE_STATE && state === __WEBPACK_IMPORTED_MODULE_4__constants___default.a.SUCCESS_STATE
        }) },
      loading === __WEBPACK_IMPORTED_MODULE_4__constants___default.a.LOADING_STATE ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__skeleton_home_skeleton_item__["a" /* SkeletonItem */], null) : '系统繁忙，请稍后重试'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
          'no-more-posts': true,
          'active': end && posts.length > 0
        }) },
      '\u6CA1\u6709\u66F4\u591A\u7684\u6587\u7AE0\u4E86'
    )
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

  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow1/client/components/home/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 147:
/***/ (function(module, exports) {



/***/ }),

/***/ 148:
/***/ (function(module, exports) {



/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skeleton_item__ = __webpack_require__(145);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();





var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    { className: 'skeleton-wrapper' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__skeleton_item__["b" /* default */], null)
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

  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow1/client/components/skeleton-home/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 150:
/***/ (function(module, exports) {



/***/ }),

/***/ 151:
/***/ (function(module, exports) {



/***/ })

};;