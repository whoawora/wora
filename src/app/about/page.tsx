"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import '../about/about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Earth from '@/image/earth.png'
import Flower from '@/image/flower.png'

type Props = {};

gsap.registerPlugin(ScrollTrigger);

export default function AboutHome({}: Props) {
  const text =
    "Hi there! I'm Petch, I graduated with a Bachelor of Information and Comunication Technology Degree in Interactive application from Silpakorn University. and currently work as a Back-End developer using Golang. Passionate about coding and intend to get to know more about the cybersecurity industry. I'm committed to make significant improvements to my profession while seeking opportunities to learn and grow.";

  const useArrayRef = (): [
    React.MutableRefObject<any[]>,
    (ref: any) => void
  ] => {
    const ref = useRef<any[]>([]);
    return [ref, (newRef: any) => newRef && ref.current.push(newRef)];
  };

  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  // function useArrayRef() {
  //   const lettersRef = useRef<any[]>([]);
  //   lettersRef.current = [];
  //   return [lettersRef, (ref:any) => ref && lettersRef.current.push(ref)];
  // }

  useEffect(() => {
    gsap.to(".earth", {
      rotate:-360,
      y: 0,
      duration: 2,
      stagger: { each: 0.15, yoyo: true, repeat: -1 },
      ease: "sine.inOut"
    });
    gsap.to(".flower", {rotate:360,duration: 2,repeat:-1});

    AOS.init({});
    AOS.refresh();
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        pin: ".pin",
        start: "top center",
        end: "bottom 70%",
      },
      color: "#fff",
      duration: 5,
      stagger: 100,
    });
    return () => {
      anim.kill();
    };
  }, [lettersRef]);

  return (
    <div>
      <div className="w-full h-full bg-black">
      <div className="spacing-small"></div>
      <Image src={Flower} alt="Picture of the author" className='flower' id="flower" />
      <div className="reveal">
        <div ref={triggerRef}  data-aos="fade-up" data-aos-duration="1500">
          {text.split("").map((letter, index) => (
            <span className="reveal-text" key={index} ref={setlettersRef}>
              {letter}
            </span>
          ))}
        </div>
      </div>
      <Image src={Earth} alt="Picture of the author" className='earth' id="earth" />
      <div className="spacing"></div>
      </div>
    </div>
  );
}
