module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "1C0x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__("8cHP");

// EXTERNAL MODULE: ./components/ErrorMessage.jsx
var ErrorMessage = __webpack_require__("Ta/3");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/PostList.jsx
/* unused harmony export allPosts */
/* unused harmony export allPostsQueryVars */






function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  query {\n    webs {\n      _id\n      Title\n      Image {\n        url\n        ext\n        provider\n        size\n      }\n      Description\n      Data\n      URL\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var POSTS_PER_PAGE = 10;

function handleClick(event, id, url) {
  event.preventDefault();
  routes["Router"].push({
    pathname: "/work/".concat(url),
    asPath: "/work/".concat(url)
  });
}

function PostList(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      webs = _ref$data.webs,
      title = _ref.title,
      extraClass = _ref.extraClass;
  if (error) return external_react_default.a.createElement(ErrorMessage["a" /* default */], {
    message: "Error loading posts."
  });

  if (webs && webs.length) {
    return external_react_default.a.createElement("section", {
      className: "jsx-1060188973" + " " + (extraClass || "")
    }, external_react_default.a.createElement(head_default.a, null, title === undefined ? external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("title", {
      className: "jsx-1060188973"
    }, "Work"), external_react_default.a.createElement("meta", {
      name: "title",
      content: "Nick Hulea's Work and Projects",
      className: "jsx-1060188973"
    }), external_react_default.a.createElement("meta", {
      name: "description",
      content: "Nick Hulea's Work and Projects",
      className: "jsx-1060188973"
    })) : ''), title === undefined ? external_react_default.a.createElement("h1", {
      className: "jsx-1060188973"
    }, "Work") : '', external_react_default.a.createElement("ul", {
      className: "jsx-1060188973"
    }, webs.map(function (post, index) {
      return post.URL !== title ? external_react_default.a.createElement("li", {
        key: index + 1,
        className: "jsx-1060188973"
      }, external_react_default.a.createElement("a", {
        props: post._id,
        href: "/work/".concat(post.Data.Link),
        onClick: function onClick(event) {
          return handleClick(event, post._id, post.Data.Link);
        },
        className: "jsx-1060188973"
      }, post.Image !== null ? external_react_default.a.createElement("span", {
        style: {
          backgroundImage: "url(https://strapi.hulea.org/".concat(post.Image.url, ")")
        },
        className: "jsx-1060188973" + " " + "imgHero"
      }) : '', external_react_default.a.createElement("h2", {
        className: "jsx-1060188973"
      }, post.Title))) : '';
    })), external_react_default.a.createElement(style_default.a, {
      id: "1060188973"
    }, ["*.jsx-1060188973{box-sizing:border-box;}", "section.jsx-1060188973{padding-bottom:20px;max-width:95%;margin:0 auto;}", "a.jsx-1060188973{position:relative;}", "ul.jsx-1060188973{margin:0;padding:0;list-style:none;}", "li.jsx-1060188973{border:2rem solid #111;margin-bottom:2em;}", "h2.jsx-1060188973{position:absolute;bottom:5px;left:25px;padding:20px 30px;color:#fff;background-color:#111;}"]));
  }

  return external_react_default.a.createElement("div", null, "Loading");
}

var allPosts = external_graphql_tag_default()(_templateObject());
var allPostsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE // The `graphql` wrapper executes a GraphQL query and makes the results
  // available on the `data` prop of the wrapped component (PostList)

};
/* harmony default export */ var components_PostList = __webpack_exports__["a"] = (Object(external_react_apollo_["graphql"])(allPosts, {
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data,
      loadMorePosts: function loadMorePosts() {
        return data.fetchMore({
          variables: {
            skip: data.allPosts.length
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }

            return assign_default()({}, previousResult, {
              // Append the new posts results to the old one
              allPosts: [].concat(_toConsumableArray(previousResult.allPosts), _toConsumableArray(fetchMoreResult.allPosts))
            });
          }
        });
      }
    };
  }
})(PostList));

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "2v4L":
/***/ (function(module, exports) {



/***/ }),

/***/ "3niX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__("cDcd");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__("SevZ"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("AjUD");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "8cHP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Parameterized Routing with next-route
 *
 * Benefits: Less code, and easily handles complex url structures
 **/
var routes = module.exports = __webpack_require__("90Kz")();

routes.add('work/entry', '/work/:url');

/***/ }),

/***/ "8cZr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VDXt")


/***/ }),

/***/ "90Kz":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9UMK":
/***/ (function(module, exports) {

module.exports = require("next-server/constants");

/***/ }),

/***/ "9kyW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "AXZJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
Object.defineProperty(exports, "__esModule", { value: true });
const ESCAPE_LOOKUP = {
    '&': '\\u0026',
    '>': '\\u003e',
    '<': '\\u003c',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029',
};
const ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function htmlEscapeJsonString(str) {
    return str.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
exports.htmlEscapeJsonString = htmlEscapeJsonString;


/***/ }),

/***/ "AjUD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./lib/withApollo.js + 2 modules
var withApollo = __webpack_require__("UjZb");

// EXTERNAL MODULE: ./components/App.jsx
var App = __webpack_require__("gaPq");

// EXTERNAL MODULE: ./components/Header.jsx
var Header = __webpack_require__("Cgje");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: ./components/ErrorMessage.jsx
var ErrorMessage = __webpack_require__("Ta/3");

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/PostList.jsx + 4 modules
var PostList = __webpack_require__("1C0x");

// CONCATENATED MODULE: ./components/Post.jsx



function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  query webs($url: String!) {\n    webs( where: { URL: $url }, limit: 1) {\n      Title\n      _id\n      Image {\n        url\n        ext\n        provider\n        size\n      }\n      Description\n      Data\n      URL\n      Link\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// @ts-check









function Post(_ref) {
  var _ref$data = _ref.data,
      error = _ref$data.error,
      webs = _ref$data.webs;
  var web = webs[0];
  var image = web.Image !== null ? external_react_default.a.createElement("span", {
    id: "image",
    className: "imgHero",
    style: {
      backgroundImage: "url(https://strapi.hulea.org/".concat(web.Image.url, ")"),
      border: "2em solid #111",
      marginBottom: "20px"
    }
  }) : '';
  if (error) return external_react_default.a.createElement(ErrorMessage["a" /* default */], {
    message: "Error loading post."
  });

  if (web) {
    return external_react_default.a.createElement("article", {
      className: "jsx-1586328328"
    }, external_react_default.a.createElement("section", {
      className: "jsx-1586328328"
    }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", {
      className: "jsx-1586328328"
    }, web.Title), external_react_default.a.createElement("meta", {
      name: "title",
      content: web.Title,
      className: "jsx-1586328328"
    }), external_react_default.a.createElement("meta", {
      name: "description",
      content: web.Description,
      className: "jsx-1586328328"
    })), external_react_default.a.createElement("div", {
      key: web.id,
      className: "jsx-1586328328"
    }, external_react_default.a.createElement("h1", {
      className: "jsx-1586328328"
    }, web.Title), image, external_react_default.a.createElement("a", {
      target: "_blank",
      href: web.Link,
      className: "jsx-1586328328" + " " + "dash-link"
    }, web.Title), external_react_default.a.createElement(external_react_markdown_default.a, {
      source: web.Description
    }))), external_react_default.a.createElement(PostList["a" /* default */], {
      title: web.URL,
      extraClass: "worklist"
    }), external_react_default.a.createElement(style_default.a, {
      id: "1586328328"
    }, []));
  }

  return external_react_default.a.createElement("div", null, "Loading");
}

var post = external_graphql_tag_default()(_templateObject()); // The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)

var ComponentWithMutation = Object(external_react_apollo_["graphql"])(post, {
  options: function options(_ref2) {
    var query = _ref2.router.query;
    return {
      variables: {
        url: query.url
      }
    };
  },
  props: function props(_ref3) {
    var data = _ref3.data;
    return {
      data: data
    };
  }
})(Post);
/* harmony default export */ var components_Post = (Object(router_["withRouter"])(ComponentWithMutation));
// EXTERNAL MODULE: ./components/Footer.jsx
var Footer = __webpack_require__("naWs");

// CONCATENATED MODULE: ./pages/work/entry.js







/* harmony default export */ var entry = __webpack_exports__["default"] = (Object(withApollo["a" /* default */])(function () {
  return external_react_default.a.createElement(App["a" /* default */], null, external_react_default.a.createElement(Header["a" /* default */], null), external_react_default.a.createElement(components_Post, {
    Router: router_default.a
  }), external_react_default.a.createElement(Footer["a" /* default */], null));
}));

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "Cgje":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);











var links = [{
  href: '/',
  name: '127.0.0.1'
}, {
  href: '/work',
  name: 'work'
}, {
  href: '/contact',
  name: 'contact'
}, {
  href: '/about',
  name: 'about'
}];

var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      isActive: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "toggleNav", function () {
      _this.setState(function (prevState) {
        return {
          isActive: !prevState.isActive
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Header, [{
    key: "handleClick",
    value: function handleClick(event, url) {
      event.preventDefault();
      Router.push({
        pathname: "/work/".concat(url),
        asPath: "/work/".concat(url)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var pathname = this.props.pathname;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "jsx-3585587421"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3585587421" + " " + ((this.state.isActive ? 'hide-overlay' : '') || "")
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("nav", {
        className: "jsx-3585587421"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "jsx-3585587421"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        onClick: this.toggleNav,
        "aria-label": this.state.isActive ? 'closed' : 'open',
        className: "jsx-3585587421" + " " + "list one"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        "aria-label": this.state.isActive ? 'closed' : 'open',
        className: "jsx-3585587421" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3585587421" + " " + "overlay-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        id: "close",
        onClick: this.toggleNav,
        className: "jsx-3585587421"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-3585587421"
      }, "close")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        id: "weblist",
        className: "jsx-3585587421"
      }, links.map(function (link, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
          key: index + 1,
          className: "jsx-3585587421" + " " + "bk"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: link.href
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          prefetch: "true",
          onClick: _this2.toggleNav,
          href: link.href,
          className: "jsx-3585587421" + " " + ((pathname === link.name ? 'is-active' : '') || "")
        }, link.name)));
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3585587421"
      }, [".is-active.jsx-3585587421{-webkit-text-decoration:underline;text-decoration:underline;}"]));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);
/* 
const Header = ({ router: { pathname } }) => (

  <header>
    <div className={this ? 'hide-overlay' : ''}>
      <nav>
        <ul>
          <li onClick={toggleNav} className="list one">
            <button onClick={toggleNav} id="menu_butoon" aria-label="closed" ></button>
          </li>
        </ul>
      </nav>
      <div className="overlay">
        <div className="overlay-content">
          <div id="close"><span>close</span></div>
          <ul id="weblist">
            <li className="bk">
              <Link prefetch href='/'><a className={pathname === '/' ? 'is-active' : ''}>127.0.0.1</a></Link>
            </li>
            <li className="bk">
              <Link prefetch href='/work'><a className={pathname === '/work' ? 'is-active' : ''}>Work</a></Link>
            </li>
            <li className="bk">
              <Link prefetch href='/contact'><a className={pathname === '/contact' ? 'is-active' : ''}>Contact</a></Link>
            </li>
            <li className="bk">
              <Link prefetch href='/about'><a className={pathname === '/about' ? 'is-active' : ''}>About</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <style jsx>{`
      header {
        position: fixed;
        right: 100px;
        z-index: 9999;
        top: 0;
      }
      a {

      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
) */


/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Header));

/***/ }),

/***/ "DTay":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nWF0")


/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "MX0m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3niX")


/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SevZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__("9kyW"));

var _stylesheet = _interopRequireDefault(__webpack_require__("bVZc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Ta/3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var message = _ref.message;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", {
    className: "jsx-160792485"
  }, message, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "160792485"
  }, ["aside.jsx-160792485{padding:1.5em;font-size:14px;color:white;background-color:red;}"]));
});

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UjZb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(defineProperty["a" /* default */])(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "apollo-client"
var external_apollo_client_ = __webpack_require__("Oyez");

// EXTERNAL MODULE: external "apollo-link-http"
var external_apollo_link_http_ = __webpack_require__("TG1l");

// EXTERNAL MODULE: external "apollo-cache-inmemory"
var external_apollo_cache_inmemory_ = __webpack_require__("oz4i");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./lib/initApollo.js




var apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)

if (true) {
  global.fetch = external_isomorphic_unfetch_default.a;
}

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new external_apollo_client_["ApolloClient"]({
    connectToDevTools: false,
    ssrMode: !false,
    // Disables forceFetch on the server (so queries are only run once)
    link: new external_apollo_link_http_["HttpLink"]({
      uri: 'https://strapi.hulea.org/graphql',
      // Server URL (must be absolute)
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`

    }),
    cache: new external_apollo_cache_inmemory_["InMemoryCache"]().restore(initialState || {})
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return create(initialState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
// CONCATENATED MODULE: ./lib/withApollo.js













 // Gets the display name of a JSX component for dev tools

function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

/* harmony default export */ var withApollo = __webpack_exports__["a"] = (function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    Object(inherits["a" /* default */])(WithApollo, _React$Component);

    Object(createClass["a" /* default */])(WithApollo, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = Object(asyncToGenerator["a" /* default */])(
        /*#__PURE__*/
        regenerator_default.a.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo, state;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Initial serverState with apollo (empty)
                  serverState = {
                    apollo: {
                      data: {}
                    } // Evaluate the composed component's getInitialProps()

                  };
                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return ComposedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:
                  if (false) {}

                  apollo = initApollo();
                  _context.prev = 8;
                  _context.next = 11;
                  return Object(external_react_apollo_["getDataFromTree"])(external_react_default.a.createElement(external_react_apollo_["ApolloProvider"], {
                    client: apollo
                  }, external_react_default.a.createElement(ComposedComponent, composedInitialProps)), {
                    router: {
                      asPath: ctx.asPath,
                      pathname: ctx.pathname,
                      query: ctx.query
                    }
                  });

                case 11:
                  _context.next = 15;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](8);

                case 15:
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  head_default.a.rewind(); // Extract query data from the store

                  state = {}; // Extract query data from the Apollo store

                  serverState = assign_default()(state, {
                    apollo: {
                      data: apollo.cache.extract()
                    }
                  });

                case 18:
                  return _context.abrupt("return", _objectSpread({
                    serverState: serverState
                  }, composedInitialProps));

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[8, 13]]);
        }));

        function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithApollo(props) {
      var _this;

      Object(classCallCheck["a" /* default */])(this, WithApollo);

      _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(WithApollo).call(this, props));
      _this.apollo = initApollo(props.serverState.apollo.data);
      return _this;
    }

    Object(createClass["a" /* default */])(WithApollo, [{
      key: "render",
      value: function render() {
        return external_react_default.a.createElement(external_react_apollo_["ApolloProvider"], {
          client: this.apollo
        }, external_react_default.a.createElement(ComposedComponent, this.props));
      }
    }]);

    return WithApollo;
  }(external_react_default.a.Component), Object(defineProperty["a" /* default */])(_class, "displayName", "WithApollo(".concat(getComponentDisplayName(ComposedComponent), ")")), _temp;
});

/***/ }),

/***/ "VDXt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _keys = _interopRequireDefault(__webpack_require__("pLtp"));

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _now = _interopRequireDefault(__webpack_require__("Cg2A"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _getOwnPropertySymbols = _interopRequireDefault(__webpack_require__("4mXO"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof _getOwnPropertySymbols.default === "function") for (var i = 0, p = (0, _getOwnPropertySymbols.default)(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var react_1 = __importStar(__webpack_require__("cDcd"));

var utils_1 = __webpack_require__("WH3H");

var htmlescape_1 = __webpack_require__("AXZJ");

var server_1 = __importDefault(__webpack_require__("DTay"));

var constants_1 = __webpack_require__("9UMK");

function getAmpPath(ampPath, asPath) {
  return ampPath ? ampPath : "".concat(asPath).concat(asPath.includes('?') ? '&' : '?', "amp=1");
}

var Document =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Document, _react_1$Component);

  function Document() {
    (0, _classCallCheck2.default)(this, Document);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Document).apply(this, arguments));
  }

  (0, _createClass2.default)(Document, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        _documentProps: this.props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString:  false ? undefined : ''
      };
    }
  }, {
    key: "render",
    value: function render() {
      return react_1.default.createElement(Html, null, react_1.default.createElement(Head, null), react_1.default.createElement("body", null, react_1.default.createElement(Main, null), react_1.default.createElement(NextScript, null)));
    }
  }], [{
    key: "getInitialProps",
    value: function (_ref) {
      var renderPage = _ref.renderPage;

      try {
        return _promise.default.resolve(renderPage()).then(function (_ref2) {
          var html = _ref2.html,
              head = _ref2.head,
              dataOnly = _ref2.dataOnly;
          var styles = server_1.default();
          return {
            html: html,
            head: head,
            styles: styles,
            dataOnly: dataOnly
          };
        });
      } catch (e) {
        return _promise.default.reject(e);
      }
    }
  }]);
  return Document;
}(react_1.Component);

Document.childContextTypes = {
  _documentProps: prop_types_1.default.any,
  _devOnlyInvalidateCacheQueryString: prop_types_1.default.string
};
exports.default = Document;

var Html =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Html, _react_1$Component2);

  function Html() {
    (0, _classCallCheck2.default)(this, Html);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Html).apply(this, arguments));
  }

  (0, _createClass2.default)(Html, [{
    key: "render",
    value: function render() {
      var amphtml = this.context._documentProps.amphtml;

      var _a = this.props,
          children = _a.children,
          props = __rest(_a, ["children"]);

      return react_1.default.createElement("html", (0, _assign.default)({}, props, {
        amp: amphtml ? '' : null
      }), children);
    }
  }]);
  return Html;
}(react_1.Component);

Html.contextTypes = {
  _documentProps: prop_types_1.default.any
};
Html.propTypes = {
  children: prop_types_1.default.node.isRequired
};
exports.Html = Html;

var Head =
/*#__PURE__*/
function (_react_1$Component3) {
  (0, _inherits2.default)(Head, _react_1$Component3);

  function Head() {
    (0, _classCallCheck2.default)(this, Head);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Head).apply(this, arguments));
  }

  (0, _createClass2.default)(Head, [{
    key: "getCssLinks",
    value: function getCssLinks() {
      var _this = this;

      var _this$context$_docume = this.context._documentProps,
          assetPrefix = _this$context$_docume.assetPrefix,
          files = _this$context$_docume.files;

      if (!files || files.length === 0) {
        return null;
      }

      return files.map(function (file) {
        // Only render .css files here
        if (!/\.css$/.exec(file)) {
          return null;
        }

        return react_1.default.createElement("link", {
          key: file,
          nonce: _this.props.nonce,
          rel: "stylesheet",
          href: "".concat(assetPrefix, "/_next/").concat(file),
          crossOrigin: _this.props.crossOrigin || undefined
        });
      });
    }
  }, {
    key: "getPreloadDynamicChunks",
    value: function getPreloadDynamicChunks() {
      var _this2 = this;

      var _this$context$_docume2 = this.context._documentProps,
          dynamicImports = _this$context$_docume2.dynamicImports,
          assetPrefix = _this$context$_docume2.assetPrefix;
      var _devOnlyInvalidateCacheQueryString = this.context._devOnlyInvalidateCacheQueryString;
      return dynamicImports.map(function (bundle) {
        return react_1.default.createElement("link", {
          rel: "preload",
          key: bundle.file,
          href: "".concat(assetPrefix, "/_next/").concat(bundle.file).concat(_devOnlyInvalidateCacheQueryString),
          as: "script",
          nonce: _this2.props.nonce,
          crossOrigin: _this2.props.crossOrigin || undefined
        });
      });
    }
  }, {
    key: "getPreloadMainLinks",
    value: function getPreloadMainLinks() {
      var _this3 = this;

      var _this$context$_docume3 = this.context._documentProps,
          assetPrefix = _this$context$_docume3.assetPrefix,
          files = _this$context$_docume3.files;

      if (!files || files.length === 0) {
        return null;
      }

      var _devOnlyInvalidateCacheQueryString = this.context._devOnlyInvalidateCacheQueryString;
      return files.map(function (file) {
        // Only render .js files here
        if (!/\.js$/.exec(file)) {
          return null;
        }

        return react_1.default.createElement("link", {
          key: file,
          nonce: _this3.props.nonce,
          rel: "preload",
          href: "".concat(assetPrefix, "/_next/").concat(file).concat(_devOnlyInvalidateCacheQueryString),
          as: "script",
          crossOrigin: _this3.props.crossOrigin || undefined
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context$_docume4 = this.context._documentProps,
          styles = _this$context$_docume4.styles,
          amphtml = _this$context$_docume4.amphtml,
          hasAmp = _this$context$_docume4.hasAmp,
          ampPath = _this$context$_docume4.ampPath,
          assetPrefix = _this$context$_docume4.assetPrefix,
          __NEXT_DATA__ = _this$context$_docume4.__NEXT_DATA__,
          dangerousAsPath = _this$context$_docume4.dangerousAsPath;
      var _devOnlyInvalidateCacheQueryString = this.context._devOnlyInvalidateCacheQueryString;
      var page = __NEXT_DATA__.page,
          buildId = __NEXT_DATA__.buildId,
          dynamicBuildId = __NEXT_DATA__.dynamicBuildId;
      var isDirtyAmp = amphtml && !__NEXT_DATA__.query.amp;
      var head = this.context._documentProps.head;
      var children = this.props.children; // show a warning if Head contains <title> (only in development)

      if (false) {} // show warning and remove conflicting amp head tags


      head = !amphtml ? head : react_1.default.Children.map(head, function (child) {
        if (!child) return child;
        var type = child.type,
            props = child.props;
        var badProp;

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          badProp = 'rel="canonical"';
        } else if (type === 'script') {
          // only block if 
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            (0, _keys.default)(props).forEach(function (prop) {
              badProp += " ".concat(prop, "=\"").concat(props[prop], "\"");
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn("Found conflicting amp tag \"".concat(child.type, "\" with conflicting prop ").concat(badProp, ". https://err.sh/next.js/conflicting-amp-tag"));
          return null;
        }

        return child;
      });
      return react_1.default.createElement("head", (0, _assign.default)({}, this.props), children, head, amphtml && react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width,minimum-scale=1,initial-scale=1"
      }), react_1.default.createElement("link", {
        rel: "canonical",
        href: utils_1.cleanAmpPath(dangerousAsPath)
      }), isDirtyAmp && react_1.default.createElement("link", {
        rel: "amphtml",
        href: getAmpPath(ampPath, dangerousAsPath)
      }), react_1.default.createElement("link", {
        rel: "preload",
        as: "script",
        href: "https://cdn.ampproject.org/v0.js"
      }), styles && react_1.default.createElement("style", {
        "amp-custom": "",
        dangerouslySetInnerHTML: {
          __html: styles.map(function (style) {
            return style.props.dangerouslySetInnerHTML.__html;
          }).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
        }
      }), react_1.default.createElement("style", {
        "amp-boilerplate": "",
        dangerouslySetInnerHTML: {
          __html: "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"
        }
      }), react_1.default.createElement("noscript", null, react_1.default.createElement("style", {
        "amp-boilerplate": "",
        dangerouslySetInnerHTML: {
          __html: "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"
        }
      })), react_1.default.createElement("script", {
        async: true,
        src: "https://cdn.ampproject.org/v0.js"
      })), !amphtml && react_1.default.createElement(react_1.default.Fragment, null, hasAmp && react_1.default.createElement("link", {
        rel: "amphtml",
        href: getAmpPath(ampPath, dangerousAsPath)
      }), page !== '/_error' && react_1.default.createElement("link", {
        rel: "preload",
        href: assetPrefix + (dynamicBuildId ? "/_next/static/client/pages".concat(getPageFile(page, buildId)) : "/_next/static/".concat(buildId, "/pages").concat(getPageFile(page))) + _devOnlyInvalidateCacheQueryString,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }), react_1.default.createElement("link", {
        rel: "preload",
        href: assetPrefix + (dynamicBuildId ? "/_next/static/client/pages/_app.".concat(buildId, ".js") : "/_next/static/".concat(buildId, "/pages/_app.js")) + _devOnlyInvalidateCacheQueryString,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }), this.getPreloadDynamicChunks(), this.getPreloadMainLinks(), this.getCssLinks(), styles || null));
    }
  }]);
  return Head;
}(react_1.Component);

Head.contextTypes = {
  _documentProps: prop_types_1.default.any,
  _devOnlyInvalidateCacheQueryString: prop_types_1.default.string
};
Head.propTypes = {
  nonce: prop_types_1.default.string,
  crossOrigin: prop_types_1.default.string
};
exports.Head = Head;

var Main =
/*#__PURE__*/
function (_react_1$Component4) {
  (0, _inherits2.default)(Main, _react_1$Component4);

  function Main() {
    (0, _classCallCheck2.default)(this, Main);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Main).apply(this, arguments));
  }

  (0, _createClass2.default)(Main, [{
    key: "render",
    value: function render() {
      var html = this.context._documentProps.html;
      return react_1.default.createElement("div", {
        id: "__next",
        dangerouslySetInnerHTML: {
          __html: html
        }
      });
    }
  }]);
  return Main;
}(react_1.Component);

Main.contextTypes = {
  _documentProps: prop_types_1.default.any,
  _devOnlyInvalidateCacheQueryString: prop_types_1.default.string
};
exports.Main = Main;

var NextScript =
/*#__PURE__*/
function (_react_1$Component5) {
  (0, _inherits2.default)(NextScript, _react_1$Component5);

  function NextScript() {
    (0, _classCallCheck2.default)(this, NextScript);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NextScript).apply(this, arguments));
  }

  (0, _createClass2.default)(NextScript, [{
    key: "getDynamicChunks",
    value: function getDynamicChunks() {
      var _this4 = this;

      var _this$context$_docume5 = this.context._documentProps,
          dynamicImports = _this$context$_docume5.dynamicImports,
          assetPrefix = _this$context$_docume5.assetPrefix;
      var _devOnlyInvalidateCacheQueryString = this.context._devOnlyInvalidateCacheQueryString;
      return dynamicImports.map(function (bundle) {
        return react_1.default.createElement("script", {
          async: true,
          key: bundle.file,
          src: "".concat(assetPrefix, "/_next/").concat(bundle.file).concat(_devOnlyInvalidateCacheQueryString),
          nonce: _this4.props.nonce,
          crossOrigin: _this4.props.crossOrigin || undefined
        });
      });
    }
  }, {
    key: "getScripts",
    value: function getScripts() {
      var _this5 = this;

      var _this$context$_docume6 = this.context._documentProps,
          assetPrefix = _this$context$_docume6.assetPrefix,
          files = _this$context$_docume6.files;

      if (!files || files.length === 0) {
        return null;
      }

      var _devOnlyInvalidateCacheQueryString = this.context._devOnlyInvalidateCacheQueryString;
      return files.map(function (file) {
        // Only render .js files here
        if (!/\.js$/.exec(file)) {
          return null;
        }

        return react_1.default.createElement("script", {
          key: file,
          src: "".concat(assetPrefix, "/_next/").concat(file).concat(_devOnlyInvalidateCacheQueryString),
          nonce: _this5.props.nonce,
          async: true,
          crossOrigin: _this5.props.crossOrigin || undefined
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$context$_docume7 = this.context._documentProps,
          staticMarkup = _this$context$_docume7.staticMarkup,
          assetPrefix = _this$context$_docume7.assetPrefix,
          amphtml = _this$context$_docume7.amphtml,
          devFiles = _this$context$_docume7.devFiles,
          __NEXT_DATA__ = _this$context$_docume7.__NEXT_DATA__;
      var _devOnlyInvalidateCacheQueryString = this.context._devOnlyInvalidateCacheQueryString;

      if (amphtml) {
        if (true) {
          return null;
        }

        var _devFiles = [constants_1.CLIENT_STATIC_FILES_RUNTIME_AMP, constants_1.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
        return react_1.default.createElement(react_1.default.Fragment, null, staticMarkup ? null : react_1.default.createElement("script", {
          id: "__NEXT_DATA__",
          type: "application/json",
          nonce: this.props.nonce,
          crossOrigin: this.props.crossOrigin || undefined,
          dangerouslySetInnerHTML: {
            __html: NextScript.getInlineScriptSource(this.context._documentProps)
          },
          "data-amp-development-mode-only": true
        }), _devFiles ? _devFiles.map(function (file) {
          return react_1.default.createElement("script", {
            key: file,
            src: "".concat(assetPrefix, "/_next/").concat(file).concat(_devOnlyInvalidateCacheQueryString),
            nonce: _this6.props.nonce,
            crossOrigin: _this6.props.crossOrigin || undefined,
            "data-amp-development-mode-only": true
          });
        }) : null);
      }

      var page = __NEXT_DATA__.page,
          buildId = __NEXT_DATA__.buildId,
          dynamicBuildId = __NEXT_DATA__.dynamicBuildId;

      if (false) {}

      return react_1.default.createElement(react_1.default.Fragment, null, devFiles ? devFiles.map(function (file) {
        return react_1.default.createElement("script", {
          key: file,
          src: "".concat(assetPrefix, "/_next/").concat(file).concat(_devOnlyInvalidateCacheQueryString),
          nonce: _this6.props.nonce,
          crossOrigin: _this6.props.crossOrigin || undefined
        });
      }) : null, staticMarkup ? null : react_1.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        }
      }), page !== '/_error' && react_1.default.createElement("script", {
        async: true,
        id: "__NEXT_PAGE__".concat(page),
        src: assetPrefix + (dynamicBuildId ? "/_next/static/client/pages".concat(getPageFile(page, buildId)) : "/_next/static/".concat(buildId, "/pages").concat(getPageFile(page))) + _devOnlyInvalidateCacheQueryString,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }), react_1.default.createElement("script", {
        async: true,
        id: "__NEXT_PAGE__/_app",
        src: assetPrefix + (dynamicBuildId ? "/_next/static/client/pages/_app.".concat(buildId, ".js") : "/_next/static/".concat(buildId, "/pages/_app.js")) + _devOnlyInvalidateCacheQueryString,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }), staticMarkup ? null : this.getDynamicChunks(), staticMarkup ? null : this.getScripts());
    }
  }], [{
    key: "getInlineScriptSource",
    value: function getInlineScriptSource(documentProps) {
      var __NEXT_DATA__ = documentProps.__NEXT_DATA__;

      try {
        var data = (0, _stringify.default)(__NEXT_DATA__);
        return htmlescape_1.htmlEscapeJsonString(data);
      } catch (err) {
        if (err.message.indexOf('circular structure')) {
          throw new Error("Circular structure in \"getInitialProps\" result of page \"".concat(__NEXT_DATA__.page, "\". https://err.sh/zeit/next.js/circular-structure"));
        }

        throw err;
      }
    }
  }]);
  return NextScript;
}(react_1.Component);

NextScript.contextTypes = {
  _documentProps: prop_types_1.default.any,
  _devOnlyInvalidateCacheQueryString: prop_types_1.default.string
};
NextScript.propTypes = {
  nonce: prop_types_1.default.string,
  crossOrigin: prop_types_1.default.string
};
exports.NextScript = NextScript;

function getPageFile(page, buildId) {
  if (page === '/') {
    return buildId ? "/index.".concat(buildId, ".js") : '/index.js';
  }

  return buildId ? "".concat(page, ".").concat(buildId, ".js") : "".concat(page, ".js");
}

/***/ }),

/***/ "WH3H":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/server/utils");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bVZc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "production" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gaPq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_font_inter_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2v4L");
/* harmony import */ var _css_font_inter_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_font_inter_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("hjJ8");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8cZr");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      Head = _ref.Head;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-2167263714"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2167263714"
  }, ["*{font-family:\"Inter\",Menlo,Monaco,'Lucida Console','Liberation Mono','DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New',monospace,serif;}", "body{margin:0;padding:25px 50px;}", "p{font-size:14px;line-height:28px;}", "h1{font-size:1.5rem;}", "h2{line-height:40px;}", "section{padding-bottom:20px;max-width:95%;margin:0 auto;}", "button{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#22bad9;border:0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px 7px;}", "button:active{background-color:#1b9db7;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;}", "button:focus{outline:none;}"]));
});

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hjJ8":
/***/ (function(module, exports) {



/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "nWF0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flushToReact;
exports.flushToHTML = flushToHTML;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _style = __webpack_require__("3niX");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function flushToReact() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _style.flush)().map(function (args) {
    var id = args[0];
    var css = args[1];
    return _react.default.createElement('style', {
      id: "__".concat(id),
      // Avoid warnings upon render with a key
      key: "__".concat(id),
      nonce: options.nonce ? options.nonce : undefined,
      dangerouslySetInnerHTML: {
        __html: css
      }
    });
  });
}

function flushToHTML() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _style.flush)().reduce(function (html, args) {
    var id = args[0];
    var css = args[1];
    html += "<style id=\"__".concat(id, "\"").concat(options.nonce ? " nonce=\"".concat(options.nonce, "\"") : '', ">").concat(css, "</style>");
    return html;
  }, '');
}

/***/ }),

/***/ "naWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

//===========//
// Footer.js //
//===========//



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("footer", {
    className: "jsx-1881786838"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1881786838"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    style: {
      fontWeight: '900',
      marginBottom: '1rem'
    },
    className: "jsx-1881786838"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("em", {
    className: "jsx-1881786838"
  }, "Nick Hulea")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-1881786838"
  }, "Contact: ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    prefetch: "true",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Contact",
    alt: "Contact",
    href: "mailto:naeluh@gmail.com",
    className: "jsx-1881786838"
  }, "naeluh@gmail.com")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-1881786838"
  }, "Github: ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    prefetch: "true",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Github",
    alt: "Github",
    href: "https://github.com/naeluh",
    className: "jsx-1881786838"
  }, "https://github.com/naeluh")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-1881786838"
  }, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    title: "About",
    alt: "About",
    prefetch: "true",
    className: "jsx-1881786838"
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-1881786838"
  }, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    title: "Contact",
    alt: "Contact",
    prefetch: "true",
    className: "jsx-1881786838"
  }, "Contact")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1881786838"
  }, ["p.jsx-1881786838{font-size:24px;line-height:36px;}"]), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1881786838"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rt45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2Eek");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FbiP");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ })

/******/ });