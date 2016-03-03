var docCtrl = require('../controllers/docCtrl.js');


/**
 * 文档路由
 * @param  {[type]} server [description]
 * @return {[type]}        [description]
 */
module.exports = function(server) {

    var PATH = '/doc';    

    server.post({
        path: PATH + '/',
        version: '0.0.1'
    }, docCtrl.create);    

    server.put({
        path: PATH + '/:id',
        version: '0.0.1'
    }, docCtrl.update);

    server.get({
        path: PATH + '/',
        version: '0.0.1'
    }, docCtrl.findAll);

    server.get({
        path: PATH + '/:id',
        version: '0.0.1'
    }, docCtrl.findById);
}
