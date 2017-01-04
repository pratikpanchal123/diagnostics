var express = require('express');
var bodyParser = require('body-parser');
var Labs = require('./labsSchema');
app = express();
var router = express.Router();              // get an instance of the express Router

//  add new customer
function Save(req,callback){
      var labs = new Labs();
	labs.name = req.body.name;
    labs.address = req.body.address;
    labs.city = req.body.city;
    labs.state = req.body.state;
        labs.save(function(err) {
            if (err){
                 response = {
                    success:false,
                    message:err,
                    code:400
                };
            }else{
                var  response = {
                    success:true,
                    message:'New Labs added successfully!',
                    code:200    
                };
            }
          callback(response);
        });
    
}

//  find all customers
function Find(req,callback){
    Labs.find(function(err, users) {
            if (err){
                response = {
                    success:false,
                    message:err,
                    code:400
                };
            }else{
                response = {
                    success:true,
                    data:users,
                    code:200
                };
            }
            callback(response);
        });
}

//  find all customers
function FindByFields(req,callback){
    Labs.find(req,function(err, users) {
            if (err){
                response = {
                    success:false,
                    message:err,
                    code:400
                };
            }else{
                response = {
                    success:true,
                    data:users,
                    code:200
                };
            }
            callback(response);
        });
}

exports.save = Save;
exports.find = Find;
exports.findByFields = FindByFields;
