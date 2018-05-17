exports.ids = [0];
exports.modules = {

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_index_js__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tags__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_banner__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_archives__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_skeleton_archives__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_scss__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__index_scss__);
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












var mapStateToProps = function mapStateToProps(state, ownProps) {
  var postsData = state.archives.posts;
  var search = ownProps.location.search;

  var tagsRes = {
    'all': postsData.length
  };
  var posts = {};
  var topic = '';
  if (search !== '') {
    topic = decodeURI(Object(__WEBPACK_IMPORTED_MODULE_4__util_index_js__["a" /* query */])(search).topic) || '';
  }
  postsData.forEach(function (post) {
    try {
      var tags = post.tags.split(',');
      if (topic === '' || topic === 'undefined') {
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
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["c" /* fetchArchivesData */])(options));
    }
  };
};

var _default = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps), _dec(_class = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var state = this.props.state;

      if (state === __WEBPACK_IMPORTED_MODULE_3__constants__["INITIAL_STATE"] || state === __WEBPACK_IMPORTED_MODULE_3__constants__["FAILURE_STATE"]) {
        this.props.fetchArchivesData();
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
        case __WEBPACK_IMPORTED_MODULE_3__constants__["INITIAL_STATE"]:
        case __WEBPACK_IMPORTED_MODULE_3__constants__["LOADING_STATE"]:
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_skeleton_archives__["a" /* default */], null);
        case __WEBPACK_IMPORTED_MODULE_3__constants__["SUCCESS_STATE"]:
          return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_banner__["a" /* default */], { title: 'Archives', key: 'banner', cover: '//images.lindongzhou.com/website/archives-banner.jpg' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: 'archives-body', className: 'archives-body' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_tags__["a" /* default */], { tags: tags, topic: topic }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_archives__["a" /* default */], { posts: posts })
          )];
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
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/Mac/tomorrow1/client/container/archives/index.jsx');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/Mac/tomorrow1/client/container/archives/index.jsx');
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(132);
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
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["w" /* LOADING_PROJECT */]
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
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["y" /* LOADING_PROJECT_SUCCESS */],
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
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["x" /* LOADING_PROJECT_FAILURE */]
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
                  type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["u" /* LOADING_POSTS_MORE_SUCCESS */],
                  payload: payload
                });
              } else {
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["v" /* LOADING_POSTS_SUCCESS */],
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
                type: __WEBPACK_IMPORTED_MODULE_0__actionTypes__["s" /* LOADING_POSTS_FAILURE */]
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

/***/ 132:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sql__ = __webpack_require__(133);
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

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return query; });
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var query = function query(url) {
  var obj = {};
  var keyvalue = [];
  var key = '';
  var value = '';

  var paraString = url.substring(url.indexOf('?') + 1, url.length).split('&');
  for (var i = 0; i < paraString.length; i++) {
    keyvalue = paraString[i].split('=');
    key = keyvalue[0];
    value = keyvalue[1];
    obj[key] = value;
  }
  return obj;
};
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(query, 'query', '/Users/Mac/tomorrow1/client/util/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();





var _default = function _default(_ref) {
  var tags = _ref.tags,
      topic = _ref.topic;

  var all = tags['all'];
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'nav',
    { className: 'archives-nav' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
      { strict: true, to: '/archives', isActive: function isActive() {
          return topic === '' || topic === 'undefined';
        }, activeClassName: 'active', className: 'tag' },
      '\u5168\u90E8\u6587\u7AE0(' + all + ')'
    ),
    Object.keys(tags).map(function (tag) {
      if (tag === 'all') {
        return null;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
        { strict: true, isActive: function isActive() {
            return topic === tag;
          }, key: tag, activeClassName: 'active', to: '/archives?topic=' + encodeURI(tag), className: 'tag' },
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

  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow1/client/components/tags/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 153:
/***/ (function(module, exports) {



/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();





var _default = function _default(_ref) {
  var posts = _ref.posts;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    { className: 'archives-main' },
    Object.keys(posts).map(function (year) {
      return parseInt(year, 10);
    }).sort(function (a, b) {
      return b - a;
    }).map(function (year) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'archives', key: year },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'year' },
          year,
          '\u5E74'
        ),
        posts[year].map(function (post) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            { className: 'archives-item', key: post._id },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'time' },
              post.day
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
              { onClick: function onClick() {
                  window.scrollTo(0, 0);
                }, to: '/article/' + post.url },
              post.title
            )
          );
        })
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

  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow1/client/components/archives/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 155:
/***/ (function(module, exports) {



/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skeleton_banner__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__skeleton_tags__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skeleton_archives__ = __webpack_require__(160);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();







var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    { className: 'skeleton-wrapper' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__skeleton_banner__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__skeleton_tags__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__skeleton_archives__["a" /* default */], null)
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

  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow1/client/components/skeleton-archives/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 157:
/***/ (function(module, exports) {



/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();




var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'skeleton-tags' },
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (item) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { key: item, className: 'skeleton-tag-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background' })
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

  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow1/client/components/skeleton-archives/skeleton-tags/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 159:
/***/ (function(module, exports) {



/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();




var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'skeleton-archives' },
    [1, 2, 3].map(function (item) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { key: item, className: 'skeleton-archives-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'animated-background title' }),
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

  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow1/client/components/skeleton-archives/skeleton-archives/index.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),

/***/ 161:
/***/ (function(module, exports) {



/***/ }),

/***/ 162:
/***/ (function(module, exports) {



/***/ })

};;