import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { Post, Categories } from './PostCard';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }: { categories: Categories; slug: string }) => {
  const [suggestedPosts, setSuggestedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      // getSimilarPosts().then((result) => setSuggestedPosts(result));
    } else {
      getRecentPosts().then((result) => setSuggestedPosts(result));
    }
  }, [slug]); // this last parameter specifies when to change/update the useEffect. so here, it's when the slug changes

  return (
    <div className="bg-white rounded-sm shadow-sm p-8 mb-8">
      <h3 className="font-semibold font-serif pb-3">{slug ? 'Related posts' : 'Recent posts'}</h3>
      <div>
        {suggestedPosts.map((post: Post) => (
          <Link href={`/post/${post.slug}`}>
            <div key={post.title} className="flex items-center w-full mb-5">
              <div className="w-16 flex-none">
                <img
                  alt={post.title}
                  height="60px"
                  width="60px"
                  className="align-middle rounded-sm object-fill"
                  src={post.headerImage.url}
                />
              </div>
              <div className="flex-grow ml-4">
                <p className="font-serif">{post.title}</p>
                <p className="font-serif text-gray-500 text-xs">
                  {moment(post.createdAt).format('DD MMM, YYYY')}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
