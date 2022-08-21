"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AllNews;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactPlayer = _interopRequireDefault(require("react-player"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function AllNews({
  authState
}) {
  const [plyerState, setPlyerState] = (0, _react.useState)(false);
  const [tagsState, setTagsState] = (0, _react.useState)([]);
  const [news, setNews] = (0, _react.useState)();
  const [text, setText] = (0, _react.useState)([{
    title: '',
    link: ''
  }]); // const [text2, setText2] = useState([]);
  // OBJjjjjjjjjjjjjj
  // console.log('text', text);
  // console.log('news', news);

  (0, _react.useEffect)(() => {
    fetch('api/v1/tags', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(authState)
    }).then(res => res.json()).then(async resp => {
      setTagsState(resp);
      return fetch('/api/v1/getnews').then(res => res.json()).then(data => setNews(prev => {
        setText(prevt => {
          const text2 = data?.split('<item>').map(x => x.match(/<link>( *.*)*<\/link>/gm)[0].slice(6, -7));
          const array = data?.split('<item>').map(x => x.match(/<title>( *.*)*<\/title>/gm)[0].slice(7, -8)).map((title, ind) => ({
            title,
            link: text2[ind]
          })).filter(el => {
            for (let i = 0; i < resp.length; i += 1) {
              if (el.title.includes(resp[i].tag)) {
                return true;
              }
            }

            return false;
          });
          console.log('TAGS', resp);
          console.log('texts array', array);
          return array;
        });
        return data;
      }));
    });
  }, []);

  const pleerHandler = e => {
    e.preventDefault();
    setPlyerState(!plyerState);
    console.log(plyerState);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, plyerState ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "player"
  }, /*#__PURE__*/_react.default.createElement(_reactPlayer.default, {
    className: "container zalupa rounded-3 py-3 item",
    align: "center",
    url: "https://www.youtube.com/watch?v=pNU_ImrnyVU"
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement("button", {
    className: "btnplyer",
    type: "button",
    onClick: pleerHandler
  }, "\u041C\u0443\u0437\u044B\u043A\u0430"), text?.map((el, i) => /*#__PURE__*/_react.default.createElement("div", {
    className: "mx-auto mt-5",
    style: {
      width: '500px'
    }
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: "container zalupa rounded-3 py-3 item",
    align: "center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: `${el.link}`
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "charnews"
  }, el.title)))))));
}