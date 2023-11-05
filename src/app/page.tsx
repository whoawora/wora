"use client";

import React, { useRef } from "react";
import ScrollAnimations from "./components/scrollanimations";
import ContentHomePage from "./components/content-homepage";
import Header from "./components/header";
import Navbar from "./components/navbar";


export default function Home() {

  return (
    <div>
      <Header />
      <ScrollAnimations />
      <ContentHomePage />
    </div>
  );
}
