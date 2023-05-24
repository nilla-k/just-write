import React, { useContext } from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Category 1', slug: 'category' },
  { name: 'Category 2', slug: 'dev' },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font=bold text-4xl text-white transition duration-300 hover:text-gray-200">
              Just Write.
            </span>
          </Link>
        </div>

        {/* md:contents is used to create a container whose children act like direct children of the parent*/}
        <div className="hidden md:float-left md:contents">
          <Link href={`/new-post`}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-300 hover:text-gray-200">
              New Post
            </span>
          </Link>
          <Link href={`/about`}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-300 hover:text-gray-200">
              About
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
