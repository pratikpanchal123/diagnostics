/*
    This file declares the user schema and make it available to mongoose.
*/
// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Product', new Schema({
    name: String,
	desc: String,
    catalog: String,
    totalNoOfOrders: Number,
	avgPrice: String,
	maxPrice: String,
	minPrice: String,
	avgCost: String,
	reviewCount: Number,
	avgRating: Number,
	socialAction: {
		fb:Number,
		twitter:Number
	},
	channel: [{
		online:Number,
		mobile:Number, 
		shop:Number
	}]
}));