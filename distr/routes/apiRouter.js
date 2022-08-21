"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _axios = _interopRequireDefault(require("axios"));

var _models = require("../db/models");

var _authCheck = _interopRequireDefault(require("../middlewares/authCheck"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const route = _express.default.Router();

route.post('/registration', async (req, res) => {
  const {
    email,
    password
  } = req.body;

  try {
    const currUser = await _models.User.findOne({
      where: {
        email
      }
    });

    if (!currUser) {
      const hashPassword = await _bcrypt.default.hash(password, 10);
      const newUser = await _models.User.create({
        email,
        password: hashPassword
      });
      req.session.userSession = {
        email: newUser.email
      };
      return res.json({
        email: newUser.email
      });
    }

    res.status(400).json({
      message: 'Такой email уже занят'
    });
  } catch (err) {
    console.error(err);
  }
});
route.post('/auth', async (req, res) => {
  const {
    email,
    password
  } = req.body;

  try {
    const currUser = await _models.User.findOne({
      where: {
        email
      }
    });

    if (currUser) {
      const comparePassword = await _bcrypt.default.compare(password, currUser.password);

      if (comparePassword) {
        req.session.userSession = {
          email: currUser.email
        };
        return res.json({
          email: currUser.email
        });
      }
    }

    res.status(400).json({
      message: 'email or password uncorrected'
    });
  } catch (err) {
    console.error(err);
  }
});
route.get('/logout', async (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку

  req.session.destroy(); // Завершить сессию

  res.sendStatus(200);
});
route.post('/tags', async (req, res) => {
  try {
    const {
      email
    } = req.body;
    const currUser = await _models.User.findOne({
      where: {
        email
      }
    });
    const currUserId = currUser.dataValues.id;
    const currUserTagsModel = await _models.UserTags.findAll({
      where: {
        userId: currUserId
      }
    });
    const allUserTagId = currUserTagsModel.map(el => el.dataValues.tagId);
    const booleanOfAllTags = currUserTagsModel.map(el => el.dataValues.isFavorite);
    const allUserTags = allUserTagId.map(async (el, i) => {
      const oneTag = await _models.Tag.findOne({
        where: {
          id: el
        }
      });
      return {
        userId: currUserId,
        id: el,
        tag: oneTag.dataValues.tagName,
        isFavorite: booleanOfAllTags[i]
      };
    });
    Promise.all(allUserTags).then(responses => res.json(responses));
  } catch (err) {
    console.error(err);
  }
});
route.post('/createtag', _authCheck.default, async (req, res) => {
  try {
    const {
      tagName,
      tagChoise,
      authState
    } = req.body;
    const currUser = await _models.User.findOne({
      where: {
        email: authState.email
      }
    });
    const currUserId = currUser.dataValues.id;
    const [newTag, hadAdded] = await _models.Tag.findOrCreate({
      where: {
        tagName
      }
    });

    if (tagChoise === 'false') {
      await _models.UserTags.findOrCreate({
        where: {
          userId: currUserId,
          tagId: newTag.dataValues.id,
          isFavorite: false
        }
      });
    } else {
      await _models.UserTags.findOrCreate({
        where: {
          userId: currUserId,
          tagId: newTag.dataValues.id,
          isFavorite: true
        }
      });
    }

    const currUserTagsModel = await _models.UserTags.findAll({
      where: {
        userId: currUserId
      }
    });
    const allUserTagId = currUserTagsModel.map(el => el.dataValues.tagId);
    const booleanOfAllTags = currUserTagsModel.map(el => el.dataValues.isFavorite);
    const allUserTags = allUserTagId.map(async (el, i) => {
      const oneTag = await _models.Tag.findOne({
        where: {
          id: el
        }
      }); // console.log(oneTag.dataValues.tagName);

      return {
        userId: currUserId,
        id: el,
        tag: oneTag.dataValues.tagName,
        isFavorite: booleanOfAllTags[i]
      };
    });
    Promise.all(allUserTags).then(responses => res.json(responses));
  } catch (err) {
    console.error(err);
  }
});
route.get('/getnews', async (req, res) => {
  const data = await _axios.default.get('http://www.vedomosti.ru/newsline/out/rss.xml'); //   const newData = await data.text();

  res.json(data.data);
});
route.post('/delete/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      userId
    } = req.body;
    console.log(id);
    await _models.UserTags.destroy({
      where: {
        tagId: id,
        userId
      }
    }); // id

    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
});
var _default = route;
exports.default = _default;