import React from 'react'
import logo from './pictures/pc-brand.png';
function Header() {

  return (
    <>
      <div className='hidden lg:grid border border-popBlue border-4 col-span-1 md:col-span-2 mx-10 xl:col-span-2 xl:mx-20 xl:mt-2'>
            <div className=' flex justify-center bg-white'>
              <img
              src = {logo.src}
              className = "lg:object-contain h-22 w-15 md:h-22 lg-20 lg:h-44 lg:w-30"
              />  
            </div>
      </div>
      <div className='border col-span-3 row-span-1 mt-2 mx-2 md:col-span-7 md:row-span-1 md:mt-10 lg:col-span-5 lg:mt-2 xl:mt-2 xl:mr-4 '>
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