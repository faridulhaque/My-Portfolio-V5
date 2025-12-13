import About from "@/components/about/About";
import Experience from "@/components/about/Experience";
import Articles from "@/components/articles/Articles";
import Contribution from "@/components/contribution/Contribution";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contribution></Contribution>
      <Articles></Articles>
      <Footer></Footer>
    </div>
  );
}
