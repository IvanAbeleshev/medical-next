import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contacts from "@/components/Contacts";
import Cooperation from "@/components/Cooperation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IsoMlc from "@/components/IsoMlc";
import Navigation from "@/components/Navigation";
import Team from "@/components/Team";


export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Team />
      <IsoMlc />
      <Certificates />
      <Cooperation />
      <Contacts />
      <Footer />
    </main>
  );
}
