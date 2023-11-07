var express = require('express');
var router = express.Router();
const providerController = require('../controller/providers')

/* GET list page. */


router.get('/', providerController.list);

//getting the id //getting the details
router.get('/details/:id', providerController.details);

//get used to fetch the data 
router.get('/edit/:id', providerController.edit);

//lesson: post used to update the data
router.post('/update/:id', providerController.update)

//add provider
router.get('/add-provider', providerController.addprovider)

//add Update provider
router.post('/add', providerController.addUpdate)


router.get('/delete/:id', providerController.delete)

module.exports = router;