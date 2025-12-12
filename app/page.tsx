import About from "@/components/about/About";
import Experience from "@/components/about/Experience";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
    </div>
  );
}
