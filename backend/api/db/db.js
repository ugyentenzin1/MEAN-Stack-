const mongoose = require('mongoose');
const {Provider} = require('../models/provider')

//connection URI to database
const uri = 'mongodb://127.0.0.1:27017/mongodb_provider';

//make connection
mongoose.connect(uri, {useNewUrlParser: true ,useUnifiedTopology: true})
    .then( result => {
        console.log('Sucessfully Connected')
    })
    .catch(
        error => {
            console.log('Not successful', error)
        }
    )

//used to create once
// Provider.create({
//     "firstname": "Marylinda",
//     "lastname": "Bevir",
//     "position": "Chief Executive Office",
//     "company": {
//         "company_name": "Jabbersphere",
//         "address": "1081 Arapahoe Court",
//         "address2": "",
//         "city": "Houston",
//         "state": "TX",
//         "postal_code": "77234",
//         "phone": "713-849-1712",
//         "email": "mbevir@jabbersphere.com",
//         "description": "Versatile Asynchronous Collaboration",
//         "tagline": "Visualize Cross-Platform Action-Items"
//     }
// }).then()

module.exports = Provider

