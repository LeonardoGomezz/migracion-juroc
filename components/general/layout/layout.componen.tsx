import React from 'react'
import Header from './header/header.component'
import Footer from '../footer/foooter.component'

const Layout = ({children}) => {
  return(
    <>
      <div className="bg-[url('/img/fondo.webp')] bg-cover">
        <Header/>
        {children}
        <Footer/>
      </div>
    </>
  )
}
export default Layout