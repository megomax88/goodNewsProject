"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Auth;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Auth({
  authState,
  setAuthState
}) {
  console.log(authState);
  const navigate = (0, _reactRouterDom.useNavigate)();
  const [input, setInput] = (0, _react.useState)({
    email: '',
    password: ''
  });

  const changeHandler = e => setInput(prev => ({ ...prev,
    [e.target.name]: e.target.value
  }));

  const signInHandler = async event => {
    event.preventDefault(); // console.log(input);

    const response = await fetch('/api/v1/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    });

    if (response.ok) {
      const data = await response.json();
      setAuthState(data);
      navigate('/news');
    } else {
      alert('hui sosi');
      setInput({
        email: '',
        password: ''
      });
    }
  };

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
    className: "container zalupa rounded-3 py-3 item",
    align: "center",
    onSubmit: signInHandler
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Email"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: changeHandler,
    type: "email",
    name: "email",
    className: "form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "Your Name"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Password"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: changeHandler,
    type: "password",
    name: "password",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Your Password"
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-danger"
  }, "Sign in!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "mx-auto mt-5"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Don't register yet?"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/registration",
    className: "btn btn-danger"
  }, "Registration"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/news",
    className: "btn btn-danger"
  }, "\u0421\u041A\u0418\u041F\u0410\u041D\u0423\u0422\u042C \u041D\u0410 News"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/home",
    className: "btn btn-danger"
  }, "\u0421\u041A\u0418\u041F\u0410\u041D\u0423\u0422\u042C \u041D\u0410 \u0425\u041E\u0423\u041C"))));
} // fetch na /auth