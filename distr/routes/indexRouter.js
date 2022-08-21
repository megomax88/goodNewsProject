"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server");

var _react = _interopRequireDefault(require("react"));

var _Layout = _interopRequireDefault(require("../components/Layout"));

var _authCheck = _interopRequireDefault(require("../middlewares/authCheck"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const route = _express.default.Router();

route.get('/', async (req, res) => {
  try {
    const initState = {
      path: req.originalUrl,
      userSession: req.session.userSession
    };
    const html = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Layout.default, {
      initState: initState
    }));
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});
route.get('/registration', async (req, res) => {
  try {
    const initState = {
      path: req.originalUrl,
      userSession: req.session.userSession
    };
    const html = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Layout.default, {
      initState: initState
    }));
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});
route.get('/home', _authCheck.default, async (req, res) => {
  try {
    const initState = {
      path: req.originalUrl,
      userSession: req.session.userSession
    };
    const html = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Layout.default, {
      initState: initState
    }));
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});
route.get('/news', _authCheck.default, async (req, res) => {
  try {
    const initState = {
      path: req.originalUrl,
      userSession: req.session.userSession
    };
    const html = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Layout.default, {
      initState: initState
    }));
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});
route.get('/notauth', async (req, res) => {
  try {
    const initState = {
      path: req.originalUrl,
      userSession: req.session.userSession
    };
    const html = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Layout.default, {
      initState: initState
    }));
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});
var _default = route;
exports.default = _default;