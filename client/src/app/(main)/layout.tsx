import Sidebar from "../../components/Sidebar"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto bg-zinc-950">
        {children}
      </div>
    </div>
  )
}