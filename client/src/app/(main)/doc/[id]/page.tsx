"use client"

import { useParams } from "next/navigation"
import dynamic from "next/dynamic"

const CollaborativeEditor = dynamic(
  () => import("../../../../components/CollaborativeEditor"),
  { ssr: false }
)

export default function DocPage() {
  const params = useParams()
  const docId = params.id as string

  return <CollaborativeEditor docId={docId} />
}