import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Testimonails from "./components/Testimonails";
import WhatsAppIcon from "./components/Whatsapp";
import Works from "./components/Works";
// import LogoSlider from "./components/Silder"
export default function Home() {
  return (
    <>
      <Nav />
      <WhatsAppIcon 
        phoneNumber="+923424886134" 
        message="Describe your eBay or dropshipping issue in detail..."
        offsetX="24px"
        offsetY="24px"
      />
      <Hero />
      <Works />
{/* <LogoSlider/> */}
      <Testimonails/>
      <ContactForm/>
      <Footer />
    </>
  );
}
