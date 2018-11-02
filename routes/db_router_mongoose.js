var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_v2gqnhzb:botkmolrsh0vv55hqk3eo1k5kj@ds127771.mlab.com:27771/heroku_v2gqnhzb');
let db = mongoose.connection;
db.on('error', function (e){
	console.error(e);
});
db.once('open', function(){
	console.log('connected');
})

let Schema = mongoose.Schema;
let testSchema = new Schema({
	contents : String,
	meta : {
		titl : String,
		count : Number
	}
});

let a = mongoose.model('test', testSchema);



router.get('/', function(req, res, next) {
	let aobject = new a();
	aobject.meta.titl = "test";
	aobject.meta.count = 5;

	aobject.save(function(err){
		if(err){
			res.render('index', { title: 'Error', name: 'Error page' });
		}else{
			res.render('index', { title: 'Express', name: 'KBS' });
		}
	});
	res.render('index', { title: 'Express', name: 'KBS' });
});

module.exports = router;