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
    <div className="grid grid-cols-2 gap-4 pt-4">
      <div className="work-content" data-aos="fade-up">
        <a href="#">
          <div className="w-full h-full bg-blue-600" data-aos="fade-up">
              <img src="" alt=""/>
          </div>
        </a>
      </div>
      <div className="work-content" data-aos="fade-up">
        <a href="#">
          <div className="w-full h-full bg-red-600" data-aos="fade-up">
            2
          </div>
        </a>
      </div>  
      <div className="work-content" data-aos="fade-up">
        <a href="#">
          <div className="w-full h-full bg-blue-600" data-aos="fade-up">
            2
          </div>
        </a>
      </div>
      <div className="work-content" data-aos="fade-up">
        <a href="#">
          <div className="w-full h-full bg-red-600" data-aos="fade-up">
            2
          </div>
        </a>
      </div>  
    </div>
  );
}

export default ContentHomePage;
