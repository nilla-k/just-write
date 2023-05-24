import type { NextPage } from 'next';
import { Categories, PostWidget } from '../components';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 lg:rounded-sm">
            <div className='prose max-w-none'>
            <h1 className="text-3xl font-semibold pb-4">About</h1>
            <p>This shouldn't be hardcoded, probably, but here we are.</p>
            <p>
              This here's just a little spot for me to write. I say just a litte spot, but for
              whatever reason I decided the desire to write would be a great thing to leverage in
              order to start an entire side project.
            </p>
            <p>
                So, I followed <Link href={'https://www.youtube.com/watch?v=HYv55DhgTuA'}>this here tutorial</Link> to build this site. Because, despite the fact that coding is my day job, I lack both the intellectual
                resources as well as the patience to learn how to do any of this by just reading documentation. So kudos to whoever made that tutorial - 
                you're a legend.
            </p>
            <p>
                And so that brings us here. Most probably no one will see this, but I think that's half the fun. 
            </p>
            <p>
                Enjoy your stay, I'll see ya around. 
            </p>
            </div>
          </div>
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

export default About;
