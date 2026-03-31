"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Collaboration from "@tiptap/extension-collaboration"
import CollaborationCursor from "@tiptap/extension-collaboration-cursor"
import * as Y from "yjs"
import { WebsocketProvider } from "y-websocket"
import { useEffect, useState } from "react"

export default function CollaborativeEditor({ docId }: { docId: string }) {
  const [ydoc] = useState(() => new Y.Doc())
  const [provider, setProvider] = useState<WebsocketProvider | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const wsProvider = new WebsocketProvider(
      "ws://localhost:1234",
      docId,
      ydoc
    )

    setProvider(wsProvider)

    return () => {
      wsProvider.disconnect()
    }
  }, [docId, ydoc, isMounted])

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Collaboration.configure({
        document: ydoc,
      }),
      ...(provider
        ? [
            CollaborationCursor.configure({
              provider,
              user: {
                name: "User " + Math.floor(Math.random() * 100),
                color:
                  "#" +
                  Math.floor(Math.random() * 16777215).toString(16),
              },
            }),
          ]
        : []),
    ],
    content: "<p>Start typing...</p>",
    immediatelyRender: false,
  })

  if (!isMounted || !provider || !editor) {
    return (
      <div className="text-white p-10 text-center">
        Loading editor...
      </div>
    )
  }

  return (
  <div className="flex flex-col h-full">

    {/* Top Bar */}
    <div className="flex items-center justify-between px-10 py-4 border-b border-zinc-800 bg-[#0f0f0f]">
      <input
        className="bg-transparent text-2xl font-semibold outline-none text-white placeholder-zinc-500"
        placeholder="Untitled Document"
      />

      {/* Fake users (for now) */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">
            A
      </div>
      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold">
            B
      </div>
</div>
    </div>

    {/* Editor Area */}
    <div className="flex justify-center pt-10 px-6 flex-1 overflow-auto">
      <div className="w-full max-w-5xl">

        <div className="bg-[#111] border border-zinc-800 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition min-h-[600px]">
          <EditorContent editor={editor} />
        </div>

      </div>
    </div>

  </div>
)
}