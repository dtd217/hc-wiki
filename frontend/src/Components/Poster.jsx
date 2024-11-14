import React from 'react'

const Poster = ({ poster, stars, rarity,shadow }) => {
   return (
      <div className={`relative w-full sm:w-2/3 md:w-1/3 lg:w-1/3 shadow-[0px_0px_16px_8px] shadow-${rarity}`}>
         <img src={poster} alt="hero-image" className='size-full' />
         <div className={`absolute bottom-0 left-0 h-1/6 w-full flex justify-center items-center bg-[#351d13]`}>
            {stars >= 1 && <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>}
            {stars >= 2 && <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>}
            {stars >= 3 && <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>}
            {stars >= 4 && <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>}
            {stars === 5 && <i class="fa-solid fa-star text-yellow-400 fa-2xl"></i>}
         </div>
      </div>
   )
}

export default Poster