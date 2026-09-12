import React from "react";
import { MapPin, GraduationCap, BriefcaseBusiness } from "lucide-react";
import SectionLabel from "./SectionLabel";

function About() {
  return (
    <section id="about" className="taupe-section">
      <div className="section-grid">
        <div><SectionLabel light>ABOUT ME</SectionLabel><h2 className="display light-text">Building with purpose.</h2></div>
        <div className="about-copy">
          <p className="large light-text">Computer Science Engineering student passionate about building practical software applications, solving problems through Data Structures & Algorithms, and creating clean, user-focused digital experiences.</p>
          <p className="muted-light">I enjoy working with Java, C++, Python and C, while strengthening Data Structures & Algorithms and core computer-science fundamentals. My projects span software engineering, compiler design, tournament systems, Machine Learning and cybersecurity.</p>
          <div className="quick-facts">
            <div><MapPin size={18}/><span>Dehradun, India</span></div>
            <div><GraduationCap size={18}/><span>B.Tech CSE · 2024–2028</span></div>
            <div><BriefcaseBusiness size={18}/><span>Open to Internships</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
