import React from "react";
import SectionLabel from "./SectionLabel";

function Education() {
  return (
    <section id="education" className="cream-section education">
      <SectionLabel>EDUCATION</SectionLabel>
      <div className="education-card">
        <div><span className="tag">2024 — 2028</span><h2>B.Tech · Computer Science & Engineering</h2><p>Graphic Era Hill University · Dehradun, India</p></div>
        <div className="cgpa"><span>DEGREE</span><strong>CSE</strong></div>
      </div>
      <div className="education-mini">
        <div><h4>Class XII</h4><span>2024</span></div>
        <div><h4>Class X</h4><span>2022</span></div>
      </div>
    </section>
  );
}

export default Education;
