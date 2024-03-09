import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Cards from "./Cards";
import Footer from "./Footer";

const landingPage = () => {
  return (
    <div className="">
      <Navbar />
      <Banner/>
      <Cards/>
      <Footer/>
    </div>
  );
};

export default landingPage;
