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
      className: "jsx-3565785541"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
      className: "jsx-3565785541"
    }, basic.Title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
      name: "title",
      content: basic.Title,
      className: "jsx-3565785541"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
      name: "description",
      content: basic.Body,
      className: "jsx-3565785541"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: basic.id,
      className: "jsx-3565785541"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      className: "jsx-3565785541"
    }, basic.Title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3565785541" + " " + "basicPage"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_7___default.a, {
      source: basic.Body
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3565785541"
    }, "*.jsx-3565785541{box-sizing:border-box;}li.jsx-3565785541{display:block;margin-bottom:1em;line-height:1.25;}a.jsx-3565785541{-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;color:#000;font-weight:400;}ul.jsx-3565785541{margin:0;padding:0;}h4.jsx-3565785541{line-height:1.5;}@media only screen and (max-width:480px){*.jsx-3565785541{box-sizing:border-box;}li.jsx-3565785541{display:block;margin-bottom:1em;line-height:1.25;}a.jsx-3565785541{-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;color:#000;font-weight:400;}ul.jsx-3565785541{margin:0;padding:0;}h4.jsx-3565785541{line-height:1.5;font-size:20;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L25ldGxpZnktc2l0ZS9jb21wb25lbnRzL0Jhc2ljUGFnZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJvQixBQUdtQyxBQUdSLEFBS08sQUFPWixBQUlPLEFBSVEsQUFHUixBQUtPLEFBT1osQUFJTyxTQTFCUixBQXVCRSxLQW5DTSxBQXVCRSxFQVB0QixBQXVCaUIsR0ExQmpCLEFBdUJFLEdBdkNGLEFBdUJFLE9Bb0JBLEdBdkNpQixBQXVCRSxpQkF0QnJCLEFBdUJFLENBcEJpQixBQXVCRSxpQkF0QlYsQUF1QkUsU0F0QkEsQUF1QkUsV0F0QkcsQUF1QkUsZ0JBdEJwQixBQXVCRSIsImZpbGUiOiIvdmFyL3d3dy9uZXRsaWZ5LXNpdGUvY29tcG9uZW50cy9CYXNpY1BhZ2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmZ1bmN0aW9uIFBvc3QoeyBkYXRhOiB7IGVycm9yLCBiYXNpY3MgfSB9KSB7XG4gIGxldCBiYXNpYyA9IGJhc2ljcyAhPT0gdW5kZWZpbmVkID8gYmFzaWNzWzBdIDogXCJcIjtcbiAgaWYgKGVycm9yIHx8IGJhc2ljcyA9PT0gXCJcIilcbiAgICByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPVwiRXJyb3IgbG9hZGluZyBibG9nIHBvc3QuXCIgLz47XG4gIGlmIChiYXNpYykge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPntiYXNpYy5UaXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9e2Jhc2ljLlRpdGxlfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Jhc2ljLkJvZHl9IC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBrZXk9e2Jhc2ljLmlkfT5cbiAgICAgICAgICA8aDE+e2Jhc2ljLlRpdGxlfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpY1BhZ2VcIj5cbiAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17YmFzaWMuQm9keX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xufVxuXG5jb25zdCBwb3N0ID0gZ3FsYFxuICBxdWVyeSBiYXNpY3MoJHVybDogU3RyaW5nISkge1xuICAgIGJhc2ljcyh3aGVyZTogeyBVUkw6ICR1cmwgfSwgbGltaXQ6IDEpIHtcbiAgICAgIFRpdGxlXG4gICAgICBfaWRcbiAgICAgIEltYWdlIHtcbiAgICAgICAgdXJsXG4gICAgICAgIGV4dFxuICAgICAgICBwcm92aWRlclxuICAgICAgICBzaXplXG4gICAgICB9XG4gICAgICBCb2R5XG4gICAgICBVUkxcbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdXBkYXRlZEF0XG4gICAgfVxuICB9XG5gO1xuXG4vLyBUaGUgYGdyYXBocWxgIHdyYXBwZXIgZXhlY3V0ZXMgYSBHcmFwaFFMIHF1ZXJ5IGFuZCBtYWtlcyB0aGUgcmVzdWx0c1xuLy8gYXZhaWxhYmxlIG9uIHRoZSBgZGF0YWAgcHJvcCBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgKFBvc3RMaXN0KVxuY29uc3QgQ29tcG9uZW50V2l0aE11dGF0aW9uID0gZ3JhcGhxbChwb3N0LCB7XG4gIG9wdGlvbnM6ICh7IHJvdXRlcjogeyBwYXRobmFtZSB9IH0pID0+ICh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICB1cmw6IHBhdGhuYW1lLnJlcGxhY2UoXCIvXCIsIFwiXCIpXG4gICAgfVxuICB9KSxcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhXG4gIH0pXG59KShQb3N0KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihDb21wb25lbnRXaXRoTXV0YXRpb24pO1xuIl19 */\n/*@ sourceURL=/var/www/netlify-site/components/BasicPage.jsx */"));
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
//# sourceMappingURL=about.js.a77a79bfccecea3bf08f.hot-update.js.map