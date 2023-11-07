var express = require('express');
var router = express.Router();
const mainController = require('../controller/main')

/* GET home page. */
// router.get('/', function(res, req) {
//   res.render('index', {title: 'Zhangla Website'})
// });

router.get('/', mainController.home);

router.get('/about', mainController.about);

router.get('/contact', mainController.contact);

router.get('/login', mainController.login);

router.get('/register', mainController.resgister);

router.get('/forgot-password', mainController.forgotpassword)

module.exports = router;
