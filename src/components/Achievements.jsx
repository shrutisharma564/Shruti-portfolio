import React from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { stats, achievements } from "../data/achievements";
import { LEETCODE, GFG } from "../data/site";

function Achievements() {
  return (
    <section id="achievements" className="pink-section coding-section">
      <div className="coding-panel">
        <div><SectionLabel>SCHOLASTIC ACHIEVEMENTS</SectionLabel><h2 className="display">Proof of progress.</h2><p>Milestones that reflect consistent problem solving, academic performance and technical community involvement.</p></div>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
          ))}
        </div>
      </div>
      <div className="profile-buttons">
        <a href={LEETCODE} target="_blank" rel="noreferrer"><Code2 size={16}/> LeetCode Profile <ArrowUpRight size={14}/></a>
        <a href={GFG} target="_blank" rel="noreferrer"><Code2 size={16}/> GFG Profile <ArrowUpRight size={14}/></a>
      </div>
      <div className="achievement-list">
        {achievements.map((item, i) => <div key={i}><span>0{i + 1}</span><p>{item}</p></div>)}
      </div>
    </section>
  );
}

export default Achievements;
