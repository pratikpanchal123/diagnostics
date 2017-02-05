var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var usersRoute = require('./server/modules/users/route');
var doctorsRoute = require('./server/modules/doctors/route');
var labsRoute = require('./server/modules/labs/route');
var categoriesRoute = require('./server/modules/categories/route');

//var connectioString = "mongodb://localhost/diagnostic";
var connectioString = "mongodb://pratikpanchal:pratik@ds033076.mlab.com:33076/diagnostic";

mongoose.connect(connectioString, function(err){
	console.log("DB Connected ");
}); // connect to database

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", usersRoute);
app.use("/api",doctorsRoute);
app.use("/api",labsRoute);
app.use("/api",categoriesRoute);

app.use(express.static(__dirname));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});