var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    birthDate: Date,
    address1:String,
    address2:String,
    city:String,
    state:String,
    zipCode:String,
    country:String,
    profilePic:String,
    mobile:Number,
    password:String,
    aadharNumber:Number,
    createdDate:{ type: Date, default: Date.now },




});

module.exports = mongoose.model('User', UserSchema);