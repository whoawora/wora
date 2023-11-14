import React, { useEffect } from "react";
import gsap from "gsap";
// import SplitText from "gsap/SplitText";
import AOS from "aos";
import "aos/dist/aos.css";

function ContentHomePage() {
  useEffect(() => {
    // gsap.registerPlugin(SplitText)
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
       <div className="work-content" data-aos="fade-up">
        {/* <a href="#">
          <div className="w-full h-full bg-blue-600" data-aos="fade-up">
          </div>
        </a> */}
      </div>
    </div>
  );
}

export default ContentHomePage;
