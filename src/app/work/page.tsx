import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div>
    <div className="grid grid-cols-2 gap-4 pt-14">
      <div className="work-content" data-aos="fade-up">
        <a href="#">
          {/* <div className="w-full h-full bg-blue-600" data-aos="fade-up">
            2
          </div> */}
        </a>
      </div>
      <div className="work-content" data-aos="fade-up">
        <a href="#">
          {/* <div className="w-full h-full bg-red-600" data-aos="fade-up">
            2
          </div> */}
        </a>
      </div>  
      <div className="work-content" data-aos="fade-up">
        <a href="#">
          {/* <div className="w-full h-full bg-blue-600" data-aos="fade-up">
            2
          </div> */}
        </a>
      </div>
      <div className="work-content" data-aos="fade-up">
        <a href="#">
          {/* <div className="w-full h-full bg-red-600" data-aos="fade-up">
            2
          </div> */}
        </a>
      </div>  
    </div>
      
    </div>
  )
}