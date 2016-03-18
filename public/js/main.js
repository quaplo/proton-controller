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

var tmp = 0;
var counter = 0;
  mc.on("panleft panright panup pandown tap press", function(ev) {
      // FS.send(ws,ev.direction);

      if(ev.direction !== tmp){
        // IOiu.onControlUpdate(ev.direction);
          // console.error(ev.direction,ev.angle,counter);
          // console.log(ev.direction,ev,counter);

          switch (ev.direction) {
            case 2:
              console.info('left');
              break;
            case 4:
              console.info('right');
              break;
            case 8:
              console.info('top');
              break;
            case 16:
              console.info('bottom');
              break;

          }

          ++counter;

          if(ev.isFinal){
            console.info('final');
          }

          if(ev.isFirst){
            console.info('first');
          }

      }

  });
