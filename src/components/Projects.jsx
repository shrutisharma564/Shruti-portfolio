import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Code2, ChevronDown } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { projects } from "../data/projects";

function ProjectCard({ project, i }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      className={`project-card ${project.featured ? "featured" : ""}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ delay: i * 0.04 }}
    >
      <div className="project-number">
        {project.number}
        {project.featured && <span className="featured-badge">Featured</span>}
      </div>
      <div className="project-main">
        <div className="project-meta">{project.type}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="chips project-chips">{project.stack.map(s => <span key={s}>{s}</span>)}</div>

        {project.details && (
          <div className="project-details-wrap">
            <button className="details-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
              {project.detailsLabel || "Details"}
              <ChevronDown size={14} className={open ? "chev open" : "chev"} />
            </button>
            {open && (
              <ul className="project-details">
                {project.details.map((d) => <li key={d}>{d}</li>)}
              </ul>
            )}
          </div>
        )}
      </div>

      {project.github ? (
        <a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} GitHub`}>
          <Github size={18}/> <span>GitHub</span> <ArrowUpRight size={16}/>
        </a>
      ) : (
        <span className="project-link muted-link"><Code2 size={18}/> <span>Project details</span></span>
      )}
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="projects" className="pink-section projects-section">
      <div className="section-heading"><SectionLabel>SELECTED WORK</SectionLabel><h2 className="display">Things I've built.</h2><p>Projects directly reflected in my current resume, spanning software engineering, compiler design, data structures, Machine Learning and cybersecurity.</p></div>
      <div className="projects-list">
        {projects.map((project, i) => (
          <ProjectCard project={project} i={i} key={project.title} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
