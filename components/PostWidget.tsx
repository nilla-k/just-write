import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { Post, Category } from './PostCard';
import { getRecentPosts, getSimilarPosts } from '../services';
import CategoryBadge from './CategoryBadge';

const PostWidget = ({ categories, slug }: { categories: [Category]; slug: string }) => {
  const [suggestedPosts, setSuggestedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      const categoriesAsString = categories.map((category: Category) => category.name);
      getSimilarPosts({ categories: categoriesAsString, slug: slug }).then((result) =>
        setSuggestedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setSuggestedPosts(result));
    }
  }, [slug]); // this last parameter specifies when to change/update the useEffect. so here, it's when the slug changes

  return (
    <div className="bg-white rounded-sm shadow-sm p-8 mb-8">
      <h3 className="font-semibold  pb-3">{slug ? 'Related posts' : 'Recent posts'}</h3>
      <div>
        {suggestedPosts.map((post: Post) => (
          <div className="transition duration-300 hover:bg-slate-100">
            <Link href={`/post/${post.slug}`} key={post.slug}>
              <a>
                <div key={post.title} className="flex items-center w-full mb-5">
                  <div className="w-16 flex-none">
                    <img
                      alt={post.title}
                      className="align-middle rounded-sm object-fill w-16 h-16"
                      src={post.headerImage.url}
                    />
                  </div>
                  <div className="flex-grow ml-4">
                    <span className="text-sm font-semibold">{post.title}</span>
                    <p className="text-gray-500 text-xs pb-2">
                      {moment(post.createdAt).format('DD MMM, YYYY')}
                    </p>
                    <div className="flex gap-1 flex-wrap mb-1">
                      {post.categories.map((category: Category) => (
                        <CategoryBadge
                          category={category.name}
                          slug={category.slug}
                          key={category.slug}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
