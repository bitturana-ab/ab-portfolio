import "./index.css";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="space-y-12">
      <Header />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
