const jwt = require('jsonwebtoken');
const CustomError = require('../../errors/customError');
const { isTokenIncluded, getAccessTokenFromHeader } = require('../../helpers/auth/tokenHelper');
const { readJsonFile } = require('../../helpers/file/jsonHelper');

const getAccessToRoute = (req, res, next) => {
  if (!isTokenIncluded(req))
    return next(new CustomError('You are not authorization to access this route', 401));

  const accessToken = getAccessTokenFromHeader(req);
  const { JWT_SECRET_KEY } = process.env;

  jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
    if (err) return next(new CustomError('You are not authorization to access this route', 401));

    req.user = {
      id: decoded.id,
      userName: decoded.userName
    };
    next();
  });
};

const getRoleAccess = (...roles) => {
  return (req, res, next) => {
    const { id } = req.user;

    const db = readJsonFile(process.env.DB_PATH);
    const userRoles = db.userRoles.filter(userRole => userRole.userId === id);
    const requiresRoles = db.roles.filter(role => roles.includes(role.name));

    for (const requiresRole of requiresRoles)
      if (!userRoles.find(userRole => userRole.id === requiresRole.id))
        return next(new CustomError('You are not authorization to access this route', 401));

    next();
  };
};

module.exports = { getAccessToRoute, getRoleAccess };
