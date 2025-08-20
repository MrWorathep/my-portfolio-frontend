"use client";
import { useEffect, useState } from "react";
import HomePage from "./page/home/HomePage";
import AboutPage from "./page/about/AboutPage";
import SkillsPage from "./page/skills/SkillsPage";
import EducationPage from "./page/education/EducationPage";
import { fetchProjects, Project } from "@/services/projectService";
import { fetchExperiences, Experience } from "@/services/experienceService";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  ThemeDynamic,
  ProjectPageDynamic,
  ExperiencePageDynamic,
} from "./components/Dynamic";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (window.location.pathname !== "/") {
      window.location.replace("/");
    }
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    async function loadData() {
      const [projectsData, experiencesData] = await Promise.all([
        fetchProjects(),
        fetchExperiences(),
      ]);
      setProjects(projectsData);
      setExperiences(experiencesData);
      setLoaded(true);
    }
    loadData();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [loaded]);

  return (
    <main className="bg-light-background dark:bg-dark-background">
      <Navbar />
      <ThemeDynamic />
      <Container>
        <div className="w-full">
          <div className="pt-6 sm:pt-12">
            <div id="home" className="pt-12">
              <HomePage />
            </div>
            <div id="project" className="pt-12">
              <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-gray-100">
                🚀 Projects
              </h1>
              <ProjectPageDynamic projects={projects} />
            </div>
            <div id="skills" className="pt-12">
              <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-8">
                🛠 Skills
              </h1>
              <SkillsPage />
            </div>
            <div id="about" className="pt-12">
              <AboutPage />
            </div>
            <div id="experience" className="pt-12">
              <h1 className="mb-8 text-2xl md:text-4xl font-extrabold text-center">
                💼 Experience
              </h1>
              <ExperiencePageDynamic experiences={experiences} />
            </div>
            <div id="education" className="pt-12">
              <h1 className="mb-8 text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 text-center">
                🎓 Education
              </h1>
              <EducationPage />
            </div>
          </div>
        </div>
      </Container>
      <div id="contract">
        <Footer />
      </div>
    </main>
  );
}
