webpackJsonp([3],{

/***/ "./client/container/archives/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("./client/actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("./client/constants/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__("./client/util/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state.archives);
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
      var _props = this.props,
          state = _props.state,
          location = _props.location;

      if (state === __WEBPACK_IMPORTED_MODULE_4__constants__["INITIAL_STATE"] || state === __WEBPACK_IMPORTED_MODULE_4__constants__["FAILURE_STATE"]) {
        this.props.fetchArchivesData({
          type: __WEBPACK_IMPORTED_MODULE_4__constants__["ALL_POSTS"],
          page: Object(__WEBPACK_IMPORTED_MODULE_5__util__["a" /* query */])(location.search).page || 1
        });
      } else if (state === __WEBPACK_IMPORTED_MODULE_4__constants__["SUCCESS_STATE"]) {
        console.log('isomorphism fetch archives data');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          postsData = _props2.postsData,
          state = _props2.state;

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
            postsData.map(function (item) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'section',
                { key: item._id },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h2',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
                    { to: '/article/' + item.url },
                    item.title
                  )
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

  return Archives;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Archives));

/***/ })

});