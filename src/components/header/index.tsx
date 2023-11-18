"use client"

import React, {useState, useEffect} from 'react'
import styles from './style.module.scss'
import { usePathname } from 'next/navigation';

export default function navbar() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])

  return (
    <>
      <div className={styles.header}>
        <div className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      </div>
    </>
  )
}
