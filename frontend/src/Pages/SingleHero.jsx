import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { HeroesData } from '../Data/HeroesData'

const SingleHero = () => {
   const heroId = window.location.pathname.split('/')[2]
   const selectedHero = HeroesData.find(hero => hero.id === Number(heroId))

   const [displayImage, setDisplayImage] = useState(selectedHero.poster)

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <Layout>
         <div className='max-w-screen-lg w-full py-6 flex flex-col px-4 gap-6'>
            <div className='bg-white border-2 border-gray-300 shadow-md shadow-gray-300 p-6 flex flex-col gap-6 md:gap-4 md:flex-row justify-between items-center md:items-start'>
               {selectedHero.rarity === 'mythic' &&
                  <div className='relative w-full sm:w-2/3 md:w-1/3 shadow-[0px_0px_16px_8px_#6366f1]'>
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
                  <div className='relative w-full sm:w-2/3 md:w-1/3 shadow-[0px_0px_16px_8px_#2563eb]'>
                     <img src={displayImage} alt="hero-image" className='size-full' />
                     <div className="absolute bottom-0 left-0 h-1/6 w-full flex justify-center items-center gap-x-3 bg-[#351d13]">
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                        <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>
                     </div>
                  </div>
               }
               {selectedHero.rarity === 'elite' &&
                  <div className='relative w-full sm:w-2/3 md:w-1/3 shadow-[0px_0px_16px_8px_#22c55e]'>
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
                     className="size-28 md:size-24 border border-black p-1 cursor-zoom-in active:scale-95"
                     onClick={() => setDisplayImage(selectedHero.poster)}
                  ><img src={selectedHero.image} alt="avatar" className='size-full' />
                  </div>
                  {selectedHero.posterSkin !== '' ?
                     <div
                        className="size-28 md:size-24 border border-black p-1 cursor-zoom-in active:scale-95"
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
                  <p className='text-lg font-semibold leading-tight'>{selectedHero.introduction}</p>
                  <div className='flex gap-2 flex-wrap mb-1'>
                     {selectedHero.tags.map((tag, index) => (
                        <img key={index} src={`/filter/${tag}.png`} alt={tag} className='w-12 hover:scale-110 transition duration-100 ease-in' />
                     ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3 *:cursor-default *:bg-white *:border-2 *:border-transparent *:transition *:duration-75 *:ease-linear *:px-2 *:py-3 *:col-span-2 *:*:pl-2 *:*:capitalize *:*:font-semibold *:*:border-l-4 *:*:border-gray-700">
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
            <div className='bg-white border-2 border-gray-300 shadow-md shadow-gray-300 p-6 flex flex-col gap-4 justify-between items-center md:items-start'>
               <h1 className='text-3xl font-extrabold'>Skills</h1>
               {selectedHero.skills.map((skill, index) => (
                  <div key={index} className='flex flex-col sm:flex-row gap-3 border-2 border-black w-full p-2'>
                     <img src={skill.skill_Image} alt={skill.skill_Name} className=' size-64 sm:size-36 self-center sm:self-start' />
                     <div className='flex flex-col flex-wrap sm:gap-1 gap-2'>
                        <h2 className='text-2xl sm:text-xl font-bold self-center sm:self-start'>{skill.skill_Name}</h2>
                        <p className='leading-snug font-semibold'>{skill.skill_Description}</p>
                        <ul>
                           {skill.skill_Effects?.map((effect, index) => (
                              <li key={index} className='list-disc ml-5'>{effect}</li>
                           ))}
                        </ul>
                        {skill.skill_Type && <p>Skill type: {skill.skill_Type.join(', ')}</p>}
                        {skill.skill_Awaken &&
                           <div className='flex flex-col'>
                              <h3 className='font-bold text-xl'>Awaken</h3>
                              <table className='text-left'>
                                 {skill.skill_Awaken?.map((effect, index) => (
                                    <tr key={index} className='w-full *:border *:border-black *:py-0.5 *:px-2 *:font-normal'>
                                       <th className='md:text-nowrap'>{effect.indexOf('.').toString() === '-1' ? effect : effect.slice(0, effect.indexOf('.'))}</th>
                                       <th>{effect.slice(effect.indexOf('.') + 1)}</th>
                                    </tr>
                                 ))}
                              </table>
                           </div>}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Layout >
   )
}

export default SingleHero