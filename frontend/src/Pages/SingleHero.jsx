import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import { HeroesData } from '../Data/HeroesData'

const Heroes = () => {
   return (
      <Layout>
         <div className='max-w-screen-xl w-full py-6 flex flex-col gap-4 px-4'>
            <div className='border-2 border-gray-300 rounded-md shadow-md shadow-gray-300 p-4 flex flex-col gap-4'>
               <h1 className='text-4xl font-bold'>Tìm kiếm</h1>
               <div className='flex gap-6'>
                  <img src="/filter/type-all.png" alt="all type" className='size-16' />
                  <img src="/filter/str.png" alt="all type" className='size-16' />
                  <img src="/filter/int.png" alt="all type" className='size-16' />
                  <img src="/filter/agi.png" alt="all type" className='size-16' />
               </div>
               <div className='flex gap-6'>
                  <img src="/filter/frame-all.png" alt="all type" className='size-16' />
                  <img src="/filter/frame-normal.png" alt="all type" className='size-16' />
                  <img src="/filter/frame-legend.png" alt="all type" className='size-16' />
                  <img src="/filter/frame-miraculous.png" alt="all type" className='size-16' />
               </div>
               <div className='flex flex-wrap gap-6'>
                  <img src="/filter/tag-all.png" alt="all tag" className='size-16' />
                  <img src="/filter/tag-beast.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-sword.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-bow.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-evil.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-dragon.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-female.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-fire.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-originals.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-fly.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-giant.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-god.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-heroine.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-male.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-mechanic.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-undersea.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-poison.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-sorceress.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-transformers.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-troll.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-undead.png" alt="all type" className='size-16' />
                  <img src="/filter/tag-pilgrims.png" alt="all type" className='size-16' />
               </div>
            </div>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4'>
               {HeroesData.map((hero) => (
                  <Link to={`/heroes/${hero.id}`} className='flex flex-col'>
                     <div className='border border-black p-1'>
                        <img src={hero.image} alt="hero" />
                     </div>
                     <span className='w-full whitespace-wrap text-center text-sm font-semibold'>{hero.name}</span>
                  </Link>
               ))}
            </div>
         </div>
      </Layout >
   )
}

export default Heroes