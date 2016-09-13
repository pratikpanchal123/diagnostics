/*
	Route file exposes all the routes for particular module, in this case it exposes get, delete, post and put routes for getting data, delete data, creating data and updating data to database respectively.
*/
var express 		= require("express");
var productModel 	= require("./productsModel");
var routes 			= express.Router();

routes.get("/products", function(req, res) {
	productModel.find(req, function(response){
		res.json(response);
	});
});

module.exports = routes;