import React from "react";

function AboutPage() {
  return (
    <div>
      <div className="p-2 md:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <h1 className="mt-3 mb-6 text-4xl font-bold">About me</h1>
            <p className="text-3xl leading-12">
              Hi! My name is Worathep Thimasarn, but you can call me Tar.
              I&apos;m 26 years old and graduated from the School of Computer
              Science at Bangkok University. I&apos;ve always had a passion for
              technology, especially frontend development. I enjoy building
              user-friendly, responsive interfaces that bring ideas to life.
              I&apos;m eager to keep learning and improving every day.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="mt-3 mb-6 text-4xl font-bold">Hobbies</h1>
            <div className="text-3xl leading-12">
              <p>- Playing computer games</p>
              <p>- Watching movies and cartoons</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
