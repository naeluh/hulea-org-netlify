webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/Form.jsx":
/*!*****************************!*\
  !*** ./components/Form.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);











__webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").polyfill();

var FormLabel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FormLabel, _React$Component);

  function FormLabel() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FormLabel);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(FormLabel).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(FormLabel, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: this.props.htmlFor
      }, this.props.title);
    }
  }]);

  return FormLabel;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var Form =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Form, _React$Component2);

  function Form(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Form);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Form).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleChange", function (e) {
      var newState = {};
      newState[e.target.name] = e.target.value;

      _this.setState(newState);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();

      var toggleNav = function toggleNav() {
        _this.setState(function (prevState) {
          return {
            isActive: !prevState.isActive
          };
        });

        setTimeout(function () {
          _this.setState(function (prevState) {
            return {
              isActive: !prevState.isActive
            };
          });
        }, 2000);
      };

      var formData = {
        first_name: _this.state.first_name,
        last_name: _this.state.last_name,
        email: _this.state.email,
        message: _this.state.message
      };

      if (formData.first_name.length < 1 || formData.email.length < 1 || formData.last_name.length < 1 || formData.message.length < 1) {
        return false;
      }

      var body = new FormData();
      body.append("first_name", formData.first_name);
      body.append("last_name", formData.last_name);
      body.append("email", formData.email);
      body.append("message", formData.message);
      isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default()("https://hulea.org/contact-form.php", {
        method: "POST",
        mode: "cors",
        body: body
      }).then(function (response) {
        toggleNav();

        if (response.status !== 200) {// dispatch(setError(response.status + '===>' + response.statusText + '===>' + response.url))
        }

        return response.json();
      }).then(function (json) {// if (confirm('Thank you for your message. Can I erase the form?')) {
        // }
        ///dispatch(setData(json, q))
      }).catch(function (err) {
        alert("There was some problem with sending your message.");
        console.log(err);
      });

      _this.setState({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
        isActive: true
      });
    });

    _this.state = {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      isActive: true
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Form, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-3544962892" + " " + "react-form"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-3544962892"
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-3544962892" + " " + ((this.state.isActive ? "hide" : "") || "")
      }, "Thanks!"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("fieldset", {
        className: "jsx-3544962892" + " " + "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FormLabel, {
        htmlFor: "first_name",
        title: "First Name:"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "first_name",
        name: "first_name",
        type: "text",
        required: true,
        onChange: this.handleChange,
        value: this.state.first_name,
        className: "jsx-3544962892" + " " + "form-input"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("fieldset", {
        className: "jsx-3544962892" + " " + "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FormLabel, {
        htmlFor: "last_name",
        title: "Last Name:"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "last_name",
        name: "last_name",
        type: "text",
        required: true,
        onChange: this.handleChange,
        value: this.state.last_name,
        className: "jsx-3544962892" + " " + "form-input"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("fieldset", {
        className: "jsx-3544962892" + " " + "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FormLabel, {
        htmlFor: "email",
        title: "Email:"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "email",
        name: "email",
        type: "email",
        required: true,
        onChange: this.handleChange,
        value: this.state.email,
        className: "jsx-3544962892" + " " + "form-input"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("fieldset", {
        className: "jsx-3544962892" + " " + "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(FormLabel, {
        htmlFor: "message",
        title: "Message:"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("textarea", {
        id: "message",
        name: "message",
        required: true,
        onChange: this.handleChange,
        value: this.state.message,
        className: "jsx-3544962892" + " " + "form-textarea"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("fieldset", {
        className: "jsx-3544962892" + " " + "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "formButton",
        type: "submit",
        placeholder: "Send message",
        className: "jsx-3544962892" + " " + "button"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3544962892"
      }, ".react-form.jsx-3544962892{margin-bottom:0 40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC93YW1wNjQvd3d3L2Fwb2xsby1yZWR1eC1zYWdhL2NvbXBvbmVudHMvRm9ybS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNktzQixBQUdvQyxxQkFDdkIiLCJmaWxlIjoiL21udC9kL3dhbXA2NC93d3cvYXBvbGxvLXJlZHV4LXNhZ2EvY29tcG9uZW50cy9Gb3JtLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbnJlcXVpcmUoXCJlczYtcHJvbWlzZVwiKS5wb2x5ZmlsbCgpO1xyXG5cclxuY2xhc3MgRm9ybUxhYmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGxhYmVsIGh0bWxGb3I9e3RoaXMucHJvcHMuaHRtbEZvcn0+e3RoaXMucHJvcHMudGl0bGV9PC9sYWJlbD47XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGZpcnN0X25hbWU6IFwiXCIsXHJcbiAgICAgIGxhc3RfbmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgIGlzQWN0aXZlOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgbGV0IG5ld1N0YXRlID0ge307XHJcblxyXG4gICAgbmV3U3RhdGVbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVOYXYgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgaXNBY3RpdmU6ICFwcmV2U3RhdGUuaXNBY3RpdmVcclxuICAgICAgfSkpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgaXNBY3RpdmU6ICFwcmV2U3RhdGUuaXNBY3RpdmVcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgZm9ybURhdGEgPSB7XHJcbiAgICAgIGZpcnN0X25hbWU6IHRoaXMuc3RhdGUuZmlyc3RfbmFtZSxcclxuICAgICAgbGFzdF9uYW1lOiB0aGlzLnN0YXRlLmxhc3RfbmFtZSxcclxuICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXHJcbiAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubWVzc2FnZVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGZvcm1EYXRhLmZpcnN0X25hbWUubGVuZ3RoIDwgMSB8fFxyXG4gICAgICBmb3JtRGF0YS5lbWFpbC5sZW5ndGggPCAxIHx8XHJcbiAgICAgIGZvcm1EYXRhLmxhc3RfbmFtZS5sZW5ndGggPCAxIHx8XHJcbiAgICAgIGZvcm1EYXRhLm1lc3NhZ2UubGVuZ3RoIDwgMVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIGJvZHkuYXBwZW5kKFwiZmlyc3RfbmFtZVwiLCBmb3JtRGF0YS5maXJzdF9uYW1lKTtcclxuICAgIGJvZHkuYXBwZW5kKFwibGFzdF9uYW1lXCIsIGZvcm1EYXRhLmxhc3RfbmFtZSk7XHJcbiAgICBib2R5LmFwcGVuZChcImVtYWlsXCIsIGZvcm1EYXRhLmVtYWlsKTtcclxuICAgIGJvZHkuYXBwZW5kKFwibWVzc2FnZVwiLCBmb3JtRGF0YS5tZXNzYWdlKTtcclxuXHJcbiAgICBmZXRjaChcImh0dHBzOi8vaHVsZWEub3JnL2NvbnRhY3QtZm9ybS5waHBcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgYm9keTogYm9keVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICB0b2dnbGVOYXYoKTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICAgIC8vIGRpc3BhdGNoKHNldEVycm9yKHJlc3BvbnNlLnN0YXR1cyArICc9PT0+JyArIHJlc3BvbnNlLnN0YXR1c1RleHQgKyAnPT09PicgKyByZXNwb25zZS51cmwpKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbihqc29uKSB7XHJcbiAgICAgICAgLy8gaWYgKGNvbmZpcm0oJ1RoYW5rIHlvdSBmb3IgeW91ciBtZXNzYWdlLiBDYW4gSSBlcmFzZSB0aGUgZm9ybT8nKSkge1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLy9kaXNwYXRjaChzZXREYXRhKGpzb24sIHEpKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoXCJUaGVyZSB3YXMgc29tZSBwcm9ibGVtIHdpdGggc2VuZGluZyB5b3VyIG1lc3NhZ2UuXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBmaXJzdF9uYW1lOiBcIlwiLFxyXG4gICAgICBsYXN0X25hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgICBpc0FjdGl2ZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicmVhY3QtZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8aDE+Q29udGFjdDwvaDE+XHJcblxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pc0FjdGl2ZSA/IFwiaGlkZVwiIDogXCJcIn0+VGhhbmtzITwvaDM+XHJcblxyXG4gICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwiZmlyc3RfbmFtZVwiIHRpdGxlPVwiRmlyc3QgTmFtZTpcIiAvPlxyXG5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZmlyc3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpcnN0X25hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG5cclxuICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cImxhc3RfbmFtZVwiIHRpdGxlPVwiTGFzdCBOYW1lOlwiIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cImxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZmllbGRzZXQ+XHJcblxyXG4gICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwiZW1haWxcIiB0aXRsZT1cIkVtYWlsOlwiIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG5cclxuICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiB0aXRsZT1cIk1lc3NhZ2U6XCIgLz5cclxuXHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG5cclxuICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwiZm9ybUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmQgbWVzc2FnZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAucmVhY3QtZm9ybSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIl19 */\n/*@ sourceURL=/mnt/d/wamp64/www/apollo-redux-saga/components/Form.jsx */")));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=contact.js.6054c90b7cd7bda6b326.hot-update.js.map