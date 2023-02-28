import FeedPost from '@/components/FeedPost';
import FeedHeader from '@/components/FeedHeader';
import FeedPostInput from '@/components/FeedPostInput';

const Feed = () => {
  return (
    <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
      <FeedHeader />
      <FeedPostInput />
      <FeedPost />
    </div>
  );
};

export default Feed;
