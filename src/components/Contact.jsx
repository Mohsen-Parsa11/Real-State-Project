import React from 'react'
import Container from './Container'
import call from "../assets/call3.png"
import chat from "../assets/chatt.png"
import contactImage from "../assets/contact.jpg"

function Contact() {
  return (
    <Container>
      <section id='contactUs'>
        <div className='flex flex-col space-y-10 lg:flex-row justify-center lg:justify-between px-6 lg:px-0 lg:space-x-32 mt-9 '>
          <div>
            <div className='space-y-1'>
            <h2 className='text-xl text-amber-300 font-semibold text-center lg:text-left'>Our Contact Us</h2>
            <h2 className='text-2xl text-slate-600 font-bold text-center lg:text-left'>Easy to contact us</h2>

            <p className="text-gray-400 text-center lg:text-left px-4 lg:px-0">
                we always ready to help by providing the best services for you.
                we blive to good blace to lice can make your life better.
              </p>

            </div>
              <div className='md:grid space-y-4 md:space-y-0 grid-cols-2 gap-4 mt-8'>
                <div className='px-4 py-4 shadow space-y-3 hover:shadow-xl shadow-violet-300'>
                  <div className='flex items-center space-x-4'>
                    <div className='bg-violet-100 p-2 rounded'><img src={call} className='w-5 h-5' alt="" /></div>
                    <div>
                      <p className='text-lg text-slate-600'>Call</p>
                      <p className='text-slate-400'>021 123 145 12</p>
                    </div>
                  </div>
                  <button className='bg-violet-100 cursor-pointer w-full hover:bg-blue-600 rounded py-1 text-blue-500 hover:text-white'><a href="#">Call now</a></button>
                </div>

                <div className='px-4 py-4 shadow space-y-3 hover:shadow-xl shadow-violet-300'>
                  <div className='flex items-center space-x-4'>
                    <div className='bg-violet-100 p-2 rounded'><img src={chat} className='w-5 h-5' alt="" /></div>
                    <div>
                      <p className='text-lg text-slate-600'>Chat</p>
                      <p className='text-slate-400'>021 123 145 12</p>
                    </div>
                  </div>
                  <button className='bg-violet-100 cursor-pointer w-full hover:bg-blue-600 rounded py-1 text-blue-500 hover:text-white'><a href="#">Call now</a></button>
                </div>

                <div className='px-4 py-4 shadow space-y-3 hover:shadow-xl shadow-violet-300'>
                  <div className='flex items-center space-x-4'>
                    <div className='bg-violet-100 p-2 rounded'><img src={chat} className='w-5 h-5' alt="" /></div>
                    <div>
                      <p className='text-lg text-slate-600'>Video Call</p>
                      <p className='text-slate-400'>021 123 145 12</p>
                    </div>
                  </div>
                  <button className='bg-violet-100 cursor-pointer w-full hover:bg-blue-600 rounded py-1 text-blue-500 hover:text-white'><a href="#">Call now</a></button>
                </div>

                <div className='px-4 py-4 shadow space-y-3 hover:shadow-xl shadow-violet-300'>
                  <div className='flex items-center space-x-4'>
                    <div className='bg-violet-100 p-2 rounded'><img src={chat} className='w-5 h-5' alt="" /></div>
                    <div>
                      <p className='text-lg text-slate-600'>Message</p>
                      <p className='text-slate-400'>021 123 145 12</p>
                    </div>
                  </div>
                  <button className='bg-violet-100 cursor-pointer w-full hover:bg-blue-600 rounded py-1 text-blue-500 hover:text-white'><a href="#">Call now</a></button>
                </div>
                
              </div>
          </div>
          <div>
            <img src={contactImage} className='w-full rounded-t-full h-80 lg:h-[450px]' alt="" />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Contact