var FS = {};

FS.send = function(ws,data){
  ws.send(JSON.stringify(data), function() {  })
}
