"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function EducationPage() {
  return (
    <div className="p-4 md:p-10 max-w-[1440px] mx-auto">
      <h1 className="mb-8 text-4xl font-extrabold text-white text-center">
        🎓 Education
      </h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {/* Bangkok University */}
        <motion.div
          className="flex-1 min-w-[300px]"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="p-6 border border-gray-600 rounded-2xl shadow-xl bg-[#222a44] hover:scale-[1.02] transition-transform duration-300 h-full">
            <div className="w-full flex justify-center mb-4">
              <div className="w-[200px] h-[200px]">
                <Image
                  src="/images/Educations/BU.jpg"
                  alt="Bangkok University"
                  width={500}
                  height={500}
                  className="object-contain w-full h-full rounded-xl"
                  priority
                />
              </div>
            </div>
            <div className="text-gray-200 space-y-1 text-base leading-7 text-center">
              <div className="font-semibold text-lg text-white">
                Bachelor of Science in Computer Science
              </div>
              <div>Department of Information Technology and Innovation</div>
              <div>Computer Science</div>
              <div>(2019 - 2023)</div>
              <div>GPA: 2.88</div>
            </div>
          </div>
        </motion.div>

        {/* Warin Chamrap NFE */}
        <motion.div
          className="flex-1 min-w-[300px]"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="p-6 border border-gray-600 rounded-2xl shadow-xl bg-[#222a44] hover:scale-[1.02] transition-transform duration-300 h-full">
            <div className="w-full flex justify-center mb-4">
              <div className="w-[200px] h-[200px]">
                <Image
                  src="/images/Educations/WarinChamrap.jpg"
                  alt="Warin Chamrap NFE"
                  width={500}
                  height={500}
                  className="object-contain w-full h-full rounded-xl"
                  priority
                  loading="eager"
                />
              </div>
            </div>
            <div className="text-gray-200 space-y-1 text-base leading-7 text-center">
              <div className="font-semibold text-lg text-white">
                Non-Formal Education – Secondary Level
              </div>
              <div>Warin Chamrap District NFE Center</div>
              <div>(2017 - 2019)</div>
              <div>GPA: 2.05</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default EducationPage;
