import { Toaster } from "react-hot-toast";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Form from "./components/Form";

import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
      <Toaster />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Form/>
      <ContactMe />
      </div>


    </>
  );
}

export default App;
