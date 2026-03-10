"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const { setupWSConnection } = require("y-websocket/bin/utils");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const wss = new ws_1.WebSocketServer({ server });
wss.on("connection", (conn, req) => {
    setupWSConnection(conn, req);
});
const PORT = 1234;
server.listen(PORT, () => {
    console.log(`WebSocket server running on port ${PORT}`);
});
