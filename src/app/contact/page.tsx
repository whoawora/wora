"use client"
import React from "react";
import Link from 'next/link';

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="pt-20 bg-black w-screen h-screen">
      <div className=" bg-black">
        <div className="text-center text-white ">
          <h1 className="mb-20 text-contact">Contact</h1>
          <div className="grid grid-cols-1 d-flex align-middle gap-10 pb-36">
            <div className="text-contact">
              <Link className="" href="https://www.linkedin.com/in/worawiboon-sathone"
                target="_blank">
                Linkedin
              </Link>
            </div>
            <div className="text-contact">
              <Link className="" href="https://www.instagram.com/pecwrs/" target="_blank">
                Instagram
              </Link>
            </div>
            <div className="text-contact">
              <Link href="mailto:worasathone@gmail.com" className="">
                DROP ME AN EMAIL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
