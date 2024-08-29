import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/Hero/Hero";
import AboutMe from "../../components/AboutMe/AboutMe";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe/>
    </>
  );
};

export default Home;
