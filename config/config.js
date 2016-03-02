var mongojs = require("mongojs");
var connection_string = '127.0.0.1:27017/beecms';
var dbName = mongojs(connection_string, ['beecms']);


module.exports =  {
    mongojs: mongojs,
    db: dbName,
    jwtTokenSecret:'123456qwert',
    resHead: function(res) {
        res.charSet('utf8');
    }

}


