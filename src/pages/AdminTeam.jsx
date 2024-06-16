import React from 'react'

import NavBar from "../components/Team/Navbar"
import About from "../components/Team/About"
import Team from "../components/Team/Team"
import Footer from "../components/Team/Footer"
export default function AdminTeam() {
  return (
    <div className=' w-screen h-screen overflow-x-hidden'>
      <div className='w-full h-[85px] bg-neutral-800'>
        <NavBar />
      </div>

      <div className='w-full h-[650px] bg-green-400'>
        <About />
      </div>
      <div className='w-full h-[1900px] bg-neutral-900'>
        <Team />
      </div>
      <div className='w-full h-[85px] bg-neutral-800'>
        <Footer />
      </div>

    </div>
  )
}
