import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Cards from "./Cards";
import Footer from "./Footer";
import Center from "./Center";

const landingPage = () => {
  return (
    <div className="">
      <Navbar />
      <Banner/>
      <Cards/>
      <Center />
      <Footer/>
    </div>
  );
};

export default landingPage;
