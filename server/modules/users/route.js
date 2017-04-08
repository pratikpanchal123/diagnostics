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

router.post('/users/upload', function(req, res) {
    if (!req.files){
        return res.status(400).send('No files were uploaded.');
    }

    var report = req.files.reportFile;

    console.log(__dirname);

    report.mv('/app/reports/'+report.name, function(err) {
        if (err) {
            return res.status(500).send(err);
        } else {
            return res.status(200).send('File uploaded!');
        }
    });
});

module.exports = router;
