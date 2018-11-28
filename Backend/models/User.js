const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    phoneNumber: String,
    address: String,
    offers: Array
});

const UserModel = mongoose.model('Offers', UserSchema);

module.exports = UserModel;