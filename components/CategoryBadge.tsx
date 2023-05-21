import React from 'react';
import moment from 'moment'; // Used for formatting date strings
import Link from 'next/link';
import Categories from './Categories';

const CategoryBadge = ({ category, slug }: { category: string; slug: string }) => {
  return (
    <div
      id="card"
      className="bg-slate-200 text-gray-700 italic text-xs rounded-full p-1 pl-2 pr-2 text-center shrink transition duration-300 hover:bg-slate-300"
    >
      <span className="transition duration-300  hover:text-black">
        <Link href={`category/${slug}`}>{category}</Link>
      </span>
    </div>
  );
};

export default CategoryBadge;
