webpackHotUpdate("static/development/pages/work/entry.js",{

/***/ "./components/PostList.jsx":
/*!*********************************!*\
  !*** ./components/PostList.jsx ***!
  \*********************************/
/*! exports provided: allPosts, allPostsQueryVars, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPosts", function() { return allPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPostsQueryVars", function() { return allPostsQueryVars; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);






function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query {\n    webs {\n      _id\n      Title\n      Image {\n        url\n        ext\n        provider\n        size\n      }\n      Description\n      Data\n      URL\n      createdAt\n      updatedAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var POSTS_PER_PAGE = 10;

function handleClick(event, id, url) {
  event.preventDefault();
  next_router__WEBPACK_IMPORTED_MODULE_7__["Router"].push({
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
  if (error) return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
    message: "Error loading posts."
  });

  if (webs && webs.length) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
      className: "jsx-2935194729" + " " + (extraClass || "")
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, title === undefined ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
      className: "jsx-2935194729"
    }, "Work"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
      name: "title",
      content: "Nick Hulea's Work and Projects",
      className: "jsx-2935194729"
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
      name: "description",
      content: "Nick Hulea's Work and Projects",
      className: "jsx-2935194729"
    })) : ""), title === undefined ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
      className: "jsx-2935194729"
    }, "Work") : "", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
      className: "jsx-2935194729"
    }, webs.map(function (post, index) {
      return post.URL !== title ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
        key: index + 1,
        className: "jsx-2935194729"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        props: post._id,
        href: "/work/".concat(post.Data.Link),
        className: "jsx-2935194729"
      }, post.Image !== null
      /* && title === undefined */
      ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        style: {
          backgroundImage: "url(https://strapi.hulea.org/".concat(post.Image.url, ")")
        },
        className: "jsx-2935194729" + " " + "imgHero ".concat(extraClass, "__image")
      }) : "", title === undefined ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
        className: "jsx-2935194729"
      }, post.Title) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
        className: "jsx-2935194729"
      }, post.Title))) : "";
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "2935194729"
    }, "*.jsx-2935194729{box-sizing:border-box;}a.jsx-2935194729{position:relative;display:block;}ul.jsx-2935194729{margin:0;padding:0;list-style:none;}li.jsx-2935194729{margin-bottom:2em;}h2.jsx-2935194729{position:absolute;bottom:5px;left:25px;padding:20px 30px;color:#fff;background-color:#111;}p.jsx-2935194729{position:absolute;background-color:#111;color:#fff;padding:4px 8px;left:0;text-align:center;-webkit-letter-spacing:-2px;-moz-letter-spacing:-2px;-ms-letter-spacing:-2px;letter-spacing:-2px;font-weight:700;top:0;}@media only screen and (max-width:480px){h2.jsx-2935194729{font-size:20px;padding:10px 15px;bottom:0;left:0;margin:0;}p.jsx-2935194729{font-size:20px;padding:10px 15px;bottom:0;left:0;margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L25ldGxpZnktc2l0ZS9jb21wb25lbnRzL1Bvc3RMaXN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRW9CLEFBR21DLEFBR0osQUFJVCxBQUtTLEFBR0EsQUFRQSxBQVlELEFBT0EsU0FsQ1AsTUE0QlUsQUFPQSxHQXZDTixBQVNoQixBQUdhLEFBUVcsQ0FmTixHQVJsQixPQWdCWSxHQVpaLENBZ0NhLEFBT0EsRUFsQ2IsSUFRb0IsQ0FPUCxFQWFGLEFBT0EsT0FORSxBQU9BLEVBcEJLLE1BUEwsQ0FxQlgsQUFPQSxTQXBCTyxDQVBlLE1BUUosZ0JBUHBCLEVBUXNCLGlHQUNKLGdCQUNWLE1BQ1IiLCJmaWxlIjoiL3Zhci93d3cvbmV0bGlmeS1zaXRlL2NvbXBvbmVudHMvUG9zdExpc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IFBPU1RTX1BFUl9QQUdFID0gMTA7XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50LCBpZCwgdXJsKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFJvdXRlci5wdXNoKHtcbiAgICBwYXRobmFtZTogYC93b3JrLyR7dXJsfWAsXG4gICAgYXNQYXRoOiBgL3dvcmsvJHt1cmx9YFxuICB9KTtcbn1cblxuZnVuY3Rpb24gUG9zdExpc3QoeyBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCB3ZWJzIH0sIHRpdGxlLCBleHRyYUNsYXNzIH0pIHtcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPVwiRXJyb3IgbG9hZGluZyBwb3N0cy5cIiAvPjtcbiAgaWYgKHdlYnMgJiYgd2Vicy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtleHRyYUNsYXNzfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAge3RpdGxlID09PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8dGl0bGU+V29yazwvdGl0bGU+XG4gICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9XCJOaWNrIEh1bGVhJ3MgV29yayBhbmQgUHJvamVjdHNcIiAvPlxuICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgY29udGVudD1cIk5pY2sgSHVsZWEncyBXb3JrIGFuZCBQcm9qZWN0c1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICApfVxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIHt0aXRsZSA9PT0gdW5kZWZpbmVkID8gPGgxPldvcms8L2gxPiA6IFwiXCJ9XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7d2Vicy5tYXAoKHBvc3QsIGluZGV4KSA9PlxuICAgICAgICAgICAgcG9zdC5VUkwgIT09IHRpdGxlID8gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleCArIDF9PlxuICAgICAgICAgICAgICAgIDxhIHByb3BzPXtwb3N0Ll9pZH0gaHJlZj17YC93b3JrLyR7cG9zdC5EYXRhLkxpbmt9YH0+XG4gICAgICAgICAgICAgICAgICB7cG9zdC5JbWFnZSAhPT0gbnVsbCAvKiAmJiB0aXRsZSA9PT0gdW5kZWZpbmVkICovID8gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGltZ0hlcm8gJHtleHRyYUNsYXNzfV9faW1hZ2VgfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly9zdHJhcGkuaHVsZWEub3JnLyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuSW1hZ2UudXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pYFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHt0aXRsZSA9PT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgICAgICAgICA8aDI+e3Bvc3QuVGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QuVGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiAyNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xufVxuXG5leHBvcnQgY29uc3QgYWxsUG9zdHMgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICB3ZWJzIHtcbiAgICAgIF9pZFxuICAgICAgVGl0bGVcbiAgICAgIEltYWdlIHtcbiAgICAgICAgdXJsXG4gICAgICAgIGV4dFxuICAgICAgICBwcm92aWRlclxuICAgICAgICBzaXplXG4gICAgICB9XG4gICAgICBEZXNjcmlwdGlvblxuICAgICAgRGF0YVxuICAgICAgVVJMXG4gICAgICBjcmVhdGVkQXRcbiAgICAgIHVwZGF0ZWRBdFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGFsbFBvc3RzUXVlcnlWYXJzID0ge1xuICBza2lwOiAwLFxuICBmaXJzdDogUE9TVFNfUEVSX1BBR0Vcbn07XG5cbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXG4vLyBhdmFpbGFibGUgb24gdGhlIGBkYXRhYCBwcm9wIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCAoUG9zdExpc3QpXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGFsbFBvc3RzLCB7XG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YSxcbiAgICBsb2FkTW9yZVBvc3RzOiAoKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS5mZXRjaE1vcmUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBza2lwOiBkYXRhLmFsbFBvc3RzLmxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVRdWVyeTogKHByZXZpb3VzUmVzdWx0LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1Jlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzUmVzdWx0LCB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBwb3N0cyByZXN1bHRzIHRvIHRoZSBvbGQgb25lXG4gICAgICAgICAgICBhbGxQb3N0czogWy4uLnByZXZpb3VzUmVzdWx0LmFsbFBvc3RzLCAuLi5mZXRjaE1vcmVSZXN1bHQuYWxsUG9zdHNdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSlcbn0pKFBvc3RMaXN0KTtcbiJdfQ== */\n/*@ sourceURL=/var/www/netlify-site/components/PostList.jsx */"));
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, "Loading");
}

var allPosts = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());
var allPostsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
}; // The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_5__["graphql"])(allPosts, {
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

            return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, previousResult, {
              // Append the new posts results to the old one
              allPosts: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(previousResult.allPosts), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(fetchMoreResult.allPosts))
            });
          }
        });
      }
    };
  }
})(PostList));

/***/ })

})
//# sourceMappingURL=entry.js.ef2e83bd59ccd6250509.hot-update.js.map