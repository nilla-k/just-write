import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
import { Category } from './PostCard';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []); // this time the array is empty because there's no state changes?

  return (
    <div className="bg-white rounded-sm shadow-sm p-8 mb-8">
      <h3 className="font-semibold pb-3">Categories</h3>
      <div className="grid grid-cols-1 divide-y">
        {categories.map((category: Category) => (
          <span className="transition duration-300  hover:text-[#3667b5] text-sm p-2">
            <Link href={`/${category.slug}`} key={category.slug}>
              {category.name}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categories;
