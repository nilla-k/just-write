import React from 'react';
import { Category, PostDetails } from './PostCard';
import { CategoryBadge, RenderedRichText } from '.';
import moment from 'moment';

const PostDetailsContent = ({ post }: { post: PostDetails }) => {
  return (
    <div>
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          className=" object-cover h-96 w-full rounded-t-sm"
          src={post.headerImage.url}
          alt={post.title}
        />
      </div>
      <div className="pb-5 pl-5 pr-5 lg:p-0">
        <div className="grid grid-cols-1 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <h1 className="font-semibold  text-2xl">{`${post.title}`}</h1>
          </div>
          <div className="xl:col-span-1 xl:text-right">
            <p className="text-gray-700 ">{moment(post.createdAt).format('DD MMM, YYYY')}</p>
            <p className="text-gray-500 text-sm italic">
              {post.createdAt?.includes(post.updatedAt)
                ? ''
                : `Updated ${moment(post.updatedAt).format('DD MMM, YYYY')}`}
            </p>
          </div>
        </div>
        <div className="flex gap-1 flex-wrap pt-3">
          {post.categories.map((category: Category) => (
            <CategoryBadge category={category.name} slug={category.slug} />
          ))}
        </div>
        <div className="prose pt-5 max-w-none xl:pr-10">
          <RenderedRichText content={post.content.raw} />
        </div>
      </div>
    </div>
  );
};

export default PostDetailsContent;
