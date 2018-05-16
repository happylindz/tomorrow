exports.ids = [1];
exports.modules = {

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_banner__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_message_board__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_skeleton_about__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_scss__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__index_scss__);
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
  return _extends({}, state.info, state.message);
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchInfoData: function fetchInfoData() {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actions__["d" /* fetchInfoData */])());
    },
    addMessage: function addMessage(options) {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actions__["b" /* addMessage */])(options));
    }
  };
};

var _default = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps), _dec(_class = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.addMessage = function (options) {
      options.createdTime = Date.now();
      _this.props.addMessage(options);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var state = this.props.state;

      if (state === __WEBPACK_IMPORTED_MODULE_4__constants___default.a.INITIAL_STATE || state === __WEBPACK_IMPORTED_MODULE_4__constants___default.a.FAILURE_STATE) {
        this.props.fetchInfoData();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          html = _props.html,
          state = _props.state,
          comments = _props.comments;

      switch (state) {
        case __WEBPACK_IMPORTED_MODULE_4__constants___default.a.INITIAL_STATE:
        case __WEBPACK_IMPORTED_MODULE_4__constants___default.a.LOADING_STATE:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_skeleton_about__["a" /* default */], null);
        case __WEBPACK_IMPORTED_MODULE_4__constants___default.a.SUCCESS_STATE:
          return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_banner__["a" /* default */], { key: 'banner', title: 'About me', cover: 'http://images.lindongzhou.com/website/about-banner.jpeg' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('article', { key: 'about', className: 'about markdown-body', dangerouslySetInnerHTML: { __html: html } }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_message_board__["a" /* default */], { key: 'message-board', submit: this.addMessage, comments: comments })];
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

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/Mac/tomorrow1/client/container/about/index.jsx');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/Mac/tomorrow1/client/container/about/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 131:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionTypes__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(132);
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
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["w" /* LOADING_PROJECT */]
              });
              _context.prev = 1;
              _context.next = 4;
              return Object(__WEBPACK_IMPORTED_MODULE_2__services__["g" /* queryProjects */])();

            case 4:
              res = _context.sent;

              if (!(res.status === 200 && res.data && res.data.data && res.data.data.projects)) {
                _context.next = 9;
                break;
              }

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["y" /* LOADING_PROJECT_SUCCESS */],
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
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["x" /* LOADING_PROJECT_FAILURE */]
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
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["c" /* LOADING_ABOUT */]
              });
              _context2.prev = 1;
              _context2.next = 4;
              return Object(__WEBPACK_IMPORTED_MODULE_2__services__["c" /* queryInfo */])();

            case 4:
              res = _context2.sent;

              if (!(res.status === 200 && res.data && res.data.data && res.data.data.info)) {
                _context2.next = 10;
                break;
              }

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["e" /* LOADING_ABOUT_SUCCESS */],
                payload: res.data.data.info
              });
              if (res.data.data.info.comments) {
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["q" /* LOADING_MESSAGE_SUCCESS */],
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
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["d" /* LOADING_ABOUT_FAILURE */]
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
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["t" /* LOADING_POSTS_MORE */]
                });
              } else {
                options = {};
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["r" /* LOADING_POSTS */]
                });
              }
              options.size = pageSize;
              _context3.prev = 2;
              _context3.next = 5;
              return Object(__WEBPACK_IMPORTED_MODULE_2__services__["f" /* queryPosts */])(options);

            case 5:
              res = _context3.sent;

              if (!(res.status === 200 && res.data && res.data.data && res.data.data.posts)) {
                _context3.next = 11;
                break;
              }

              payload = res.data.data.posts;

              if (options && options.time) {
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["u" /* LOADING_POSTS_MORE_SUCCESS */],
                  payload: payload
                });
              } else {
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["v" /* LOADING_POSTS_SUCCESS */],
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

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["s" /* LOADING_POSTS_FAILURE */]
              });

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
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["f" /* LOADING_ARCHIVES */]
              });
              _context4.prev = 1;
              _context4.next = 4;
              return Object(__WEBPACK_IMPORTED_MODULE_2__services__["a" /* queryArchives */])();

            case 4:
              res = _context4.sent;

              if (!(res.status === 200 && res.data && res.data.data && res.data.data.posts)) {
                _context4.next = 9;
                break;
              }

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["h" /* LOADING_ARCHIVES_SUCCESS */],
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
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["g" /* LOADING_ARCHIVES_FAILURE */]
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
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["i" /* LOADING_ARTICLE */]
              });
              _context5.prev = 1;
              _context5.next = 4;
              return Object(__WEBPACK_IMPORTED_MODULE_2__services__["e" /* queryPost */])(options);

            case 4:
              res = _context5.sent;

              if (!(res.status === 200 && res.data && res.data.data && res.data.data.post)) {
                _context5.next = 12;
                break;
              }

              comments = res.data.data.post.comments;

              res.data.data.post.comments = null;
              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["k" /* LOADING_ARTICLE_SUCCESS */],
                payload: res.data.data.post
              });
              if (comments) {
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["n" /* LOADING_COMMENT_SUCCESS */],
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
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["j" /* LOADING_ARTICLE_FAILURE */]
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
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["l" /* LOADING_COMMENT */]
              });
              _context6.prev = 1;
              _context6.next = 4;
              return Object(__WEBPACK_IMPORTED_MODULE_2__services__["b" /* queryComments */])(options);

            case 4:
              res = _context6.sent;

              if (!(res.status === 200 && res.data && res.data.data && res.data.data.comments)) {
                _context6.next = 9;
                break;
              }

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["n" /* LOADING_COMMENT_SUCCESS */],
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
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["m" /* LOADING_COMMENT_FAILURE */]
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
              return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/comment', options);

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
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["a" /* ADD_COMMENT_FAILURE */]
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
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["o" /* LOADING_MESSAGE */]
              });
              _context8.prev = 1;
              _context8.next = 4;
              return Object(__WEBPACK_IMPORTED_MODULE_2__services__["d" /* queryMessage */])();

            case 4:
              res = _context8.sent;

              if (!(res.status === 200 && res.data && res.data.data && res.data.data.message)) {
                _context8.next = 9;
                break;
              }

              dispatch({
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["q" /* LOADING_MESSAGE_SUCCESS */],
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
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["p" /* LOADING_MESSAGE_FAILURE */]
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
              return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/message', options);

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
                type: __WEBPACK_IMPORTED_MODULE_1__actionTypes__["b" /* ADD_MESSAGE_FAILURE */]
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

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return queryProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return queryPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return queryArchives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return queryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return queryPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return queryComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return queryMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sql__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__sql__);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();




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
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(queryProjects, 'queryProjects', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(queryPosts, 'queryPosts', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(queryArchives, 'queryArchives', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(queryInfo, 'queryInfo', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(queryPost, 'queryPost', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(queryComments, 'queryComments', '/Users/Mac/tomorrow1/client/services/index.js');
  reactHotLoader.register(queryMessage, 'queryMessage', '/Users/Mac/tomorrow1/client/services/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

exports.postsSQL = function (options) {
  var query = null;
  if (options.time && options.size) {
    query = "(time: \"" + options.time + "\", size: " + options.size + ")";
  } else if (options.size) {
    query = "(size: " + options.size + ")";
  }
  return {
    query: "{\n      posts" + query + " {\n        posts {\n          cover\n          desc\n          date\n          title\n          readCount\n          commentCount\n          _id\n          tags\n          url\n          time\n        }\n        end\n      }\n    }"
  };
};

exports.postSQL = function (options) {
  return {
    query: "{\n      post(url: \"" + options.url + "\") {\n        _id\n        title\n        tags\n        content\n        date\n        next {\n          title\n          url\n        }\n        index {\n          tag\n          content\n          anchor\n        }\n        previous {\n          title\n          url\n        }\n        comments {\n          _id\n          name\n          time\n          content\n          refTo {\n            _id\n            name\n            content\n          }\n        }\n      }\n    }"
  };
};

exports.archivesSQL = function () {
  return {
    query: "{\n      posts {\n        posts {\n          title\n          _id\n          tags\n          url\n          year\n          day\n        }\n        end\n      }\n    }"
  };
};

exports.infoSQL = function () {
  return {
    query: "{\n      info {\n        _id\n        html\n        comments {\n          _id\n          name\n          time\n          content\n          refTo {\n            _id\n            name\n            content\n          }\n        }\n      }\n    }"
  };
};

exports.projectsSQL = function () {
  return {
    query: "{\n      projects {\n        projects {\n          _id\n          title\n          href\n          html\n        }\n      }\n    }"
  };
};

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();




var _default = function _default(_ref) {
  var cover = _ref.cover,
      title = _ref.title;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    { className: 'banner-wrap' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'banner', style: { backgroundImage: 'url(' + cover + ')' } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        title
      )
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

  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow1/client/components/banner/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 135:
/***/ (function(module, exports) {



/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();




var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'skeleton-banner' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background' })
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

  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow1/client/components/skeleton-banner/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 137:
/***/ (function(module, exports) {



/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_comments__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_message__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_scroll__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_eventUtil__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_scss__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__index_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _default = function (_PureComponent) {
  _inherits(_default, _PureComponent);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      record: null
    }, _this.handleHashChange = function (e) {
      e = __WEBPACK_IMPORTED_MODULE_4__util_eventUtil__["a" /* default */].getEvent(e);
      if (e) {
        __WEBPACK_IMPORTED_MODULE_4__util_eventUtil__["a" /* default */].preventDefault(e);
      }
      var hash = location.hash.slice(1);
      var count = 0;
      var id = setInterval(function () {
        count++;
        var elem = document.getElementById(hash);
        if (elem) {
          window.scrollTo(0, elem.offsetTop - 65);
          clearInterval(id);
        } else if (count === 10) {
          clearInterval(id);
        }
      }, 100);
      return false;
    }, _this.replyMessage = function (e, record) {
      e.preventDefault();
      __WEBPACK_IMPORTED_MODULE_3__util_scroll__["a" /* default */].call(_this, document.getElementsByClassName('message-submit-wrap')[0], 500);
      _this.setState({
        record: record
      });
    }, _this.cancelReply = function () {
      _this.setState({
        record: null
      });
    }, _this.submitMessage = function (options) {
      if (_this.state.record) {
        options['refTo'] = _this.state.record._id;
      }
      _this.props.submit(options);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleHashChange();
      __WEBPACK_IMPORTED_MODULE_4__util_eventUtil__["a" /* default */].addHandler(window, 'hashchange', this.handleHashChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      __WEBPACK_IMPORTED_MODULE_4__util_eventUtil__["a" /* default */].removeHandler(window, 'hashchange', this.handleHashChange);
    }
  }, {
    key: 'render',
    value: function render() {
      var comments = this.props.comments;
      var record = this.state.record;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: 'message-board-wrap' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { id: 'comments' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'commens-title' },
            comments.length,
            ' \u6761\u8BC4\u8BBA'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_comments__["a" /* default */], { replyMessage: this.replyMessage, comments: comments }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_message__["a" /* default */], { record: record, cancelReply: this.cancelReply, submit: this.submitMessage })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);



/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();





var SubComment = function SubComment(_ref) {
  var name = _ref.name,
      content = _ref.content,
      replyMessage = _ref.replyMessage,
      _id = _ref._id;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'subcomment' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      { className: 'title' },
      '\u56DE\u590D ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
            'username': true,
            'active': name === '博主'
          }), href: '#', onClick: function onClick(e) {
            return replyMessage(e, { _id: _id, name: name });
          } },
        name
      ),
      ' \u7684\u53D1\u8A00\uFF1A'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      { className: 'content' },
      content
    )
  );
};

var Comment = function Comment(_ref2) {
  var name = _ref2.name,
      time = _ref2.time,
      content = _ref2.content,
      postId = _ref2.postId,
      refTo = _ref2.refTo,
      index = _ref2.index,
      replyMessage = _ref2.replyMessage,
      _id = _ref2._id;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'comment', id: index + 1 ? _id.slice(-4) : null },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      { className: 'title' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
            'username': true,
            'active': name === '博主'
          }), href: '#', onClick: function onClick(e) {
            return replyMessage(e, { _id: _id, name: name });
          } },
        name
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'time' },
        time
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'reply', href: '#', onClick: function onClick(e) {
            return replyMessage(e, { _id: _id, name: name });
          } },
        '\u56DE\u590D'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'floor' },
        index + 1,
        '\u697C'
      )
    ),
    refTo && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SubComment, _extends({ replyMessage: replyMessage }, refTo)),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      { className: 'content' },
      content
    )
  );
};

var _default = function _default(_ref3) {
  var comments = _ref3.comments,
      replyMessage = _ref3.replyMessage;


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    { className: 'comments-wrap' },
    comments && comments.length !== 0 ? comments.map(function (comment, index) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Comment, _extends({ replyMessage: replyMessage, key: comment._id }, comment, { index: index }));
    }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      { className: 'no-posts' },
      '\u6765\u505A\u7B2C\u4E00\u4E2A\u7559\u8A00\u7684\u4EBA\u5427\uFF01'
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

  reactHotLoader.register(SubComment, 'SubComment', '/Users/Mac/tomorrow1/client/components/comments/index.jsx');
  reactHotLoader.register(Comment, 'Comment', '/Users/Mac/tomorrow1/client/components/comments/index.jsx');
  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow1/client/components/comments/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 140:
/***/ (function(module, exports) {



/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_eventUtil__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_scss__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__index_scss__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var emailReg = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i;

var _default = function (_PureComponent) {
  _inherits(_default, _PureComponent);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: '',
      email: '',
      content: '',
      nameError: null,
      emailError: null,
      contentError: null
    }, _this.setInfo = function () {
      __WEBPACK_IMPORTED_MODULE_1_store___default.a.set('info', {
        name: _this.state.name,
        email: _this.state.email
      });
    }, _this.handleName = function (e) {
      _this.setState({
        name: e.target.value
      });
    }, _this.handleEmail = function (e) {
      _this.setState({
        email: e.target.value
      });
    }, _this.handleContent = function (e) {
      _this.setState({
        content: e.target.value
      });
    }, _this.validteInfo = function () {
      var isValidated = true;
      var error = {};
      if (_this.state.name === '') {
        isValidated = false;
        error.nameError = '请输入你的昵称';
      } else if (_this.state.name === '博主') {
        isValidated = false;
        error.nameError = '该昵称不可用';
      } else {
        error.nameError = null;
      }
      if (_this.state.email === '') {
        isValidated = false;
        error.emailError = '请留下你的邮箱';
      } else if (!emailReg.test(_this.state.email)) {
        isValidated = false;
        error.emailError = '邮箱地址不合法';
      } else if (_this.state.email === 'me@lindongzhou.com') {
        isValidated = false;
        error.emailError = '该邮箱地址不可用';
      } else {
        error.emailError = null;
      }
      if (_this.state.content === '') {
        isValidated = false;
        error.contentError = '再说点什么呗';
      } else {
        error.contentError = null;
      }
      _this.setState(_extends({}, error));
      return isValidated;
    }, _this.handleSubmit = function () {
      if (_this.validteInfo()) {
        _this.props.submit({
          name: _this.state.name,
          email: _this.state.email,
          content: _this.state.content
        });
        _this.reset();
      }
    }, _this.reset = function (e) {
      e && e.preventDefault();
      _this.setState({
        content: '',
        nameError: null,
        emailError: null,
        contentError: null
      });
      _this.props.cancelReply();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var data = __WEBPACK_IMPORTED_MODULE_1_store___default.a.get('info');
      if (data) {
        this.setState(_extends({}, data));
      }
      __WEBPACK_IMPORTED_MODULE_3__util_eventUtil__["a" /* default */].addHandler(window, 'beforeunload', this.setInfo);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      __WEBPACK_IMPORTED_MODULE_1_store___default.a.set('info', {
        name: this.state.name,
        email: this.state.email
      });
      __WEBPACK_IMPORTED_MODULE_3__util_eventUtil__["a" /* default */].removeHandler(window, 'beforeunload', this.setInfo);
    }
  }, {
    key: 'render',
    value: function render() {
      var record = this.props.record;
      var _state = this.state,
          name = _state.name,
          email = _state.email,
          content = _state.content,
          nameError = _state.nameError,
          emailError = _state.emailError,
          contentError = _state.contentError;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'message-submit-wrap' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: 'comment-title' },
          '\u53D1\u8868\u8BC4\u8BBA'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'annotation' },
          '\u90AE\u7BB1\u5730\u5740\u4E0D\u4F1A\u88AB\u516C\u5F00, \u6536\u5230\u56DE\u590D\u4F1A\u901A\u8FC7\u90AE\u4EF6\u63D0\u9192\u3002'
        ),
        record && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'replying' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { htmlFor: 'messageName' },
            '\u6B63\u5728\u56DE\u590D: ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'username' },
              record.name
            )
          ),
          ' ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'cancel', href: '#', onClick: this.reset },
            '\u53D6\u6D88\u56DE\u590D'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
              'message-item': true,
              'error': contentError
            }) },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { htmlFor: 'messageContent' },
            '\u8BC4\u8BBA\u5185\u5BB9',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'required' },
              '*'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { className: 'ant-input', placeholder: '\u8BF4\u70B9\u4EC0\u4E48\u5462', id: 'messageContent', name: 'content', onChange: this.handleContent, value: content, cols: '20', rows: '5' }),
          contentError ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'error' },
            contentError
          ) : null
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
              'message-item': true,
              'error': nameError
            }) },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { htmlFor: 'messageName' },
            '\u6635\u79F0',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'required' },
              '*'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'ant-input', placeholder: '\u5982\u4F55\u79F0\u547C', id: 'messageName', name: 'messageName', onChange: this.handleName, value: name }),
          nameError ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'error' },
            nameError
          ) : null
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
              'message-item': true,
              'error': emailError
            }) },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { htmlFor: 'messageEmail' },
            '\u90AE\u7BB1\u5730\u5740',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'required' },
              '*'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'ant-input', placeholder: '\u653E\u5FC3\uFF0C\u522B\u4EBA\u4E0D\u4F1A\u77E5\u9053\u7684', id: 'messageEmail', name: 'messageEmail', onChange: this.handleEmail, value: email }),
          emailError ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'error' },
            emailError
          ) : null
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'message-item' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'ant-btn', onClick: this.handleSubmit },
            '\u53D1\u8868\u8BC4\u8BBA'
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);


;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(emailReg, 'emailReg', '/Users/Mac/tomorrow1/client/components/message/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 142:
/***/ (function(module, exports) {



/***/ }),

/***/ 143:
/***/ (function(module, exports) {



/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skeleton_banner__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__skeleton_about__ = __webpack_require__(162);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();






var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    { className: 'skeleton-wrapper' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__skeleton_banner__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__skeleton_about__["a" /* default */], null)
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

  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow1/client/components/skeleton-about/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 161:
/***/ (function(module, exports) {



/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();




var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'skeleton-about' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background title' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'skeleton-about-item' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'line' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'line' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'line' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'line' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'line' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'line' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'line' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'line' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'line' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'line' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background' })
      )
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

  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow1/client/components/skeleton-about/skeleton-about/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 163:
/***/ (function(module, exports) {



/***/ }),

/***/ 164:
/***/ (function(module, exports) {



/***/ })

};;