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
      className: "jsx-3489148862"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
      className: "jsx-3489148862"
    }, basic.Title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
      name: "title",
      content: basic.Title,
      className: "jsx-3489148862"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
      name: "description",
      content: basic.Body,
      className: "jsx-3489148862"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: basic.id,
      className: "jsx-3489148862"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      className: "jsx-3489148862"
    }, basic.Title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_7___default.a, {
      source: basic.Body
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3489148862"
    }, "*.jsx-3489148862{box-sizing:border-box;}li.jsx-3489148862{display:block;margin-bottom:10px;}a.jsx-3489148862{-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;color:#000;font-weight:400;}ul.jsx-3489148862{margin:0;padding:0;}h4.jsx-3489148862{line-height:1.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvQmFzaWNQYWdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Qm9CLEFBR21DLEFBR1IsQUFJTyxBQVNaLEFBSU8sU0FITixLQWJTLEVBaUJyQixHQUhBLEdBakJBLFdBSUEsaUJBR21CLGlCQUNSLFNBQ0UsV0FDSyxnQkFDbEIiLCJmaWxlIjoiL21udC9kL3dhbXA2NC93d3cvYXBvbGxvLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9CYXNpY1BhZ2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmZ1bmN0aW9uIFBvc3QoeyBkYXRhOiB7IGVycm9yLCBiYXNpY3MgfSB9KSB7XG4gIGxldCBiYXNpYyA9IGJhc2ljcyAhPT0gdW5kZWZpbmVkID8gYmFzaWNzWzBdIDogXCJcIjtcbiAgaWYgKGVycm9yIHx8IGJhc2ljcyA9PT0gXCJcIilcbiAgICByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPVwiRXJyb3IgbG9hZGluZyBibG9nIHBvc3QuXCIgLz47XG4gIGlmIChiYXNpYykge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPntiYXNpYy5UaXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9e2Jhc2ljLlRpdGxlfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Jhc2ljLkJvZHl9IC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBrZXk9e2Jhc2ljLmlkfT5cbiAgICAgICAgICA8aDE+e2Jhc2ljLlRpdGxlfTwvaDE+XG4gICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtiYXNpYy5Cb2R5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDQge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG59XG5cbmNvbnN0IHBvc3QgPSBncWxgXG4gIHF1ZXJ5IGJhc2ljcygkdXJsOiBTdHJpbmchKSB7XG4gICAgYmFzaWNzKHdoZXJlOiB7IFVSTDogJHVybCB9LCBsaW1pdDogMSkge1xuICAgICAgVGl0bGVcbiAgICAgIF9pZFxuICAgICAgSW1hZ2Uge1xuICAgICAgICB1cmxcbiAgICAgICAgZXh0XG4gICAgICAgIHByb3ZpZGVyXG4gICAgICAgIHNpemVcbiAgICAgIH1cbiAgICAgIEJvZHlcbiAgICAgIFVSTFxuICAgICAgY3JlYXRlZEF0XG4gICAgICB1cGRhdGVkQXRcbiAgICB9XG4gIH1cbmA7XG5cbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXG4vLyBhdmFpbGFibGUgb24gdGhlIGBkYXRhYCBwcm9wIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCAoUG9zdExpc3QpXG5jb25zdCBDb21wb25lbnRXaXRoTXV0YXRpb24gPSBncmFwaHFsKHBvc3QsIHtcbiAgb3B0aW9uczogKHsgcm91dGVyOiB7IHBhdGhuYW1lIH0gfSkgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHVybDogcGF0aG5hbWUucmVwbGFjZShcIi9cIiwgXCJcIilcbiAgICB9XG4gIH0pLFxuICBwcm9wczogKHsgZGF0YSB9KSA9PiAoe1xuICAgIGRhdGFcbiAgfSlcbn0pKFBvc3QpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKENvbXBvbmVudFdpdGhNdXRhdGlvbik7XG4iXX0= */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/BasicPage.jsx */"));
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
//# sourceMappingURL=about.js.e0c4cb6b4e1627a46099.hot-update.js.map