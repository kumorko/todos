'use strict';

var BaseError = require('./BaseError.js');

var defualtMessage = 'Request is invalid';

/**
 * Casting Error constructor.
 *
 * @param {String} msg
 * @inherits BaseError
 * @api private
 */

function BadRequestError (msg, title) {
	this.name = 'BadRequestError';
	this.status = 400;
	BaseError.call(this, msg || defualtMessage, title);  
}

/*!
 * Inherits from BaseError.
 */

BadRequestError.prototype.__proto__ = BaseError.prototype;

/*!
 * exports
 */

module.exports = BadRequestError;
