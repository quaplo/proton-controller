var host = location.origin.replace(/^http/, 'ws')
var ws = new WebSocket(host);

  $('.control').on('click',function(e){
    e.preventDefault();
    var fn = $(this).data('fn');
    FS.send(ws,fn);
    return false;
  });


  var myElement = document.getElementById('movement');

  // create a simple instance
  // by default, it only adds horizontal recognizers
  var mc = new Hammer(myElement);


  mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

  // listen to events...
  mc.on("panleft panright panup pandown tap press", function(ev) {
      FS.send(ws,ev.type);
  });
