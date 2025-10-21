import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGithub,
  SiFigma,
  SiAdobephotoshop,
  SiWordpress,
  SiElementor,
  SiJoomla,
  SiPython,
  SiGit,
  SiSupabase,
  SiNodedotjs,
} from "react-icons/si";

const techLogos = [
  { node: <SiHtml5 />, title: "HTML" },
  { node: <SiCss3 />, title: "CSS" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiPython />, title: "Python" },
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiPrisma />, title: "Prisma" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiMongodb />, title: "MongoDB" },
  { node: <SiSupabase />, title: "Supabase" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiGit />, title: "Git" },
  { node: <SiGithub />, title: "GitHub" },
  { node: <SiWordpress />, title: "WordPress" },
  { node: <SiElementor />, title: "Elementor" },
  { node: <SiJoomla />, title: "Joomla" },
  { node: <SiFigma />, title: "Figma" },
  { node: <SiAdobephotoshop />, title: "Adobe Photoshop" },
];

// Alternative with image sources
// const imageLogos = [
//   {
//     src: "/logos/company1.png",
//     alt: "Company 1",
//     href: "https://company1.com",
//   },
//   {
//     src: "/logos/company2.png",
//     alt: "Company 2",
//     href: "https://company2.com",
//   },
//   {
//     src: "/logos/company3.png",
//     alt: "Company 3",
//     href: "https://company3.com",
//   },
// ];

const StacksLogo = () => {
  return (
    <div style={{ height: "200px", position: "relative", overflow: "hidden" }}>
      <LogoLoop
        logos={techLogos}
        speed={60}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#0d0011"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default StacksLogo;
