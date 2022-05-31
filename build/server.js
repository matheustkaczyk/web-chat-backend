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
io.on('connection', () => {
    console.log('New user connected');
});
server.listen(3000, () => console.log('Server is running on port 3000'));
