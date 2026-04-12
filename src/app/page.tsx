import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutBrief from "@/components/AboutBrief";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import DevelopmentApproach from "@/components/DevelopmentApproach";
import TechStack from "@/components/TechStack";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <AboutBrief />
      <About />
      <Products />
      <Services />
      <DevelopmentApproach />
      <TechStack />
      <CallToAction />
      <Contact />
    </main>
  );
}
