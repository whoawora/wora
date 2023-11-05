"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, Power2 } from "gsap/all";
import Image from 'next/image'


import Spline from '@splinetool/react-spline';

const ScrollAnimations: React.FC = () => {
  const containerRef = useRef(null);

  useEffect(() => { 
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    const spline = document.querySelector("Spline")
    const { innerHeight } = window;

    gsap.to(spline, {
      scale: 0, // ปรับขนาดของ SVG ตามที่คุณต้องการ
      stagger: 0.25,
      duration: 30,
      transformOrigin: "center", // กำหนดจุดศูนย์กลางของการซูม
      ease: Power2.easeInOut,
      opacity: 0,
      scrollTrigger: {
        trigger: container,
        pin:true,
        scrub: 1,
        start: "top top", // เริ่มการซูมเมื่อคอนเทนเนอร์อยู่ที่ด้านบนของหน้าจอ
        end: `+=${innerHeight * 1.5}`,
       // ซูมเข้าจนครบหน้าจอ
      },

    });


    // gsap.from("#zoom-out h1", {
    //   scale: 100,
    //   stagger: 0.25,
    //   duration: 3,
    //   scrollTrigger: {
    //     trigger: "#zoom-out",
    //     pin: true,
    //     end: `+=${innerHeight * 1.3}`,
    //     scrub: 3,
    //   },
    // });

    // gsap.to("#zoom-in svg", {
    //   scale: 200,
    //   stagger: 0.25,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: "#zoom-in",
    //     pin: true,
    //     end: `+=${innerHeight * 1.3}`,
    //     scrub: 3,
    //   },
    //   opacity: 0,
    // });

  }, []);

  return (
    <div className="bg-black">
      <section id="zoom-in" ref={containerRef} style={{ overflow: "hidden", width:"100%",height: "100vh" }}>
      <Spline scene="https://prod.spline.design/d0wpBGqr0MU4-o2B/scene.splinecode" />
      </section>
    </div>
  );
};

export default ScrollAnimations;
