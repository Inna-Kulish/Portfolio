import React, { CSSProperties, useState } from "react";
import Title from "../Title/Title";
import styles from "./Projects.module.scss";
import Monitor from "@/assets/icons/skills/monitor.svg?react";
import { SectionIds } from "../header/navList";
import { PROJECTS_LIST } from "./projectsList";
import Eye from "@/assets/icons/projects/eye.svg?react";
import Code from "@/assets/icons/projects/code.svg?react";
import ArrowRight from "@/assets/icons/about/arrowRight.svg?react";
import { Link } from "react-router-dom";
import { handleMouseLeave, handleMouseMove } from "../../utils/use3dEffect";

const Projects: React.FC = () => {
  const [stylesMap, setStylesMap] = useState<Record<number, CSSProperties>>({});

  return (
    <section id={SectionIds.projects} className={styles.projects}>
      <Title title="Projects" span="Made" color="dark" Icon={Monitor} />
      <ul className={styles.list}>
        {PROJECTS_LIST.slice(0, 6).map(
          ({ name, photo, photo2x, github, page, description }, index) => (
            <li
              className={styles.item}
              key={`${name}_${index}`}
              onMouseMove={(e) => handleMouseMove(e, index, setStylesMap)}
              onMouseLeave={() => handleMouseLeave(index, setStylesMap)}
              style={stylesMap[index] || {}}
            >
              <picture>
                <source srcSet={`${photo} 1x, ${photo2x} 2x`} sizes="(max-width: 600px) 100vw, (min-width: 600px) 50vw"/>
                <img
                  className={`projectPhoto ${styles.photo}`}
                  src={photo}
                  alt={name}
                  loading="lazy"
                />
              </picture>
              <div className={styles.content}>
                <div className={styles.tag}>
                  <h3>{name}</h3>
                </div>
                <div className={styles.desc}>
                  <p>{description}</p>
                  <div className={styles.btnWrap}>
                    <a className={styles.btn} href={page} target="_blank" rel="noopener noreferrer">
                      <Eye />
                      View
                    </a>
                    <a className={styles.btn} href={github} target="_blank" rel="noopener noreferrer">
                      Code
                      <Code />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
      <div className={styles.wrapBtn}>
        <Link className={styles.viewBtn} to="/projects">
          View All
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
