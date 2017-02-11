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

router.get('/labs/:q',function(req, res) {
	var q = req.params.q;
    LabsModel.findByFields(
	{
		$or:[
			{"name":new RegExp(q, 'i')},
			{"address":new RegExp(q, 'i')},
			{"city":new RegExp(q, 'i')},
			{"state":new RegExp(q, 'i')}
		]
		},function(response){
        res.json(response);
   });
});


router.get("/labs/location/:location/keyword/:keyword?", function(req, res) {
    var location = req.params.location;
    var keyword = req.params.keyword;
    LabsModel.findByFields(
        {
            $or:[
                {"address":new RegExp(location, 'i')},
                {"address2":new RegExp(location, 'i')},
                {"city":new RegExp(location, 'i')},
                {"state":new RegExp(location, 'i')}
            ],
            $or:[
                {"name":new RegExp(keyword, 'i')}
            ]
        },function(response){
            res.json(response);
        });
});




module.exports = router;
