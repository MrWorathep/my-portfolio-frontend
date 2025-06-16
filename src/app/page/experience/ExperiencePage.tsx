"use client";
import Image from "next/image";
import { Experience } from "@/services/experienceService";
import { motion } from "framer-motion";

type Props = {
  experiences: Experience[];
};

const ExperiencePage: React.FC<Props> = ({ experiences }) => {
  return (
    <div className="p-4 md:p-10">
      <h1 className="mb-8 text-4xl font-extrabold text-white text-center">
        💼 Experience
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {experiences
          .slice()
          .reverse()
          .map((exp) => (
            <motion.div
              key={exp._id}
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="p-6 border border-gray-600 rounded-2xl shadow-xl bg-[#222a44] hover:scale-[1.02] transition-transform duration-300 h-full max-w-[500px]">
                <h2 className="text-2xl font-bold text-white mb-4 text-center">
                  {exp.title}
                </h2>

                <div className="w-full aspect-video relative mx-auto mb-4">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-contain rounded-xl"
                    sizes="(max-width: 768px) 100vw, 500px"
                    loading="eager"
                  />
                </div>

                <div className="text-gray-200 text-base leading-7 space-y-2 text-left">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="font-semibold text-white">
                      📌 Position:
                    </span>
                    <span>
                      {exp.position} @ {exp.organization}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="font-semibold text-white">📅 Year:</span>
                    <span>{exp.year}</span>
                  </div>

                  <div className="text-white">
                    <span className="font-semibold">📝 Description:</span>
                    <ul className="list-disc pl-5 mt-1">
                      {exp.description.map((des, i) => (
                        <li key={i}>{des}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
