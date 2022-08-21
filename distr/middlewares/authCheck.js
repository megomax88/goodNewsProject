"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authCheck;

function authCheck(req, res, next) {
  // Вопрос нужен чтобы убедиться, что это свойство не undefined
  if (req.session?.userSession) {
    next();
  } else {
    res.redirect('/notauth');
  }
}