"use client"

import dynamic from "next/dynamic"
import { useParams } from "next/navigation"

const CollaborativeEditor = dynamic(
  () => import("../../../components/CollaborativeEditor"),
  { ssr: false }
)

export default function DocPage() {
  const params = useParams()
  const docId = params.id as string

  return (
    <main className="flex min-h-screen items-center justify-center">
      <CollaborativeEditor docId={docId} />
    </main>
  )
}