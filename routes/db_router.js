var express = require('express');
var router = express.Router();
var Parse = require('parse/node');

const APP_ID = process.env.APP_ID;
const JAVASCRIPT_KEY = process.env.JAVASCRIPT_KEY;
const SERVER_URL = 'https://kimbyungsoo.herokuapp.com/parse'


router.get('/', function(req, res, next) {
	Parse.initialize(APP_ID, JAVASCRIPT_KEY);
	Parse.serverURL = SERVER_URL
	const Contents= Parse.Object.extend("contents");
	const content = new Contents();

	content.set("title", title);
	content.set("content", content);

	content.save()
		.then((content) => {
 			return res.json(result);
		}, (error) => {
 			return res.status(404).json({error: "매개변수를 확인해 주세요."});
		});
	});

module.exports = router;