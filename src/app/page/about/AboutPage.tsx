"use client";
import React from "react";
import { motion } from "framer-motion";
const AboutPage: React.FC = () => {
  return (
    <div className="p-4 md:p-10">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* About Me */}
        <div className="flex-1 p-6 border border-gray-600 rounded-2xl shadow-xl bg-[#222a44] hover:scale-[1.02] transition-transform duration-300">
          <h1 className="mb-5 text-4xl font-extrabold text-white">About Me</h1>
          <p className="text-gray-200">
            Hi! My name is
            <span className="font-semibold text-white">Worathep Thimasarn</span>
            , but you can call me Tar. I&apos;m 26 years old and graduated from
            the School of Computer Science at Bangkok University. I&apos;ve
            always had a passion for technology, especially frontend
            development. I enjoy building user-friendly, responsive interfaces
            that bring ideas to life. I&apos;m eager to keep learning and
            improving every day.
          </p>
        </div>

        {/* Hobbies */}
        <div className="flex-1 p-6 border border-gray-600 rounded-2xl shadow-xl bg-[#222a44] hover:scale-[1.02] transition-transform duration-300">
          <h1 className="mb-5 text-4xl font-extrabold text-white">Hobbies</h1>
          <ul className="list-disc pl-6 space-y-3 text-gray-200">
            <li>Playing computer games</li>
            <li>Watching movies and cartoons</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
