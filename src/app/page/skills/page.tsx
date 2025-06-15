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
      level: "60%",
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

function SkillsPage() {
  return (
    <main className="p-2 md:p-6">
      <motion.div
        className="flex flex-col gap-4 flex-1 mx-auto"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <div className="text-2xl font-semibold mb-2">💻 Hard Skills :</div>

        {Object.entries(skills).map(([section, skillList], sectionIdx) => (
          <div key={sectionIdx}>
            <div className="text-xl mb-2 capitalize">
              {section.replace(/([a-z])([A-Z])/g, "$1 $2")}
            </div>
            {skillList.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-4 flex-wrap mb-2">
                <div className="flex items-center gap-2 min-w-[200px]">
                  {skill.icon}
                  <span>{skill.label}</span>
                </div>
                <div className="bg-white/20 rounded-xl flex-1 h-5 max-w-[500px] min-w-[200px]">
                  <div
                    className="h-full rounded-xl bg-cyan-400/80"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
      <motion.div
        className="w-full flex gap-2 flex-wrap justify-between mt-4"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-3">
          <div className="text-2xl mb-2 font-semibold">🤝 Soft Skills :</div>
          <div className="flex flex-col gap-2">
            <span>- Teamwork and collaboration</span>
            <span>- Ability to work under pressure</span>
            <span>- Problem-solving mindset</span>
            <span>- Willingness to learn new technologies</span>
          </div>
        </div>
        <div className="p-3">
          <div className="text-2xl mb-2 font-semibold">🌐 Languages :</div>
          <div className="flex flex-col gap-2">
            <span>
              Thai : Native (fluent in both spoken and written communication)
            </span>
            <span>
              English : Basic (able to read technical documents with limited
              understanding)
            </span>
          </div>
        </div>
        <div className="p-3">
          <div className="text-2xl mb-2 font-semibold">🧰 Software Tools :</div>
          <div className="flex flex-col gap-2">
            <span>IDEs: Visual Studio Code</span>
            <span>Communication: Discord, Microsoft Teams, Zoom</span>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default SkillsPage;
