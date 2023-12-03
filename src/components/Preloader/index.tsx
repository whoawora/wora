"use client"
import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import { motion } from 'framer-motion'
import { slideUp, opacity } from './anim'
import Image from 'next/image'
import portal from '../../gif/portal.gif'
import { maxHeaderSize } from 'http'

export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({width:0, height:0})
  const words = ["🌼", "🪷", "🌲", "🌸", "🌳", "🎍","🪻","🍁"]

  useEffect( () => {
    setDimension({width: window.innerWidth, height: window.innerHeight})
  }, [])
  useEffect( () => {
    if(index == words.length - 1) return;
    setTimeout( () => {
      setIndex(index + 1);
    }, index == 0 ? 1000 :150)
  }, [index])

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

  const curve = {
    initial: {
        d: initialPath,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        d: targetPath,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
    }
}

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
        {
          dimension.height > 0 && <>
            <motion.p variants={opacity} initial="initial" animate="enter">{words[index]}</motion.p>
            <svg>
            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
            </svg>
          </>
        } 
    </motion.div>
  )
}
