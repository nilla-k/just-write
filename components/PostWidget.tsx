import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { Post, Category } from './PostCard';
import { getRecentPosts, getSimilarPosts } from '../services';
import CategoryBadge from './CategoryBadge';

const PostWidget = ({ categories, slug }: { categories: Category; slug: string }) => {
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
                  className="align-middle rounded-sm object-fill w-16 h-16"
                  src={post.headerImage.url}
                />
              </div>
              <div className="flex-grow ml-4">
                <p className="font-serif text-sm font-semibold">{post.title}</p>
                <p className="font-serif text-gray-500 text-xs pb-2">
                  {moment(post.createdAt).format('DD MMM, YYYY')}
                </p>
                <div className="flex gap-1 flex-wrap">
                  {post.categories.map((category: Category) => (
                    <CategoryBadge category={category.name} />
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
