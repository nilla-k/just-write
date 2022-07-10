import React from 'react'
import { Header } from './'

const Layout = ({ children }: {children: any}) => {
  return (
    <>
        <Header />
        {children}
        {/* every react component has a prop called children. With this, any time we render a Layout component, whatever is inside
        that is what will be the children here. */}
    </>
  )
}

export default Layout