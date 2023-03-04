import Header from "@/components/Header";
import PostItem from "@/components/PostItem";
import PostInput from "@/components/PostInput";

const PostView = () => {
  return ( 
    <>
      <Header showBackArrow label="Tweet" />
      <PostItem />
      <PostInput placeholder="Tweet your reply" />
    </>
   );
}
 
export default PostView;