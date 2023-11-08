"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { useRouter } from 'next/router'
import { IonIcon } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { TweenMax } from 'gsap';


const Navbar: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    const animateOpenNav = () => {
      tl.to("#nav-container", 0.2, { top:0,autoAlpha: 1, delay: 0.1 });
      tl.to(".site-logo", 0.2, { color: "#fff" }, "-=0.1");
    };

    const openNav = () => {
      animateOpenNav();
      const navBtn = document.getElementById("menu-toggle-btn");
      const navHeadBtn1 = document.getElementById("menu-btn1");
      const navHeadBtn2 = document.getElementById("menu-btn2");
      const navHeadBtn3 = document.getElementById("menu-btn3");
      if (navBtn) {
        navBtn.addEventListener("click", function (e) {
          e.preventDefault();
          navBtn?.classList.toggle("active");
          tl.reversed(!tl.reversed());
          if (navBtn.classList.value == "active") {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflow = "";
          }
        });
      }
      if (navHeadBtn1) {
        navHeadBtn1.addEventListener("click", function (e) {
          e.preventDefault();
          tl.reversed(!tl.reversed());
        });
      }
      if (navHeadBtn2) {
        navHeadBtn2.addEventListener("click", function (e) {
          e.preventDefault();
          tl.reversed(!tl.reversed());
        });
      }
      if (navHeadBtn3) {
        navHeadBtn3.addEventListener("click", function (e) {
          e.preventDefault();
          tl.reversed(!tl.reversed());
        });
      }

    };
    openNav();



    tl.from(".flex > div", 0.4, {
      opacity: 0,
      y: 10,
      stagger: {
        amount: 0.04,
      },
    });

    tl.to(
      ".nav-link > a",
      0.8,
      {
        top: 0,
        ease: "power2.inOut",
        stagger: {
          amount: 0.1,
        },
      },
      "-=0.4"
    );

    tl.from(
      ".nav-footer",
      0.3,
      {
        opacity: 0,
      },
      "-=0.5"
    ).reverse();
  }, []);

  return (
    <div>
        <div className="navbar">
          <div className="site-logo">
            <Link href="/">wora</Link>
          </div>
          <div className="menu-toggle">
            <div id="menu-toggle-btn">
              <span></span>
            </div>
          </div>
        </div>
        <div id="nav-container">
          <div className="nav text-center">
            <div className="col">
              <div className="nav-link">
                <Link href="/work" id="menu-btn1"> Work </Link>
                <div className="nav-item-wrapper"></div>
              </div>
              <div className="nav-link">
                <Link href="/about" id="menu-btn2">About</Link>
                <div className="nav-item-wrapper"></div>
              </div>
              <div className="nav-link">
                <Link href="/contact">
                  <div  id="menu-btn3">Contact</div>
                </Link>
                <div className="nav-item-wrapper"></div>
              </div>
            </div>
          </div>
          <br />
          <div className="nav-footer">
            <div className="links">
              <a href="#">Privacy</a>
              <a href="#">Cookie policy</a>
              <a href="#">Term & Conditions</a>
            </div>
            <div className="contact">
              <a href="#">worasathone@gmail.com</a>
            </div>
          </div>
        </div>
     
  




    </div>
  );
};

export default Navbar;
