import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">SwarmX</h1>

      <Link href="/doc/1" className="text-blue-500">
        Open Document 1
      </Link>

      <Link href="/doc/2" className="text-blue-500">
        Open Document 2
      </Link>
    </main>
  )
}