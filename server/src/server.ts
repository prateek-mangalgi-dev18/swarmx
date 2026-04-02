import express from "express"
import cors from "cors"
import { connectDB } from "./config/db"
import documentRoutes from "./routes/documentRoutes"
import http from "http"
import { WebSocketServer } from "ws"

connectDB()

const app = express()

const { setupWSConnection } = require("y-websocket/bin/utils")

const server = http.createServer(app)

const wss = new WebSocketServer({ server })

wss.on("connection", (conn, req) => {
  setupWSConnection(conn, req)
})

app.use(cors())
app.use(express.json())

app.use("/api/docs", documentRoutes)

const API_PORT = 5000
const WS_PORT = 1234

// Express API
app.listen(API_PORT, () => {
  console.log(`API running on http://localhost:${API_PORT}`)
})

// WebSocket server
server.listen(WS_PORT, () => {
  console.log(`WebSocket running on ws://localhost:${WS_PORT}`)
})