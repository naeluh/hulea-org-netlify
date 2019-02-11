module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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

/***/ "./components/App.jsx":
/*!****************************!*\
  !*** ./components/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_font_inter_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/font/inter.css */ "./css/font/inter.css");
/* harmony import */ var _css_font_inter_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_font_inter_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ "./css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/document */ "next/document");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      Head = _ref.Head;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-747104922"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "747104922",
    css: "*{font-family:\"Inter\",Menlo,Monaco,'Lucida Console','Liberation Mono','DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New',monospace,serif;}body{margin:0;padding:25px 50px;}p{font-size:14px;line-height:28px;}h1{font-size:1.5rem;}h2{line-height:40px;}article{text-align:left;margin:0;max-width:900px;}section{padding-bottom:20px;max-width:900px;margin:0 auto;}button{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#22bad9;border:0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px 7px;}button:active{background-color:#1b9db7;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;}button:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPdUIsQUFHa0ssQUFHaEosQUFJTSxBQUlFLEFBR0EsQUFHRCxBQUtJLEFBS0QsQUFRTSxBQUlaLFNBbkNLLElBb0NwQixFQWhDbUIsQ0FVUixDQU5YLEFBR0EsR0FRa0IsS0FKQSxBQWlCaUIsRUEvQm5DLEtBSUEsSUFlZ0IsS0FKaEIsU0FLQSwyQ0FHMkIsTUFTM0IsbUJBUlcsU0FDRyxZQUNDLEtBOUJmLHFFQStCa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvQXBwLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vY3NzL2ZvbnQvaW50ZXIuY3NzJztcbmltcG9ydCAnLi4vY3NzL21haW4uY3NzJztcbmltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCdcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIEhlYWQgfSkgPT4gKFxuICA8bWFpbj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogXCJJbnRlclwiLCBNZW5sbywgTW9uYWNvLCAnTHVjaWRhIENvbnNvbGUnLCAnTGliZXJhdGlvbiBNb25vJywgJ0RlamFWdSBTYW5zIE1vbm8nLCAnQml0c3RyZWFtIFZlcmEgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlLCBzZXJpZjtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggNTBweDtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgICBhcnRpY2xlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgfVxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmJhZDk7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiA1cHggN3B4O1xuICAgICAgfVxuICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjlkYjc7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L21haW4+XG4pXG4iXX0= */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/App.jsx */"
  }));
});

/***/ }),

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
//===========//
// Footer.js //
//===========//



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontWeight: '900',
      marginBottom: '1rem'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", null, "Nick Hulea")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Contact: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    prefetch: true,
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Contact",
    alt: "Contact",
    href: "mailto:naeluh@gmail.com"
  }, "naeluh@gmail.com")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Github: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    prefetch: true,
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Github",
    alt: "Github",
    href: "https://github.com/naeluh"
  }, "https://github.com/naeluh")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    prefetch: true,
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    title: "About",
    alt: "About"
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    prefetch: true,
    href: "/contact"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    title: "Contact",
    alt: "Contact"
  }, "Contact")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
  _inherits(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isActive: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleNav", function () {
      _this.setState(function (prevState) {
        return {
          isActive: !prevState.isActive
        };
      });
    });

    return _this;
  }

  _createClass(Header, [{
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-907819500"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-907819500" + " " + ((this.state.isActive ? 'hide-overlay' : '') || "")
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-907819500"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-907819500"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        onClick: this.toggleNav,
        "aria-label": this.state.isActive ? 'closed' : 'open',
        className: "jsx-907819500" + " " + "list one"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "aria-label": this.state.isActive ? 'closed' : 'open',
        className: "jsx-907819500" + " " + "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-907819500" + " " + "overlay-content"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        id: "close",
        onClick: this.toggleNav,
        className: "jsx-907819500"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-907819500"
      }, "close")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        id: "weblist",
        className: "jsx-907819500"
      }, links.map(function (link, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: index + 1,
          className: "jsx-907819500" + " " + "bk"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: link.href,
          prefetch: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          onClick: _this2.toggleNav,
          href: link.href,
          className: "jsx-907819500" + " " + ((pathname === link.name ? 'is-active' : '') || "")
        }, link.name)));
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "907819500",
        css: "header.jsx-907819500{position:fixed;right:100px;z-index:9999;top:0;}.is-active.jsx-907819500{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvSGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RG9CLEFBRzBCLEFBU1csZUFSZCxZQUNDLGFBQ1AsTUFDUixjQU1BIiwiZmlsZSI6Ii9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgbGlua3MgPSBbe1xuICBocmVmOiAnLycsXG4gIG5hbWU6ICcxMjcuMC4wLjEnXG59LCB7XG4gIGhyZWY6ICcvd29yaycsXG4gIG5hbWU6ICd3b3JrJ1xufSwge1xuICBocmVmOiAnL2NvbnRhY3QnLFxuICBuYW1lOiAnY29udGFjdCdcbn0sIHtcbiAgaHJlZjogJy9hYm91dCcsXG4gIG5hbWU6ICdhYm91dCdcbn1dXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7IGlzQWN0aXZlOiB0cnVlIH1cblxuICBoYW5kbGVDbGljayhldmVudCwgdXJsKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIFJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiBgL3dvcmsvJHt1cmx9YCxcbiAgICAgIGFzUGF0aDogYC93b3JrLyR7dXJsfWBcbiAgICB9KTtcbiAgfVxuICBcblxuICB0b2dnbGVOYXYgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIGlzQWN0aXZlOiAhcHJldlN0YXRlLmlzQWN0aXZlXG4gICAgfSkpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNBY3RpdmUgPyAnaGlkZS1vdmVybGF5JyA6ICcnfT5cbiAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy50b2dnbGVOYXZ9IGNsYXNzTmFtZT1cImxpc3Qgb25lXCIgYXJpYS1sYWJlbD17dGhpcy5zdGF0ZS5pc0FjdGl2ZSA/ICdjbG9zZWQnIDogJ29wZW4nfT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBhcmlhLWxhYmVsPXt0aGlzLnN0YXRlLmlzQWN0aXZlID8gJ2Nsb3NlZCcgOiAnb3Blbid9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlXCIgb25DbGljaz17dGhpcy50b2dnbGVOYXZ9PjxzcGFuPmNsb3NlPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8dWwgaWQ9XCJ3ZWJsaXN0XCI+XG4gICAgICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJia1wiIGtleT17aW5kZXggKyAxfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGluay5ocmVmfSBwcmVmZXRjaCA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTmF2fSBocmVmPXtsaW5rLmhyZWZ9IGNsYXNzTmFtZT17cGF0aG5hbWUgPT09IGxpbmsubmFtZSA/ICdpcy1hY3RpdmUnIDogJyd9PntsaW5rLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHJpZ2h0OiAxMDBweDtcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgXG4gICAgICAgIH1cbiAgICAgICAgLmlzLWFjdGl2ZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvaGVhZGVyPlxuICAgIClcbiAgfVxufVxuXG4vKiBcbmNvbnN0IEhlYWRlciA9ICh7IHJvdXRlcjogeyBwYXRobmFtZSB9IH0pID0+IChcblxuICA8aGVhZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzID8gJ2hpZGUtb3ZlcmxheScgOiAnJ30+XG4gICAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIG9uQ2xpY2s9e3RvZ2dsZU5hdn0gY2xhc3NOYW1lPVwibGlzdCBvbmVcIj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTmF2fSBpZD1cIm1lbnVfYnV0b29uXCIgYXJpYS1sYWJlbD1cImNsb3NlZFwiID48L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5LWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiY2xvc2VcIj48c3Bhbj5jbG9zZTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8dWwgaWQ9XCJ3ZWJsaXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmtcIj5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nLyc+PGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy8nID8gJ2lzLWFjdGl2ZScgOiAnJ30+MTI3LjAuMC4xPC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmtcIj5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL3dvcmsnPjxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvd29yaycgPyAnaXMtYWN0aXZlJyA6ICcnfT5Xb3JrPC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmtcIj5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2NvbnRhY3QnPjxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvY29udGFjdCcgPyAnaXMtYWN0aXZlJyA6ICcnfT5Db250YWN0PC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmtcIj5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2Fib3V0Jz48YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Fib3V0JyA/ICdpcy1hY3RpdmUnIDogJyd9PkFib3V0PC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHJpZ2h0OiAxMDBweDtcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgfVxuICAgICAgYSB7XG5cbiAgICAgIH1cbiAgICAgIC5pcy1hY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKSAqL1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEhlYWRlcilcbiJdfQ== */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/Header.jsx */"
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
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


/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Header));

/***/ }),

/***/ "./components/Home.jsx":
/*!*****************************!*\
  !*** ./components/Home.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      height: '',
      width: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getRandomArbitrary", function (min, max) {
      return Math.random() * (max - min) + min;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "color", function () {
      return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "r", _this.getRandomArbitrary(1.3432, 70.6546));

    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.style.overflowX = "hidden";
      var client = react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.findDOMNode(this.refs['block']).getBoundingClientRect();
      this.setState(function (state) {
        return {
          height: client.height,
          width: client.width
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1007854767" + " " + "background-content"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-1007854767" + " " + "offset60"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        id: "title",
        className: "jsx-1007854767"
      }, "Nick Hulea"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        id: "description",
        className: "jsx-1007854767"
      }, "Hello you have arrived at the website of Nick Hulea !"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1007854767"
      }, "Samples of my work can be found ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/work"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-1007854767"
      }, "here")), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1007854767"
      }, "If you would like to contact me or if you have any questions click ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/contact"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-1007854767"
      }, "here")), ".")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "block",
        ref: "block",
        style: {
          transform: 'rotate3d(1, 1, 1, ' + this.r + 'deg)',
          backgroundColor: this.color(),
          height: this.state.height,
          width: this.state.width
        },
        className: "jsx-1007854767"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1007854767",
        css: "body.jsx-1007854767{overflow-x:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvSG9tZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RvQixBQUc0QixrQkFDbkIiLCJmaWxlIjoiL21udC9kL3dhbXA2NC93d3cvYXBvbGxvLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9Ib21lLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgaGVpZ2h0OiAnJyxcclxuICAgIHdpZHRoOiAnJ1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WCA9IFwiaGlkZGVuXCI7XHJcbiAgICBjb25zdCBjbGllbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ2Jsb2NrJ10pLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XHJcbiAgICAgIGhlaWdodDogY2xpZW50LmhlaWdodCxcclxuICAgICAgd2lkdGg6IGNsaWVudC53aWR0aFxyXG4gICAgfSkpXHJcbiAgfVxyXG5cclxuICBnZXRSYW5kb21BcmJpdHJhcnkgPSAobWluLCBtYXgpID0+IHtcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW5cclxuICB9XHJcblxyXG4gIGNvbG9yID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICcjJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIsIDgpLnRvVXBwZXJDYXNlKClcclxuICB9XHJcblxyXG4gIHIgPSB0aGlzLmdldFJhbmRvbUFyYml0cmFyeSgxLjM0MzIsIDcwLjY1NDYpXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1jb250ZW50XCI+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm9mZnNldDYwXCI+XHJcblxyXG4gICAgICAgICAgPGgxIGlkPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgTmljayBIdWxlYVxyXG4gICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICA8cCBpZD1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIEhlbGxvIHlvdSBoYXZlIGFycml2ZWQgYXQgdGhlIHdlYnNpdGUgb2YgTmljayBIdWxlYSAhXHJcbiAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgPHA+U2FtcGxlcyBvZiBteSB3b3JrIGNhbiBiZSBmb3VuZCA8TGluayBwcmVmZXRjaCBocmVmPVwiL3dvcmtcIj48YT5oZXJlPC9hPjwvTGluaz4uPC9wPlxyXG5cclxuICAgICAgICAgIDxwPklmIHlvdSB3b3VsZCBsaWtlIHRvIGNvbnRhY3QgbWUgb3IgaWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBjbGljayA8TGluayBwcmVmZXRjaCBocmVmPVwiL2NvbnRhY3RcIj48YT5oZXJlPC9hPjwvTGluaz4uPC9wPlxyXG5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJibG9ja1wiIHJlZj1cImJsb2NrXCIgc3R5bGU9e3tcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZTNkKDEsIDEsIDEsICcgKyB0aGlzLnIgKyAnZGVnKScsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuY29sb3IoKSxcclxuICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS53aWR0aFxyXG4gICAgICAgIH19PjwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXX0= */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/Home.jsx */"
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./css/font/inter.css":
/*!****************************!*\
  !*** ./css/font/inter.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/clock/actions.js":
/*!******************************!*\
  !*** ./lib/clock/actions.js ***!
  \******************************/
/*! exports provided: actionTypes, startClock, tickClock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startClock", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickClock", function() { return tickClock; });
var actionTypes = {
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK'
};
function startClock() {
  var isServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    type: actionTypes.START_CLOCK,
    light: isServer,
    lastUpdate: null
  };
}
function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    lastUpdate: Date.now()
  };
}

/***/ }),

/***/ "./lib/clock/reducers.js":
/*!*******************************!*\
  !*** ./lib/clock/reducers.js ***!
  \*******************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/clock/actions.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  lastUpdate: 0,
  light: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].TICK_CLOCK:
      return _objectSpread({}, state, {
        lastUpdate: action.lastUpdate,
        light: !!action.light
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./lib/clock/sagas.js":
/*!****************************!*\
  !*** ./lib/clock/sagas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./lib/clock/actions.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(runClockSaga);






es6_promise__WEBPACK_IMPORTED_MODULE_3___default.a.polyfill();

function runClockSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function runClockSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["take"])(_actions__WEBPACK_IMPORTED_MODULE_5__["actionTypes"].START_CLOCK);

        case 2:
          if (false) {}

          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["tickClock"])(false));

        case 5:
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(redux_saga__WEBPACK_IMPORTED_MODULE_1__["delay"], 800);

        case 7:
          _context.next = 2;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(runClockSaga));

/***/ }),

/***/ "./lib/count/actions.js":
/*!******************************!*\
  !*** ./lib/count/actions.js ***!
  \******************************/
/*! exports provided: actionTypes, countIncrease, countDecrease */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countIncrease", function() { return countIncrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countDecrease", function() { return countDecrease; });
var actionTypes = {
  COUNT_INCREASE: 'COUNT_INCREASE',
  COUNT_DECREASE: 'COUNT_DECREASE'
};
function countIncrease() {
  return {
    type: actionTypes.COUNT_INCREASE
  };
}
function countDecrease() {
  return {
    type: actionTypes.COUNT_DECREASE
  };
}

/***/ }),

/***/ "./lib/count/reducers.js":
/*!*******************************!*\
  !*** ./lib/count/reducers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/count/actions.js");

var initialState = 0;

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].COUNT_INCREASE:
      return state + 1;

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].COUNT_DECREASE:
      return state - 1;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./lib/placeholder/actions.js":
/*!************************************!*\
  !*** ./lib/placeholder/actions.js ***!
  \************************************/
/*! exports provided: actionTypes, loadData, loadDataSuccess, loadDataError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataSuccess", function() { return loadDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataError", function() { return loadDataError; });
var actionTypes = {
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOAD_DATA_ERROR: 'LOAD_DATA_ERROR'
};
function loadData() {
  return {
    type: actionTypes.LOAD_DATA
  };
}
function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data: data
  };
}
function loadDataError(error) {
  return {
    type: actionTypes.LOAD_DATA_ERROR,
    error: error
  };
}

/***/ }),

/***/ "./lib/placeholder/reducers.js":
/*!*************************************!*\
  !*** ./lib/placeholder/reducers.js ***!
  \*************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./lib/placeholder/actions.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  data: null,
  error: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_DATA_SUCCESS:
      return _objectSpread({}, state, {
        data: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_DATA_ERROR:
      return _objectSpread({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./lib/placeholder/sagas.js":
/*!**********************************!*\
  !*** ./lib/placeholder/sagas.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./lib/placeholder/actions.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadDataSaga);





es6_promise__WEBPACK_IMPORTED_MODULE_2___default.a.polyfill();

function loadDataSaga() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadDataSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://jsonplaceholder.typicode.com/users');

        case 3:
          res = _context.sent;
          _context.next = 6;
          return res.json();

        case 6:
          data = _context.sent;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadDataSuccess"])(data));

        case 9:
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadDataError"])(_context.t0));

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 11]]);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_4__["actionTypes"].LOAD_DATA, loadDataSaga));

/***/ }),

/***/ "./lib/rootReducer.js":
/*!****************************!*\
  !*** ./lib/rootReducer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _clock_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock/reducers */ "./lib/clock/reducers.js");
/* harmony import */ var _count_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./count/reducers */ "./lib/count/reducers.js");
/* harmony import */ var _placeholder_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeholder/reducers */ "./lib/placeholder/reducers.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  clock: _clock_reducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  count: _count_reducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  placeholder: _placeholder_reducers__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./lib/rootSaga.js":
/*!*************************!*\
  !*** ./lib/rootSaga.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _clock_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clock/sagas */ "./lib/clock/sagas.js");
/* harmony import */ var _placeholder_sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeholder/sagas */ "./lib/placeholder/sagas.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);





function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([_clock_sagas__WEBPACK_IMPORTED_MODULE_2__["default"], _placeholder_sagas__WEBPACK_IMPORTED_MODULE_3__["default"]]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ }),

/***/ "./lib/withReduxSaga.js":
/*!******************************!*\
  !*** ./lib/withReduxSaga.js ***!
  \******************************/
/*! exports provided: configureStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rootReducer */ "./lib/rootReducer.js");
/* harmony import */ var _rootSaga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rootSaga */ "./lib/rootSaga.js");







var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_5__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(sagaMiddleware)));
  store.sagaTask = sagaMiddleware.run(_rootSaga__WEBPACK_IMPORTED_MODULE_6__["default"]);
  return store;
}
/* harmony default export */ __webpack_exports__["default"] = (function (BaseComponent) {
  return next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(configureStore)(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(BaseComponent));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_withReduxSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/withReduxSaga */ "./lib/withReduxSaga.js");
/* harmony import */ var _lib_clock_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/clock/actions */ "./lib/clock/actions.js");
/* harmony import */ var _lib_count_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/count/actions */ "./lib/count/actions.js");
/* harmony import */ var _lib_placeholder_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/placeholder/actions */ "./lib/placeholder/actions.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/App */ "./components/App.jsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.jsx");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Home */ "./components/Home.jsx");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var PageIndex =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageIndex, _React$Component);

  function PageIndex() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PageIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PageIndex)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isActive: true
    });

    return _this;
  }

  _createClass(PageIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch(Object(_lib_clock_actions__WEBPACK_IMPORTED_MODULE_3__["startClock"])());
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Home Page"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var store;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store;
                store.dispatch(Object(_lib_count_actions__WEBPACK_IMPORTED_MODULE_4__["countIncrease"])());

                if (!store.getState().placeholder.data) {
                  store.dispatch(Object(_lib_placeholder_actions__WEBPACK_IMPORTED_MODULE_5__["loadData"])());
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return PageIndex;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withReduxSaga__WEBPACK_IMPORTED_MODULE_2__["default"])(PageIndex));

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/document":
/*!********************************!*\
  !*** external "next/document" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map