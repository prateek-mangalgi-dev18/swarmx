import express from "express"
import cors from "cors"
import { connectDB } from "./config/db"
import documentRoutes from "./routes/documentRoutes"

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/docs", documentRoutes)

// import http from "http"
// import express from "express"
// import { WebSocketServer } from "ws"

// const { setupWSConnection } = require("y-websocket/bin/utils")

// const app = express()

// const server = http.createServer(app)

// const wss = new WebSocketServer({ server })

// wss.on("connection", (conn, req) => {
//   setupWSConnection(conn, req)
// })

// const PORT = 1234

// server.listen(PORT, () => {
//   console.log(`Collaboration server running on ws://localhost:${PORT}`)
// })