"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <main className="mt-7 p-2 md:p-6">
      <h1 className="text-3xl md:text-6xl font-semibold mt-3 mb-3 text-gray-900 dark:text-gray-100">
        <motion.div
          className="inline-block origin-[70%_100%] pr-5"
          animate={{ rotate: [-5, 15, -5] }}
          transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
        >
          👋
        </motion.div>
        Hello, I&apos;m Worathep
      </h1>
      <div className="flex flex-wrap md:flex-nowrap m-1 gap-2">
        <motion.div
          className="text-xl md:text-3xl p-3 leading-12 flex-1 min-w-[300px] break-words text-gray-700 dark:text-gray-300"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          a Software Engineer who builds websites tailored to real user needs. I
          focus on creating web experiences that are fast, responsive, and
          aligned with what users truly want.
        </motion.div>
        <motion.div
          className="flex justify-center items-center flex-1 min-w-[300px]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-3 max-w-[400px] max-h-[400px] w-full">
            <Image
              src="/images/Worathep.png"
              alt="Worathep Thimasarn"
              width={500}
              height={500}
              className="object-contain h-full rounded-xl"
              priority
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Home;
