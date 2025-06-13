import React from "react";
import Image from "next/image";
function HomePage() {
  return (
    <main className="mt-7 p-2 md:p-6">
      <h1 className="text-6xl font-semibold mt-3 mb-3">
        Hello, I&apos;m Worathep
      </h1>
      <div className="flex flex-wrap md:flex-nowrap m-1 gap-2">
        <div className="text-3xl p-3 leading-12 flex-1 min-w-[300px]">
          a Software Engineer who builds websites tailored to real user needs. I
          focus on creating web experiences that are fast, responsive, and
          aligned with what users truly want.
        </div>
        <div className="flex justify-center items-center flex-1 min-w-[300px]">
          <div className="p-3 max-w-[400px] max-h-[400px] w-full">
            <Image
              src="/images/Worathep.png"
              alt="Worathep Thimasarn"
              width={500}
              height={500}
              className="object-contain h-full rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
