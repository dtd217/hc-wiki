import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../Components/Hero'
import { HeroesData } from '../Data/HeroesData'

const Heroes = () => {
   return (
      <Layout>
         <div className='max-w-screen-xl w-full p-6 flex flex-col gap-4 px-4'>
            <div className='border-2 border-gray-300 shadow-md shadow-gray-300 p-4 flex flex-col gap-3'>
               <div>Search</div>
            </div>
            <div className='border-2 border-gray-300 shadow-md shadow-gray-300 p-4 flex flex-col gap-3'>
               <div className='flex flex-wrap gap-3 *:size-12'>
                  <img src="/filter/type-all.png" alt="all type" />
                  <img src="/filter/str.png" alt="str type" />
                  <img src="/filter/int.png" alt="int type" />
                  <img src="/filter/agi.png" alt="agi type" />
               </div>
               <div className='flex flex-wrap gap-3 *:size-12'>
                  <img src="/filter/frame-all.png" alt="all frame" />
                  <img src="/filter/frame-normal.png" alt="all normal" />
                  <img src="/filter/frame-legend.png" alt="all legend" />
                  <img src="/filter/frame-miraculous.png" alt="all miraculous" />
               </div>
               <div className='flex flex-wrap gap-3 *:size-12'>
                  <img src="/filter/tag-all.png" alt="all tag" />
                  <img src="/filter/beast.png" alt="beast tag" />
                  <img src="/filter/sword.png" alt="sword tag" />
                  <img src="/filter/bow.png" alt="bow tag" />
                  <img src="/filter/evil.png" alt="evil tag" />
                  <img src="/filter/dragon.png" alt="dragon tag" />
                  <img src="/filter/female.png" alt="female tag" />
                  <img src="/filter/fire.png" alt="fire tag" />
                  <img src="/filter/originals.png" alt="originals tag" />
                  <img src="/filter/fly.png" alt="fly tag" />
                  <img src="/filter/giant.png" alt="giant tag" />
                  <img src="/filter/god.png" alt="god tag" />
                  <img src="/filter/heroine.png" alt="heroine tag" />
                  <img src="/filter/male.png" alt="male tag" />
                  <img src="/filter/mechanic.png" alt="mechanic tag" />
                  <img src="/filter/undersea.png" alt="undersea tag" />
                  <img src="/filter/poison.png" alt="poison tag" />
                  <img src="/filter/troll.png" alt="troll tag" />
                  <img src="/filter/undead.png" alt="undead tag" />
                  <img src="/filter/pilgrims.png" alt="pilgrims tag" />
                  {/* <img src="/filter/sorceress.png" alt="all type" />
                  <img src="/filter/transformers.png" alt="all type" /> */}
               </div>
            </div>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-4'>
               {HeroesData.map((hero) => (
                  <Hero key={hero.id} hero={hero} />
               ))}
            </div>
         </div>
      </Layout >
   )
}

export default Heroes