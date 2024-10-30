import React from 'react'
import About from '../componets/About'
import Navs from '../componets/nav'

const page = () => {
  return (
    <div>

<div className='bg-[#A70E28] top-0 md:fixe w-full z-10'>
        <Navs />
      </div>
      

        <About/>
    </div>
  )
}

export default page