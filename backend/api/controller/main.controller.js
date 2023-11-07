let providers = require('../models/providers.models');
const Provider = require('../db/db');

//CRUD Operations - Create(POST), Read(GET), Update(PUT), Delete(DELETE);
//Checklist
function isEmptyList(obj) {
    return ( !obj || obj.length === 0 || Object.keys(obj).length === 0)
}

//handleError
function handleError(res, error) {
    res.status(404);
    res.send(error)
}

//POST 
//URI: /api/providers
module.exports.create = function(req, res) {

    try {
        if(isEmptyList(providers)) {
            providers = [];
        }

        // let id = req.body.id;
        // if(providers.find(value => value.id === +id)) {
        //     res.status(404);
        //     res.send('Duplicate Id not allowed');
        // }

        let provider = req.body;
        // provider.id = id;

        Provider.create(provider).then(result => {
            res.status(201);
            res.send(result)
        }).catch(val => {
            handleError(res, val)
        })

    } catch (error) {
        handleError(res, error)
    }
}

//GET
//URI: /api/providers
module.exports.read = function(req, res) {

    try {
        Provider.find().then(value => {
            if(isEmptyList(value)) {
                res.status(404);
                res.send('Providers Not found')
            }
            res.status(200);
            res.send(value);
        })
            .catch(error => handleError(res, error));
    } catch (error) {
        handleError(res, error)
    }
}

//GET One
//URI: /api/providers/:id
module.exports.readOne = function(req, res) {
    try {
        let id = req.params.id.toString();
        Provider.find({'_id': id})
            .then(result => {

                if(isEmptyList(result)) {
                    res.status(404);
                    res.send('Providers Not found')
                }
                // let provider = providers.find( val => val.id === +id);
                res.status(200);
                res.send(result)
            }).catch(val => handleError(res, val))
    } catch(error) {
        handleError(res, error)
    }
}

//PUT
//URI: /api/providers/123
module.exports.update = function(req, res) {

    let id = req.params.id.toString();
    let provider = req.body;
    try {
        Provider.findOneAndUpdate({'_id': id}, provider, {new: true})
            .then(result => {
                if(isEmptyList(result)){
                    res.status(404);
                    res.send('Not able to Update')
                }

                res.status(201);
                res.send(result)

            })
            .catch(val => handleError(res, val))

    } catch (error) {
        handleError(res, error)
    }
}

//DELETE 
//URI: /api/providers
module.exports.deleteAll = function(req, res) {

    try {
        Provider.deleteMany({})
            .then(result => {
                if(result.deletedCount === 0) {
                    res.status(404);
                    res.send('Providers Not found')
                }
                // providers = [];

                res.status(202);
                res.send("All Providers Deleted");
            })
            .catch(val => handleError(res, val))
    } catch (err) {
        handleError(res, err)
    }

}

//DELETE One
//URI: /api/providers
module.exports.deleteOne = function(req, res) {

    try{
        let id = req.params.id.toString();
        Provider.findOneAndDelete({'_id': id})
            .then(result => {
                if(isEmptyList(providers)) {
                    res.status(404);
                    res.send('Providers Not found')
                }

                res.status(202);
                res.send(result)
            })
            .catch(val => handleError(res, val))

    }catch (error) {
        handleError(res, error)
    }
}
