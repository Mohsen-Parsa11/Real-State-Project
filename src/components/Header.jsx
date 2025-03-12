import React, { useState } from 'react'
import closeBtn from "../assets/close3.png";
import menu from "../assets/menu.jpg";
import logo from "../assets/logo.png";


function Header() {

    const [openMenu, setOpenMenu]= useState("hidden")
    const handleOpenMenu = ()=>{
        setOpenMenu("block")
    }

    const handleCloseMenu= ()=>{
        setOpenMenu("hidden")
    }

  return (
    <div>
         {/* header section */}
         <section id='header'>
            {/* blur div */}
        <div className="bg-white h-80 left-0 w-full lg:w-80 absolute blur-[140px] rounded-full"></div>

          <div className="px-6 lg:px-0 flex justify-between items-center py-4 font-poppins">
            {/* header logo */}
            <div>
              <img src={logo} alt="" className="w-32 relative z-10" />
            </div>
            {/* header menu */}
            <div className="hidden lg:block space-x-6 text-white">
              <a href="#residencies" className="capitalize text-lg">
                resinecies
              </a>
              <a href="#ourValue" className="capitalize text-lg">
                Our value
              </a>
              <a href="#contactUs" className="capitalize text-lg">
                Contact us
              </a>
              <a href="#getStarted" className="capitalize text-lg">
                Get started
              </a>
              <a
                className="bg-blue-600 rounded capitalize text-lg px-4 py-1 hover:opacity-90 active:scale-95 shadow"
                href="#getStarted"
              >
                Contact
              </a>
            </div>
            {/* humbergur button */}
            <img onClick={handleOpenMenu} src={menu} className="cursor-pointer z-10 h-10 w-10 rounded lg:hidden" alt="" />
          </div>
          {/* mobile menu */}
          <div className={`${openMenu} bg-slate-800 fixed top-0 z-50 w-60 rounded-2xl h-80  right-0 opacity-95`}>
            <div className="text-white flex flex-col space-y-3 mt-16">
                {/* close button */}
            <img src={closeBtn} onClick={handleCloseMenu} className="w-8 h-8 rounded-full absolute right-5 top-4 cursor-pointer" alt="" />
            <a href="#" className="capitalize text-lg text-center hover:text-orange-400 active:text-orange-400">
                resinecies
              </a>
              <div className="border-b border-slate-500 w-48 mx-auto"></div>
              <a href="#" className="capitalize text-lg text-center hover:text-orange-400 active:text-orange-400">
                Our value
              </a>
              <div className="border-b border-slate-500 w-48 mx-auto"></div>
              <a href="#" className="capitalize text-lg text-center hover:text-orange-400 active:text-orange-400">
                Contact us
              </a>
              <div className="border-b border-slate-500 w-48 mx-auto"></div>
              <a href="#" className="capitalize text-lg text-center hover:text-orange-400 active:text-orange-400">
                Get started
              </a>
              <div className="border-b border-slate-500 w-48 mx-auto"></div>
              <a
                className="capitalize text-lg text-center hover:text-orange-400 active:text-orange-400"
                href="#"
              >
                Contact
              </a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Header