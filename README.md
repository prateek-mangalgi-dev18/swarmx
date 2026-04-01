# 🚀 SwarmX — Real-Time Collaborative Editor

SwarmX is a modern, real-time collaborative document editor that enables multiple users to edit documents simultaneously with seamless synchronization.

Built using CRDTs (Conflict-free Replicated Data Types), it ensures consistent document state across all clients without conflicts — even in concurrent editing scenarios.

---

## ✨ Features

* 🧠 **Real-time collaboration** (multi-user editing)
* 🔄 **Conflict-free synchronization using Yjs (CRDT)**
* ⚡ **Low-latency updates via WebSockets**
* 📝 **Rich text editing with Tiptap**
* 🧭 **Multi-document support**
* 🎯 **Modern SaaS-style UI (Next.js + Tailwind)**
* 👥 **Live user presence (cursor awareness)**

---

## 🏗️ Tech Stack

### Frontend

* Next.js (App Router)
* React 19
* Tailwind CSS v4
* Tiptap Editor

### Backend / Realtime Layer

* Node.js
* WebSocket (ws)
* Yjs (CRDT)
* y-websocket

---

## 🧠 System Design Highlights

* Uses **CRDT (Yjs)** to handle concurrent edits without conflicts
* WebSocket server syncs document updates across clients
* Each document acts as a shared Yjs state
* Decentralized conflict resolution (no locking required)

---

## 📂 Project Structure

```bash
swarmx/
├── client/   
├── server/   
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/swarmx.git
cd swarmx
```

---

### 2. Start WebSocket server

```bash
cd server
npm install
npm run dev
```

Runs on:

```
ws://localhost:1234
```

---

### 3. Start frontend

```bash
cd client
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🧪 How to Test

1. Open two browser tabs:

   ```
   http://localhost:3000/doc/1
   http://localhost:3000/doc/1
   ```
2. Start typing in one tab
3. Watch changes reflect instantly in the other

---

## 🎯 Use Cases

* Collaborative note-taking
* Team documentation tools
* Real-time editors (like Notion / Google Docs)
* Developer collaboration platforms

---

## 🚧 Future Improvements

* 🔐 Authentication & user accounts
* 💾 Persistent storage (MongoDB/PostgreSQL)
* 🔗 Shareable document links
* 🧰 Rich formatting toolbar
* 📊 Version history & undo timelines
* 🌐 Deployment (Vercel + WebSocket infra)

---


## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a PR.

---

## 📜 License

MIT License

---

## 👨‍💻 Author

Built by Prateek Mangalgi
