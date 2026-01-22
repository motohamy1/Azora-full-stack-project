import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureShowcase from "./components/FeatureShowcase";
import Testimonial from "./components/Testimonial";
import UserFeedback from "./components/UserFeedback";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-primary min-h-screen">
        <Navbar />
        <Hero />
        <FeatureShowcase />
        <Testimonial />
        <UserFeedback />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
