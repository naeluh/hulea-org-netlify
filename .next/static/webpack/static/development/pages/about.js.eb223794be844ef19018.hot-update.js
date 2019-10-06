webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/BasicPage.jsx":
/*!**********************************!*\
  !*** ./components/BasicPage.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.jsx");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query basics($url: String!) {\n    basics(where: { URL: $url }, limit: 1) {\n      Title\n      _id\n      Image {\n        url\n        ext\n        provider\n        size\n      }\n      Body\n      URL\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









function Post(_ref) {
  var _ref$data = _ref.data,
      error = _ref$data.error,
      basics = _ref$data.basics;
  var basic = basics !== undefined ? basics[0] : "";
  if (error || basics === "") return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: "Error loading blog post."
  });

  if (basic) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
      className: "jsx-3143715208"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
      className: "jsx-3143715208"
    }, basic.Title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
      name: "title",
      content: basic.Title,
      className: "jsx-3143715208"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
      name: "description",
      content: basic.Body,
      className: "jsx-3143715208"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: basic.id,
      className: "jsx-3143715208"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      className: "jsx-3143715208"
    }, basic.Title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3143715208" + " " + "basicPage"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_7___default.a, {
      source: basic.Body
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3143715208"
    }, "*.jsx-3143715208{box-sizing:border-box;}li.jsx-3143715208{display:block;margin-bottom:1em;line-height:1.25;}a.jsx-3143715208{-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;color:#000;font-weight:400;}ul.jsx-3143715208{margin:0;padding:0;}h4.jsx-3143715208{line-height:1.5;}@media only screen and (max-width:480px){*.jsx-3143715208{box-sizing:border-box;}li.jsx-3143715208{display:block;margin-bottom:1em;line-height:1.25;}a.jsx-3143715208{-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;color:#000;font-weight:400;}ul.jsx-3143715208{margin:0;padding:0;}h4.jsx-3143715208{line-height:1.5;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L25ldGxpZnktc2l0ZS9jb21wb25lbnRzL0Jhc2ljUGFnZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJvQixBQUdtQyxBQUdSLEFBS08sQUFPWixBQUlPLEFBSU0sQUFHUixBQUtPLEFBT1osQUFJTyxTQTFCTixBQXVCQSxLQW5DUSxBQXVCQSxFQVBwQixBQXVCQSxHQTFCQSxBQXVCQSxHQXZDQSxBQXVCQSxVQW5CbUIsQUF1QkEsaUJBdEJuQixBQXVCQSxDQXBCbUIsQUF1QkEsaUJBdEJSLEFBdUJBLFNBdEJFLEFBdUJBLFdBdEJLLEFBdUJBLGdCQXRCbEIsQUF1QkEiLCJmaWxlIjoiL3Zhci93d3cvbmV0bGlmeS1zaXRlL2NvbXBvbmVudHMvQmFzaWNQYWdlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5mdW5jdGlvbiBQb3N0KHsgZGF0YTogeyBlcnJvciwgYmFzaWNzIH0gfSkge1xuICBsZXQgYmFzaWMgPSBiYXNpY3MgIT09IHVuZGVmaW5lZCA/IGJhc2ljc1swXSA6IFwiXCI7XG4gIGlmIChlcnJvciB8fCBiYXNpY3MgPT09IFwiXCIpXG4gICAgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT1cIkVycm9yIGxvYWRpbmcgYmxvZyBwb3N0LlwiIC8+O1xuICBpZiAoYmFzaWMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57YmFzaWMuVGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIiBjb250ZW50PXtiYXNpYy5UaXRsZX0gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtiYXNpYy5Cb2R5fSAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYga2V5PXtiYXNpYy5pZH0+XG4gICAgICAgICAgPGgxPntiYXNpYy5UaXRsZX08L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzaWNQYWdlXCI+XG4gICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e2Jhc2ljLkJvZHl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2Pjtcbn1cblxuY29uc3QgcG9zdCA9IGdxbGBcbiAgcXVlcnkgYmFzaWNzKCR1cmw6IFN0cmluZyEpIHtcbiAgICBiYXNpY3Mod2hlcmU6IHsgVVJMOiAkdXJsIH0sIGxpbWl0OiAxKSB7XG4gICAgICBUaXRsZVxuICAgICAgX2lkXG4gICAgICBJbWFnZSB7XG4gICAgICAgIHVybFxuICAgICAgICBleHRcbiAgICAgICAgcHJvdmlkZXJcbiAgICAgICAgc2l6ZVxuICAgICAgfVxuICAgICAgQm9keVxuICAgICAgVVJMXG4gICAgICBjcmVhdGVkQXRcbiAgICAgIHVwZGF0ZWRBdFxuICAgIH1cbiAgfVxuYDtcblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChQb3N0TGlzdClcbmNvbnN0IENvbXBvbmVudFdpdGhNdXRhdGlvbiA9IGdyYXBocWwocG9zdCwge1xuICBvcHRpb25zOiAoeyByb3V0ZXI6IHsgcGF0aG5hbWUgfSB9KSA9PiAoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgdXJsOiBwYXRobmFtZS5yZXBsYWNlKFwiL1wiLCBcIlwiKVxuICAgIH1cbiAgfSksXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YVxuICB9KVxufSkoUG9zdCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQ29tcG9uZW50V2l0aE11dGF0aW9uKTtcbiJdfQ== */\n/*@ sourceURL=/var/www/netlify-site/components/BasicPage.jsx */"));
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "Loading");
}

var post = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()); // The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)

var ComponentWithMutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(post, {
  options: function options(_ref2) {
    var pathname = _ref2.router.pathname;
    return {
      variables: {
        url: pathname.replace("/", "")
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
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(ComponentWithMutation));

/***/ })

})
//# sourceMappingURL=about.js.eb223794be844ef19018.hot-update.js.map