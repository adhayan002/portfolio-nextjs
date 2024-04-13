import { MovingBorderBtn } from '@/components/ui/moving-border';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import Link from 'next/link'
import React from 'react'
import { LuArrowRightCircle } from "react-icons/lu";
import Title from './Title';
import { BackgroundBeams } from '@/components/ui/background-beams';
const intro="Based in Bangalore, I am a fullstack developer passionate about building a modern web application that users love."
function HeroSection() {
  return (
    <div className="min-h-[75vh] flex items-center justify-between lg:gap-0 gap-14">
    <div className="max-w-4xl mx-auto p-4 text-center">
            <h1 className='text-4xl lg:text-7xl font-bold'>Hello Nice to Meet You!<br/>
             <span className='underline underline-offset-8 decoration-sky-300'>I am Adhayan</span></h1>
             <div className='text-lg text-gray-300 mt-2.5 mb-2.5 px-2 sm:px-0'>
                <TextGenerateEffect words={intro}/>
             </div>
             <div className='flex justify-center relative gap-5'>
                <div>
                    <Link href={'mailto:adhayansharmaise2024@gmail.com'}>
                    <MovingBorderBtn style={{ zIndex: 1 }} borderRadius='0.5rem' className='px-8 p-3 font-semibold'>
                        <p>Send Mail</p>
                    </MovingBorderBtn>
                    </Link>
                </div>
                <div>
                    <Link href={'mailto:adhayansharmaise2024@gmail.com'}>
                    <MovingBorderBtn style={{ zIndex: 1 }} borderRadius='0.5rem' className='p-3 font-semibold'>
                        <p>Download Resume</p>
                    </MovingBorderBtn>
                    </Link>
                </div>

             </div>
    </div>
    <BackgroundBeams className='z-0' />
  </div>
  )
}

export default HeroSection