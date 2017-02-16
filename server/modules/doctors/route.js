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

router.get("/doctors/query/:q", function(req, res) {
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

router.get("/doctors/location/:location/keyword/:keyword", function(req, res) {
    var location = req.params.location;
    var keyword = req.params.keyword;
    // DoctorsModel.findByFields({"state":q}, function(response){
    // res.json(response);
    // });
    DoctorsModel.findByFields(
        {
            $or:[
                {"address":new RegExp(location, 'i')},
                {"city":new RegExp(location, 'i')},
                {"state":new RegExp(location, 'i')},
                {"firstName":new RegExp(keyword, 'i')},
                {"lastName":new RegExp(keyword, 'i')},
                {"speciality":new RegExp(keyword, 'i')},
            ]
        },function(response){
            res.json(response);
        });
});

router.get("/doctors/speciality/:categoryId", function(req, res) {
    var categoryId = req.params.categoryId;
    DoctorsModel.findByFields({"speciality":categoryId},function(response){
        res.json(response);
    });
});

router.get("/doctors/:doctorId", function(req, res) {
    var doctorId = req.params.doctorId;
    console.log(doctorId);
    DoctorsModel.findByFields({"_id":doctorId},function(response){
        res.json(response);
    });
});

module.exports = router;
