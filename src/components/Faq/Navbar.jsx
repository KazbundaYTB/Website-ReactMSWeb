import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { HiNewspaper } from "react-icons/hi2";
import { BsFillPeopleFill } from "react-icons/bs";

import Banner from "../../img/Banner.png";

export default function NavBar() {
  return (
    <div className='relative flex justify-center items-center h-full text-white'>
      <div className='absolute left-[12px] mb-2'>
        <img src={Banner} alt="" className='w-[256px] mt-3' />
      </div>

      <ul className='flex flex-row space-x-4'>
        <li className='flex flex-row items-center'>
          <a href="/"><button className='flex items-center space-x-2 font-bold'><FaHome /><span>Domov</span></button></a>
        </li>
        <li><a href="/pravidla"><button className='flex items-center space-x-2 font-bold'><HiNewspaper /><span>Pravidla</span></button></a></li>
        <li><a href="/adminteam"><button className='flex items-center space-x-2 font-bold'><BsFillPeopleFill /><span>AdminTeam</span></button></a></li>
        <li><a href="/faq"><button className='flex items-center space-x-2 font-bold'><FaClipboardList /><span>FAQ</span></button></a></li>
      </ul>
    </div>
  );
}
