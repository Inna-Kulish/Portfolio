import React from "react";
import styles from "./AboutMe.module.scss";
import User from "@/assets/icons/about/user.svg?react";
import girl from "@/assets/images/about/girl.png";
import girl2x from "@/assets/images/about/girl@2x.png";
import ArrowRight from "@/assets/icons/about/arrowRight.svg?react";
import { SectionIds } from "../header/navList";
import Title from "../Title/Title";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  const boxAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {ease: "easeOut", delay: custom * 0.2}
    }),
  };

  return (
    <section id={SectionIds.about} className={`container ${styles.about}`}>
      <Title title="About" span="Me" Icon={User} color="light" />
      <div className={styles.wrap}>
        <div className={styles.imageBox}>
          <picture>
                <source srcSet={`${girl} 1x, ${girl2x} 2x`} />
                <img
                  src={girl}
                  alt="Walking girl"
                  loading="lazy"
                />
              </picture>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}} className={styles.descWrap}>
          <motion.h3 custom={1} variants={boxAnimation} className={styles.name}>I'm Inna</motion.h3>
          <motion.p custom={2} variants={boxAnimation} className={styles.occupation}>Front-end Developer</motion.p>
          <motion.p custom={3} variants={boxAnimation} className={styles.desc}>
            I am very passionate about improving my coding skills & developing
            applications & websites. I like to do interesting tasks, learn new
            technologies, and use best practices. I have a lot of projects in
            which I consolidate the acquired knowledge in practice.
          </motion.p>
          <div className={styles.contact}>
            <motion.p custom={4} variants={boxAnimation}>
              <span>Email : </span>norelajest@gmail.com
            </motion.p>
            <motion.p custom={5} variants={boxAnimation}>
              <span>Place : </span>Dnipro, Ukraine
            </motion.p>
          </div>
          <a
            className={styles.resumeBtn}
            href="https://drive.google.com/file/d/1BwXwzkJb1eeWNv6lR4VmuQk4NRRZI5J6/view"
            target="_blank"
          >
            Resume
            <ArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
