/*
	Categories model defines and declared all the methods which we can use to deal with categories schema in mongoDB.
*/
var Category = require('./categoriesSchema');

function find(req, callback){
	var response = {};
    Category.find({status:"1"}, function(err, categories){
        if(err) {
			response = {status:"fail", statuscode:400, data: err};
		} else {
			response = {status:"ok", statuscode:200, data: categories};
		}
		callback(response);
	});
}

function findCategoriesByType(req, callback) {
    Category.find({status: "1", type: req.params.type}, function (err, categories) {
        if (err) {
            response = {status: "fail", statuscode: 400, data: err};
        } else {
            response = {status: "ok", statuscode: 200, data: categories};
        }
        callback(response);
    });
}


module.exports.find = find;
module.exports.findCategoriesByType = findCategoriesByType;
