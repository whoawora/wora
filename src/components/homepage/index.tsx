import React, { useEffect, useRef } from "react";
import "../homepage/homepage.css";
import { gsap } from "gsap";
import { easeInOut } from "framer-motion";
import styles from './homepage.module.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'
import Image from 'next/image'
import Union from '@/image/Union.png'



gsap.registerPlugin(ScrollTrigger);
export default function Index() {
  const target = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;

 

  useEffect( () => {
    gsap.to(".union", {rotate:360,duration: 2,repeat:-1});

    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-=300px",
    });
  }, [])

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    gsap.set(thirdText.current, {xPercent: xPercent})
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  }


    if (target.current) {
      const sfn = new SplitType('.split-first-name');
      const sln = new SplitType('.split-last-name')  
      const spt = new SplitType('.split-position')   

      gsap.from(sfn.chars, {
      delay: 0.4,
      yPercent: 130,
      stagger: 0.03,
      ease: easeInOut,
      duration: 1,
    });

      gsap.from(sln.chars, {
        delay: 0.4,
        yPercent: 130,
        stagger: 0.03,
        ease: easeInOut,
        duration: 1,
      });
    
      gsap.from(spt.chars, {
        delay: 0.4,
        yPercent: 130,
        stagger: 0.03,
        ease: easeInOut,
        duration: 1,
      });

  }
 

  return (
    <>
    <div className="h-screen grid content-between text-center">
      <section></section>
      <section>
      <Image src={Union} alt="Picture of the author" className='union' id="union" />
        <div>
       
            <div className="con-text text-center text-white"  ref={target}>
                <h1 className="split-first-name pillow-lava">worawiboon</h1>
            </div>
            <div className="con-text text-center text-white"  ref={target}>
                <h1 className="split-last-name pillow-lava">sathone</h1>
            </div>
            <div className="con-text text-center text-white"  ref={target}>
                <h1 className="split-position pillow-lava">UX / UI Design</h1>
            </div>    
        </div>
       
        
      </section>
      <section>
      <div className={styles.main}>
              <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                      <p ref={firstText}>&nbsp; UX / UI Design | Back end Developer Golang - </p>
                      <p ref={secondText}>&nbsp; UX / UI Design | Back end Developer Golang - </p>
                      <p ref={thirdText}>&nbsp; UX / UI Design | Back end Developer Golang - </p>
                </div>
              </div>
          </div>
      </section>
    
    </div>
    {/* <div className="h-screen bg-white"></div> */}
    
    </>
  );
}
