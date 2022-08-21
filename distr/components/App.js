"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _AllNews = _interopRequireDefault(require("./AllNews"));

var _Auth = _interopRequireDefault(require("./auth/Auth"));

var _NotAuth = _interopRequireDefault(require("./auth/NotAuth"));

var _Registration = _interopRequireDefault(require("./auth/Registration"));

var _Home = _interopRequireDefault(require("./Home"));

var _Navbar = _interopRequireDefault(require("./Navbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function App({
  userSession
}) {
  const [authState, setAuthState] = (0, _react.useState)(userSession || null);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    authState: authState,
    setAuthState: setAuthState
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    index: true,
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_Auth.default, {
      authState: authState,
      setAuthState: setAuthState
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    index: true,
    path: "/registration",
    element: /*#__PURE__*/_react.default.createElement(_Registration.default, {
      authState: authState,
      setAuthState: setAuthState
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    index: true,
    path: "/news",
    element: /*#__PURE__*/_react.default.createElement(_AllNews.default, {
      authState: authState
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    index: true,
    path: "/home",
    element: /*#__PURE__*/_react.default.createElement(_Home.default, {
      authState: authState
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    index: true,
    path: "/notauth",
    element: /*#__PURE__*/_react.default.createElement(_NotAuth.default, {
      authState: authState
    })
  })));
}

var _default = App;
exports.default = _default;