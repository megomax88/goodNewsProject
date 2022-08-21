"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NotAuth;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NotAuth({
  authState
}) {
  console.log(authState);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mx-auto mt-5",
    style: {
      width: '400px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '150px'
    }
  }), /*#__PURE__*/_react.default.createElement("form", {
    className: "container bg-secondary rounded-3 py-3 item",
    align: "center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "\u0412\u044B \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u044B...")), /*#__PURE__*/_react.default.createElement("div", {
    className: "mx-auto mt-5"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u0438\u043B\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "btn btn-danger"
  }, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F")), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-3"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/registration",
    className: "btn btn-danger"
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F")))));
}