'use strict';
var path = require('path'),
    Datastore = require('nedb'),
    db = new Datastore({
    	filename: path.join(__dirname, '../../db/tasks.db'),
    	autoload: true
    });


// Get list of tasks
exports.index = function(cb) {
    db.find({}, cb);
};

exports.show = function(id, cb) {
	db.findOne({_id: id}, cb);
};

exports.create = function(data, cb) {
	data.state = 'todo';
    db.insert(data, cb);
};

exports.update = function(id, data, cb) {
	db.update({_id: id}, data, {}, cb);
};

exports.destroy = function(id, cb) {
	db.remove({_id: id}, {}, cb);
};