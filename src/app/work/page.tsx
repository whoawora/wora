
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import tawisetimg from '@/image/tawiset-cover.png'


type Props = {}

export default function page({}: Props) {
  return (
    <div className='bg-black'>
      <div className='px-6 xl:px-28  mx-auto'>
        <div className="grid grid-cols-1 gap-4 pt-16 bg-black">
          <div className="work-content" data-aos="fade-up">
              <Link href="work/tawiset">
              <Image
              src={tawisetimg}
              alt="Picture of the author"
              className='rounded-3xl'
            />
              </Link>       
          </div> 
          <div className="work-content" data-aos="fade-up">
        
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}