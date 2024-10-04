import React from "react";
import styles from "./Education.module.scss";
import Hat from "@/assets/icons/education/study.svg?react";
import Title from "../Title/Title";
import women from "@/assets/images/education/women.jpg";
import women2x from "@/assets/images/education/women@2x.jpg";
import goit from "@/assets/images/education/goit.jpg";
import goit2x from "@/assets/images/education/goit@2x.jpg";
import { SectionIds } from "../header/navList";

const Education: React.FC = () => {
  return (
    <section id={SectionIds.education} className={styles.education}>
      <Title title="My" span="Education" Icon={Hat} color="light" />
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.photo}>
            <picture>
              <source srcSet={`${women} 1x, ${women2x} 2x`} />
              <img src={women} alt="Women go tech" loading="lazy" />
            </picture>
          </div>
          <div className={styles.content}>
            <h3 className={styles.course}>
              Software Development & Quality Assurance
            </h3>
            <p className={styles.school}>Women Go Tech Acceleration Program</p>
            <p className={styles.year}>2024 | Pursuing</p>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.photo}>
            <picture>
              <source srcSet={`${goit} 1x, ${goit2x} 2x`} />
              <img src={goit} alt="Go IT" loading="lazy" />
            </picture>
          </div>
          <div className={styles.content}>
            <h3 className={styles.course}>Fullstack developer</h3>
            <p className={styles.school}>course at GoIT school</p>
            <p className={styles.year}>2022-2023 | Completed</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Education;
