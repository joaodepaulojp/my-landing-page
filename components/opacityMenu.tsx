"use client";

import { useEffect, useState } from "react";

export default function OpacityMenu() {
  const [opacity, setOpacity] = useState(1);

  // ANIMAÇÃO BARRA DE MENU
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200;
      const opacity = Math.max(1 - scrollY / maxScroll, 0);
      setOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="absolute top-0 w-full h-24 bg-[#000]"
      style={{ opacity }}
    ></div>
  );
}
