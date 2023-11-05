import React from "react";
import Spline from "@splinetool/react-spline";

function Header() {
  return (
    <div>
      <div className="container">
        <div className="header relative w-full h-full bg-black">
          <h2 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl  m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 align-middle text-center absolute">
            WORAWIBOON SATHONE <br />
            UX/UI DESIGNER
          </h2>
          <Spline scene="https://prod.spline.design/9Hd4D-nuK1akLPM4/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}

export default Header;
