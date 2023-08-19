import React from 'react'

export default function Contact() {
  return (
    <div className='relative overflow-hidden pb-5 pt-10 md:pt-[60px]'>
      <div className='w-full max-w-[920px] mx-auto px-4'>
        <div className='max-w-[1200px] rounded-[20px] py-[60px] z-[100] text-center flex-col items-center mb-[30px] mx-auto flex relative px-[15px] md:px-[100px]' style={{ backgroundColor: "#252b3a"}}>
          <h4 className='text-white text-[22px] leading-[28px] md:leading-[30px]'>Get in Touch</h4>
          <h2 className='text-white mt-[20px] mb-10 text-[28px] leading-[36px] md:text-[36px] md:leading-[46px]'>Let's have an awesome experince together from start to finish</h2>
          <div className='w-full gap-x-4 grid-rows-[auto] items-center grid justify-center justify-items-center gap-y-[30px] grid-cols-[1fr] auto-cols-[1fr] sm:gap-y-4 sm:grid-cols-[1fr] md:justify-items-[normal] md:grid-cols-[max-content] md:auto-cols-[max-content] lg:grid-cols-[max-content] lg:justify-between'>
            <a href="mailto:anthonygayflor6@gmail.com" className='primary-button text-[15px]'>Send me an email</a>
          </div>
        </div>
      </div>
    </div>
  )
}
