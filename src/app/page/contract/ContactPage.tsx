"use client";
import React from "react";
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <motion.div
      className="p-2 md:p-6 text-white bg-[#171c28]"
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="mt-3 mb-3 text-4xl font-bold">Contact</h1>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="#4ade80"
          >
            <path d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v.638l-9.72 6.48a.75.75 0 01-.81 0L2.25 7.388V6.75z" />
            <path d="M2.25 8.848v8.402a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V8.848l-8.675 5.786a2.25 2.25 0 01-2.45 0L2.25 8.848z" />
          </svg>
          <span className="text-green-300">worathep123@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="#facc15"
          >
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55.57 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.21 1.11l-2.24 2.23z" />
          </svg>
          <span className="text-yellow-300">+66 972912365</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            role="img"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <title>GitHub</title>
            <path d="M12 0C5.371 0 0 5.371 0 12a12.01 12.01 0 008.207 11.385c.6.111.793-.261.793-.582 0-.288-.01-1.048-.016-2.056-3.338.726-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.305.762-1.605-2.665-.303-5.467-1.333-5.467-5.933 0-1.31.469-2.381 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.018.005 2.043.137 3.002.403 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.874.119 3.176.77.839 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.921.43.371.814 1.103.814 2.222 0 1.604-.015 2.898-.015 3.293 0 .323.192.697.8.58A12.012 12.012 0 0024 12c0-6.629-5.371-12-12-12z" />
          </svg>
          <a
            href="https://github.com/MrWorathep"
            className="hover:underline transition hover:text-blue-300 text-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/MrWorathep
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactPage;
