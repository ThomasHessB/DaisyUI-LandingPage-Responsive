import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import FeatureSection from "./FeatureSection";
import CTASection from "./CTASection";
import TestimonialsCarousel from "./TestimonialsCarousel";
import FAQAccordion from "./FAQAccordion";
import HeroSection from "./HeroSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <FeatureSection />
      <HeroSection />
      <TestimonialsCarousel />
      <FAQAccordion />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
