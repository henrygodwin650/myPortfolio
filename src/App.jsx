import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/about.jsx";
import Skills from "./components/skills.jsx";
import { Services } from "./components/Services.jsx";
import { Footer } from "./components/footer.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {

  return (
    <>
      <Navbar />
      <div className="mx-auto">
        <Hero />
        <About />
        <Contact />
        <Skills />
        <Services />
        <Footer />
      </div>
    </>
  )
}