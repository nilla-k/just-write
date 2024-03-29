/* The [blah] file notation is a next JS thing that allows for dynamic
file based routing. 

The file structure creates the route. e.g. the route for this file will be 
/post/slug since that's it's path in the file directory. The [ ] in the file
name allows for that slug to be dynamic.

Then it just *knows* how to connect it all. Fascinating black magic.
*/
import type { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';
import { getPosts, getPostDetails } from '../../services';
import { PostDetails } from '../../components/PostCard';
import { ParsedUrlQuery } from 'querystring';
import { Categories, PostWidget } from '../../components';
import PostDetailsContent from '../../components/PostDetailsContent';

const PostDetail = ({ post }: { post: PostDetails }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <div className="bg-white shadow-md rounded-sm lg:p-8 pb-12 mb-8">
            <PostDetailsContent post={post} />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <PostWidget categories={post.categories} slug={post.slug} />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  const paths = posts.map((post: any) => ({
    params: { slug: post.node.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params as IParams;
  const data = (await getPostDetails(slug)) || [];

  return {
    props: { post: data },
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}
