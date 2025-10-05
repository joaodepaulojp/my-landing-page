"use client";

import StaggeredMenu from "@/components/StaggeredMenu";

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
const Menu = () => {
  return (
    <div
      style={{ height: "100vh", background: "#1a1a1a" }}
      className="relative overflow-hidden "
    >
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

export default Menu;
