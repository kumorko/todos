'use strict';

var util = require('util'),
    _ = require('lodash');
/**
 *BaseError constructor
 *
 * @param {String} msg BaseError message
 */

function BaseError(msg, title) {
    this.messages = util.isArray(msg) ? msg : [msg];
    this.title = title || 'Service error';
    this.name = 'BaseError';
    //TODO log errors
}

BaseError.prototype.toJSON = function() {
    return {
        title: this.title,
        messages: this.messages
    };
};

BaseError.prototype.toHTML = function() {
    //TODO move to template
    return '<h2>' + this.title + '</h2><ul>' + _.map(this.messages, function(msg) {
        return '<li>' + msg + '</li>';
    }).join('') + '</ul>';
};

BaseError.prototype.toString = function() {
    return this.title + ': ' + this.messages.join('; ');
};

/*!
 * Module exports.
 */

module.exports = BaseError;