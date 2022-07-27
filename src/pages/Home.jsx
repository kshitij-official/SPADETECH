import React from "react";
import Header from "../components/header/Header";
import Services from "../components/home/Services";
import Slider from "../components/home/Slider";
import Solutions from "../components/home/Solutions";

const Home = () => {
  return (
    <div>
      <Header />
      <Solutions />
      <Services />
      <Slider />
    </div>
  );
};

export default Home;
