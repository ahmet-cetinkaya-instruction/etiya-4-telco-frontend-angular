const express = require('express');
const CustomError = require('../core/errors/customError');
const { sendJwtToClient } = require('../core/helpers/auth/tokenHelper');
const { readJsonFile } = require('../core/helpers/file/jsonHelper');

const router = express.Router();

const login = (req, res, next) => {
  const { userName, password } = req.body;

  if (!userName || !password) return next(new CustomError('Please check your inputs'), 400);

  const db = readJsonFile(process.env.DB_PATH),
    user = db.users.find(user => user.userName === userName);

  if (!user) return next(new CustomError('Please check your inputs'), 400);

  const userRoles = db.userRoles.find(userRole => userRole.userId === user.id);

  if (!user || user.password !== password)
    return next(new CustomError('Please check your credentials', 401));

  sendJwtToClient(user, userRoles, res);
};

module.exports = {
  login
};
