"use client"
import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import { motion } from 'framer-motion'
import { slideUp } from './anim'
import Image from 'next/image'
import portal from '../../gif/portal.gif'
import { maxHeaderSize } from 'http'

export default function Index() {
  const [dimension, setDimension] = useState({width:0, height:0})

  useEffect( () => {
    setDimension({width: window.innerWidth, height: window.innerHeight})
  }, [])

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
            <p className='h-screen'>  
              <Image
                src={portal}
                alt="Picture of the author"
                // width={maxHeaderSize}
                sizes='100vh'
                objectFit='cover'
              />
            </p>
            
            <svg>
            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
            </svg>
          </>
        } 
    </motion.div>
  )
}
