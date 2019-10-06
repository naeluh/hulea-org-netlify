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
      className: "jsx-599567593" + " " + (extraClass || "")
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, title === undefined ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
      className: "jsx-599567593"
    }, "Work"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
      name: "title",
      content: "Nick Hulea's Work and Projects",
      className: "jsx-599567593"
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
      name: "description",
      content: "Nick Hulea's Work and Projects",
      className: "jsx-599567593"
    })) : ""), title === undefined ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
      className: "jsx-599567593"
    }, "Work") : "", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
      className: "jsx-599567593"
    }, webs.map(function (post, index) {
      return post.URL !== title ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
        key: index + 1,
        className: "jsx-599567593"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        props: post._id,
        href: "/work/".concat(post.Data.Link),
        className: "jsx-599567593"
      }, post.Image !== null
      /* && title === undefined */
      ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        style: {
          backgroundImage: "url(https://strapi.hulea.org/".concat(post.Image.url, ")")
        },
        className: "jsx-599567593" + " " + "imgHero ".concat(extraClass, "__image")
      }) : "", title === undefined ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
        className: "jsx-599567593"
      }, post.Title) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
        className: "jsx-599567593"
      }, post.Title))) : "";
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "599567593"
    }, "*.jsx-599567593{box-sizing:border-box;}a.jsx-599567593{position:relative;display:block;}ul.jsx-599567593{margin:0;padding:0;list-style:none;}li.jsx-599567593{margin-bottom:2em;}h2.jsx-599567593{position:absolute;bottom:5px;left:25px;padding:20px 30px;color:#fff;background-color:#111;}p.jsx-599567593{background-color:#111;color:#fff;text-align:center;-webkit-letter-spacing:-2px;-moz-letter-spacing:-2px;-ms-letter-spacing:-2px;letter-spacing:-2px;font-weight:700;font-size:20px;padding:10px 15px;bottom:0;left:0;margin:0;}@media only screen and (max-width:480px){h2.jsx-599567593{font-size:20px;padding:10px 15px;bottom:0;left:0;margin:0;}p.jsx-599567593{font-size:20px;padding:10px 15px;bottom:0;left:0;margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L25ldGxpZnktc2l0ZS9jb21wb25lbnRzL1Bvc3RMaXN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRW9CLEFBR21DLEFBR0osQUFJVCxBQUtTLEFBR0EsQUFRSSxBQWFMLEFBT0EsU0FuQ1AsTUE2QlUsQUFPQSxHQXhDTixBQVNoQixBQUdhLENBUEssR0FSbEIsQUF1QmEsT0FQRCxHQVpaLENBb0JvQixBQWFQLEFBT0EsRUFuQ2IsSUFRb0IsR0FxQlQsQUFPQSxPQU5FLEFBT0EsRUFyQlMsTUFQVCxDQXNCWCxBQU9BLFVBNUJzQixzQkFDeEIsMERBTWtCLGdCQUNELGVBQ0csa0JBQ1QsU0FDRixPQUNFLFNBQ1giLCJmaWxlIjoiL3Zhci93d3cvbmV0bGlmeS1zaXRlL2NvbXBvbmVudHMvUG9zdExpc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IFBPU1RTX1BFUl9QQUdFID0gMTA7XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50LCBpZCwgdXJsKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFJvdXRlci5wdXNoKHtcbiAgICBwYXRobmFtZTogYC93b3JrLyR7dXJsfWAsXG4gICAgYXNQYXRoOiBgL3dvcmsvJHt1cmx9YFxuICB9KTtcbn1cblxuZnVuY3Rpb24gUG9zdExpc3QoeyBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCB3ZWJzIH0sIHRpdGxlLCBleHRyYUNsYXNzIH0pIHtcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPVwiRXJyb3IgbG9hZGluZyBwb3N0cy5cIiAvPjtcbiAgaWYgKHdlYnMgJiYgd2Vicy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtleHRyYUNsYXNzfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAge3RpdGxlID09PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8dGl0bGU+V29yazwvdGl0bGU+XG4gICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9XCJOaWNrIEh1bGVhJ3MgV29yayBhbmQgUHJvamVjdHNcIiAvPlxuICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgY29udGVudD1cIk5pY2sgSHVsZWEncyBXb3JrIGFuZCBQcm9qZWN0c1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICApfVxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIHt0aXRsZSA9PT0gdW5kZWZpbmVkID8gPGgxPldvcms8L2gxPiA6IFwiXCJ9XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7d2Vicy5tYXAoKHBvc3QsIGluZGV4KSA9PlxuICAgICAgICAgICAgcG9zdC5VUkwgIT09IHRpdGxlID8gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleCArIDF9PlxuICAgICAgICAgICAgICAgIDxhIHByb3BzPXtwb3N0Ll9pZH0gaHJlZj17YC93b3JrLyR7cG9zdC5EYXRhLkxpbmt9YH0+XG4gICAgICAgICAgICAgICAgICB7cG9zdC5JbWFnZSAhPT0gbnVsbCAvKiAmJiB0aXRsZSA9PT0gdW5kZWZpbmVkICovID8gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGltZ0hlcm8gJHtleHRyYUNsYXNzfV9faW1hZ2VgfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly9zdHJhcGkuaHVsZWEub3JnLyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuSW1hZ2UudXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pYFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHt0aXRsZSA9PT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgICAgICAgICA8aDI+e3Bvc3QuVGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QuVGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiAyNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG59XG5cbmV4cG9ydCBjb25zdCBhbGxQb3N0cyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHdlYnMge1xuICAgICAgX2lkXG4gICAgICBUaXRsZVxuICAgICAgSW1hZ2Uge1xuICAgICAgICB1cmxcbiAgICAgICAgZXh0XG4gICAgICAgIHByb3ZpZGVyXG4gICAgICAgIHNpemVcbiAgICAgIH1cbiAgICAgIERlc2NyaXB0aW9uXG4gICAgICBEYXRhXG4gICAgICBVUkxcbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdXBkYXRlZEF0XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgYWxsUG9zdHNRdWVyeVZhcnMgPSB7XG4gIHNraXA6IDAsXG4gIGZpcnN0OiBQT1NUU19QRVJfUEFHRVxufTtcblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChQb3N0TGlzdClcbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoYWxsUG9zdHMsIHtcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhLFxuICAgIGxvYWRNb3JlUG9zdHM6ICgpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZldGNoTW9yZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHNraXA6IGRhdGEuYWxsUG9zdHMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RzIHJlc3VsdHMgdG8gdGhlIG9sZCBvbmVcbiAgICAgICAgICAgIGFsbFBvc3RzOiBbLi4ucHJldmlvdXNSZXN1bHQuYWxsUG9zdHMsIC4uLmZldGNoTW9yZVJlc3VsdC5hbGxQb3N0c11cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KVxufSkoUG9zdExpc3QpO1xuIl19 */\n/*@ sourceURL=/var/www/netlify-site/components/PostList.jsx */"));
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
//# sourceMappingURL=entry.js.73e90f6f5f759d9de513.hot-update.js.map