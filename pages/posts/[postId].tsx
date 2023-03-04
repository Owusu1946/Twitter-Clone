import Header from "@/components/Header";
import Form from "@/components/Form";
import PostItem from "@/components/posts/PostItem";

const PostView = () => {
  return ( 
    <>
      <Header showBackArrow label="Tweet" />
      <PostItem />
      <Form placeholder="Tweet your reply" />
    </>
   );
}
 
export default PostView;