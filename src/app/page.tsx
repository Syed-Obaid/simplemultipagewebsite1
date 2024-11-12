import Image from "next/image";
import Navbar from "./navbar/page";
import Hero from "./hero/page";
import About from "./about/page";
import Services from "./services/page";
import Contact from "./contact/page";
import Footer from "./footer/page";

export default function Home() {
  return (
   <>
  
   <Hero/>
   <About/>
   <Services/>
   <Contact/>
  
   </>
  );
}
