"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function EducationPage() {
  return (
    <motion.div
      className="p-2 md:p-6"
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="mt-3 mb-3 text-4xl font-bold">Education</h1>
      <div className="flex flex-wrap gap-2">
        <div className="flex flex-col flex-1 min-w-[300px] p-3 items-start">
          <div className="max-w-[200px] max-h-[200px]">
            <Image
              src="/images/Educations/BU.jpg"
              alt="Worathep Thimasarn"
              width={500}
              height={500}
              className="object-contain w-full h-full rounded-xl"
              priority
            />
          </div>
          <div className="mt-2 text-left">
            <div className="font-semibold">
              Bachelor of Science in Computer Science
            </div>
            <div>Department of Information Technology and Innovation</div>
            <div>
              Information Technology and Innovation Department Computer Science
            </div>
            <div>(2019 - 2023)</div>
            <div>GPA : 2.88</div>
          </div>
        </div>

        <div className="flex flex-col flex-1 min-w-[300px] p-3 items-start">
          <div className="max-w-[200px] max-h-[200px]">
            <Image
              src="/images/Educations/WarinChamrap.jpg"
              alt="Worathep Thimasarn"
              width={500}
              height={500}
              className="object-contain w-full h-full rounded-xl"
              priority
            />
          </div>
          <div className="mt-2 text-left">
            <div className="font-semibold">
              Non-Formal Education (NFE) – Secondary Education
            </div>
            <div>Warin Chamrap District NFE Center</div>
            <div>(2017 - 2019)</div>
            <div>GPA: 2.05</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EducationPage;
