import React from "react";
import SectionLabel from "./SectionLabel";
import { experience } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="taupe-section">
      <div className="section-heading"><SectionLabel light>EXPERIENCE</SectionLabel><h2 className="display light-text">Where I've grown.</h2></div>
      <div className="timeline">
        {experience.map((item, i) => (
          <article className="timeline-item" key={item.role}>
            <div className="timeline-dot"/>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <span className="exp-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="tag">{item.tag}</span>
              <h3>{item.role}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
