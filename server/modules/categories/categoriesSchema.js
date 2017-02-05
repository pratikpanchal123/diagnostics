/*
    This file declares the category schema and make it available to mongoose.
*/
// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('categories', new Schema({
    "categories_id": String,
    "name": String,
    "desc": String,
    "status": Number,
    "image": String,
    "type": String
}));