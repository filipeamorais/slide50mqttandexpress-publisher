var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1');
client.on('connect', function() {
     var count = 0;
     var intervalObject = setInterval( ()=> {
          count++;
          t = Math.floor(Math.random()*30 + 50);
          console.log(t);
          client.publish('/home/temperature', ''+t);
          if (count == 100) {
                console.log('exiting');
                clearInterval(intervalObject);
          }
     }, 2000);
});