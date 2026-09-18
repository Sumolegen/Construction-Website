import HomeHero from "../Components/sections/HomeHero";
import AboutPreview from "../Components/sections/AboutPreview";
import ServicesPreview from "@/Components/sections/ServicesPreview";
import ProjectsPreview from "@/Components/sections/ProjectsPreview";
import ExpertisePreview from "@/Components/sections/ExpertisePreview";
import WhyDayaPreview from "../Components/sections/WhyDayaPreview";
import JourneyPreview from "../Components/sections/JourneyPreview";
import RecognitionPreview from "../Components/sections/RecognitionPreview";
// import BlogPreview from "../Components/sections/BlogPreview";
import CTAPreview from "../Components/sections/CTAPreview";
import ContactPreview from "@/Components/sections/ContactPreview";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <ExpertisePreview />
      <WhyDayaPreview />
      <JourneyPreview />
      <RecognitionPreview />
      {/* <BlogPreview /> */}
      <CTAPreview />
      <ContactPreview />
    </main>
  );
}