var restify = require('restify');

var server = restify.createServer();

server.get(/^\/([a-zA-Z0-9_\.~-]+)\/(.*)/, function(req, res, next) {
  console.log(req.params[0]);
  console.log(req.params[1]);
  console.log(req.params[3]);
  res.send(200,req.params[0]);
  return next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});