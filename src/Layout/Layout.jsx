import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
   return (
      <>
         <div className='flex flex-col justify-center items-center'>
            <Navbar />
            {children}
            <Footer />
         </div >
      </>
   )
}

export default Layout