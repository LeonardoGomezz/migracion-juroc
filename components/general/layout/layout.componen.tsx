import React from 'react'
import Header from './header/header.component'
import Footer from '../footer/foooter.component'
import Botton from '../botton/botton.component'

const Layout = ({children}) => {
  return(
    <>
      <div>
        <Header/>
        {children}
        <Botton/>
        <Footer/>
      </div>
    </>
  )
}
export default Layout