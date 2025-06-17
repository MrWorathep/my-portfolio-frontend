"use client";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiGithub,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = {
  programming: [
    {
      icon: <SiJavascript className="w-6 h-6 text-yellow-400" />,
      label: "JavaScript",
      level: "85%",
    },
    {
      icon: <SiTypescript className="w-6 h-6 text-blue-600" />,
      label: "TypeScript",
      level: "75%",
    },
    {
      icon: <SiPython className="w-6 h-6 text-yellow-600" />,
      label: "Python",
      level: "50%",
    },
  ],
  frontend: [
    {
      icon: (
        <>
          <SiReact className="w-6 h-6 text-cyan-400" />
          <SiNextdotjs className="w-6 h-6 text-white" />
        </>
      ),
      label: "React.js (Next.js)",
      level: "80%",
    },
    {
      icon: <SiHtml5 className="w-6 h-6 text-orange-500" />,
      label: "HTML",
      level: "90%",
    },
    {
      icon: <SiCss3 className="w-6 h-6 text-blue-500" />,
      label: "CSS",
      level: "75%",
    },
    {
      icon: <SiTailwindcss className="w-6 h-6 text-sky-400" />,
      label: "Tailwind CSS",
      level: "85%",
    },
  ],
  backend: [
    {
      icon: <SiNodedotjs className="w-6 h-6 text-green-600" />,
      label: "Node.js",
      level: "50%",
    },
  ],
  database: [
    {
      icon: <SiMysql className="w-6 h-6 text-sky-700" />,
      label: "MySQL",
      level: "40%",
    },
    {
      icon: <SiMongodb className="w-6 h-6 text-green-500" />,
      label: "MongoDB",
      level: "50%",
    },
  ],
  tools: [
    {
      icon: <SiGithub className="w-6 h-6 text-white" />,
      label: "Git / GitHub",
      level: "70%",
    },
  ],
};

const SkillsPage: React.FC = () => {
  return (
    <main className="p-4 md:p-10 max-w-5xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-8">
        🛠 Skills
      </h1>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="bg-[#222a44] rounded-2xl border border-gray-600 shadow-xl p-8 hover:scale-[1.02] transition-transform duration-300">
          {Object.entries(skills).map(([section, skillList], sectionIdx) => (
            <section key={sectionIdx} className="mb-10 last:mb-0">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 capitalize">
                {section}
              </h2>

              <div className="flex flex-col gap-3 w-full">
                {skillList.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2 min-w-[200px]">
                      {skill.icon}
                      <span className="text-white">{skill.label}</span>
                    </div>
                    <div className="bg-white/20 rounded-xl flex-grow h-5 min-w-[200px]">
                      <div
                        className="h-full rounded-xl bg-cyan-400/80 transition-all duration-500"
                        style={{ width: skill.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Soft Skills, Languages, Software Tools */}
          <section className="flex flex-wrap gap-8">
            <div className="flex-1 min-w-[250px] bg-[#1f2640] p-6 rounded-xl border border-gray-600 text-white">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                🤝 Soft Skills
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Teamwork and collaboration</li>
                <li>Ability to work under pressure</li>
                <li>Problem-solving mindset</li>
                <li>Willingness to learn new technologies</li>
              </ul>
            </div>

            <div className="flex-1 min-w-[250px] bg-[#1f2640] p-6 rounded-xl border border-gray-600 text-white">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                🌐 Languages
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Thai : Native (fluent in both spoken and written
                  communication)
                </li>
                <li>
                  English : Basic (able to read technical documents with limited
                  understanding)
                </li>
              </ul>
            </div>

            <div className="flex-1 min-w-[250px] bg-[#1f2640] p-6 rounded-xl border border-gray-600 text-white">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                🧰 Software Tools
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>IDEs: Visual Studio Code</li>
                <li>Communication: Discord, Microsoft Teams, Zoom</li>
              </ul>
            </div>
          </section>
        </div>
      </motion.div>
    </main>
  );
};

export default SkillsPage;
