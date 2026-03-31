import Link from "next/link"

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Link
        href="/doc/1"
        className="bg-blue-600 px-6 py-3 rounded text-white"
      >
        Enter SwarmX
      </Link>
    </main>
  )
}