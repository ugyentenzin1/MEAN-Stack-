let express = require('express');
let router = express.Router();
const controller = require('../controller/main.controller');

//HTTP verbs: POST, GET , PUT, DELETE

//post /api/providers
router.post('/providers', controller.create);

//Get /api/providers
router.get('/providers', controller.read);

//Get only one /api/providers/:id
router.get('/providers/:id', controller.readOne);

//Put updating /api/providers
router.put('/providers/:id', controller.update);

//Delete one  /api/providers/121
router.delete('/providers/:id', controller.deleteOne);

//Delete all /api/providers
router.delete('/providers', controller.deleteAll);

function notFound(req, res) {
    res.status(404);
    res.send('Page Not Found');
}
//Not Found
router.post('/*', notFound);
router.get('/*', notFound);
router.put('/*', notFound);
router.delete('/*', notFound);

module.exports = router;


