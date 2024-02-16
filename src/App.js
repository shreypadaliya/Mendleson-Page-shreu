import About from "./pages/About";
import Clients from "./pages/Clients";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import "./assets/styles/App.css";

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
