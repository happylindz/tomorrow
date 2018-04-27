exports.ids = [3];
exports.modules = {

/***/ 118:
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
  return _extends({}, state.project);
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchProjectData: function fetchProjectData() {
      dispatch(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* default */].fetchProjectData());
    }
  };
};

var Project = function (_Component) {
  _inherits(Project, _Component);

  function Project() {
    _classCallCheck(this, Project);

    return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).apply(this, arguments));
  }

  _createClass(Project, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.title = 'Hello Project';
      var state = this.props.state;

      if (state === __WEBPACK_IMPORTED_MODULE_3__constants__["INITIAL_STATE"] || state === __WEBPACK_IMPORTED_MODULE_3__constants__["FAILURE_STATE"]) {
        this.props.fetchProjectData();
      } else if (state === __WEBPACK_IMPORTED_MODULE_3__constants__["SUCCESS_STATE"]) {
        console.log('isomorphism fetch project data');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          projectData = _props.projectData,
          state = _props.state;

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
            'section',
            null,
            projectData.map(function (item) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'section',
                { key: item._id },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h2',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { href: item.href },
                    item.title
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  null,
                  item.content
                )
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

  return Project;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Project);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/Mac/tomorrow/client/container/project/index.jsx');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/Mac/tomorrow/client/container/project/index.jsx');
  reactHotLoader.register(Project, 'Project', '/Users/Mac/tomorrow/client/container/project/index.jsx');
  reactHotLoader.register(_default, 'default', '/Users/Mac/tomorrow/client/container/project/index.jsx');
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

/***/ })

};;