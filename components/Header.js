import React from 'react'
import Image from 'next/image'
import logo from './pictures/pc-brand.png';
function Header() {

  return (
    <>
      <div className='border border-popBlue border-4 col-span-2 row-span-1 mx-20 mt-2'>
            <div className='flex justify-center bg-white '>
              <img
              src = {logo.src}
              className = "object-contain h-44 w-30"
              />  
            </div>
      </div>
      <div className='border col-span-5 row-span-1 mt-2 mr-4'>
          <div className='flex-col text-center bg-white border border-4 border-popBlue rounded p-2'>
              <div className = "font-bold text-5xl mt-2 text-popBlue">POPULATION COUNCIL</div>
              <div className = "font-bold text-2xl text-popBlue"> Ideas. Evidence. Impact.</div>
              <div className = "font-bold text-4xl my-2 text-popBlue"> Disease Tracker</div>
          </div>
          
      </div>
    </>
  )
}

export default Header