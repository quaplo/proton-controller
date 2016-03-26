var host = location.origin.replace(/^http/, 'ws')
var ws = new WebSocket(host);

  ws.onmessage = function (event) {
    var li = document.createElement('li');
    li.innerHTML = JSON.parse(event.data);
    // document.querySelector('#pings').appendChild(li);

    $('#pings').html(li);
  };


  var myElement = document.getElementById('movement');

  // create a simple instance
  // by default, it only adds horizontal recognizers
  var mc = new Hammer(myElement);


  mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

  // listen to events...
  mc.on("panleft panright panup pandown tap press", function(ev) {
      FS.send(ws,ev.type);
  });


function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}