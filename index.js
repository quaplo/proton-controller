var restify = require('restify');
var swagger = require('swagger-restify');

var server = restify.createServer();

 swagger.init(server, {
    apiVersion: '1.0',
    swaggerVersion: '1.0',
    swaggerURL: '/swagger',
    swaggerJSON: '/api-docs.json',
    swaggerUI: './public',
    basePath: 'http://localhost:8080',
    info: {
      title: 'swagger-restify sample app',
      description: 'Swagger + Restify = {swagger-restify}'
    },
    apis: ['./api.js', './api.yml'],
    middleware: function(req, res){}
  });

server.listen(8080);