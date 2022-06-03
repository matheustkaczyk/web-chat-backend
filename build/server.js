"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const server = http_1.default.createServer(app_1.default);
const io = new socket_io_1.Server(server);
io.on('connection', (socket) => {
    socket.broadcast.emit('message', `Novo usuário conectado - ${socket.id}`);
    socket.emit('message', `Seja bem vindo!`);
    socket.on('room', room => {
        socket.join(room);
        socket.emit('message', `Você entrou na sala ${room}`);
    });
    socket.on('userMessage', (object) => {
        socket.join(object.room);
        io.to(object.room).emit('message', `${object.username} - ${object.message}`);
    });
});
io.on('disconnect', () => {
    console.log('User disconnected');
});
server.listen(3001, () => console.log('Server is running on port 3001'));
