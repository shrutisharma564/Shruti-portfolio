import React from "react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { GITHUB, LINKEDIN, EMAIL } from "../data/site";

function Contact() {
  return (
    <section id="contact" className="taupe-section contact-section">
      <div className="contact-inner">
        <div>
          <SectionLabel light>LET'S CONNECT</SectionLabel>
          <h2 className="display light-text">Let's build something meaningful.</h2>
          <p className="muted-light">I'm open to software development internships, collaborations and interesting technical projects.</p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${EMAIL}`}><Mail size={19}/> {EMAIL}</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={19}/> LinkedIn <ArrowUpRight size={16}/></a>
          <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={19}/> GitHub <ArrowUpRight size={16}/></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
