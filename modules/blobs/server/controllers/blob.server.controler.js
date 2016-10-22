var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

exports.lists = function(req, res) {
	mongoose.model('Blob').find({}, function (err, blobs) {
		res.json(blobs);
	});
}

exports.getById = function(req, res) {

}