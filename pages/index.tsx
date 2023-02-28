import SearchBar from "@/components/SearchBar"
import Feed from "@/components/Feed"
import Sidebar from "@/components/Sidebar"

export default function Home() {
  return (
    <div className="h-screen bg-black">
     <div className="grid grid-cols-4 h-full">
      <Sidebar />
      <Feed />
      <SearchBar />
     </div>
    </div>
  )
}
