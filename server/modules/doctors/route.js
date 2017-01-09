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

router.get("/doctors/:q", function(req, res) {
	var q = req.params.q;
	// DoctorsModel.findByFields({"state":q}, function(response){
		// res.json(response);
	// });
	DoctorsModel.findByFields(
	{
		$or:[
			{"firstName":new RegExp(q, 'i')},
			{"lastName":new RegExp(q, 'i')},
			{"speciality":new RegExp(q, 'i')},
			{"address":new RegExp(q, 'i')},
			{"city":new RegExp(q, 'i')},
			{"state":new RegExp(q, 'i')}
		]
		},function(response){
        res.json(response);
   });
	
	
	
});

module.exports = router;
