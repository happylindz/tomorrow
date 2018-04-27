webpackJsonp([2],{

/***/ "./client/container/archives/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules
var es = __webpack_require__("./node_modules/react-redux/es/index.js");

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/index.js + 13 modules
var react_router_dom_es = __webpack_require__("./node_modules/react-router-dom/es/index.js");

// EXTERNAL MODULE: ./client/actions/index.js
var actions = __webpack_require__("./client/actions/index.js");

// EXTERNAL MODULE: ./client/constants/index.js
var constants = __webpack_require__("./client/constants/index.js");
var constants_default = /*#__PURE__*/__webpack_require__.n(constants);

// EXTERNAL MODULE: ./client/util/index.js
var util = __webpack_require__("./client/util/index.js");

// EXTERNAL MODULE: ./client/container/archives/tags.scss
var archives_tags = __webpack_require__("./client/container/archives/tags.scss");
var tags_default = /*#__PURE__*/__webpack_require__.n(archives_tags);

// CONCATENATED MODULE: ./client/container/archives/tags.jsx



var activeStyle = {
  fontWeight: 'bold',
  color: 'red'
};

/* harmony default export */ var container_archives_tags = (function (_ref) {
  var tags = _ref.tags,
      topic = _ref.topic;

  var all = tags['all'];
  return react_default.a.createElement(
    'div',
    null,
    react_default.a.createElement(
      react_router_dom_es["NavLink"],
      { strict: true, to: '/archives', isActive: function isActive() {
          return topic === '';
        }, activeStyle: activeStyle, className: 'tag' },
      '\u5168\u90E8(' + all + ')'
    ),
    Object.keys(tags).map(function (tag) {
      if (tag === 'all') {
        return null;
      }
      return react_default.a.createElement(
        react_router_dom_es["NavLink"],
        { strict: true, isActive: function isActive() {
            return topic === tag;
          }, key: tag, activeStyle: activeStyle, to: '/archives?topic=' + encodeURI(tag), className: 'tag' },
        tag + '(' + tags[tag] + ')'
      );
    })
  );
});
// CONCATENATED MODULE: ./client/container/archives/index.jsx
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var archives_mapStateToProps = function mapStateToProps(state, ownProps) {
  var postsData = state.archives.postsData;
  var search = ownProps.location.search;

  var tagsRes = {
    'all': postsData.length
  };
  var posts = {};
  var topic = '';
  if (search !== '') {
    topic = decodeURI(Object(util["a" /* query */])(search).topic) || '';
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
var archives_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchArchivesData: function fetchArchivesData(options) {
      dispatch(actions["a" /* default */].fetchArchivesData(options));
    }
  };
};

var archives_Archives = function (_Component) {
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

      if (state === constants["INITIAL_STATE"] || state === constants["FAILURE_STATE"]) {
        this.props.fetchArchivesData();
      } else if (state === constants["SUCCESS_STATE"]) {
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
            'section',
            null,
            react_default.a.createElement(container_archives_tags, { tags: tags, topic: topic }),
            react_default.a.createElement('hr', null),
            Object.keys(posts).map(function (year) {
              return parseInt(year, 10);
            }).sort(function (a, b) {
              return b - a;
            }).map(function (year) {
              return react_default.a.createElement(
                'div',
                { key: year },
                year,
                posts[year].map(function (post) {
                  return react_default.a.createElement(
                    'section',
                    { key: post._id },
                    react_default.a.createElement(
                      'h2',
                      null,
                      post.time,
                      react_default.a.createElement(
                        react_router_dom_es["Link"],
                        { to: '/article/' + post.url },
                        post.title
                      )
                    )
                  );
                }),
                react_default.a.createElement('hr', null)
              );
            })
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

  return Archives;
}(react["Component"]);

/* harmony default export */ var archives = __webpack_exports__["default"] = (Object(es["connect"])(archives_mapStateToProps, archives_mapDispatchToProps)(archives_Archives));

/***/ }),

/***/ "./client/container/archives/tags.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});