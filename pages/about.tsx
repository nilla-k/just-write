import type { GetStaticProps, NextPage } from 'next';
import { Categories, PostWidget, RenderedRichText } from '../components';
import { getAboutPageContent } from '../services';
import { RichTextContent } from '@graphcms/rich-text-types';

const content: RichTextContent = {
  children: [
    {
      type: 'paragraph',
      children: [
        {
          bold: true,
          text: 'Hello World!',
        },
      ],
    },
  ],
};

const About = ({ rawContent }: { rawContent: RichTextContent }) => {
  console.log('CONTENT:');
  console.log(rawContent);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 lg:rounded-sm">
            <div className="prose max-w-none">
              <h1 className="text-3xl font-semibold pb-4">About</h1>
              <RenderedRichText content={rawContent} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget categories={[{ name: '', slug: '' }]} slug="" />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const rawContent: RichTextContent = await getAboutPageContent();
  console.log('HERE: ');
  console.log(rawContent);
  return {
    props: { rawContent },
  };
};
