/*
	Users model defines and declared all the methods which we can use to deal with users schema in mongoDB.
*/
var Product = require('./productsSchema');

function find(req, callback){
	var response = {};
	Product.find({}, function(err, products){
		if(err) {
			response = {status:"fail", statuscode:400, data: err};
		} else {
			response = {status:"ok", statuscode:200, data: products};
		}
		callback(response);
	});
}

module.exports.find = find;