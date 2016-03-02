var docCtrl = require('../controllers/docCtrl.js');


/**
 * 文档路由
 * @param  {[type]} server [description]
 * @return {[type]}        [description]
 */
module.exports = function(server) {

	var PATH='/doc';
	server.get({
        path: PATH + '/',
        version: '0.0.1'
    }, docCtrl.findAll);
server.post({
        path: PATH + '/',
        version: '0.0.1'
    }, docCtrl.create);
}