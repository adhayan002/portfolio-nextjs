import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

function Navbar({className}:{className?:string}) {
    const socials=[
        {
            link:"https://www.linkedin.com/in/adhayan-sharma-00327b223/",
            label:"Linkedin",
            Icon:SiLinkedin
        },
        {
            link:"https://github.com/adhayan002",
            label:"Github",
            Icon:SiGithub
        },
    ]
  return (
    <nav className={cn('py-10 flex justify-between items-center',className)}>
        <h1 className='text-xl lg:text-2xl font-bold underline underline-offset-8 decoration-sky-300'>Adhayan 💻</h1>
        <div className='flex items-center gap-5'>
            {socials.map((social,index)=>{
                const Icon=social.Icon
                return <Link href={social.link} key={index} aria-label={social.label} style={{zIndex:2}}>
                    <Icon className='h-5 w-5 scale-125 transition-all hover:text-sky-300 hover:animate-pulse hover:scale-125' />
                </Link>
            })}
        </div>
    </nav>
  )
}

export default Navbar