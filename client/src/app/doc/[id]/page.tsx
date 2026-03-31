"use client"

import CollaborativeEditor from "../../../components/CollaborativeEditor"
import { useParams } from "next/navigation"

export default function DocPage() {
  const params = useParams()
  const docId = params.id as string

  return (
    <main className="flex min-h-screen items-center justify-center">
      <CollaborativeEditor docId={docId} />
    </main>
  )
}