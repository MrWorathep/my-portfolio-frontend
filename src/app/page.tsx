"use client";
import { useEffect, useState } from "react";
import HomePage from "./page/home/HomePage";
import ProjectPage from "./page/project/ProjectPage";
import AboutPage from "./page/about/AboutPage";
import SkillsPage from "./page/skills/SkillsPage";
import ExperiencePage from "./page/experience/ExperiencePage";
import EducationPage from "./page/education/EducationPage";
import { fetchProjects, Project } from "@/services/projectService";
import { fetchExperiences, Experience } from "@/services/experienceService";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const [projectsData, experiencesData] = await Promise.all([
        fetchProjects(),
        fetchExperiences(),
      ]);
      setProjects(projectsData);
      setExperiences(experiencesData);
      setIsLoading(false);
    }
    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-300 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <Container>
      <div className="w-full">
        <div className="pt-6 sm:pt-12">
          <Navbar />
          <div id="home" className="pt-12">
            <HomePage />
          </div>
          <div id="project" className="pt-12">
            <ProjectPage projects={projects} />
          </div>
          <div id="skills" className="pt-12">
            <SkillsPage />
          </div>
          <div id="about" className="pt-12">
            <AboutPage />
          </div>
          <div id="experience" className="pt-12">
            <ExperiencePage experiences={experiences} />
          </div>
          <div id="education" className="pt-12">
            <EducationPage />
          </div>
          <div id="contract">
            <Footer />
          </div>
        </div>
      </div>
    </Container>
  );
}
