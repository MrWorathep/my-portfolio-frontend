import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { Project } from "@/services/projectService";

type ProjectPageProps = {
  projects: Project[];
};

export default function ProjectPage({ projects }: ProjectPageProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<{ src: string }[]>([]);

  const openLightbox = (images: string[]) => {
    setLightboxImages(images.map((src) => ({ src })));
    setLightboxOpen(true);
  };

  if (!projects.length) {
    return <div>ยังไม่มีโปรเจกต์</div>;
  }

  return (
    <div className="p-2 md:p-6">
      <h1 className="mt-3 mb-3 text-4xl font-bold">Project</h1>
      {projects
        .slice()
        .reverse()
        .map((project) => (
          <div
            key={project._id}
            className="mb-6 p-6 border border-gray-500 rounded-lg shadow-lg bg-[#222a44]"
          >
            <div className="flex justify-center">
              <div className="font-semibold text-2xl">
                {project.projectName}
              </div>
            </div>
            <div>
              <p className="text-xl mt-2 font-bold">รายละเอียดของโปรเจกต์ :</p>
              <p>{project.detail}</p>
            </div>
            {project.images.length > 0 && (
              <div className="w-full flex flex-col items-center gap-3 mt-3">
                <div className="w-full max-w-[500px] aspect-video relative">
                  <Image
                    src={project.images[0]}
                    alt={project.projectName}
                    fill
                    className="object-cover rounded duration-300"
                    sizes="(max-width: 768px) 100vw, 500px"
                    loading="eager"
                    priority
                  />
                </div>
                <button
                  onClick={() => openLightbox(project.images)}
                  className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600 duration-500 cursor-pointer"
                >
                  ดูรูปทั้งหมด ({project.images.length} รูป)
                </button>
              </div>
            )}
            <div className="mt-4 text-xl font-bold">🔧 รายละเอียดการพัฒนา</div>
            <div className="mt-2 flex flex-wrap">
              <div className="font-semibold mr-2">บทบาทการทำงาน :</div>
              <div className="break-words">{project.role}</div>
            </div>

            <div className="mt-2 flex flex-wrap">
              <div className="font-semibold mr-2">
                เครื่องมือและเทคโนโลยีที่ใช้ :
              </div>
              <div className="break-words whitespace-pre-line">
                {project.developmentDetails}
              </div>
            </div>
          </div>
        ))}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxImages}
      />
    </div>
  );
}
