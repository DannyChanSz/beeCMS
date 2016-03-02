var _ = require("underscore");


var docModel = require('../models/context.js').doc();


/**
 * 文章管理
 * @type {Object}
 */
module.exports = {
    findAll: function(req, res, done) {
        docModel.findAll({}, function(result) {
            res.json(result);
            res.end();
        });
    },
    create: function(req, res, done) {
        var entity = req.params;
        entity.createdOn=Date.now();
        docModel.create(entity, function(result) {
            res.json(result);
            res.end();
        })
    }

}
