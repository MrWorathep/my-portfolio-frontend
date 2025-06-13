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
  SiGithub,
} from "react-icons/si";

function SkillsPage() {
  return (
    <main className="p-2 md:p-6">
      <div className="flex flex-col gap-4 flex-1 mx-auto">
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <div className="text-2xl mb-2 font-semibold">💻 Hard Skills :</div>
        <div className="text-xl mb-2">Programming Languages</div>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 min-w-[200px]">
            <SiJavascript className="w-6 h-6 text-yellow-400" />
            <span>JavaScript</span>
          </div>
          <div className="bg-white/20 rounded-xl flex-1 h-5 max-w-[500px] min-w-[200px]">
            <div className="w-[85%] bg-cyan-400/80 h-full rounded-xl"></div>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 min-w-[200px]">
            <SiTypescript className="w-6 h-6 text-blue-600" />
            <span>TypeScript</span>
          </div>
          <div className="bg-white/20 rounded-xl flex-1 h-5 max-w-[500px] min-w-[200px]">
            <div className="w-[75%] bg-cyan-400/80 h-full rounded-xl"></div>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 min-w-[200px]">
            <SiPython className="w-6 h-6 text-yellow-600" />
            <span>Python</span>
          </div>
          <div className="bg-white/20 rounded-xl flex-1 h-5 max-w-[500px] min-w-[200px]">
            <div className="w-[50%] bg-cyan-400/80 h-full rounded-xl"></div>
          </div>
        </div>

        <div className="text-xl mb-2">Frontend Development</div>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1 min-w-[200px]">
            <SiReact className="w-6 h-6 text-cyan-400" />
            <SiNextdotjs className="w-6 h-6 text-white" />
            <span className="ml-2">React.js (Next.js)</span>
          </div>
          <div className="bg-white/20 rounded-xl flex-1 h-5 max-w-[500px] min-w-[200px]">
            <div className="w-[80%] bg-cyan-400/80 h-full rounded-xl"></div>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 min-w-[200px]">
            <SiHtml5 className="w-6 h-6 text-orange-500" />
            <span>HTML</span>
          </div>
          <div className="bg-white/20 rounded-xl flex-1 h-5 max-w-[500px] min-w-[200px]">
            <div className="w-[90%] bg-cyan-400/80 h-full rounded-xl"></div>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 min-w-[200px]">
            <SiCss3 className="w-6 h-6 text-blue-500" />
            <span>CSS</span>
          </div>
          <div className="bg-white/20 rounded-xl flex-1 h-5 max-w-[500px] min-w-[200px]">
            <div className="w-[75%] bg-cyan-400/80 h-full rounded-xl"></div>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 min-w-[200px]">
            <SiTailwindcss className="w-6 h-6 text-sky-400" />
            <span>Tailwind CSS</span>
          </div>
          <div className="bg-white/20 rounded-xl flex-1 h-5 max-w-[500px] min-w-[200px]">
            <div className="w-[85%] bg-cyan-400/80 h-full rounded-xl"></div>
          </div>
        </div>
        <div className="text-xl mb-2">Backend Development</div>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 min-w-[200px]">
            <SiNodedotjs className="w-6 h-6 text-green-600" />
            <span>Node.js</span>
          </div>
          <div className="bg-white/20 rounded-xl flex-1 h-5 max-w-[500px] min-w-[200px]">
            <div className="w-[50%] bg-cyan-400/80 h-full rounded-xl"></div>
          </div>
        </div>
        <div className="text-xl mb-2">Database</div>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 min-w-[200px]">
            <SiMysql className="w-6 h-6 text-sky-700" />
            <span>MySQL</span>
          </div>
          <div className="bg-white/20 rounded-xl flex-1 h-5 max-w-[500px] min-w-[200px]">
            <div className="w-[40%] bg-cyan-400/80 h-full rounded-xl"></div>
          </div>
        </div>
        <div className="text-xl mb-2">Tools</div>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 min-w-[200px]">
            <SiGithub className="w-6 h-6 text-white" />
            <span>Git / GitHub</span>
          </div>
          <div className="bg-white/20 rounded-xl flex-1 h-5 max-w-[500px] min-w-[200px]">
            <div className="w-[70%] bg-cyan-400/80 h-full rounded-xl"></div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-2 flex-wrap justify-between mt-4">
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
      </div>
    </main>
  );
}

export default SkillsPage;
