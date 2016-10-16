var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LabsSchema   = new Schema({
    name: String,
    address: String,
    city:String,
    state:String,
    createdDate:{ type: Date, default: Date.now },
});

module.exports = mongoose.model('Labs', LabsSchema);