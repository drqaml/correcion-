import SideBar from "../ui/dashboard/sideBar";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <main className="w-screen h-screen p-2 flex flex-row gap-3">
      <SideBar />
      <div className="h-full py-32 px-16 grow">{children}</div>
    </main>
  )
}
