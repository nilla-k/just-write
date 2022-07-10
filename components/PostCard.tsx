import React from 'react'
import Post from '../pages'

const PostCard = ({ post }: {post: any})  => {
  return (
    <div>
        {post.title}
        {post.excerpt}
    </div> 
  )
}

export default PostCard