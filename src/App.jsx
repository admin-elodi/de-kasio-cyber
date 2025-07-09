import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-white text-primary">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
