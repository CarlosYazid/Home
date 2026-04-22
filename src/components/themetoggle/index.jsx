import React from "react";
import { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const Themetoggle = () => {
  // Default to "dark" if nothing stored yet (avoids data-theme="null")
  const [theme, settheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  const themetoggle = () => {
    settheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
