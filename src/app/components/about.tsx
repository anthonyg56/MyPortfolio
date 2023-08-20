import Image from 'next/image'

export default function About() {
  return (
    <div className='relative overflow-hidden pt-10 pb-10 md:pt-[60px] md:pb-[60px]'>
      <div className='w-full max-w-[920px] mx-auto px-4'>
        <div className='w-full gap-x-4 grid-rows-[auto] items-center grid gap-y-[30px] grid-cols-[1fr] auto-cols-[1fr] justify-center sm:gap-y-[16px] sm:grid-cols-[1fr] md:grid-cols-[max-content] md:auto-cols-[max-content] lg:grid-cols-[max-content_max-content] lg:justify-between'>
          <div className='flex-col items-start flex relative w-full max-w-none md:w-auto md:max-w-[520px]'>
            <h2 className='text-[28px] leading-[36px] md:text-[36px] md:leading-[46px] mb-[30px]'>Hi, I'm a Web Developer from Indianapolis, IN</h2>
            <p className='text-[15px] leading-26px relative text-pBlue'>Web development is how I utilize a passion for creativity, innovation, and problem solving. The process of taking an idea from just a concept to a real operation on the web is where I find that im most in my natural element. I thoroughly enjoy the journey and invaluable experience that comes along with it, as well as helping others realize their vision.</p>
          </div>

          <div className='max-w-[520px] flex-col items-center flex relative'>
            <div className='w-[216px] h-[216px] object-cover border-solid border-8 border-white rounded-[100%] justify-center items-start mb-5 flex overflow-hidden'>
              <img src="/unnamed.jpg" alt='headshots' width={0} height={0} className='w-full h-full object-cover'/>
            </div>

            <h2 className='text-[28px] leading-[36px] md:text-[36px] md:leading-[46px] mb-[30px]'>Anthony Gayflor</h2>

            <div className='grid gap-x-5 gap-y-4 grid-rows-[auto] grid-cols-[1fr_1fr_1fr_1fr] auto-cols-[1fr]'>
              <a href='https://www.facebook.com/anthony.gayflor' className="" style={{ textDecoration: "none" }}><Image src="/facebook.svg" alt="facebook" height={32} width={32}/></a>
              <a href="http://www.twitter.com/GayflorAnthony" className='' style={{ textDecoration: "none" }}><Image src="/twitter.svg" alt="twitter" height={32} width={32}/></a>
              <a href="https://github.com/anthonyg56" className='' style={{ textDecoration: "none" }}><Image src="/github.svg" alt="github" height={32} width={32}/></a>
              <a href="https://www.anthonygayflor.com/#" className='' style={{ textDecoration: "none" }}><Image src="/linkedIn.svg" alt="linkedin" height={32} width={32}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
