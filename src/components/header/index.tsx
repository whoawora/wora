"use client";

import styles from "./style.module.scss";
import React, { useState, useEffect } from "react";
import Nav from "./nav/index";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])
  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div onClick={() => {setIsActive(!isActive);}} className={styles.button}>
            <div className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
