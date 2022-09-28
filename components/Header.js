import React from 'react'
import Image from 'next/image'
import logo from './pictures/pc-brand.png';
function Header() {

  return (
    <>
      <div className='hidden lg:grid border border-popBlue border-4 col-span-1 lg:col-span-2 lg:mx-20 lg:mt-2'>
            <div className=' flex justify-center bg-white'>
              <img
              src = {logo.src}
              className = "lg:object-contain h-22 w-15 lg:h-44 lg:w-30"
              />  
            </div>
      </div>
      <div className='border col-span-3 mx-2 lg:col-span-5 row-span-1 lg:mt-2 mt-8 lg:mr-4 '>
          <div className='flex-col text-center bg-white border border-4 border-popBlue rounded p-2'>
              <div className = "hidden lg:flex flex-col font-bold text-5xl mt-2 text-popBlue">POPULATION COUNCIL</div>
              <div className = "hidden lg:flex flex-col font-bold text-2xl text-popBlue"> Ideas. Evidence. Impact.</div>
              <div className = "font-bold text-4xl my-2 text-popBlue"> Disease Tracker</div>
          </div>
          
      </div>
    </>
  )
}

export default Header