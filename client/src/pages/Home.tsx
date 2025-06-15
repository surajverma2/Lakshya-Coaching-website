import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Teachers from "@/components/Teachers";
import Toppers from "@/components/Toppers";
import Results from "@/components/Results";
import Alumni from "@/components/Alumni";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Teachers />
      <Alumni />
      <Toppers />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
}
