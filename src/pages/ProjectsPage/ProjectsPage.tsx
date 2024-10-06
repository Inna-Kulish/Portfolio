import React from "react";
import Projects from "../../components/Projects/Projects";
import ProjectBtn from "../../components/Projects/ProjectBtn";
import styles from "./ProjectPage.module.scss";
import ArrowLeft from "@/assets/icons/projects/arrowLeft.svg?react";

const ProjectsPage: React.FC = () => {
  return (
    <section className={styles.sectionPtojects}>
      <Projects />
      <ProjectBtn IconStart={ArrowLeft} title="Back To Home" />
    </section>
  );
};

export default ProjectsPage;
