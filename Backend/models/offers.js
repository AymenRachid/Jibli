const mongoose = require('mongoose');

const OffersSchema = mongoose.Schema({
    price: String,
    name: String,
    Date: Date,
    image: String,
    description: String,
    
});

const OffersModel = mongoose.model('Offers', OffersSchema);

module.exports = OffersModel;