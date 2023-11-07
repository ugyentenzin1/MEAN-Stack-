const mongoose = require('mongoose');

//creating a schema class
const Schema = mongoose.Schema;

//create company schema
const companySchema =new Schema({
    "company_name": {type: String, required: true},
    "address":{type: String, required: true},
    "address2": String,
    "city": {type: String, required: true},
    "state": {type: String, required: true, max : 2, min: 2},
    "postal_code": {type: String, required: true, min: 5},
    "phone": {type: String, required: true},
    "email": {type: String, required: true, unique: true},
    "description": String,
    "tagline": String
})

//create a provider schema
const providerSchema = new Schema({
    "firstname": {type: String, required: true},
    "lastname": {type: String, required: true},
    "position": String,
    "company": companySchema
})

module.exports = {companySchema, providerSchema};

