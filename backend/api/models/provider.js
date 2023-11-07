const mongoose = require('mongoose');
const {providerSchema} = require('../schemas/provider.schema')

//creating the provider model
const Provider = mongoose.model('Providers', providerSchema)

module.exports = {Provider};
