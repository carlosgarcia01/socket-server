const app = require('./src/server');
const SocketServer = require('socket.io');
const routes = require('./src/routes')

app.use('/api',routes);

const server = app.listen(app.get('PORT'),()=>{
  console.log(`Server listening in http://localhost:${app.get('PORT')}`);
})

const io = SocketServer(server,{
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

console.log(`socket escuchando ${io}`);

io.on('connection', (socket) => {
  console.log("Client connected " + socket.id);

})

