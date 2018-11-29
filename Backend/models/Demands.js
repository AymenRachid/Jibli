const mongoose = require('mongoose');

const DemandsSchema = mongoose.Schema({
    price: String,
    name: String,
    Date: Date.now(),
    image: String,
    description: String,
});

const DemandsModel = mongoose.model('Demands', DemandsSchema);

module.exports = DemandsModel;