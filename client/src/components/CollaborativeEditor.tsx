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

  // Mount fix (SSR safe)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // WebSocket setup
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
  }, [docId, isMounted, ydoc])

  // ✅ ALWAYS PASS VALID CONFIG
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

  // 🚫 CONTROL RENDERING HERE (NOT CONFIG)
  if (!isMounted || !provider || !editor) {
    return (
      <div className="text-white p-10 text-center">
        Loading collaborative editor...
      </div>
    )
  }

  return (
    <div className="p-10 flex justify-center">
      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 w-full max-w-3xl text-white">
        <h2 className="mb-4 text-sm text-gray-400">
          Document: {docId}
        </h2>

        <EditorContent editor={editor} />
      </div>
    </div>
  )
}