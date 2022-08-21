"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Home({
  authState
}) {
  const [input, setInput] = (0, _react.useState)({
    tagName: '',
    authState,
    tagChoise: null
  });
  const [tagsState, setTagsState] = (0, _react.useState)([]);
  console.log(input);
  const [isFavorite, setIsFavorite] = (0, _react.useState)(false);

  const handleChange = e => {
    console.log(isFavorite);
    setInput(prev => ({ ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const changeHandler = e => setInput(prev => ({ ...prev,
    [e.target.name]: e.target.value
  }));

  const addTagHandler = async event => {
    console.log(input);
    event.preventDefault();
    const response = await fetch('/api/v1/createtag', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    });
    const data = await response.json();
    console.log(data);
    setTagsState(data); // console.log(data);

    setInput({
      tagName: '',
      authState,
      tagChoise: null
    });
    console.log(input); // , tagChoise: 'false'
    // setIsFavorite('');
  };

  (0, _react.useEffect)(() => {
    fetch('api/v1/tags', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(authState)
    }).then(res => res.json()).then(resp => setTagsState(resp));
  }, []);

  const deleteHandler = async (event, el) => {
    event.preventDefault();
    console.log(el);
    const response = await fetch(`/api/v1/delete/${el.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(el)
    });

    if (response.ok) {
      setTagsState(prev => prev.filter(element => element.id !== el.id));
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '80px'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "align-top mx-auto mt-5",
    style: {
      width: '400px'
    }
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: "container zalupa rounded-3 py-3 item",
    align: "center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "\u0427\u0442\u043E \u044F \u0445\u043E\u0447\u0443 \u0432\u0438\u0434\u0435\u0442\u044C?"), /*#__PURE__*/_react.default.createElement("div", {
    className: "col"
  }, tagsState.map(el => el.isFavorite ? /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-3 hover-effect-btn"
  }, el.tag, ' ', /*#__PURE__*/_react.default.createElement("button", {
    onClick: event => deleteHandler(event, el),
    type: "delete",
    className: "button"
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "align-top mx-auto mt-5",
    style: {
      width: '400px'
    }
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: addTagHandler,
    className: "container zalupa rounded-3 py-3 item",
    align: "center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0433"), /*#__PURE__*/_react.default.createElement("input", {
    value: input.tagName,
    onChange: changeHandler,
    type: "text",
    name: "tagName",
    className: "form-control",
    id: "tagName",
    "aria-describedby": "tagName",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u0433"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "radios"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col"
  }, /*#__PURE__*/_react.default.createElement("input", {
    //   onChange={changeHandler}
    type: "radio",
    id: "favoritIsTrue",
    name: "tagChoise",
    value: "true",
    checked: input.tagChoise === 'true',
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "contactChoice1"
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043B\u044E\u0431\u0438\u043C\u044B\u0435")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col"
  }, /*#__PURE__*/_react.default.createElement("input", {
    //   onChange={changeHandler}
    type: "radio",
    id: "favoritIsFalse",
    name: "tagChoise",
    value: "false",
    checked: input.tagChoise === 'false',
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "contactChoice2"
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0447\u0435\u0440\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A"))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn"
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "align-top mx-auto mt-5",
    style: {
      width: '400px'
    }
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: "container zalupa rounded-3 py-3 item",
    align: "center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "\u0427\u0442\u043E \u044F \u043D\u0435 \u0445\u043E\u0447\u0443 \u0432\u0438\u0434\u0435\u0442\u044C?"), /*#__PURE__*/_react.default.createElement("div", {
    className: "col"
  }, tagsState.map(el => !el.isFavorite ? /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-3 hover-effect-btn"
  }, el.tag, ' ', /*#__PURE__*/_react.default.createElement("button", {
    onClick: event => deleteHandler(event, el),
    type: "delete",
    className: "button"
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null))))))))));
}