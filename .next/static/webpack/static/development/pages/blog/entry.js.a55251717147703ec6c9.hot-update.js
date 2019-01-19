webpackHotUpdate("static/development/pages/blog/entry.js",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _PostVoteUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostVoteUp */ "./components/PostVoteUp.js");
/* harmony import */ var _PostVoteDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostVoteDown */ "./components/PostVoteDown.js");
/* harmony import */ var _PostVoteCount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostVoteCount */ "./components/PostVoteCount.js");


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query web($id: ID!) {\n    web(id: $id) {\n      Title\n      _id\n      Image {\n        url\n        ext\n        provider\n        size\n      }\n      Description\n      Data\n      URL\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










function Post(_ref) {
  var _ref$data = _ref.data,
      error = _ref$data.error,
      web = _ref$data.web;
  console.log(web);
  if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: "Error loading blog post."
  });

  if (web) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-3508637325"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: web.id,
      className: "jsx-3508637325"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-3508637325"
    }, web.Title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3508637325"
    }, "ID: ", web._id, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-3508637325"
    }), "URL: ", web.URL), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3508637325"
    }, web.Description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3508637325"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: web.Image !== null ? "https://strapi.hulea.org/".concat(web.Image.url) : '',
      className: "jsx-3508637325"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3508637325"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostVoteUp__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: Post.id,
      votes: Post.votes
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostVoteCount__WEBPACK_IMPORTED_MODULE_8__["default"], {
      votes: Post.votes
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostVoteDown__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: Post.id,
      votes: Post.votes
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "3508637325",
      css: "span.jsx-3508637325{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:14px;margin-right:5px;}img.jsx-3508637325{width:100%;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYXBvbGxvLXJlZHV4LW5leHQtd2Vic2l0ZS9jb21wb25lbnRzL1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJvQixBQUcwQixBQUtGLFdBQ0MsWUFDZCxtREFOaUIsZUFDRSxpQkFDbkIiLCJmaWxlIjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9hcG9sbG8tcmVkdXgtbmV4dC13ZWJzaXRlL2NvbXBvbmVudHMvUG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcbmltcG9ydCBQb3N0Vm90ZVVwIGZyb20gJy4vUG9zdFZvdGVVcCdcbmltcG9ydCBQb3N0Vm90ZURvd24gZnJvbSAnLi9Qb3N0Vm90ZURvd24nXG5pbXBvcnQgUG9zdFZvdGVDb3VudCBmcm9tICcuL1Bvc3RWb3RlQ291bnQnXG5cbmZ1bmN0aW9uIFBvc3QoeyBkYXRhOiB7IGVycm9yLCB3ZWIgfSB9KSB7XG4gIGNvbnNvbGUubG9nKHdlYilcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPSdFcnJvciBsb2FkaW5nIGJsb2cgcG9zdC4nIC8+XG4gIGlmICh3ZWIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXYga2V5PXt3ZWIuaWR9PlxuICAgICAgICAgIDxoMT57d2ViLlRpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJRDoge3dlYi5faWR9XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFVSTDoge3dlYi5VUkx9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPnt3ZWIuRGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxwPjxpbWcgc3JjPXsgd2ViLkltYWdlICE9PSBudWxsID8gYGh0dHBzOi8vc3RyYXBpLmh1bGVhLm9yZy8ke3dlYi5JbWFnZS51cmx9YCA6ICcnIH0gLz48L3A+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8UG9zdFZvdGVVcCBpZD17UG9zdC5pZH0gdm90ZXM9e1Bvc3Qudm90ZXN9IC8+XG4gICAgICAgICAgICA8UG9zdFZvdGVDb3VudCB2b3Rlcz17UG9zdC52b3Rlc30gLz5cbiAgICAgICAgICAgIDxQb3N0Vm90ZURvd24gaWQ9e1Bvc3QuaWR9IHZvdGVzPXtQb3N0LnZvdGVzfSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG59XG5cbmNvbnN0IHBvc3QgPSBncWxgXG4gIHF1ZXJ5IHdlYigkaWQ6IElEISkge1xuICAgIHdlYihpZDogJGlkKSB7XG4gICAgICBUaXRsZVxuICAgICAgX2lkXG4gICAgICBJbWFnZSB7XG4gICAgICAgIHVybFxuICAgICAgICBleHRcbiAgICAgICAgcHJvdmlkZXJcbiAgICAgICAgc2l6ZVxuICAgICAgfVxuICAgICAgRGVzY3JpcHRpb25cbiAgICAgIERhdGFcbiAgICAgIFVSTFxuICAgICAgY3JlYXRlZEF0XG4gICAgICB1cGRhdGVkQXRcbiAgICB9XG4gIH1cbmBcblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChQb3N0TGlzdClcbmNvbnN0IENvbXBvbmVudFdpdGhNdXRhdGlvbiA9IGdyYXBocWwocG9zdCwge1xuICBvcHRpb25zOiAoeyByb3V0ZXI6IHsgcXVlcnkgfSB9KSA9PiAoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IHF1ZXJ5LmlkXG4gICAgfVxuICB9KSxcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhXG4gIH0pXG59KShQb3N0KVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKENvbXBvbmVudFdpdGhNdXRhdGlvbilcbiJdfQ== */\n/*@ sourceURL=/Applications/MAMP/htdocs/apollo-redux-next-website/components/Post.js */"
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
}

var post = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject()); // The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)

var ComponentWithMutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["graphql"])(post, {
  options: function options(_ref2) {
    var query = _ref2.router.query;
    return {
      variables: {
        id: query.id
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
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ComponentWithMutation));

/***/ })

})
//# sourceMappingURL=entry.js.a55251717147703ec6c9.hot-update.js.map