import React from 'react'
import { SiExpress, SiFramer, SiMongodb, SiNextdotjs, SiReact, SiSanity, SiStripe, SiTailwindcss } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

function Projects() {
    const projects=[
        {
            title:"Storyversebooks",
            tech:[SiReact,SiMongodb,SiExpress,SiTailwindcss],
            link:"https://storyversebooks.vercel.app/",
            cover:"/storyversebooks.png",
            background:"bg-sky-300"
        },
        {
            title:"CartEase",
            tech:[SiNextdotjs,SiSanity,SiTailwindcss,SiFramer,SiStripe],
            link:"https://cartease.vercel.app/",
            cover:"/cartease.png",
            background:"bg-[#D0FCB3]"
        }
    ]
  return (
    <div className='py-10 p-5 sm:p-0'>
      <Title text='Projects' className='flex flex-col items-center justify-center'/>
      <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
        {projects.map((project,idx)=>{
          return <Link key={idx} href={project.link}>
            <div className={cn("p-3 rounded-2xl ",project.background)}>
              <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
               <div className='space-y-5'>
               <h1 className='text-2xl font-bold'>{project.title}</h1>
                <div className='flex items-center gap-5'>
                  {project.tech.map((Icon,index)=>{
                    return <Icon key={index} className='size-8'/>
                  })}
                </div>
               </div>
              </DirectionAwareHover>
            </div>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Projects