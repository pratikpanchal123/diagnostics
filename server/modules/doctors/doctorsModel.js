var express = require('express');
var bodyParser = require('body-parser');
var Doctors = require('./doctorsSchema');
app = express();
var router = express.Router();              // get an instance of the express Router

//  add new customer
function Save(req,callback){
      var doctors = new Doctors();
    doctors.firstName = req.body.firstName;
    doctors.lastName = req.body.lastName;
    doctors.address = req.body.address;
    doctors.speciality = req.body.speciality;
    doctors.city = req.body.city;
    doctors.state = req.body.state;
    doctors.phone = req.body.phone;
    doctors.mobile = req.body.mobile;
    doctors.email = req.body.email;
    doctors.availibity = req.body.availibity;
    doctors.from_time = req.body.from_time;
    doctors.to_time = req.body.to_time;
    doctors.first_consulation = req.body.first_consulation;
    doctors.fees = req.body.fees;
    doctors.rating = req.body.rating;
    doctors.experience = req.body.experience;

    doctors.save(function(err) {
            if (err){
                 response = {
                    success:false,
                    message:err,
                    code:400
                };
            }else{
                var  response = {
                    success:true,
                    message:'New Doctors added successfully!',
                    code:200    
                };
            }
          callback(response);
        });
    
}

//  find all customers
function Find(req,callback){
    Doctors.find(function(err, users) {
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
    Doctors.find(req,function(err, users) {
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
