webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home.jsx":
/*!*****************************!*\
  !*** ./components/Home.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);













var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _React$Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      height: "",
      width: "",
      color: "",
      r: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getRandomArbitrary", function (min, max) {
      return Math.random() * (max - min) + min;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "color", function () {
      return "#" + Math.random().toString(16).slice(2, 8).toUpperCase();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "r", _this.getRandomArbitrary(1.3432, 7.6546));

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.body.style.overflowX = "hidden";
      this.setState({
        height: window.innerHeight,
        width: window.innerWidth,
        color: this.color(),
        r: "rotate3d(1, 1, 1, " + this.r + "deg)"
      });
      window.addEventListener("resize", function () {
        _this2.setState({
          height: window.innerHeight,
          width: window.innerWidth,
          color: _this2.color(),
          r: "rotate3d(1, 1, 1, " + _this2.getRandomArbitrary(_this2.getRandomArbitrary(1.3432, 7.6546), _this2.getRandomArbitrary(1.3432, 7.6546)) + "deg)"
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "jsx-1905242795"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", {
        className: "jsx-1905242795"
      }, "Nick Hulea"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "title",
        content: "Nick Hulea's Website!",
        className: "jsx-1905242795"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "description",
        content: "Nick Hulea's Website!",
        className: "jsx-1905242795"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1905242795"
      }, "Welcome!"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1905242795"
      }, "Hello you have arrived at the website of Nick Hulea !"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1905242795"
      }, "Samples of my work can be found", " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/work"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        prefetch: "true",
        className: "jsx-1905242795"
      }, "here")), "."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1905242795"
      }, "If you would like to contact me or if you have any questions click", " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/contact"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        prefetch: "true",
        className: "jsx-1905242795"
      }, "here")), "."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "block",
        ref: "block",
        style: {
          transform: this.state.r,
          backgroundColor: this.state.color,
          height: this.state.height,
          width: this.state.width
        },
        className: "jsx-1905242795"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1905242795" + " " + "clear"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1905242795"
      }, "h1.jsx-1905242795{font-weight:900;font-size:100px;line-height:1;-webkit-letter-spacing:-0.05em;-moz-letter-spacing:-0.05em;-ms-letter-spacing:-0.05em;letter-spacing:-0.05em;}p.jsx-1905242795{font-weight:600;font-size:45px;line-height:1.1;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;}@media only screen and (max-width:480px){h1.jsx-1905242795{font-size:45px;}p.jsx-1905242795{font-size:35px;}}body.jsx-1905242795,#block.jsx-1905242795{overflow-x:hidden;}#block.jsx-1905242795{position:fixed;top:0;left:0;z-index:-1;}.clear.jsx-1905242795{clear:both;height:75vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvSG9tZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0ZvQixBQUc2QixBQU1BLEFBT0MsQUFHQSxBQUtDLEFBR0gsQUFNSixXQUNDLElBakJaLEFBR0EsQUFRTSxDQXhCVSxBQU1ELEVBZWpCLEdBSVMsRUFNVCxLQUxhLEdBbkJLLENBTkYsT0EwQmhCLE9BekJ5QixDQU1BLDRHQUx6QixDQU1BIiwiZmlsZSI6Ii9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvSG9tZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBoZWlnaHQ6IFwiXCIsXHJcbiAgICB3aWR0aDogXCJcIixcclxuICAgIGNvbG9yOiBcIlwiLFxyXG4gICAgcjogXCJcIlxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1ggPSBcImhpZGRlblwiO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yKCksXHJcbiAgICAgIHI6IFwicm90YXRlM2QoMSwgMSwgMSwgXCIgKyB0aGlzLnIgKyBcImRlZylcIlxyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICBjb2xvcjogdGhpcy5jb2xvcigpLFxyXG4gICAgICAgIHI6XHJcbiAgICAgICAgICBcInJvdGF0ZTNkKDEsIDEsIDEsIFwiICtcclxuICAgICAgICAgIHRoaXMuZ2V0UmFuZG9tQXJiaXRyYXJ5KFxyXG4gICAgICAgICAgICB0aGlzLmdldFJhbmRvbUFyYml0cmFyeSgxLjM0MzIsIDcuNjU0NiksXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmFuZG9tQXJiaXRyYXJ5KDEuMzQzMiwgNy42NTQ2KVxyXG4gICAgICAgICAgKSArXHJcbiAgICAgICAgICBcImRlZylcIlxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmFuZG9tQXJiaXRyYXJ5ID0gKG1pbiwgbWF4KSA9PiB7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gIH07XHJcblxyXG4gIGNvbG9yID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgXCIjXCIgK1xyXG4gICAgICBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgICAgIC5zbGljZSgyLCA4KVxyXG4gICAgICAgIC50b1VwcGVyQ2FzZSgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHIgPSB0aGlzLmdldFJhbmRvbUFyYml0cmFyeSgxLjM0MzIsIDcuNjU0Nik7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPk5pY2sgSHVsZWE8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD1cIk5pY2sgSHVsZWEncyBXZWJzaXRlIVwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTmljayBIdWxlYSdzIFdlYnNpdGUhXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgIDxoMT5XZWxjb21lITwvaDE+XHJcblxyXG4gICAgICAgIDxwPkhlbGxvIHlvdSBoYXZlIGFycml2ZWQgYXQgdGhlIHdlYnNpdGUgb2YgTmljayBIdWxlYSAhPC9wPlxyXG5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFNhbXBsZXMgb2YgbXkgd29yayBjYW4gYmUgZm91bmR7XCIgXCJ9XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3dvcmtcIj5cclxuICAgICAgICAgICAgPGEgcHJlZmV0Y2g9XCJ0cnVlXCI+aGVyZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIC5cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgSWYgeW91IHdvdWxkIGxpa2UgdG8gY29udGFjdCBtZSBvciBpZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zIGNsaWNre1wiIFwifVxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgIDxhIHByZWZldGNoPVwidHJ1ZVwiPmhlcmU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAuXHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBpZD1cImJsb2NrXCJcclxuICAgICAgICAgIHJlZj1cImJsb2NrXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdGhpcy5zdGF0ZS5yLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuY29sb3IsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIiAvPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDVlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYm9keSxcclxuICAgICAgICAgICNibG9jayB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNibG9jayB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jbGVhciB7XHJcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl19 */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/Home.jsx */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.aae4add95ee1d2f57521.hot-update.js.map