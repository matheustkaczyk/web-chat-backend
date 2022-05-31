import app from './app';
import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', () => {  
  console.log('New user connected');
})

server.listen(3001, () => console.log('Server is running on port 3001'));