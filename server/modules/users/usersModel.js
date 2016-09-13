/*
	Users model defines and declared all the methods which we can use to deal with users schema in mongoDB.
*/
var User = require('./usersSchema');

function find(req, callback){
	var response = {};
	User.find({}, function(err, users){
		if(err) {
			response = {status:"fail", statuscode:400, data: err};
		} else {
			response = {status:"ok", statuscode:200, data: users};
		}
		callback(response);
	});
}

module.exports.find = find;