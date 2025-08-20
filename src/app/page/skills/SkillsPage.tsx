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
import Card from "@/app/components/Card";

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
          <SiNextdotjs className="w-6 h-6 text-gray-900 dark:text-gray-100" />
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
      icon: <SiGithub className="w-6 h-6 text-gray-900 dark:text-gray-100" />,
      label: "Git / GitHub",
      level: "70%",
    },
  ],
};

const SkillsPage: React.FC = () => {
  return (
    <main className="p-4 md:p-10 max-w-5xl mx-auto text-gray-900 dark:text-gray-100">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Card>
          {Object.entries(skills).map(([section, skillList], sectionIdx) => (
            <section key={sectionIdx} className="mb-10 last:mb-0">
              <h2 className="text-xl md:text-2xl font-bold mb-6 capitalize">
                {section}
              </h2>

              <div className="flex flex-col gap-3 w-full text-gray-700 dark:text-gray-300">
                {skillList.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2 min-w-[200px]">
                      {skill.icon}
                      <span>{skill.label}</span>
                    </div>
                    <div className="bg-black/20 dark:bg-white/20 rounded-xl flex-grow h-5 min-w-[200px]">
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
          <section className="flex flex-wrap gap-8 text-gray-700 dark:text-gray-300">
            <div className="flex-1 min-w-[250px] bg-light-background-soft-card dark:bg-dark-background-soft-card p-6 rounded-xl border border-gray-300 dark:border-gray-600">
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

            <div className="flex-1 min-w-[250px] bg-light-background-soft-card dark:bg-dark-background-soft-card p-6 rounded-xl border border-gray-300 dark:border-gray-600">
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

            <div className="flex-1 min-w-[250px] bg-light-background-soft-card dark:bg-dark-background-soft-card p-6 rounded-xl border border-gray-300 dark:border-gray-600">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                🧰 Software Tools
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>IDEs: Visual Studio Code</li>
                <li>Communication: Discord, Microsoft Teams, Zoom</li>
              </ul>
            </div>
          </section>
        </Card>
      </motion.div>
    </main>
  );
};

export default SkillsPage;
