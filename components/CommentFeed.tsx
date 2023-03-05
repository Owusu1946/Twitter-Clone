import PostItem from '@/components/posts/PostItem';

interface CommentFeedProps {
  comments?: Record<string, any>[];
}

const CommentFeed: React.FC<CommentFeedProps> = ({ comments = [] }) => {
  return (
    <>
      {comments.map((comment: Record<string, any>,) => (
        <PostItem isComment key={comment.id} data={comment} />
      ))}
    </>
  );
};

export default CommentFeed;
