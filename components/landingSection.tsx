"use client";

import StaggeredMenu from "@/components/StaggeredMenu";
import DarkVeil from "./DarkVeil";
import OpacityMenu from "./opacityMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/" },
  { label: "Services", ariaLabel: "View our services", link: "/" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/" },
];

const socialItems = [
  { label: "Site", link: "https://joaodepaulo.site" },
  { label: "GitHub", link: "https://github.com/joaodepaulojp" },
  { label: "LinkedIn", link: "https://linkedin.com/in/joao-depaulo" },
];

const LandingSection = () => {
  return (
    <div
      style={{ height: "100vh", background: "#1a1a1a" }}
      className="relative overflow-hidden flex flex-col items-center justify-center"
    >
      <OpacityMenu />
      <h1 className="absolute inset-0 flex flex-col items-center justify-center lg:text-5xl font-semibold text-2xl ">
        Olá, eu sou o João de Paulo!
        <span className="lg:text-xl lg:mt-4 block mt-1 text-sm">
          Clique no botão para visualizar meu curriculo
        </span>
      </h1>

      <a
        href="/curriculum-joaodepaulo.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="top-[60%] left-1/2 -translate-x-1/2 absolute inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Download CV
        </span>
      </a>

      <DarkVeil />
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        logoUrl="/path-to-your-logo.svg"
        accentColor="#5227FF"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
        isFixed={true}
      />
    </div>
  );
};

export default LandingSection;
