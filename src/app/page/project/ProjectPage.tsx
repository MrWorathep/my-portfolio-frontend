"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { Project } from "@/services/projectService";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Linkify from "linkify-react";
import Card from "@/app/components/card";

type ProjectPageProps = {
  projects: Project[];
};

const ProjectPage: React.FC<ProjectPageProps> = ({ projects }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<{ src: string }[]>([]);

  const openLightbox = (images: string[]) => {
    setLightboxImages(images.map((src) => ({ src })));
    setLightboxOpen(true);
  };

  if (!projects.length) {
    return <div className="text-white">ยังไม่มีโปรเจกต์</div>;
  }

  return (
    <div className="p-4 md:p-6 max-w-[1440px] mx-auto">
      <h1 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-8">
        🚀 Projects
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {projects
          .slice()
          .reverse()
          .map((project) => (
            <motion.div
              key={project._id}
              className="h-full"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Card>
                <div className="h-full flex flex-col">
                  <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
                    {project.projectName}
                  </h2>
                  <p className="text-lg font-semibold">
                    📄 รายละเอียดของโปรเจกต์ :
                  </p>
                  <p className="mb-4 whitespace-pre-line">
                    <Linkify
                      options={{
                        className:
                          "text-gray-400 hover:text-blue-400 duration-300 underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }}
                    >
                      {project.detail.split("\\n").join("\n")}
                    </Linkify>
                  </p>
                  {project.images.length > 0 && (
                    <div className="w-full mt-4">
                      <div className="w-full aspect-video relative rounded-xl overflow-hidden mb-4">
                        <Image
                          src={project.images[0]}
                          alt={project.projectName}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 600px"
                          loading="eager"
                          priority
                        />
                      </div>
                    </div>
                  )}
                  <div className="mt-6">
                    <p className="text-lg font-semibold mb-1">
                      🔧 รายละเอียดการพัฒนา
                    </p>
                    <div className="mb-2 flex flex-wrap">
                      <span className="font-semibold mr-2">บทบาทการทำงาน:</span>
                      <span>{project.role}</span>
                    </div>
                    <div className="flex flex-wrap">
                      <span className="font-semibold mr-2">
                        เครื่องมือและเทคโนโลยีที่ใช้:
                      </span>
                      <span className="whitespace-pre-line break-words">
                        {project.tools}
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto pt-6">
                    <div className="flex justify-center">
                      {!project.linkDemo ? (
                        <button
                          onClick={() => openLightbox(project.images)}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 cursor-pointer"
                        >
                          ดูรูปทั้งหมด ({project.images.length} รูป)
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            window.open(project.linkDemo, "_blank")
                          }
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                        >
                          <FaPlay />
                          <div>Live Demo</div>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxImages}
      />
    </div>
  );
};

export default ProjectPage;
