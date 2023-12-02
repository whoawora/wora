"use client";

import React, { useEffect, useState } from "react";
import Preloader from '../components/Preloader'
import { AnimatePresence } from "framer-motion";
import Homepage from '../components/homepage';


export default function Home() {
  const[isLoading, setIsLoading] = useState(true)

  useEffect( () => {
    setTimeout( () => {
       setIsLoading(false);
       document.body.style.cursor = 'default'
       window.scrollTo(0,0);
    }, 2000)
  },[])

  return (
    <div className="bg-black h-full">
      <AnimatePresence mode="wait">
      { isLoading && <Preloader />}
      </AnimatePresence>
      <Homepage />
      {/* <ScrollAnimations /> */}
    </div>
  );
}
