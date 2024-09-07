import React from "react";
import Title from "../Title/Title";
import styles from "./Projects.module.scss";
import Monitor from "@/assets/icons/skills/monitor.svg?react";
import { SectionIds } from "../header/navList";
import { PROJECTS_LIST } from "./projectsList";

const Projects: React.FC = () => {
  return (
    <section id={SectionIds.projects} className={styles.projects}>
      <Title title="Projects" span="Made" color="dark" Icon={Monitor} />
      <ul className={styles.list}>
        {PROJECTS_LIST.slice(0,6).map(
          ({ name, photo, github, page, description }, index) => (
            <li className={styles.item} key={`${name}_${index}`}>
              <img className={styles.photo} src={photo} alt={name} />
              <div className={styles.content}>
                        <h3 className={styles.tag}>{name}</h3>
                        <div className={styles.desc}>
                <p>{description}</p>
                <div className={styles.btnWrap}>
                  <a className={styles.btn} href={github} target="_blank">Code</a>
                  <a className={styles.btn} href={page} target="_blank">View</a>
                            </div>
                            </div>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default Projects;
