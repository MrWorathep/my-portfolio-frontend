"use client";
import HomePage from "./page/home/HomePage";
import ProjectPage from "./page/project/ProjectPage";
import AboutPage from "./page/about/AboutPage";
import SkillsPage from "./page/skills/SkillsPage";
import ExperiencePage from "./page/experience/ExperiencePage";
import EducationPage from "./page/education/EducationPage";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Theme from "./components/Theme";

export default function Home() {
  return (
    <main className="bg-light-background dark:bg-dark-background">
      <Navbar />
      <Theme />
      <Container>
        <div className="w-full">
          <div className="pt-6 sm:pt-12">
            <div id="home" className="pt-12">
              <HomePage />
            </div>
            <div id="project" className="pt-12">
              <ProjectPage />
            </div>
            <div id="skills" className="pt-12">
              <SkillsPage />
            </div>
            <div id="about" className="pt-12">
              <AboutPage />
            </div>
            <div id="experience" className="pt-12">
              <ExperiencePage />
            </div>
            <div id="education" className="pt-12">
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
