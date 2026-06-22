import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Testimonails from "./components/Testimonails";
import WhatsAppIcon from "./components/Whatsapp";
import Works from "./components/Works";

export default function Home() {
  return (
    <>
      <Nav />
      <WhatsAppIcon 
        phoneNumber="+923424886134" 
        message="Hi! I have a question about your services."
        offsetX="24px"
        offsetY="24px"
      />

      <Hero />
      <Works />
      <Testimonails/>
      <ContactForm/>
      <Footer />
    </>
  );
}
