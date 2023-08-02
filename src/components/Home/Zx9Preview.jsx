import React from 'react'
import speakers from '/home/mobile/image-speaker-zx9.png'
import speakerDesktop from '/home/desktop/image-speaker-zx9.png'
import { useNavigate } from 'react-router-dom'
const Zx9Preview = () => {

  const navigate = useNavigate()
  return (
    <div className='relative overflow-hidden max-w-[1110px] mx-6 md:mx-10 lg:mx-auto'>

      <div className='absolute -translate-y-[2%] -translate-x-[23%] h-[558px] w-[558px] rounded-full border border-backgroundWhite border-opacity-25 md:-translate-y-[22%] md:-translate-x-[15%] md:h-[994px] md:w-[994px] lg:translate-y-[8%] lg:-translate-x-[21%]'>
        
      </div>

      <div className='bg-orange rounded-lg mt-[121px] flex flex-col items-center md:max-h-[720px] lg:h-[560px] lg:flex-row'>
        <div className='md:relative md:h-[542px] md:w-[542px] md:-translate-y-24 lg:translate-y-[27%] lg:translate-x-10 lg:mr-20'>
          <div className='border border-backgroundWhite border-opacity-25 rounded-full h-80 w-80 flex items-center justify-center md:h-[542px] md:w-[542px] md:absolute'>
            <div className='relative border border-backgroundWhite border-opacity-25 rounded-full h-[279px] w-[279px] flex justify-center items-center py-8 md:h-[472px] md:w-[474px]'>
              <img className='w-40 h-52 md:w-48 md:h-56 lg:w-[410px] lg:h-[493px] lg:absolute lg:-translate-y-[20%] lg:hidden' src={speakers} alt='Speaker' />
              <img className='hidden w-[410px] h-[493px] lg:block absolute -translate-y-[20%]' src={speakerDesktop} alt="speaker" />
            </div>
          </div>
        </div>
        <div className='relative flex flex-col items-center text-white mx-4 mb-12 md:mb-16 lg:items-start lg:mb-32 lg:self-end'>
          <div className='text-center text-4xl uppercase font-bold leading-[40px] tracking-[1.286px] w-44 -mt-6 md:text-[56px] md:leading-[58px] md:tracking-[2px] md:w-64 lg:text-left'>zx9 speaker</div>
          <p className='text-center text-[15px] font-medium leading-[25px] opacity-75 md:w-[349px] my-6 md:mt-6 md:mb-10 lg:text-left'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button 
            onClick={() => navigate('/speakers/zx9')}
            className='cursor-pointer bg-black py-[15px] px-[30px] uppercase tracking-[1px] text-[13px] font-bold self-center lg:self-start hover:bg-gray-600'>See product</button>
        </div>
      </div>

    </div>


  )
}

export default Zx9Preview