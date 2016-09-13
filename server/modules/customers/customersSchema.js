var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CustomerSchema   = new Schema({
    profile:[{
		name:String,
		emailId:String,
		custId:String,
		category:[String],
		lastAccess:Date,
	}],
	address:[{
		type:String,
		addressLocal:String,
		city:String,
		state:String,
		postcode:String,
		
	}],
	actions:[{
		recommendationCount:Number,
		orderCancellations:Number,
		complaints:Number
	}],
	products:[{
			id:Number,
			buyDate:Date,
			rating:String,
			review:String,
			tweet:String,
			sentiment:String,
			SocialAction:[String]
			
	}],
	channelActivity:[{
		access:[{
			online:Number,
			mobile:Number,
			shop:Number
		}],
		sale:[{
			online:Number,
			mobile:Number,
			shop:Number
		}],
		dwell:[{
			online:Number,
			mobile:Number,
			shop:Number
		}],
		orderHistory:[{
			orderCount:Number,
			totalOrderValue:String,
			avgOrderValue:String,
			returnpercent:Number
			
		}]
	}]
});

module.exports = mongoose.model('Customer', CustomerSchema);