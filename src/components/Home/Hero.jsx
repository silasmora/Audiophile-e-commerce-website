import React from 'react'
import heroMobile from '/home/mobile/image-header.jpg'
import heroTablet from '/home/tablet/image-header.jpg'
import heroDesktop from '/home/desktop/image-hero.jpg'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate()
  return (
  <div className='bg-black w-screen'>
    <div className='relative h-[510px] flex justify-center max-w-[1110px] mx-auto md:h-[632px] lg:justify-between'>

      <img className='absolute inset-0 h-full w-full object-cover object-bottom contrast-125 md:hidden' src={heroMobile} />
      <img className='hidden md:inline-block absolute inset-0 h-full w-full object-cover object-bottom contrast-125 lg:hidden' src={heroTablet} />
      <img className='hidden absolute contrast-125 lg:block' src={heroDesktop} />

      <div className='relative w-[328px] mx-6 text-white flex flex-col self-center items-center lg:w-[398px] lg:items-start lg:mx-0 h-min'>
        <h3 className='uppercase text-sm text-center tracking-[10px] opacity-[.49]'>New product</h3>

        <h1 className='uppercase text-4xl text-white font-bold tracking-[1.286px] leading-[40px] text-center pt-4 md:text-[56px] md:leading-[58px] md:tracking-[2px] md:w-[396px] lg:text-left'>XX99 Mark II Headphones</h1>

        <p className='text-[15px] text-center font-medium leading-[25px] py-6 opacity-[0.75] lg:text-left lg:w-[90%]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

        <button 
          className='cursor-pointer bg-orange py-[15px] px-[30px] uppercase tracking-[1px] text-[13px] font-bold self-center lg:self-start hover:bg-orangeLight'
          onClick={() => navigate('/headphones/mark-ii')}
          >See product</button>
      </div>
      {/* <img className='contrast-125 border' src={heroTablet} alt="" /> */}
    </div>
  </div>    
  )
}

export default Hero