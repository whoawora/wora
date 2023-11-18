"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

type Props = {};

gsap.registerPlugin(ScrollTrigger);

export default function AboutHome({}: Props) {
  const text =
    "Hello! My name is Petch. I graduated from Silpakorn University, Bacherlor of Information and Communication Technology in interactive applications. I am currently working as a back-end developer using the Golang language, but presently interested in working as a UX/UI designer. I have experience interning as a UX/UI designer. I have worked in UX/UI design and redesign, including Sitemap, User Journey, Mood board, and other related works. I am interested in design and problem solving because I believe that good design is not only artwork but rather a tool that helps user solve problems.";

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
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        pin: ".pin",
        start: "top center",
        end: "bottom 32%",
      },
      color: "#fff",
      duration: 5,
      stagger: 100,
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div>
      <div className="w-full h-full bg-black">
      <div className="spacing-small"></div>
      <div className="reveal">
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span className="reveal-text" key={index} ref={setlettersRef}>
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className="spacing"></div>
      </div>
    </div>
  );
}
