var express = require('express');
var bodyParser = require('body-parser');
var Labs = require('./labsSchema');
app = express();
var router = express.Router();              // get an instance of the express Router

//  add new customer
function Save(req,callback){
      var labs = new Labs();
	labs.firstName = req.body.firstName;
    labs.lastName = req.body.lastName;
    labs.address = req.body.address;
    labs.speciality = req.body.speciality;
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
    User.find(function(err, users) {
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

//  Find customer by Id
function ValidateUser(req,callback){
    User.findOne({ username: req.body.username }, function(err, user) {
        if (err){
                 response = {
                    success:false,
                    message:err,
                    code:400
                };
            }else{
                var response = {}

                if(user === undefined || user === null){
                    response.success = false;
                    response.code = 400;
                }else{
                    if(user.password == req.body.password){
                            response.success = true;
                            response.code = 200;
                     }else{
                        response.success = false;
                        response.code = 200;
                    }
                }
                
            }
            callback(response);  

    });
}

exports.save = Save;
exports.find = Find;
exports.validateUser = ValidateUser;
