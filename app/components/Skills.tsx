import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDotnet,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiPostman,
  SiFigma,
  SiVercel,
  SiRedux,
  SiRadixui
} from "react-icons/si";

import { FaDatabase, FaGit } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";

const groups = [
  {
    title: "Languages",
    skills: [
     { name: "C#", icon: <SiDotnet /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <SiHtml5 /> },
       { name: "CSS", icon: <SiCss3 /> },
     
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "ASP.NET Core", icon: <SiDotnet /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Radix", icon: <SiRadixui /> },
      { name: "Bootstrap", icon: <SiBootstrap /> }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL Server", icon: <FaDatabase /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ]
  },
  {
    title: "Tools",
    skills: [
      
      { name: "GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: <DiVisualstudio /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Vercel", icon: <SiVercel /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-8 py-5">
      <h2 className="text-5xl md:text-6xl font-semibold mb-20">
        <span className="bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
          Skills & Technologies
        </span>
      </h2>

      <div className="space-y-20">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-cyan-400 uppercase tracking-widest text-sm mb-8">
              {group.title}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-4 p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400/50 hover:shadow-cyan-400/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-2xl text-cyan-400 group-hover:scale-110 transition">
                    {skill.icon}
                  </div>
                  <p className="text-gray-200 font-medium">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
