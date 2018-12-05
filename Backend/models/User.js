const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    phoneNumber: String,
    address: String,
    offers: Array,
    demands: Array,
 
});

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;
