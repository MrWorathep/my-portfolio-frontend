"use client";

import Image from "next/image";
import { Experience } from "@/services/experienceService";

type Props = {
  experiences: Experience[];
};

export default function ExperienceList({ experiences }: Props) {
  return (
    <div>
      {experiences
        .slice()
        .reverse()
        .map((exp) => (
          <div
            className="flex flex-col gap-2 mt-4 justify-center"
            key={exp._id}
          >
            <h2 className="text-xl font-semibold">{exp.title}</h2>
            <div className="w-full max-w-[500px] aspect-video relative flex justify-center">
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-contain md:object-left rounded"
                sizes="(max-width: 768px) 100vw, 500px"
                loading="eager"
              />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="font-bold">Position :</div>
              <p>
                {exp.position} @ {exp.organization}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="font-bold">Year :</div>
              <p>{exp.year}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="font-bold">Description :</div>
              <ul>
                {exp.description.map((des, i) => (
                  <li key={i}>{des}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
}
