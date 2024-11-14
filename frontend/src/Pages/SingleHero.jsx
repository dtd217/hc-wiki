import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { HeroesData } from '../Data/HeroesData'

const SingleHero = () => {
   const heroId = window.location.pathname.split('/')[2]
   const selectedHero = HeroesData.find(hero => hero.id === Number(heroId))

   const [displayImage, setDisplayImage] = useState(selectedHero.poster)

   const countStars = () => {
      if (selectedHero.rarity === 'mythic') { return 5 }
      else if (selectedHero.rarity === 'limited') { return 4 }
      else if (selectedHero.rarity === 'legendary') { return 3 }
      else if (selectedHero.rarity === 'epic' || selectedHero.rarity === 'rare') { return 2 }
      else if (selectedHero.rarity === 'elite' || selectedHero.rarity === 'common') { return 1 }
   }

   return (
      <Layout>
         <div className='max-w-screen-lg w-full py-6 flex flex-col px-4'>
            <div className='bg-white border-2 border-gray-300 shadow-md shadow-gray-300 p-6 flex flex-col gap-4 md:flex-row justify-between items-center md:items-start'>
               {selectedHero.rarity === 'mythic' &&
                  <div className='relative w-full sm:w-2/3 md:w-1/3 shadow-[0px_0px_16px_8px_#dc2626]'>
                     <img src={displayImage} alt="hero-image" className='size-full' />
                     <div className="absolute bottom-0 left-0 h-1/6 w-full flex justify-center items-center gap-x-3 bg-[#351d13]">
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                     </div>
                  </div>
               }
               {selectedHero.rarity === 'limited' &&
                  <div className='relative w-full sm:w-2/3 md:w-1/3 shadow-[0px_0px_16px_8px_#dc2626]'>
                     <img src={displayImage} alt="hero-image" className='size-full' />
                     <div className="absolute bottom-0 left-0 h-1/6 w-full flex justify-center items-center gap-x-3 bg-[#351d13]">
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                     </div>
                  </div>
               }
               {selectedHero.rarity === 'legendary' &&
                  <div className='relative w-full sm:w-2/3 md:w-1/3 shadow-[0px_0px_16px_8px_#f97316]'>
                     <img src={displayImage} alt="hero-image" className='size-full' />
                     <div className="absolute bottom-0 left-0 h-1/6 w-full flex justify-center items-center gap-x-3 bg-[#351d13]">
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                     </div>
                  </div>
               }
               {selectedHero.rarity === 'epic' &&
                  <div className='relative w-full sm:w-2/3 md:w-1/3 shadow-[0px_0px_16px_8px_#9333ea]'>
                     <img src={displayImage} alt="hero-image" className='size-full' />
                     <div className="absolute bottom-0 left-0 h-1/6 w-full flex justify-center items-center gap-x-3 bg-[#351d13]">
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                     </div>
                  </div>
               }
               {selectedHero.rarity === 'rare' &&
                  <div className='relative w-full sm:w-2/3 md:w-1/3 shadow-[0px_0px_16px_8px_#3b82f6]'>
                     <img src={displayImage} alt="hero-image" className='size-full' />
                     <div className="absolute bottom-0 left-0 h-1/6 w-full flex justify-center items-center gap-x-3 bg-[#351d13]">
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                     </div>
                  </div>
               }
               {selectedHero.rarity === 'elite' &&
                  <div className='relative w-full sm:w-2/3 md:w-1/3 shadow-[0px_0px_16px_8px_#4ade80]'>
                     <img src={displayImage} alt="hero-image" className='size-full' />
                     <div className="absolute bottom-0 left-0 h-1/6 w-full flex justify-center items-center gap-x-3 bg-[#351d13]">
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                     </div>
                  </div>
               }
               {selectedHero.rarity === 'common' &&
                  <div className='relative w-full sm:w-2/3 md:w-1/3 shadow-[0px_0px_16px_8px_#6b7280]'>
                     <img src={displayImage} alt="hero-image" className='size-full' />
                     <div className="absolute bottom-0 left-0 h-1/6 w-full flex justify-center items-center gap-x-3 bg-[#351d13]">
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                     </div>
                  </div>
               }
               <div className="flex md:flex-col gap-4">
                  <div
                     className="size-28 md:size-24 border border-black p-1 cursor-zoom-in"
                     onClick={() => setDisplayImage(selectedHero.poster)}
                  ><img src={selectedHero.image} alt="avatar" className='size-full' />
                  </div>
                  {selectedHero.posterSkin !== '' ?
                     <div
                        className="size-28 md:size-24 border border-black p-1 cursor-zoom-in"
                        onClick={() => setDisplayImage(selectedHero.posterSkin)}
                     ><img src={selectedHero.skin} alt="avatskinar" className='size-full' />
                     </div> :
                     <div className="size-28 md:size-24 border border-black p-1 cursor-not-allowed flex justify-center items-center text-3xl text-center font-semibold">
                        No Skin
                     </div>
                  }
               </div>
               <div className='w-full sm:w-2/3 md:w-1/2 bg-[#ededed] border border-gray-300 p-4 flex flex-col gap-2'>
                  <h1 className='text-3xl font-extrabold'>{selectedHero.name}</h1>
                  <h2 className='text-xl font-bold'>{selectedHero.realName}</h2>
                  <p className='text-lg font-semibold'>{selectedHero.introduction}</p>
                  <div className='flex gap-2 flex-wrap mb-1'>
                     {selectedHero.tags.map((tag, index) => (
                        <img key={index} src={`/filter/${tag}.png`} alt={tag} className='w-12' />
                     ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3 *:cursor-pointer *:bg-white *:border-2 *:border-transparent *:transition *:duration-75 *:ease-linear *:px-2 *:py-3 *:col-span-2 *:*:pl-2 *:*:capitalize *:*:font-semibold *:*:border-l-4 *:*:border-gray-700">
                     <div className='hover:border-rose-600 lg:col-span-1'>
                        <span>Class: {selectedHero.heroesClass}</span>
                     </div>
                     <div className='hover:border-rose-600 lg:col-span-1'>
                        <span className='capitalize'>Rarity: {selectedHero.rarity}</span>
                     </div>
                     <div className='hover:border-rose-600 lg:col-span-1'>
                        <span className='capitalize'>Position: {selectedHero.position}</span>
                     </div>
                     <div className='hover:border-rose-600 lg:col-span-1'>
                        <span className='capitalize'>Type: {selectedHero.type}</span>
                     </div>
                     <div className='hover:border-rose-600'>
                        <span>Portrait: {selectedHero.portraits}</span>
                     </div>
                     <div className='hover:border-rose-600'>
                        <span className=' apitalize'>Major Duty: {selectedHero.majorDuty}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Layout >
   )
}

export default SingleHero