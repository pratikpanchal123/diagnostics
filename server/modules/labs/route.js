var express = require('express');
var bodyParser = require('body-parser');
var LabsModel = require('./labsModel');

app = express();
var router = express.Router();// get an instance of the express Router

router.post('/labs',function(req, res) {
    LabsModel.save(req,function(response){
        res.json(response);      
    });
});

router.get('/labs',function(req, res) {
    LabsModel.find(req,function(response){
        res.json(response);
   });
});

module.exports = router;
