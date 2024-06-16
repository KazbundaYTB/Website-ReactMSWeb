import React from 'react'

import NavBar from "../components/Home/Navbar"
import About from "../components/Home/About"
import MiniGames from "../components/Home/MiniGames"
import Footer from "../components/Home/Footer"
export default function Home() {
  return (
    <div className=' w-screen h-screen overflow-x-hidden'>
      <div className='w-full h-[85px] bg-neutral-800'>
        <NavBar />
      </div>

      <div className='w-full h-[650px] bg-green-400'>
        <About />
      </div>
      <div className='w-full h-[1750px] bg-neutral-900'>
        <MiniGames />
      </div>
      <div className='w-full h-[85px] bg-neutral-800'>
        <Footer />
      </div>

    </div>
  )
}
