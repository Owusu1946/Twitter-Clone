import FeedPost from '@/components/Feed/FeedPost';
import FeedHeader from '@/components/Feed/FeedHeader';
import FeedPostInput from '@/components/Feed/FeedPostInput';

const Feed = () => {
  return (
    <>
      <FeedHeader />
      <FeedPostInput />
      <FeedPost />
    </>
  );
};

export default Feed;
