import "./styles/App.css";
import "./styles/AppResponsive.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Projects from "./Components/Projects";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="rubik-regular body-container">
      <Header />
      <Home />
      <About />
      <Services />
      <Team />
      <Projects />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
