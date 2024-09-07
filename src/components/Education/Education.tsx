import React from "react";
import styles from "./Education.module.scss";
import Hat from "@/assets/icons/education/study.svg?react";
import Title from "../Title/Title";
import women from "@/assets/images/education/women.jpg";
import goit from "@/assets/images/education/goit.jpg";
import { SectionIds } from "../header/navList";

const Education: React.FC = () => {
  return (
    <section id={SectionIds.education} className={styles.education}>
      <Title title="My" span="Education" Icon={Hat} color="light" />
      <ul className={styles.list}>
        <li className={styles.item}>
          <img className={styles.photo} src={women} alt="Women go tech" />
          <div className={styles.content}>
            <h3 className={styles.course}>Software Development & Quality Assurance</h3>
            <p className={styles.school}>Women Go Tech Acceleration Program</p>
            <p className={styles.year}>2024 | Pursuing</p>
          </div>
        </li>
        <li className={styles.item}>
          <img className={styles.photo} src={goit} alt="Go IT"/>
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
