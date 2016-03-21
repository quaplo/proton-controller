var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname + "/"))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/c', function(req, res){
  res.sendFile(__dirname + '/input.html');
});


var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)

var wss = new WebSocketServer({server: server})
console.log("websocket server created")

wss.on("connection", function(ws) {

  ws.on('message', function(data, flags) {
    wss.clients.forEach(function each(client) {
      client.send(data);
    });

  });


  ws.on("close", function() {
    console.log("websocket connection close")
  })
})
