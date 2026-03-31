"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Sidebar() {
  const router = useRouter()

  const [docs, setDocs] = useState([
    { id: "1", name: "Document 1" },
    { id: "2", name: "Document 2" },
  ])

  const createDoc = () => {
    const id = Date.now().toString()
    const newDoc = { id, name: "Untitled" }

    setDocs((prev) => [...prev, newDoc])
    router.push(`/doc/${id}`)
  }

  return (
    <div className="w-64 bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col">
      <h1 className="text-xl font-bold mb-6">SwarmX</h1>

      <button
        onClick={createDoc}
        className="mb-4 bg-blue-600 hover:bg-blue-700 p-2 rounded text-sm"
      >
        + New Document
      </button>

      <div className="flex flex-col gap-1">
        {docs.map((doc) => (
          <Link
            key={doc.id}
            href={`/doc/${doc.id}`}
            className="p-2 rounded hover:bg-zinc-800 text-sm"
          >
            {doc.name}
          </Link>
        ))}
      </div>
    </div>
  )
}