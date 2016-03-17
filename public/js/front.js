var FS = {};

FS.moveLeft = function(ws){
  ws.send(JSON.stringify({kemo:'melo'}), function() {  })
}

FS.send = function(ws,data){
  ws.send(JSON.stringify(data), function() {  })
}
