var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LabsSchema   = new Schema({
    name: String,
	address1: String,
	address2: String,
	city: String,
	state: String,
	zipCode: String,
	serviceId: String,
	labLogo: String,
	achievements: String,
	customerCareNumber: String,
	labDescription: String,
	emailId: String,
	country: String,
	contactPersonName: String,
	username: String,
	password: String,
	termscondition: String,
	rating: String,
	labWorkingTime: String,
	time: String
	createdDate:{ type: Date, default: Date.now }
	});

module.exports = mongoose.model('Labs', LabsSchema);