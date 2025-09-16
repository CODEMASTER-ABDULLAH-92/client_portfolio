import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Testimonails from "./components/Testimonails";
import Works from "./components/Works";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Works />
      <Testimonails/>
      <ContactForm/>
      <Footer />
    </>
  );
}
