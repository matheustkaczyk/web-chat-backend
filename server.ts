import app from './app';
import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socket.broadcast.emit('message', `Novo usuário conectado - ${socket.id}`);
  socket.emit('message', `Seja bem vindo!`);

  socket.on('room', room => {
    socket.join(room);
    socket.emit('message', `Você entrou na sala ${room}`);
  })

  socket.on('userMessage', (object) => {
    socket.join(object.room);
    io.to(object.room).emit('message', `${object.username} - ${object.message}`);
  });
})

server.listen(3001, () => console.log('Server is running on port 3001'));