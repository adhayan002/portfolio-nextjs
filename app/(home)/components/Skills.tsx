"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss, SiTypescript, SiVisualstudiocode, SiVsco } from 'react-icons/si'

function Skills() {
  const skills=[
    {text:"React",Icon:SiReact},
    {text:"Next.JS",Icon:SiNextdotjs},
    {text:"Node.js",Icon:SiNodedotjs},
    {text:"MongoDB",Icon:SiMongodb},
    {text:"Tailwind",Icon:SiTailwindcss},
    {text:"Python",Icon:SiPython},
    {text:"JavaScript",Icon:SiJavascript},
    {text:"TypeScript",Icon:SiTypescript},
    {text:"VSCode",Icon:SiVisualstudiocode}
  ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title text='Skills' className='flex flex-col items-center justify-center'/>
        <HoverEffect items={skills}/>
    </div>
  )
}

export default Skills