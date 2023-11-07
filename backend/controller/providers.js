// provider controller 
const providers = require('../models/providers')

//providers listing in the service providers
module.exports.list = function(req, res) {
    //render it ('file_path', data or any in object)
    res.render('providers/providers-list', { title: 'Providers' ,providers: providers.data});
}

//details of the providers 
module.exports.details = function(req, res) {
    //getting the id through parmas from req
    let id = req.params.id;

    //matching the id in data base and the id send
    let provider = providers.data.find(data => data.id === +id);

    //error handling
    if(!provider) {
        res.status(404).send("Provider Not Found");
    }

    //passing the data to the template
    res.render('providers/providers-details', 
    { id: id, title: 'Provider Details', data : provider.company});
}

//edit the form
module.exports.edit = function(req, res) {
    let id = req.params.id;

    let provider = providers.data.find(data => data.id === +id);

    if(!provider) {
        res.status(404).send("Provider Not Found");
    }

    res.render('providers/providers-edit', {id: id, title: "Edit Providers", editProviderData: provider})
}

//update the form
module.exports.update = function(req, res) {
    let id = req.params.id;

    let provider = providers.data.find(data => data.id === +id);

    //form validation
    //lesson: params for the get and body for the post method
    provider.firstname = req.body.firstname;
    provider.lastname = req.body.lastname;
    provider.position = req.body.position;
    provider.company.company_name = req.body.company_name;
    provider.company.email = req.body.email;
    provider.company.phone = req.body.phone;
    provider.company.address = req.body.address;
    provider.company.address2 = req.body.address2;
    provider.company.postal_code = req.body.postal_code;
    provider.company.city = req.body.city;
    provider.company.state = req.body.state;
    provider.company.description = req.body.description;
    provider.company.tagline = req.body.tagline;


    if(!provider) {
        res.status(404).send("Provider Not Found");
    }

    res.render('providers/provider-update', {id: id, title: "Update"})
}

//add the form
module.exports.addprovider = function(req, res) {
    res.render('providers/providers-add-form', { title: "Add Providers"})
}

//update the form
module.exports.addUpdate = function(req, res) {
    //creating random ID
    let id = Math.floor(Math.random() * (999999 - 100000) + 100000);

    //create new provider
    let provider = {

        id: id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        position : req.body.position,
        //form validation
        //lesson: params for the get and body for the post method
        company : {
            company_name :req.body.company_name,
            email : req.body.email,
            phone : req.body.phone,
            address : req.body.address,
            address2 : req.body.address2,
            postal_code : req.body.postal_code,
            city : req.body.city,
            state : req.body.state,
            description : req.body.description,
            tagline : req.body.tagline,
        }

    }
    providers.data.push(provider);

    res.render('providers/providers-add', {title: "Added"})
}

module.exports.delete = function(req, res) {

    let id = req.params.id;
    let provider = providers.data.find( data => data.id == id);
    let index = providers.data.indexOf(provider);

    let company = provider.company.company_name;

    providers.data.splice(index, 1);

    if(!provider) {
        res.status(404).send("Provider Not Found");
    }

    res.render('providers/providers-delete', {
        title: 'Success Fully Deleted',
        company : company,
    })
}