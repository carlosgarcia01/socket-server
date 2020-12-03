const app = require('./src/server');
const SocketServer = require('socket.io');
const routes = require('./src/routes')

app.use('/api',routes);

const server = app.listen(app.get('PORT'),()=>{
  console.log(`Server listening in http://localhost:${app.get('PORT')}`);
})

const io = SocketServer(server);

console.log(`socket escuchando ${io}`);

io.on('connection', (socket) => {
  console.log("Client connected " + socket.id);

})

