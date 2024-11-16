import React from 'react'
import Hero from './Hero'

const ListHeroes = ({ heroes }) => {
   return (
      <div className='grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-4'>
         {heroes.map((hero) => (
            <Hero key={hero.id} hero={hero} />
         ))}
      </div>
   )
}

export default ListHeroes