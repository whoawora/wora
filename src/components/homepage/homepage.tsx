import React, { useEffect, useRef } from "react";
import "../homepage/homepage.css";
import SplitType from "split-type";
import SplitText from "gsap-trial/SplitText";
import { gsap } from "gsap";
import { animate, easeInOut, easeOut } from "framer-motion";
import styles from './homepage.module.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { slide } from "../header/anim";
import { dir } from "console";


gsap.registerPlugin(SplitText);
export default function Homepage() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
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
    })
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

  let sfn = new SplitText(".split-first-name", { type: "chars" });
  let charFirstName = sfn.chars;
  let sln = new SplitText(".split-last-name", { type: "chars" });
  let charLastName = sln.chars;
  let spt = new SplitText(".split-position", { type: "chars" });
  let charPosition = spt.chars;

  gsap.from(charFirstName, {
    delay: 0.4,
    yPercent: 130,
    stagger: 0.03,
    ease: easeInOut,
    duration: 1,
  });

  gsap.from(charLastName, {
    delay: 0.4,
    yPercent: 130,
    stagger: 0.03,
    ease: easeInOut,
    duration: 1,
  });

  gsap.from(charPosition, {
    delay: 0.4,
    yPercent: 130,
    stagger: 0.03,
    ease: easeInOut,
    duration: 1,
  });

 

  return (
    <>
    <div className="h-screen grid content-between">
      <section></section>
      <section>
        <div>
            <div className="con-text text-center text-white">
                <h1 className="split-first-name">worawiboon</h1>
            </div>
            <div className="con-text text-center text-white">
                <h1 className="split-last-name">sathone</h1>
            </div>
            <div className="con-text text-center text-white">
                <h1 className="split-position">UX / UI Design</h1>
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
    
    </>
  );
}
