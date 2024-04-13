import React from 'react'
import Navbar from './(home)/components/Navbar'
import HeroSection from './(home)/components/HeroSection'
import { TracingBeam } from '@/components/ui/tracing-beam'
import Skills from './(home)/components/Skills'
import Projects from './(home)/components/Projects'
import Footer from './(home)/components/Footer'


function page() {
  return (
    <>
    
      <div className='min-h-screen bg-black p-5 overflow-hidden'>
      <div className='relative'>
        <div className='max-w-7xl mx-auto'>
          <Navbar/>
        </div>
        <div className='max-w-7xl mx-auto'>
          <HeroSection/>
        </div>
        <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full'></div>
      </div>
      <div className='max-w-7xl mx-auto p-5 mt-20'>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </div>
   
    </>
  )
}

export default page
