import React from "react";
function SectionLabel({ children, light = false }) {
  return <div className={`section-label ${light ? "light" : ""}`}>✦ {children}</div>;
}

export default SectionLabel;
