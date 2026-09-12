import React from "react";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={closeMenu}>Shruti<span>.</span></a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {["home", "about", "skills", "projects", "experience", "certifications", "achievements", "contact"].map((id) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>{id}</a>
        ))}
        <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">
          Resume <ArrowUpRight size={15} />
        </a>
      </nav>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export default Navbar;
