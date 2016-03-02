module.exports = function(server, restify, rootDirName) {

    /**
     * 公共资源访问
     * @type {[type]}
     */
    server.get(/public\/?.*/, restify.serveStatic({
        directory: rootDirName
    }));



    require('./doc.js')(server);



}
