/// <reference path="../typings/node/node.d.ts" />
/**
 * Main application routes
 */
'use strict';
var errors = require('./components/errors');
var path = require('path');
module.exports = function (app) {
    app.use('/auth', require('./auth'));
    app.use('/api/v1.1/user', require('./api/v1.1/user'));
    app.use('/api/v1.1/:owner/repository', require('./api/v1.1/repository'));
    app.use('/api/v1.1/:owner/language', require('./api/v1.1/language'));
    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);
    // All other routes should redirect to the index.html
    app.route('/*')
        .get(function (req, res) {
        res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
