var express = require('express');
var bodyParser = require('body-parser');
var DoctorsModel = require('./doctorsModel');

app = express();
var router = express.Router();// get an instance of the express Router

router.post('/doctors',function(req, res) {
    DoctorsModel.save(req,function(response){
        res.json(response);      
    });
});

router.get('/doctors',function(req, res) {
    DoctorsModel.find(req,function(response){
        res.json(response);
   });
});

module.exports = router;
