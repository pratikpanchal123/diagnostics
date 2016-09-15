var express = require('express');
var bodyParser = require('body-parser');
var User = require('./usersSchema');
app = express();
var router = express.Router();              // get an instance of the express Router

//  add new customer
function Save(req,callback){
      var user = new User();
		console.log(req.body);
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.username = req.body.username;
        user.password = req.body.password;
        // save the bear and check for errors
        user.save(function(err) {
            if (err){
                 response = {
                    success:false,
                    message:err,
                    code:400
                };
            }else{
                var  response = {
                    success:true,
                    message:'User Added Successfully!',
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
