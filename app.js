var restify = require('restify');



var server = restify.createServer({
  name: 'beeCms-server',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());





server.listen(3005, function () {
  console.log('%s listening at %s', server.name, server.url);
});


//路由
require('./routes/index.js')(server, restify, __dirname);