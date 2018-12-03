const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    phoneNumber: String,
    address: String,
    offers: Array,
    Demands: Array,
 
});

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;
var importoffer = require('C:\Users\mohamed ben ahmed\Desktop\soft project\Jibli\Backend\models\offers.js')
offers= [JSON.parse(importoffer)];
