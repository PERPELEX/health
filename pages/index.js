import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhyHealthOne from "./components/WhyHealthOne";
import HowItWorks from "./components/HowItWorks";
import PricingSection from "./components/PricingSection";
import FAQs from "./components/FAQs";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";

const HealthcarePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Wrapper>
        <WhyHealthOne />
        <HowItWorks />
        <PricingSection />
        <FAQs />
      </Wrapper>
      <div className="bg-gray-50">
        <JoinUs />
      </div>
      <Footer />
    </>
  );
};

export default HealthcarePage;
