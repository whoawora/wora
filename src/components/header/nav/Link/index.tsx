import React, {ReactNode} from 'react'
import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';

interface IndexProps {
    children?: ReactNode;
    data: {
        index: number;
        title: string;
        href: string;
    };
    isActive: boolean;
    setSelectedIndicator: (value: any) => void; // กำหนดชนิดของฟังก์ชัน setSelectedIndicator ตามที่เหมาะสม
  }

export default function Index({data, isActive, setSelectedIndicator}:IndexProps) {
    const { title, href, index} = data;
  return (
    <motion.div className={styles.link} onMouseEnter={() => {setSelectedIndicator(href)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
        <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={styles.indicator}></motion.div>
        <Link href={href}>{title}</Link>
      </motion.div>
  )
}
