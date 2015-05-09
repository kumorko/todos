'use strict';
var _ = require('lodash'),
    path = require('path'),
    BadRequestError = require('../../errors/BadRequestError'),
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
    db.findOne({
        _id: id
    }, cb);
};

exports.create = function(data, cb) {
    data.state = 'todo';
    if(!validateData(data)){
        return cb(new BadRequestError());
    }
    db.insert(clearData(data), cb);
};

exports.update = function(id, data, cb) {
    if(!validateData(data)){
        return cb(new BadRequestError());
    }

    db.update({
        _id: id
    }, clearData(data), {}, cb);
};

exports.destroy = function(id, cb) {
    db.remove({
        _id: id
    }, {}, cb);
};

function clearData(data) {
    return _.pick(data, ['text', 'state']);
}

//TODO improve validation
function validateData(data) {
    return (data.text && data.text.length > 0 && data.text.length < 100) && (data.state === 'todo' || data.state === 'done');
}