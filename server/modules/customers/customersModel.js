var express = require('express');
var bodyParser = require('body-parser');
var Customer = require('./customersSchema');

//  find all customers
function Find(req,callback){
    Customer.find(function(err, customers) {
            if (err){
				 response = {status:"fail", statuscode:400, data: err};
            }else{
				response = {status:"ok", statuscode:200, data: customers};
            }
            callback(response);
        });
}
//  add new customer
function Save(req,callback){
		var customer = new Customer();
		
		var profileObj = req.body.profile;
		customer.profile.push(profileObj);
		
		var addressObj = req.body.address;
		customer.address.push(addressObj);
		
		var actionsObj = req.body.actions;
		customer.actions.push(actionsObj);
		
		var productsObj = req.body.products;
		customer.products.push(productsObj);
		
		var channelActivityObj = req.body.channelActivity;
		customer.channelActivity.push(channelActivityObj);
	    
		// save the bear and check for errors
        customer.save(function(err) {
            if (err){
                  var  response = {
                    success:false,
                    message:err,
                    code:400    
                };
            }else{
                var  response = {
                    success:true,
                    message:'Customer Added Successfully!',
                    code:200    
                };
            }
          callback(response);
        });
    
}


exports.find = Find;
exports.save = Save;