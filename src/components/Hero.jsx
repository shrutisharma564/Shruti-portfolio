import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { GITHUB, LINKEDIN, EMAIL } from "../data/site";

function Hero() {
  return (
    <section id="home" className="hero pink-section">
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <SectionLabel>SOFTWARE DEVELOPER</SectionLabel>
        <p className="eyebrow">Hello, I'm</p>
        <h1>Shruti Sharma</h1>
        <h2>Software Developer <span>·</span> Full-Stack Developer</h2>
        <p className="hero-text">
          Computer Science Engineering student passionate about building practical software applications,
          solving problems through Data Structures & Algorithms, and creating clean, user-focused digital experiences.
        </p>
        <div className="hero-actions">
          <a className="btn dark-btn" href="#projects">View My Work <ArrowUpRight size={17} /></a>
          <a
  className="btn outline-btn"
  href="/resume.pdf"
  download="Shruti_Sharma_Resume.pdf"
>
  Download Resume <Download size={16} />
</a>
        </div>
        <div className="social-row">
          <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
          <a href={`mailto:${EMAIL}`}><Mail size={18}/> Email</a>
        </div>
      </motion.div>
      <motion.div className="hero-card-wrap" initial={{ opacity: 0, scale: 0.92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.15 }}>
        <div className="profile-card">
          <div className="card-top"><span>SHRUTI / 2026</span><span className="status"><i /> OPEN TO SOFTWARE DEVELOPMENT INTERNSHIPS</span></div>
          <div className="profile-photo">
  <img src="/profile.jpeg" alt="Shruti Sharma" />
</div>
          <div className="profile-bottom"><div><strong>CS ENGINEERING</strong><small>Software · DSA · Full-Stack</small></div><div className="card-index">01 / 08</div></div>
        </div>
      </motion.div>
      <div className="scroll-hint"><ChevronDown size={15}/> SCROLL TO EXPLORE</div>
    </section>
  );
}

export default Hero;
