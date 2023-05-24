import React from 'react';
import { Post } from '../../components/PostCard';
import { Categories, PostWidget, PostCard } from '../../components';
import { getCategories, getPostsByCategory } from '../../services';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

const CategoriesPage = ({ posts, categoryName }: { posts: Post[]; categoryName: string }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <div className="p-0 lg:p-4 pb-12 mb-4 lg:rounded-sm">
            <h1 className="text-3xl text-white font-semibold">{categoryName}</h1>
          </div>
          {posts.map((post: Post) => (
            <PostCard post={post} key={post.slug} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            {/* these are self composing components */}
            <PostWidget categories={[{ name: '', slug: '' }]} slug="" />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();

  const paths = categories.map((category: any) => ({
    params: { slug: category.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params as IParams;
  const data = (await getPostsByCategory(slug)) || [];

  return {
    props: { posts: data.posts, categoryName: data.category.name },
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}
