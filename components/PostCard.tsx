import React from 'react';
import moment from 'moment'; // Used for formatting date strings
import Link from 'next/link';
import Categories from './Categories';

export type Post = {
  author: Author;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  headerImage: HeaderImage;
  categories: [Category];
};

export type Author = {
  name: string;
  id: string;
};

export type HeaderImage = {
  url: string;
};

export type Category = {
  name: string;
  slug: string;
};

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div id="card" className="bg-white shadow-lg rounded-sm p-0 lg:p-8 pb-12 mb-8">
      <div id="img-container" className="relative overflow-hidden shadow-md pb-40 lg:pb-80 mb-6">
        <img
          src={post.headerImage.url}
          className="object-top absolute h-40 lg:h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <div id="text-container" className="p-3 lg:p-0">
        <h1 className="transition duration-300 hover:text-gray-900 text-xl text-gray-700 font-semibold">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <p className="text-sm text-gray-400 pb-5">
          {moment(post.createdAt).format('DD MMM, YYYY')}
        </p>
        <p className="font-serif text-gray-600 italic">{post.excerpt}</p>
        <div id="read-more-container" className="text-right">
          <span className="transition duration-300  hover:text-gray-900 text-gray-400 font-serif text-sm">
            <Link href={`/post/${post.slug}`}>Read more →</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
