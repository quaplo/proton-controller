var host = location.origin.replace(/^http/, 'ws')
var ws = new WebSocket(host);

  $('.control').on('click',function(e){
    e.preventDefault();
    var fn = $(this).data('fn');
    FS.send(ws,fn);
    return false;
  });
