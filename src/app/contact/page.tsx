import React from "react";
import Link from 'next/link';

type Props = {};

export default function page({}: Props) {
  return (
    <div className="pt-20 bg-black w-screen h-screen">
      <div className="px-6 xl:px-28  mx-auto bg-black">
        <div className="text-center text-white ">
          <h1 className="mb-20 text-7xl">Contact</h1>
          <div className="grid grid-cols-1 d-flex align-middle gap-20">
            <div className="text-8xl ">
              <Link className="" href="https://www.linkedin.com/in/worawiboon-sathone"
                target="_blank">
                Linkedin
              </Link>
            </div>
            <div className="text-8xl">
              <Link className="" href="https://www.instagram.com/pecwrs/" target="_blank">
                Instagram
              </Link>
            </div>
            <div className="text-8xl">
              <Link href="mailto:worasathone@gmail.com" className="px-20 border border-white rounded-full py-6">
                DROP ME AN EMAIL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
