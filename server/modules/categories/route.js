/*
	Route file exposes all the routes for particular module, in this case it exposes get, delete, post and put routes for getting data, delete data, creating data and updating data to database respectively.
*/
var express 		= require("express");
var categoryModel 	= require("./categoriesModel");
var routes 			= express.Router();

routes.get("/categories", function(req, res) {
    console.log(req.params)
    categoryModel.find(req, function(response){
		res.json(response);
	});
});

routes.get("/categories/:type", function(req, res) {
    categoryModel.findCategoriesByType(req, function(response){
        res.json(response);
    });
});

module.exports = routes;