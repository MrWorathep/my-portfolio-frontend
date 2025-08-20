"use client";

import dynamic from "next/dynamic";
import Loading from "./Loading";

export const ThemeDynamic = dynamic(() => import("./Theme"), {
  ssr: false,
});

export const ProjectPageDynamic = dynamic(
  () => import("../page/project/ProjectPage"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[400px] flex justify-center items-center">
        <Loading />
      </div>
    ),
  }
);

export const ExperiencePageDynamic = dynamic(
  () => import("../page/experience/ExperiencePage"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[400px] flex justify-center items-center">
        <Loading />
      </div>
    ),
  }
);
