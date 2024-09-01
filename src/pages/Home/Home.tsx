import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/Hero/Hero";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills/>
    </>
  );
};

export default Home;
