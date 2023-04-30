import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import { PostCard, Categories, PostWidget } from '../components';
import Head from 'next/head';
import { getPosts } from '../services';
import { Post } from '../components/PostCard';

const Home: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Just write</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: any) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            {/* these are self composing components */}
            <PostWidget categories={[{name:"", slug:""}]} slug=""/>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// Async function to fetch data inside our components. This is a next.js thing, 
// not just a 'we're making our own thing' thing
export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = (await getPosts()) || []; // return empty aray if get posts doesn't return anything?

  return {
    props: { posts },
  };
};
