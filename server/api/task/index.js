'use strict';

var express = require('express');
var controller = require('./task.controller');

var router = express.Router();

function defaultCallback(res, next) {
    return function(err, data) {
        if (err) {
            return next(err);
        }

        res.send(data);
    }
}

router.get('/', function(req, res, next) {
    controller.index(defaultCallback(res, next));
});

router.post('/', function(req, res, next) {
    controller.create({
        text: req.body.text
    }, defaultCallback(res, next));
});

router.put('/:id', function(req, res, next) {
    var taskId = req.params.id;
    //TODO client & server validation
    controller.update(taskId, req.body, function(err) {
        if (err) {
            return next(err);
        }
        controller.show(taskId, defaultCallback(res, next));
    });
});

router.delete('/:id', function(req, res, next) {
    var taskId = req.params.id;
    controller.destroy(taskId, function(err) {
        if (err) {
            return next(err);
        }

        res.send({
            _id: taskId
        });
    });
});

module.exports = router;