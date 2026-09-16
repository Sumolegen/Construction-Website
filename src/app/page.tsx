import HomeHero from "../Components/sections/HomeHero";
import AboutPreview from "../Components/sections/AboutPreview";
import ServicesPreview from "@/Components/sections/ServicesPreview";
import ProjectsPreview from "@/Components/sections/ProjectsPreview";
import ExpertisePreview from "@/Components/sections/ExpertisePreview";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <ExpertisePreview />
    </main>
  );
}