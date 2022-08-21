"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Layout;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-router-dom/server");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Layout({
  initState
}) {
  return /*#__PURE__*/_react.default.createElement("html", {
    lang: "en"
  }, /*#__PURE__*/_react.default.createElement("head", null, /*#__PURE__*/_react.default.createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes"
  }), /*#__PURE__*/_react.default.createElement("link", {
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",
    rel: "stylesheet",
    integrity: "sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",
    crossOrigin: "anonymous"
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "stylesheet",
    href: "/stylesheets/application.css"
  }), /*#__PURE__*/_react.default.createElement("script", {
    type: "text/javascript",
    dangerouslySetInnerHTML: {
      __html: `window.initState=${JSON.stringify(initState)}`
    }
  }), /*#__PURE__*/_react.default.createElement("script", {
    defer: true,
    src: "/app.js"
  }), /*#__PURE__*/_react.default.createElement("script", {
    defer: true,
    src: "/vendor.js"
  }), /*#__PURE__*/_react.default.createElement("title", null, "\u0427\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C")), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement("div", {
    id: "root"
  }, /*#__PURE__*/_react.default.createElement(_server.StaticRouter, {
    location: initState.path
  }, /*#__PURE__*/_react.default.createElement(_App.default, initState)))));
}