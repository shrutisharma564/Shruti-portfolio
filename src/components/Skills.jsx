import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { skillGroups } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="cream-section">
      <div className="section-heading centered"><SectionLabel>TECHNICAL SKILLS</SectionLabel><h2 className="display">What I work with.</h2><p>Technologies and computer-science foundations reflected in my current projects and experience.</p></div>
      <div className="skills-grid">
        {skillGroups.map(({ icon: Icon, title, items }, i) => (
          <motion.div
            className={`skill-card ${i % 2 === 1 ? "stagger" : ""}`}
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="skill-card-top">
              <div className="skill-icon"><Icon size={20}/></div>
              <span className="skill-index">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3>{title}</h3>
            <div className="chips">{items.map(item => <span key={item}>{item}</span>)}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
