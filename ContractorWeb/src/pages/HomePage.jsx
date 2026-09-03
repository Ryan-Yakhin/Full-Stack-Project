import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import ServiceArea from "../components/ServiceArea";
import CtaBanner from "../components/CtaBanner";
import Blog from "../components/Blog";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Services />
      <Portfolio />
      <Testimonials />
      <ServiceArea />
      <CtaBanner />
      <Blog />
    </>
  );
}