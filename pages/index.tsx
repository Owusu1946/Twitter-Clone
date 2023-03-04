import Feed from "@/components/Feed"
import Header from "@/components/Header"
import PostInput from "@/components/PostInput"

export default function Home() {
  return (
    <>
      <Header label="Home" />
      <PostInput placeholder="What's happening?" />
      <Feed posts={[1, 2, 3]} />
    </>
  )
}
