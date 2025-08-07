import "./App.css";
import Hero from "./components/HeroSection/Hero";
import NavBar from "./components/NavBar/NavBar";
import GridOfCards from "./components/CardContent/GridOfCards";
import { dummyCards } from "./data/dummyCards";
import Footer from "./components/Footer/Footer";

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
