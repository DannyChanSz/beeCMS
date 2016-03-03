var _ = require("underscore");


var docModel = require('../models/context.js').doc();


/**
 * 文章管理
 * @type {Object}
 */
module.exports = {    
    create: function(req, res, done) {
        var entity = req.params;
        entity.createdOn=Date.now();
        docModel.create(entity, function(result) {
            res.json(result);
            res.end();
        });
    },
    update: function(req, res, done) {
        var entity = req.params;
        var id=req.params.id;
        console.log(entity);
        delete entity.id;
        
        docModel.update(id,entity, function(result) {
            res.json(result);
            res.end();
        });
    },
    findAll: function(req, res, done) {
        docModel.findAll({}, function(result) {
            res.json(result);
            res.end();
        });
    },
    findById: function(req, res, done) {
        docModel.findById(req.params.id, function(result) {
            res.json(result);
            res.end();
        });
    },

}
