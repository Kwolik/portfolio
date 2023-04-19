import "./App.css";
import "./fonts/Gumela Regular.otf";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/navbar/intro/Intro";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
    </div>
  );
}

export default App;
