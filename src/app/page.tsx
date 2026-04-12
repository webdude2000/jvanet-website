import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import DevelopmentApproach from "@/components/DevelopmentApproach";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <DevelopmentApproach />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
