//const oi = require('socket.io');

module.exports = {

  cameraOn(req,res){
    console.log("Estado de la camara: ", req.body);
    const io = req.app.get('socket');
    io.emit('cameraOn',req.body);
    res.send(null);
  },
  
  cameraConnected(req,res){
    console.log("Camara conectada: ", req.body);
    const io = req.app.get('socket');
    io.emit('cameraConnect',req.body);
    res.send(null);
  },

  error(req,res){
    console.log("Error: ", req.body);
    const io = req.app.get('socket');
    io.emit('error',req.body);
    res.send(null);
  },
  
  ledOn(req,res){
    console.log("Estado de los leds: ", req.body);
    const io = req.app.get('socket');
    io.emit('ledOn',req.body);
    res.send(null);
  },
  
  ledConnected(req,res){
    console.log("Leds conectados: ", req.body);
    const io = req.app.get('socket');
    io.emit('ledConnect',req.body);
    res.send(null);
  },

  testComplited(req,res){
    console.log("EStado del test: ", req.body);
    const io = req.app.get('socket');
    io.emit('testComplited',req.body);
    res.send(null);
  },
  
  videoComplited(req,res){
    console.log("Estado del video: ", req.body);
    const io = req.app.get('socket');
    io.emit('videoCompleted',req.body);
    res.send(null);
  },
  
  deleteFromList(req,res){
    console.log("Se elimina de la lista ");
    const io = req.app.get('socket');
    io.emit('deleteFromList',0);
    res.send(null);
  },

  // sendGain(req,res){
  //   console.log("Se obtuvo la ganancia ");
  //   const io = req.app.get('socket');
  //   io.emit('gain',0);
  //   res.send(null);
  // },

  // sendBright(req,res){
  //   console.log("Se obtuvo el brillo ");
  //   const io = req.app.get('socket');
  //   io.emit('bright',0);
  //   res.send(null);
  // },
  
  sendProgress(req,res){
    console.log("Se obtuvo el progreso ");
    const io = req.app.get('socket');
    io.emit('progress',0);
    res.send(null);
  }
}
