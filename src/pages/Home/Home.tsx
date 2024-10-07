import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/Hero/Hero";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import Education from "../../components/Education/Education";
import Projects from "../../components/Projects/Projects";
import ProjectBtn from "../../components/Projects/ProjectBtn";
import styles from "./Home.module.scss";
import ArrowRight from "@/assets/icons/about/arrowRight.svg?react";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Education />
      <section className={`container ${styles.sectionProject}`}>
      <Projects start={0} end={6} />
      <ProjectBtn IconEnd={ArrowRight} title="View All"/>
      </section>
    </>
  );
};

export default Home;
