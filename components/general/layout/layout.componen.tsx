import React from 'react'
import Navbar from '../navbar/navbar.component'

const Layout = ({children}) => {
  return(
    <>
      <Navbar/>
      {children}
    </>
  )
}
export default Layout