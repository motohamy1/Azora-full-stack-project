import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureShowcase from "./components/FeatureShowcase";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <div className="bg-primary min-h-screen">
        <Navbar />
        <Hero />
        <FeatureShowcase />
        <Testimonial />
      </div>
    </>
  );
}

export default App;
