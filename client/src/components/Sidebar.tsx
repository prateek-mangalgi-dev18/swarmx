"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

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
    <div className="w-64 h-screen bg-[#0f0f0f] border-r border-zinc-800 flex flex-col">

      {/* Logo */}
      <h1 className="text-lg font-semibold tracking-wide flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-500 rounded-full" />
        SwarmX
        </h1>

      {/* New Doc Button */}
      <div className="p-4">
        <button
          onClick={createDoc}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 p-2 rounded-md text-sm shadow-md"
        >
          + New Document
        </button>
      </div>

      {/* Docs List */}
      <div className="flex-1 px-2 space-y-1 overflow-y-auto">
        {docs.map((doc) => {
          const isActive = pathname === `/doc/${doc.id}`

          return (
            <Link
              key={doc.id}
              href={`/doc/${doc.id}`}
              className={`block px-3 py-2 rounded-md text-sm transition-all duration-150 ${
                isActive
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {doc.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}