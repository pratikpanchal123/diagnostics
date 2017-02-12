var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DoctorsSchema   = new Schema({
    firstName: String,
    lastName: String,
    address:String,
    speciality:String,
    city:String,
    state:String,
	pics:[],
	phone:String,
	mobile:String,
	email:String,
    createdDate:{ type: Date, default: Date.now },
});

module.exports = mongoose.model('Doctors', DoctorsSchema);