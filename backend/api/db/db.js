const mongoose = require('mongoose');
const {Provider} = require('../models/provider')

//connection URI to database
const uri = 'mongodb://127.0.0.1:27017/mongodb_provider';

//make connection
// mongoose.connect(uri)
//     .then( result => {
//         console.log('Sucessfully Connected')
//     })
//     .catch(
//         error => {
//             console.log('Not successful', error)
//         }
//     )
// const uri = 'mongodb://127.0.0.1:27017/mongodb_provider';

mongoose.connect(uri)
    .then(() => {
        console.log('Successfully Connected');
    })
    .catch((error) => {
        console.error('Not successful', error);
    });

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('MongoDB connection closed due to app termination');
        process.exit(0);
    });
});

module.exports = Provider

