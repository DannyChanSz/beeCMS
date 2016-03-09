var docCtrl = require('../controllers/docCtrl.js');
var _ = require("underscore");
var middle = require('../middleware/middlewares.js');

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
    }, docCtrl.updateById);

    server.get({
        path: PATH + '/',
        version: '0.0.1'
    }, docCtrl.findAll);

    server.get({
        path: PATH + '/:id:email',
        version: '0.0.1'
    }, _.partial(middle.inputCheck, _, _, _, [{ name: 'email', type: 'REQUIRED' }, { name: 'email', type: 'EMAIL' }]), docCtrl.findById);

    server.post({
        path: PATH + '/test',
        version: '0.0.1'
    }, _.partial(middle.inputCheck, _, _, _, [{ name: 'id', type: 'REQUIRED' }, { name: 'email', type: 'EMAIL' }]), docCtrl.findById);

    server.del({
        path: PATH + '/:id',
        version: '0.0.1'
    }, docCtrl.removeById);
}
