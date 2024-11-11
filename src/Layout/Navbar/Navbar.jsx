import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <header className='max-w-full w-full flex items-center sticky top-0 z-[51] bg-white'>
         <div className='h-24 w-full bg-transparent' style={{ backgroundImage: "url('/styled-menu.png')" }}></div>
         <Link to='/' className='w-40 h-24 absolute left-1/2 transform -translate-x-1/2'>
            <img src="/logo-tr.png" alt="logo" />
         </Link>
      </header>
   )
}

export default Navbar