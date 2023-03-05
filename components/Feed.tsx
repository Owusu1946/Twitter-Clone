import PostItem from '@/components/posts/PostItem';

import usePosts from '@/hooks/usePosts';

interface FeedProps {
  userId?: string;
}

const Feed: React.FC<FeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((post: Record<string, any>,) => (
        <PostItem key={post.id} data={post} />
      ))}
    </>
  );
};

export default Feed;
