import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { certifications } from "../data/certifications";

function Certifications() {
  return (
    <section id="certifications" className="cream-section">
      <div className="section-heading centered"><SectionLabel>CERTIFICATIONS</SectionLabel><h2 className="display">Learning beyond the classroom.</h2><p>Certificates listed in my resume, with the original certificate links attached.</p></div>
      <div className="cert-grid">
        {certifications.map((cert, i) => (
          <motion.article className="cert-card" key={cert.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
            <div className="cert-card-top">
              <span className="cert-badge"><Award size={16}/></span>
              <div className="cert-year">{cert.year}</div>
            </div>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <span className="cert-mark">✦</span>
            <a className="certificate-link" href={cert.link} target="_blank" rel="noreferrer">View Certificate <ExternalLink size={15}/></a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
