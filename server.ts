import app from './app';
import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {  
  console.log('New user connected', socket.id);

  socket.on('message', (msg) => {
    console.log('message: ' + msg);
  });
})

io.on('disconnect', () => {
  console.log('User disconnected');
})

server.listen(3001, () => console.log('Server is running on port 3001'));