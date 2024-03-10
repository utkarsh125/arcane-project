import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Cards from "./Cards";
import Footer from "./Footer";
import Center from "./Center";
import Features from "./Features";

const landingPage = () => {
  return (
    <div className="">
      <Navbar />
      <Banner/>
      <Cards/>
      <Center />
      <Features />
      <Footer/>
    </div>
  );
};

export default landingPage;
