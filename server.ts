import app from './app';
import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socket.broadcast.emit('message', `New user connected socket.id: ${socket.id}`);

  socket.on('userMessage', (object) => {
    io.emit('message', `${object.username} - ${object.message}`)
  });
})

io.on('disconnect', () => {
  console.log('User disconnected');
})

server.listen(3001, () => console.log('Server is running on port 3001'));