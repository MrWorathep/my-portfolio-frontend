"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// ถ้าไม่มี props ก็ลบ Props ออกไปได้
const Home: React.FC = () => {
  return (
    <main className="mt-7 p-2 md:p-6 max-w-[1440px] mx-auto">
      <h1 className="text-6xl font-semibold mt-3 mb-3 text-white">
        Hello, I&apos;m Worathep
      </h1>
      <div className="flex flex-wrap md:flex-nowrap m-1 gap-2">
        <motion.div
          className="text-3xl p-3 leading-12 flex-1 min-w-[300px] text-gray-200"
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
