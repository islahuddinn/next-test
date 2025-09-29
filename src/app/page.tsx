import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WeSpecialize from "@/components/WeSpecialize";
import CustomEnterprise from "@/components/CustomEnterprise";
import Technology from "@/components/Technology";
import OurClients from "@/components/OurClients";
import Awards from "@/components/Awards";
import About from "@/components/About";
import Partnerships from "@/components/Partnerships";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WeSpecialize />
      <CustomEnterprise />
      <Technology />
      <OurClients />
      <Awards />
      <About />
      <Partnerships />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  );
}
