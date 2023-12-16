import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link';

export default function index() {
  return (
    <div className={styles.footer}>
      <p>Coded by Worawiboon Sathone.</p>
      <p>© worawiboon 2023.</p>
    </div>
  )
}
