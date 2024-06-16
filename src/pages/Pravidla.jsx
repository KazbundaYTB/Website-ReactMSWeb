import React from 'react'

import NavBar from "../components/Rules/Navbar"
import About from "../components/Rules/About"
import Rules from "../components/Rules/Rules"
import Footer from "../components/Rules/Footer"
export default function Pravidla() {
  return (
    <div className=' w-screen h-screen overflow-x-hidden'>
      <div className='w-full h-[85px] bg-neutral-800'>
        <NavBar />
      </div>

      <div className='w-full h-[650px] bg-green-400'>
        <About />
      </div>
      <div className='w-full h-[2000px] bg-neutral-900'>
        <Rules />
      </div>
      <div className='w-full h-[85px] bg-neutral-800'>
        <Footer />
      </div>

    </div>
  )
}
