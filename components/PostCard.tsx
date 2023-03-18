import React from 'react';

export type Post = {
  title: string;
  excerpt: string;
};

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  );
};

export default PostCard;
