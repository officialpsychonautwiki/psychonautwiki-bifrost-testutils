'use strict';

/*
    Usage:

    const errors = require('../path/to/lib');

    class Service {
        constructor () {

        }

        someMethod () {
            throw new this.NotFoundError();
        }
    }

    Service.prototype.NotFoundError = class ServiceNotFoundError extends errors {};

    module.exports = Service;
*/

/*
    Instanciates a new error-type specified by name so that
    it can be used to provide a constructor-level different-
    iation of different error classes, e.g. ErrorNotAllowed,
    ErrorConflict, ... - can be used to reject a promise.
*/
class BaseError extends Error {
    constructor(message) {
        super(message);

        this.name = this.constructor.name;
        this.message = message;

        Error.captureStackTrace(this, this.constructor)
    }
};

module.exports = BaseError;