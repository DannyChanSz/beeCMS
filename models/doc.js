var config = require("../config/config.js");
var _ = require("underscore");

/**
 * 结构
 * _id,categoryId,categoryTitle,title,content,thumb,createdBy,crearedOn
 */

var entities = config.db.collection("doc");


/**
     * 默认返回方法
     * @param  {[type]}   err     [description]
     * @param  {[type]}   success [description]
     * @param  {Function} done    [description]
     * @return {[type]}           [description]
     */
    this.defaultCall = function(err, success, done) {
        if (!err) {
            return done({
                status: true,
                data: success
            });
        } else {
            return done({
                status: false,
                data: err
            });
        }
    };

module.exports = {

    update: function(id, entity, done) {
        var _id = config.mongojs.ObjectId(id);
        delete entity.id;

        entities.update({
            _id: _id
        }, {
            $set: entity
        }, _.partial(this.defaultCall, _, _, done));
    }
}
