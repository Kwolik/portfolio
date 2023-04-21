import "./App.css";
import "./fonts/Gumela Regular.otf";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/navbar/intro/Intro";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
    </div>
  );
}

export default App;
