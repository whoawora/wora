"use client";
import React, {useEffect, useRef} from "react";
import Link from "next/link";
import styles from "./contact.module.css";
import './contact.css'
import { easeInOut } from "framer-motion";
import SplitType from 'split-type'
import { FaInstagram } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { LiaLinkedin } from "react-icons/lia";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Poo from '@/image/poo.png'
import { gsap } from "gsap";
import Wong from '@/image/wong.png'



type Props = {};
const style = { color: "white"}
export default function Contact({}: Props) {
  useEffect(() => {
  gsap.to(".poo", {rotate:360,duration: 5,repeat:-1});

  gsap.to(".wong", {
    rotate:90,
    y: 0,
    duration: 2,
    stagger: { each: 0.15, yoyo: true, repeat: -1 },
    ease: "sine.inOut"
  });
  AOS.init({});
  AOS.refresh();
}, []);

  return (
    <div className="bg-black h-screen flex justify-center items-center text-white">
 <Image src={Poo} alt="Picture of the author" className='poo' id="poo" />
        <div className="" data-aos="fade-right" data-aos-duration="1500">
        <Link href="https://www.linkedin.com/in/worawiboon-sathone" target="_blank">

          <div className="flex justify-center items-center contact-text gap-2">
          <LiaLinkedin style={style}/>
            <p className="split-linkedin pillow">LINKEDIN</p>     
          </div>
        </Link>

        <Link href="https://www.instagram.com/pecwrs/" target="_blank">
          
          <div className="flex justify-center items-center contact-text gap-2">
            <FaInstagram style={style}/>
            <p className="pillow">INSTAGRAM</p>
          </div>
         
        </Link>

        <Link href="mailto:worasathone@gmail.com">
          <div className="flex justify-center items-center contact-text gap-2">
          <MdOutlineAlternateEmail style={style}/>
          <p className="pillow">DROP ME AN EMAIL</p>
          </div>
        
        </Link>
     
        </div>
       
        <Image src={Wong} alt="Picture of the author" className='wong' id="wong" />
     
    </div>
  );
}
