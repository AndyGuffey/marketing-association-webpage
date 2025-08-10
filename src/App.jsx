import "./App.css";
import Hero from "./components/HeroSection/Hero";
import NavBar from "./components/NavBar/NavBar";
import GridOfCards from "./components/CardContent/GridOfCards";
import Footer from "./components/Footer/Footer";
import { dummyCards } from "./data/dummyCards";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <GridOfCards cards={dummyCards} />
      <Footer />
    </>
  );
}

export default App;
