import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
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
    </>
  );
}

export default App;
