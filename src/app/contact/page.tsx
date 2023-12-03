"use client";
import React from "react";
import Link from "next/link";
import styles from "./contact.module.css";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="pt-20 bg-black w-screen h-screen">
      <Link className=""
        href="https://www.linkedin.com/in/worawiboon-sathone"
        target="_blank"
      >
        Linkedin
      </Link>

      <Link
        className=""
        href="https://www.instagram.com/pecwrs/"
        target="_blank"
      >
        Instagram
      </Link>

      <Link href="mailto:worasathone@gmail.com" className="">
        DROP ME AN EMAIL
      </Link>
    </div>
  );
}
