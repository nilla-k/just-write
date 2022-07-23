import React, { useContext } from 'react'
import Link from 'next/Link'

const categories = [
    {name: 'Category 1', slug:'/category'},
    {name: 'Category 2', slug:'/dev'},
]

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-blue-400 py-8">

            <div className="md:float-left block">
                <Link href="/">
                    <span className="cursor-pointer font=bold text-4xl text-white">
                        Just Write.
                    </span>
                </Link>
            </div>

            {/* md:contents is used to create a container whose children act like direct children of the parent*/}
            <div className="hidden md:float-left md:contents">
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Header
