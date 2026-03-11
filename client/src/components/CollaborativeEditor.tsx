"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Collaboration from "@tiptap/extension-collaboration"
import * as Y from "yjs"
import { WebsocketProvider } from "y-websocket"

const ydoc = new Y.Doc()

const provider = new WebsocketProvider(
  "ws://localhost:1234",
  "swarmx-doc",
  ydoc
)

export default function CollaborativeEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
      }),
      Collaboration.configure({
        document: ydoc,
      }),
    ],
    content: "<p>Start typing here...</p>",
    immediatelyRender: false,
  })

  if (!editor) return null

  return (
  <div className="p-10 flex justify-center">
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 w-full max-w-3xl">
      <EditorContent editor={editor} />
    </div>
  </div>
)
}