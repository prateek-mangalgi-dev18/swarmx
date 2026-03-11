"use client"

import { useEffect, useRef } from "react"
import * as Y from "yjs"
import { WebsocketProvider } from "y-websocket"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export default function Editor() {
  const ydoc = new Y.Doc()

  const provider = new WebsocketProvider(
    "ws://localhost:1234",
    "collab-doc",
    ydoc
  )

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start collaborating...</p>",
  })

  return (
    <div className="p-10">
      <EditorContent editor={editor} />
    </div>
  )
}