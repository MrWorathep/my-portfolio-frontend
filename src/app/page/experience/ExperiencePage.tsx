"use client";
import Image from "next/image";
import { Experience } from "@/services/experienceService";
import { motion } from "framer-motion";
import Card from "@/app/components/Card";

type Props = {
  experiences: Experience[];
};

const ExperiencePage: React.FC<Props> = ({ experiences }) => {
  return (
    <div className="p-4 md:p-10 text-gray-900 dark:text-gray-100">
      <h1 className="mb-8 text-2xl md:text-4xl font-extrabold text-center">
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
              <Card>
                <div className="max-w-[500px]">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
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

                  <div className="text-base leading-7 space-y-2 text-left">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        📌 Position:
                      </span>
                      <span>
                        {exp.position} @ {exp.organization}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        📅 Year:
                      </span>
                      <span>{exp.year}</span>
                    </div>

                    <div className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">📝 Description:</span>
                      <ul className="list-disc pl-5 mt-1">
                        {exp.description.map((des, i) => (
                          <li key={i}>{des}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
