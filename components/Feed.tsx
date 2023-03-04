import Header from '@/components/Header';
import PostItem from '@/components/PostItem';

interface FeedProps {
  posts?: Record<string, any>[];
}

const Feed: React.FC<FeedProps> = ({ posts = [] }) => {
  return (
    <>
      {posts.map((post, i) => (
        <PostItem key={`post-${i}`} />
      ))}
    </>
  );
};

export default Feed;
