import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'

const Home = () => {
   return (
      <Layout>
         <div className='max-w-screen-xl w-full p-6 flex flex-col gap-4 '>
            <div className='border-2 border-gray-300 rounded-md shadow-md shadow-gray-300 p-4'>
               <h1 className='text-4xl text-center font-bold'>Thống kê</h1>
               <div className='flex flex-wrap mt-4 gap-4'>
                  <Link
                     to='/heroes'
                     className='size-40 rounded border border-gray-200 relative cursor-pointer hover:opacity-90 transition duration-100 ease-linear'
                     style={{
                        backgroundImage: "url('/info/heroes.jpg')",
                        backgroundPositionX: '50%',
                        // backgroundPositionY: '35%',
                        backgroundRepeat: 'no-repeat',
                     }}
                  >
                     <span
                        className='absolute bottom-0 w-full text-[#FCCD17] py-1 text-center text-lg'
                        style={{
                           backgroundImage: "url('/card-title.png')",
                           backgroundSize: 'cover'
                        }}
                     >Anh hùng</span>
                  </Link>
                  <Link
                     to='/heroes'
                     className='size-40 rounded border border-gray-200 relative cursor-pointer hover:opacity-90 transition duration-100 ease-linear'
                     style={{
                        backgroundImage: "url('/info/items.jpg')",
                        backgroundPositionX: '50%',
                        // backgroundPositionY: '35%',
                        backgroundRepeat: 'no-repeat',
                     }}
                  >
                     <span
                        className='absolute bottom-0 w-full text-[#FCCD17] py-1 text-center text-lg'
                        style={{
                           backgroundImage: "url('/card-title.png')",
                           backgroundSize: 'cover'
                        }}
                     >Vật phẩm</span>
                  </Link>
               </div>
            </div>
            <div className='border-2 border-gray-300 rounded-md shadow-md shadow-gray-300 p-4'>
               <h1 className='text-4xl text-center font-bold'>Chiến lược</h1>
               <div className='flex flex-wrap mt-4 gap-4'>
                  <Link
                     to='/heroes'
                     className='size-40 rounded border border-gray-200 relative cursor-pointer hover:opacity-90 transition duration-100 ease-linear'
                     style={{
                        backgroundImage: "url('/info/heroes.jpg')",
                        backgroundPositionX: '50%',
                        // backgroundPositionY: '35%',
                        backgroundRepeat: 'no-repeat',
                     }}
                  >
                     <span
                        className='absolute bottom-0 w-full text-[#FCCD17] py-1 text-center text-lg'
                        style={{
                           backgroundImage: "url('/card-title.png')",
                           backgroundSize: 'cover'
                        }}
                     >Anh hùng</span>
                  </Link>
                  <Link
                     to='/heroes'
                     className='size-40 rounded border border-gray-200 relative cursor-pointer hover:opacity-90 transition duration-100 ease-linear'
                     style={{
                        backgroundImage: "url('/info/items.jpg')",
                        backgroundPositionX: '50%',
                        // backgroundPositionY: '35%',
                        backgroundRepeat: 'no-repeat',
                     }}
                  >
                     <span
                        className='absolute bottom-0 w-full text-[#FCCD17] py-1 text-center text-lg'
                        style={{
                           backgroundImage: "url('/card-title.png')",
                           backgroundSize: 'cover'
                        }}
                     >Vật phẩm</span>
                  </Link>
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default Home