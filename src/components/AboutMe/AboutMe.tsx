import React from "react";
import styles from "./AboutMe.module.scss";
import User from "@/assets/icons/about/user.svg?react";
import girl from "@/assets/images/about/girl.png";
import ArrowRight from "@/assets/icons/about/arrowRight.svg?react";
import { SectionIds } from "../header/navList";

const AboutMe: React.FC = () => {
  return (
    <section id={SectionIds.about} className={styles.about}>
      <h2 className={styles.title}>
        <User /> About <span>Me</span>
      </h2>
      <div className={styles.wrap}>
        <div className={styles.imageBox}>
          <img src={girl} alt="Walking girl" />
        </div>
        <div className={styles.descWrap}>
          <h3 className={styles.name}>I'm Inna</h3>
          <p className={styles.occupation}>Front-end Developer</p>
          <p className={styles.desc}>
            I am very passionate about improving my coding skills & developing
            applications & websites. I like to do interesting tasks, learn new
            technologies, and use best practices. I have a lot of projects in
            which I consolidate the acquired knowledge in practice.
                  </p>
                  <div className={styles.contact}>
          <p>
            <span>Email : </span>norelajest@gmail.com
          </p>
          <p>
            <span>Place : </span>Dnipro, Ukraine
                      </p>
                      </div>
            <a className={styles.resumeBtn}
              href="https://drive.google.com/file/d/1yEOVTId97ul4D4K7r2lr28nnz3Ph3aDx/view"
              target="_blank"
            >
                          Resume
                          <ArrowRight/>
            </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
