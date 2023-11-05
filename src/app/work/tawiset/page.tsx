"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, Power2 } from "gsap/all";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
type Props = {
  params: any;
};

export default function tawiset({ params }: Props) {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    const spline = document.querySelector("Spline");
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
        end: `+=${innerHeight * 1.3}`,
      },
    });

    gsap.from("#zoom-out", {
      scale: 50,
      stagger: 0.25,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#zoom-out",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3,
      },
    });

    gsap.to("#zoom-in", {
      scale: 100,
      stagger: 0.25,
      duration: 1,
      scrollTrigger: {
        trigger: "#zoom-in",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3,
      },
    });

    gsap.to("#triggered-element", {
      scrollTrigger: {
        trigger: "#trigger",
        start: "-100px 100px",
        pin: true,
        // markers: true,
        scrub: true,
      },
      opacity: 0,
    });

    gsap.to("#triggered-element1", {
      scrollTrigger: {
        trigger: "#trigger1",
        start: "-100px 100px",
        pin: true,
        // markers: true,
        scrub: true,
      },
      opacity: 0,
    });

    gsap.to("#triggered-element2", {
      scrollTrigger: {
        trigger: "#trigger2",
        start: "-100px 100px",
        pin: true,
        // markers: true,
        scrub: true,
      },
      opacity: 0,
    });

    gsap.to("#triggered-element3", {
      scrollTrigger: {
        trigger: "#trigger3",
        start: "-100px 100px",
        pin: true,
        // markers: true,
        scrub: true,
      },
      opacity: 0,
    });

    gsap.to("#triggered-element4", {
      scrollTrigger: {
        trigger: "#trigger4",
        start: "-100px 100px",
        pin: true,
        // markers: true,
        scrub: true,
      },
      opacity: 0,
    });

    gsap.to("#triggered-element5", {
      scrollTrigger: {
        trigger: "#trigger5",
        start: "-100px 100px",
        pin: true,
        // markers: true,
        scrub: true,
      },
      opacity: 0,
    });
  }, []);
  return (
    <div>
      <div className="">
        {/* <div className="bg-black"> */}
        <div className="bg-black">
          <section
            ref={containerRef}
            style={{ overflow: "hidden", width: "100%", height: "100vh" }}
          >
           <Spline scene="https://prod.spline.design/KAGLNgRaJREbxXqs/scene.splinecode" />
          </section>
        </div>
      
        {/* </div> */}

        <section className="bg-black">
          <div id="trigger">
            <div className="">
              <h2 id="triggered-element" className="text-info">
                โรคกล้ามเนื้ออ่อนแรงเป็นโรคที่มีจำนวนผู้ป่วยภายในประเทศไทยน้อยจึงมักถูกละเลย
              </h2>
            </div>
          </div>
        </section>

        {/* <div className="bg-black"></div> */}
        <section className="bg-black">
          <div id="trigger1">
            <div className="container-custom text-center">
              <h2 id="triggered-element1" className="text-info">
                เนื่องจากเป็นโรคที่ไม่ค่อยเป็นที่รู้จักหรือไม่มีผลกระทบต่อคนส่วนมาก
              </h2>
            </div>
          </div>
        </section>
        <section className="bg-black">
          <div id="trigger2">
            <div className="container-custom text-center">
              <h2 id="triggered-element2" className="text-info">
                ดังนั้นผมจึงอยากออกแบบและพัฒนาเว็บแอปพลิเคชันที่สร้างความตระหนัก
              </h2>
            </div>
          </div>
        </section>
        <section className="bg-black">
          <div id="trigger3">
            <div className="container-custom text-center">
              <h2 id="triggered-element3" className="text-info">
                และผลักดันการใช้ชีวิตประจำวันให้มีประสิทธิภาพกับผู้ป่วย
              </h2>
            </div>
          </div>
        </section>
        <section className="bg-black">
          <div id="trigger4">
            <div className="container-custom text-center">
              <h2 id="triggered-element4" className="text-info">
                ที่ได้รับผลกระทบจากโรคกล้ามเนื้ออ่อนแรง
              </h2>
            </div>
          </div>
        </section>
        <section className="bg-black">
          <div id="trigger5">
            <div className="container-custom text-center">
              <h2 id="triggered-element5" className="text-info">
                เพื่อที่จะช่วยลดผลกระทบต่อสถานะของผู้ป่วย ครอบครัวและสังคม
              </h2>
            </div>
          </div>
        </section>

        <section id="zoom-out">
          <h2 className="text-black text-8xl">Tawiset</h2>
        </section>

        <section></section>
        <section></section>
      </div>
    </div>
  );
}
