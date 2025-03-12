import React from 'react'
import Container from './Container'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import data from "../utils/slider.json"
import { SlidesrSitting } from '../utils/SliderSitting'
import SlidersButton from './SlidersButton'

function Residencies() {
  return (
    <div>
        <Container>
        <section id="residencies">
            <div className='mt-16 mb-10 relative overflow-hidden'>
                <div className='px-6 lg:px-0'>
                    <p className='text-xl lg:text-2xl text-amber-400 font-semibold text-center lg:text-left'>Best Choises</p>
                    <p className='text-2xl lg:text-3xl text-slate-700 font-semibold text-center lg:text-left'>Popular Residencies</p>
                </div>
                <Swiper {...SlidesrSitting} >
                <SlidersButton />
                    {
                        data.map((card,index)=>(
                            <SwiperSlide key={index}>
                                <div className='mt-6 lg:w-60 cursor-pointer bg-gradient-to-t hover:from-blue-50 to-white pb-4 rounded-2xl'>
                                    <img className='lg:w-56 mx-auto rounded-xl' src={card.image} alt="" />
                                   <div className='px-4 space-y-1 lg:space-y-3 mt-1 overflow-hidden'>
                                   <p className='text-gray-400 lg:text-lg font-bold text-center lg:text-left mt-3'><span className='text-amber-400'>$</span>{card.price}</p>
                                    <p className='text-xl lg:text-xl text-slate-600 font-bold text-center lg:text-left'>{card.name}</p>
                                    <p className='text-gray-400 lg:w-70 text-sm text-center lg:text-left line-clamp-2'>{card.detail}</p>
                                   </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
        </Container>
    </div>
  )
}

export default Residencies;