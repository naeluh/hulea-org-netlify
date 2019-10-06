webpackHotUpdate("static/development/pages/work.js",{

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
      className: "jsx-951965906" + " " + (extraClass || "")
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, title === undefined ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
      className: "jsx-951965906"
    }, "Work"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
      name: "title",
      content: "Nick Hulea's Work and Projects",
      className: "jsx-951965906"
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
      name: "description",
      content: "Nick Hulea's Work and Projects",
      className: "jsx-951965906"
    })) : ""), title === undefined ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
      className: "jsx-951965906"
    }, "Work") : "", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
      className: "jsx-951965906"
    }, webs.map(function (post, index) {
      return post.URL !== title ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
        key: index + 1,
        className: "jsx-951965906"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        props: post._id,
        href: "/work/".concat(post.Data.Link),
        className: "jsx-951965906"
      }, post.Image !== null
      /* && title === undefined */
      ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        style: {
          backgroundImage: "url(https://strapi.hulea.org/".concat(post.Image.url, ")")
        },
        className: "jsx-951965906" + " " + "imgHero ".concat(extraClass, "__image")
      }) : "", title === undefined ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
        className: "jsx-951965906"
      }, post.Title) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
        className: "jsx-951965906"
      }, post.Title))) : "";
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "951965906"
    }, "*.jsx-951965906{box-sizing:border-box;}a.jsx-951965906{position:relative;display:block;}ul.jsx-951965906{margin:0;padding:0;list-style:none;}li.jsx-951965906{margin-bottom:2em;}h2.jsx-951965906{position:absolute;bottom:5px;left:25px;padding:20px 30px;color:#fff;background-color:#111;}p.jsx-951965906{background-color:#111;color:#fff;-webkit-letter-spacing:-1.5px;-moz-letter-spacing:-1.5px;-ms-letter-spacing:-1.5px;letter-spacing:-1.5px;font-weight:700;font-size:20px;padding:10px 15px;bottom:0;left:0;margin:0;}@media only screen and (max-width:480px){h2.jsx-951965906{font-size:15px;padding:10px 15px;bottom:0;left:0;margin:0;}p.jsx-951965906{font-size:20px;padding:10px 15px;bottom:0;left:0;margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L25ldGxpZnktc2l0ZS9jb21wb25lbnRzL1Bvc3RMaXN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRW9CLEFBR21DLEFBR0osQUFJVCxBQUtTLEFBR0EsQUFRSSxBQVlMLEFBT0EsU0FsQ1AsTUE0QlUsQUFPQSxHQXZDTixBQVNoQixBQUdhLENBUEssR0FSbEIsQUF1QmEsT0FQRCxHQVpaLENBb0J3QixBQVlYLEFBT0EsRUFsQ2IsSUFRb0IsR0FvQlQsQUFPQSxPQU5FLEFBT0EsUUEzQkEsQ0FxQlgsQUFPQSxVQTNCc0Isc0JBQ3hCLGdEQUtrQixnQkFDRCxlQUNHLGtCQUNULFNBQ0YsT0FDRSxTQUNYIiwiZmlsZSI6Ii92YXIvd3d3L25ldGxpZnktc2l0ZS9jb21wb25lbnRzL1Bvc3RMaXN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBQT1NUU19QRVJfUEFHRSA9IDEwO1xuXG5mdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCwgaWQsIHVybCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBSb3V0ZXIucHVzaCh7XG4gICAgcGF0aG5hbWU6IGAvd29yay8ke3VybH1gLFxuICAgIGFzUGF0aDogYC93b3JrLyR7dXJsfWBcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIFBvc3RMaXN0KHsgZGF0YTogeyBsb2FkaW5nLCBlcnJvciwgd2VicyB9LCB0aXRsZSwgZXh0cmFDbGFzcyB9KSB7XG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT1cIkVycm9yIGxvYWRpbmcgcG9zdHMuXCIgLz47XG4gIGlmICh3ZWJzICYmIHdlYnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17ZXh0cmFDbGFzc30+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIHt0aXRsZSA9PT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHRpdGxlPldvcms8L3RpdGxlPlxuICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIiBjb250ZW50PVwiTmljayBIdWxlYSdzIFdvcmsgYW5kIFByb2plY3RzXCIgLz5cbiAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJOaWNrIEh1bGVhJ3MgV29yayBhbmQgUHJvamVjdHNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7dGl0bGUgPT09IHVuZGVmaW5lZCA/IDxoMT5Xb3JrPC9oMT4gOiBcIlwifVxuICAgICAgICA8dWw+XG4gICAgICAgICAge3dlYnMubWFwKChwb3N0LCBpbmRleCkgPT5cbiAgICAgICAgICAgIHBvc3QuVVJMICE9PSB0aXRsZSA/IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXggKyAxfT5cbiAgICAgICAgICAgICAgICA8YSBwcm9wcz17cG9zdC5faWR9IGhyZWY9e2Avd29yay8ke3Bvc3QuRGF0YS5MaW5rfWB9PlxuICAgICAgICAgICAgICAgICAge3Bvc3QuSW1hZ2UgIT09IG51bGwgLyogJiYgdGl0bGUgPT09IHVuZGVmaW5lZCAqLyA/IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbWdIZXJvICR7ZXh0cmFDbGFzc31fX2ltYWdlYH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vc3RyYXBpLmh1bGVhLm9yZy8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LkltYWdlLnVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KWBcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7dGl0bGUgPT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGgyPntwb3N0LlRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LlRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICAgICAgbGVmdDogMjVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTEuNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG59XG5cbmV4cG9ydCBjb25zdCBhbGxQb3N0cyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHdlYnMge1xuICAgICAgX2lkXG4gICAgICBUaXRsZVxuICAgICAgSW1hZ2Uge1xuICAgICAgICB1cmxcbiAgICAgICAgZXh0XG4gICAgICAgIHByb3ZpZGVyXG4gICAgICAgIHNpemVcbiAgICAgIH1cbiAgICAgIERlc2NyaXB0aW9uXG4gICAgICBEYXRhXG4gICAgICBVUkxcbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdXBkYXRlZEF0XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgYWxsUG9zdHNRdWVyeVZhcnMgPSB7XG4gIHNraXA6IDAsXG4gIGZpcnN0OiBQT1NUU19QRVJfUEFHRVxufTtcblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChQb3N0TGlzdClcbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoYWxsUG9zdHMsIHtcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhLFxuICAgIGxvYWRNb3JlUG9zdHM6ICgpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZldGNoTW9yZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHNraXA6IGRhdGEuYWxsUG9zdHMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RzIHJlc3VsdHMgdG8gdGhlIG9sZCBvbmVcbiAgICAgICAgICAgIGFsbFBvc3RzOiBbLi4ucHJldmlvdXNSZXN1bHQuYWxsUG9zdHMsIC4uLmZldGNoTW9yZVJlc3VsdC5hbGxQb3N0c11cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KVxufSkoUG9zdExpc3QpO1xuIl19 */\n/*@ sourceURL=/var/www/netlify-site/components/PostList.jsx */"));
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
//# sourceMappingURL=work.js.6ec0844af93b637ecb60.hot-update.js.map