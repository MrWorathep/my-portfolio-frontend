import React from "react";
import { SiGithub, SiFacebook, SiGmail } from "react-icons/si";
import { FaFilePdf, FaMobileAlt } from "react-icons/fa";
import { useTheme } from "next-themes";
import classNames from "classnames";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  return (
    <footer
      className={classNames(
        "py-6 mt-12 border-t",
        theme === "light"
          ? "bg-neutral-200 text-gray-900 border-gray-300"
          : "bg-neutral-900 text-gray-300 border-neutral-800"
      )}
    >
      <div className="max-w-4xl mx-auto px-4 text-center text-sm sm:text-base">
        {/* Contact Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Contact
          </h2>
          <p className="flex justify-center items-center gap-2">
            <SiGmail className="text-blue-500 dark:text-blue-400" />
            <a
              href="mailto:worathep123@gmail.com"
              className="hover:underline hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 text-gray-700 dark:text-gray-300"
            >
              worathep.thim@gmail.com
            </a>
          </p>
          <p className="flex justify-center items-center gap-2 mt-2">
            <FaMobileAlt className="text-blue-500 dark:text-blue-400" />
            <span className="text-gray-700 dark:text-gray-300">
              +66 972912365
            </span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-4 text-gray-700 dark:text-gray-300">
          <a
            href="https://github.com/MrWorathep"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-400 flex items-center gap-2 transition duration-300"
          >
            <SiGithub className="text-xl" />
            GitHub
          </a>
          <a
            href="https://facebook.com/tartriss"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-400 flex items-center gap-2 transition duration-300"
          >
            <SiFacebook className="text-xl" />
            Facebook
          </a>
          <a
            href="files/Resume-Worathep.thim.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-400 flex items-center gap-2 transition duration-300"
          >
            <FaFilePdf className="text-xl" />
            Resume
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 Worathep Thimasarn. All rights reserved. Built with Next.js.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
