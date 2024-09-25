const express = require('express');
const userController = require('../controllers/userController');
const authorize = require('../middlewares/authorize')
const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/getUserInfo', authorize.auth,userController.userInformation);

module.exports = router;


//http://localhost:4000/api/auth/register
// http://localhost:4000/api/auth/login
//http://localhost:4000/api/auth/getUserInfo
