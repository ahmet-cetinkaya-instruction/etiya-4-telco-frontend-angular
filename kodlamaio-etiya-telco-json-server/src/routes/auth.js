const express = require('express');
const { login } = require('../controllers/authController');
const { getAccessToRoute, getRoleAccess } = require('../core/middlewares/auth/auth');

const router = express.Router();

router.post('/login', login);
router.get('/test', getAccessToRoute, (req, res) =>
  res.json({ success: true, message: 'You are authorized to access this route.' })
);
router.get('/test-admin', getAccessToRoute, getRoleAccess('admin'), (req, res) =>
  res.json({ success: true, message: 'You are authorized to access this route.' })
);

module.exports = router;
