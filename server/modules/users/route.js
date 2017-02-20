var express = require('express');
var bodyParser = require('body-parser');
var UsersModel = require('./usersModel');

app = express();
var router = express.Router();// get an instance of the express Router

router.post('/users',function(req, res) {
    UsersModel.save(req,function(response){
        res.json(response);      
    });
});

router.get('/users',function(req, res) {
   UsersModel.find(req,function(response){
        res.json(response);
   });
});

router.post('/validate',function(req, res) {
    UsersModel.validateUser(req,function(response){
        res.json(response);
    })
});

router.post('/users/signin',function(req, res) {
    UsersModel.validateUser(req,function(response){
        res.json(response);
    })
});


module.exports = router;
