import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link';

export default function index() {
  return (
    <div className={styles.footer}>
        <Link href="https://www.instagram.com/pecwrs/" target="_blank">Instagram</Link>
        <Link href="https://www.linkedin.com/in/worawiboon-sathone" target="_blank">LinkedIn</Link>
        <Link href="mailto:worasathone@gmail.com">Gmail</Link>
    </div>
  )
}
