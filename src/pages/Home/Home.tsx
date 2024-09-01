import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/Hero/Hero";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import Education from "../../components/Education/Education";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Education/>
    </>
  );
};

export default Home;
