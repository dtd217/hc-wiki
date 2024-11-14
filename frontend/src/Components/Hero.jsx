import React from 'react'
import { Link } from 'react-router-dom'

const SingleHero = ({ hero }) => {
   return (
      <Link to={`/heroes/${hero.id}`} key={hero.id} className='flex flex-col hover:opacity-80 transition duration-100 ease-linear '>
         <div className='border border-black p-1'>
            <img src={hero.image} alt="hero" />
         </div>
         <span className='w-full whitespace-wrap text-center text-sm font-semibold'>{hero.id} - {hero.name}</span>
      </Link>

   )
}

export default SingleHero