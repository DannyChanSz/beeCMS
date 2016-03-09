var _ = require("underscore");
var crypto = require('crypto');

module.exports = {

    defaultCall: function(err, success, done) {
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
    },
    //生成加密密码
    getHashPassword: function(password) {
        var sha1 = crypto.createHash('sha1');
        sha1.update(password);
        var passwordSha = sha1.digest('hex');
        return passwordSha;
    },
    /***** 判断是否为json对象 *******
     * @param obj: 对象（可以是jq取到对象）
     * @return isjson: 是否是json对象 true/false
     */
    isJson :function(obj) {
        var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
        return isjson;
    }
}
