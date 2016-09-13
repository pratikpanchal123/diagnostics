var express = require('express');
var bodyParser = require('body-parser');
var CustomersModel = require('./customersModel');

app = express();
var router = express.Router();// get an instance of the express Router

router.get('/customers',function(req, res) {
   CustomersModel.find(req,function(response){
        res.json(response);
   });
});

router.post('/customers',function(req, res) {
    CustomersModel.save(req,function(response){
        res.json(response);      
    });
});


module.exports = router;
