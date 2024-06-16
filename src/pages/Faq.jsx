import React from 'react'

import NavBar from "../components/Faq/Navbar"
import About from "../components/Faq/About"
import Questions from "../components/Faq/Questions"
import Footer from "../components/Faq/Footer"
export default function Pravidla() {
  return (
    <div className=' w-screen h-screen overflow-x-hidden'>
      <div className='w-full h-[85px] bg-neutral-800'>
        <NavBar />
      </div>

      <div className='w-full h-[650px] bg-green-400'>
        <About />
      </div>
      <div className='w-full h-[1250px] bg-neutral-900'>
        <Questions />
      </div>
      <div className='w-full h-[85px] bg-neutral-800'>
        <Footer />
      </div>

    </div>
  )
}
