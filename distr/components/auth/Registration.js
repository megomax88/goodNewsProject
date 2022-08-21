"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Registration;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Registration({
  authState,
  setAuthState
}) {
  console.log(authState);
  const navigate = (0, _reactRouterDom.useNavigate)();
  const [input, setInput] = (0, _react.useState)({
    email: '',
    password: '',
    repeat: ''
  });

  const changeHandler = e => setInput(prev => ({ ...prev,
    [e.target.name]: e.target.value
  }));

  const signUpHandler = async event => {
    event.preventDefault();

    if (input.password === input.repeat) {
      const response = await fetch('/api/v1/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
      });

      if (response.ok) {
        const data = await response.json();
        setAuthState(data);
      }

      navigate('/news'); // VOT TUT MB HUINYA!!!!
    } else {
      alert('LOH PIDR');
      setInput({
        email: '',
        password: '',
        repeat: ''
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
    onSubmit: signUpHandler,
    className: "container zalupa rounded-3 py-3 item",
    align: "center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Email"), /*#__PURE__*/_react.default.createElement("input", {
    value: input.email,
    onChange: changeHandler,
    type: "email",
    name: "email",
    className: "form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "Email..."
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "\u041F\u0430\u0440\u043E\u043B\u044C"), /*#__PURE__*/_react.default.createElement("input", {
    value: input.password,
    onChange: changeHandler,
    type: "password",
    name: "password",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C..."
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), /*#__PURE__*/_react.default.createElement("input", {
    value: input.repeat,
    onChange: changeHandler,
    type: "password",
    name: "repeat",
    className: "form-control",
    id: "exampleInputPassword2",
    placeholder: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C..."
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-danger"
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-3"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    class: "btn btn-outline-danger float-left"
  }, "\u2190\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")))));
}