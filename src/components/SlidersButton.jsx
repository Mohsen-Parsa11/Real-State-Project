import React from 'react'
import { useSwiper } from 'swiper/react'

function SlidersButton() {

    const swiper= useSwiper()
  return (
    <div className='absolute top-85 lg:-top-10 right-30 lg:right-4 z-50'>
        <button className='cursor-pointer bg-gray-300 shadow-md shadow-blue-200 active:scale-95 active:shadow-none px-2 lg:px-5 lg:py-1 ml-4 rounded' onClick={()=>swiper.slidePrev()}>&lt;</button>
        <button className='cursor-pointer bg-blue-100 px-2 lg:px-5 lg:py-1 ml-4 rounded active:scale-95 active:shadow-none shadow-md shadow-gray-300' onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}

export default SlidersButton