import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import { Circle } from "tsparticles/Utils";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 800,
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
    </>
  );
}

export default App;
