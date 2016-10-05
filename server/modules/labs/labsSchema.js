var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LabsSchema   = new Schema({
    firstName: String,
    lastName: String,
    address:String,
    speciality:String,
    createdDate:{ type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);