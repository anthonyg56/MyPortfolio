"use client"

import Image from "next/image"

export default function Header() {

  return (
    <div className="relative pb-[40px] pt-[10px] overflow-hidden md:overflow-visible md:pt-[10px] md:pb-[60px] lg:pt-[20px]">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <div className="w-full gap-x-4 gap-y-[30px] grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] justify-center items-center grid sm:grid-cols-[1fr] sm:gap-y-[16px] md:grid-cols-[max-content] md:auto-cols-[max-content] lg:gap-y-[16px] lg:grid-cols-[max-content_max-content] lg:auto-cols-[max-content] lg:justify-between">
          <div className="width-full flex-col items-start flex relative row-start-2 row-end-2 col-start-1 col-end-2 md:w-auto md:max-w-[520px] lg:row-start-auto lg:row-end-auto lg:col-start-auto lg:col-end-auto">
            <Image src="/bubble.png" alt="bubble" loading="lazy" width={86} height={86} className="align-middle inline-block max-w-full z-[1] absolute top-auto bottom-[7%] left-auto right-[-6%] sm:bottom-[0%]"/>
            <h1 className="mt-o text-[28px] leading-[36px] sm:mt-[20px] sm:text-[42px] sm:leading-48px] md:mt-[40px] lg:mt-0 lg:text-[52px] lg:leading-[58px]">I'm Anthony Gayflor, a <span className="text-primary-purple">Web</span> Developer</h1>
            <img src="/bubble.png" alt="bubble" loading="lazy" width={48} height={48} className="align-middle inline-block max-w-full z-[1] absolute top-[1%] right-[11%] bottom-auto left-auto"/>
            <Image  src="/bubble.png" alt="bubble" loading="lazy" width={220} height={220} className="align-middle inline-block max-w-full z-[1] absolute top-auto bottom-0 left-[-35%]"/>
          </div>
          <div className="relative max-w-[180px] justify-self-center sm:max-w-[260px] lg:max-w-[380px]">
            <Image  src="/HeadshotP.png" alt="headshot 1" loading="lazy" width={380} height={475} className="align-middle inline-block max-w-full z-[1] relative"/>
            <Image  src="/small_dots.png" alt="small dots" loading="lazy" height={84} width={68} className="max-w-full align-middle inline-block z[1] absolute top-[35%] bottom-auto left-[auto] right-[-4%]"/>
            <Image src="/big_dots.png" alt="big dots" loading="lazy" width={132} height={116} className="max-w-full align-middle inline-block z[1] absolute top-auto bottom-[0%] left-[-6%] right-auto"/>
          </div>
        </div>
      </div>
    </div>
  )
}
