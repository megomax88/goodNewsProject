"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navbar({
  authState,
  setAuthState
}) {
  const location = (0, _reactRouterDom.useLocation)();
  const navigate = (0, _reactRouterDom.useNavigate)();

  const logoutHandler = async e => {
    e.preventDefault();
    const response = await fetch('/api/v1/logout');

    if (response.ok) {
      setAuthState(null);
      navigate('/');
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !authState ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null) : /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar zalupa fixed-top"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/news",
    className: "navbar-brand"
  }, "\u0425\u043E\u0440\u043E\u0448\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/home",
    className: "nav-link middle"
  }, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "",
    onClick: logoutHandler,
    className: "nav-link",
    href: ""
  }, "\u0412\u044B\u0445\u043E\u0434"))));
}