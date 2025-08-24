import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { MarqueeRow } from "@/components/sections/SkillsMarqueeSection";
import { Footer } from '@/components/Footer';


import {
  FaHtml5, FaCss3, FaReact, FaNode, FaAngular, FaFigma, FaGitAlt, FaWindows, FaDocker, FaAws,
} from "react-icons/fa";
import {
  SiRedux, SiTypescript, SiExpress, SiNestjs, SiPrisma, SiJest, SiStyledcomponents, SiVite, SiNextdotjs, SiAxios, SiMongodb, SiMysql, SiTypeorm, SiReactquery,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { PiTerminalWindowFill } from "react-icons/pi";
import { VscTerminalUbuntu, VscTerminalLinux } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql, DiMsqlServer, DiRedis, DiVisualstudio } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import { FaPython } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProjectsCarousel } from '@/components/sections/ProjectsCarousel';

const skillsIcons = [
  { icon: FaHtml5, name: "HTML 5" },
  { icon: FaCss3, name: "CSS 3" },
  { icon: FaReact, name: "React.Js" },
  { icon: FaNode, name: "Node.Js" },
  { icon: FaAngular, name: "Angular" },
  { icon: FaFigma, name: "Figma" },
  { icon: FaGitAlt, name: "GIT" },
  { icon: FaWindows, name: "Windows" },
  { icon: FaDocker, name: "Docker" },
  { icon: SiRedux, name: "Redux" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiExpress, name: "Express" },
  { icon: SiNestjs, name: "Nest.Js" },
  { icon: SiPrisma, name: "Prisma" },
  { icon: SiJest, name: "Jest" },
  { icon: SiStyledcomponents, name: "Styledcomponents" },
  { icon: SiVite, name: "Vite" },
  { icon: SiNextdotjs, name: "Next.Js" },
  { icon: SiAxios, name: "Axios" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiTypeorm, name: "TypeORM" },
  { icon: SiReactquery, name: "ReactQuery" },
  { icon: IoLogoJavascript, name: "JavaScript" },
  { icon: PiTerminalWindowFill, name: "Windows Terminal" },
  { icon: VscTerminalUbuntu, name: "Terminal Ubuntu" },
  { icon: VscTerminalLinux, name: "Linux Terminal" },
  { icon: RiTailwindCssFill, name: "TailWindCss" },
  { icon: DiPostgresql, name: "PostgresSQL" },
  { icon: DiMsqlServer, name: "SQL Server" },
  { icon: DiRedis, name: "Redis" },
  { icon: BsFiletypeSql, name: "SQL" },
  { icon: FaPython, name: "Python" },
  { icon: TbBrandCSharp, name: "C#" },
  { icon: FaAws, name: "AWS" },
  { icon: DiVisualstudio, name: "Visual Studio Code" },
];

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <MarqueeRow icons={skillsIcons} direction="left" speed={80} gapPx={30} />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsCarousel />
            <EducationSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
