import type { NextPage } from 'next'
import { PostCard, Categories, PostWidget } from '../components';
import Head from 'next/head'
// import Image from 'next/image'


const posts =  [
  {title: 'Test', excerpt: 'here an excerpt' },
  {title: 'Test', excerpt: 'here an excerpt' },
  {title: 'Test', excerpt: 'here an excerpt' },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">

      <Head>
        <title>Tut Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => (
           <PostCard post={post} key={post.title} />
          ))}
        </div>
        
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            {/* these is a self composing components */}
            <PostWidget /> 
            <Categories />
          </div>
        </div>

      </div>


      
    </div>
  )
}

export default Home
