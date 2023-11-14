
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import tawisetimg from '@/image/tawiset-cover.png'


type Props = {}

export default function page({}: Props) {
  return (
    <div>
    <div className='container mx-auto'>
    <div className="grid grid-cols-1 gap-4 pt-16">
      
      <div className="work-content" data-aos="fade-up">
        <Link href="work/tawiset">
        <Image
        src={tawisetimg}
        alt="Picture of the author"
        className='rounded-3xl'
      />
        </Link>
    
      </div> 
      
    </div>
    </div>
    </div>
  )
}