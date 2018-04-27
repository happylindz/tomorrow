webpackJsonp([3],{

/***/ "./client/container/project/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("./client/actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__("./client/constants/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constants__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  }]);

  return Project;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Project));

/***/ })

});