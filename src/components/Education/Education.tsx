import React from "react";
import styles from "./Education.module.scss";
import Hat from "@/assets/icons/education/study.svg?react";
import Title from "../Title/Title";
import women from "@/assets/images/education/women.jpg";
import women2x from "@/assets/images/education/women@2x.jpg";
import goit from "@/assets/images/education/goit.jpg";
import goit2x from "@/assets/images/education/goit@2x.jpg";
import { SectionIds } from "../header/navList";
import { motion } from "framer-motion";

const Education: React.FC = () => {
    const boxAnimation = {
    hidden: {
        y: 300,
      opacity:0
    },
    visible: (custom: number) => ({
      y: 0,
      opacity:1,
      transition: {ease: "easeOut", duration: 0.1, delay: custom * 0.3}
    }),
    };
  
  return (
    <section id={SectionIds.education} className={`container ${styles.education}`}>
      <Title title="My" span="Education" Icon={Hat} color="light" />
      <motion.ul initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} className={styles.list}>
        <motion.li custom={1} variants={boxAnimation} className={styles.item}>
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
        </motion.li>
        <motion.li custom={2} variants={boxAnimation} className={styles.item}>
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
        </motion.li>
      </motion.ul>
    </section>
  );
};

export default Education;
