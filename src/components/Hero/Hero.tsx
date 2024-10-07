import React from "react";
import SocialsList from "../SocialsList/SocialsList";
import styles from "./Hero.module.scss";
import TypingText from "./TypingText";
import Arrow from "@/assets/icons/hero/arrow.svg?react";
import heroPhoto from "@/assets/images/hero/hero-photo.jpg";
import heroPhoto2x from "@/assets/images/hero/hero-photo@2x.jpg";
import { SectionIds } from "../header/navList";
import Part from "./Part";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: SectionIds) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const boxAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {ease: "easeOut", delay: custom * 0.2}
    }),
  };

  const imgAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {ease: "easeOut", delay: custom * 0.2}
    }),
  };

  return (
    <section id={SectionIds.home} className={styles.heroSection}>
      <Part />
      <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} className={`container ${styles.contentWrap}`}>
        <div className={styles.content}>
          <motion.h2 custom={1} variants={boxAnimation} className={styles.title}>
            Hi There, <br /> I'm Inna <span>Kulish</span>
          </motion.h2>
          <motion.p custom={2} variants={boxAnimation} className={styles.desc}>
            I am{" "}
            <TypingText
              text={"Frontend Developer!"}
              delay={150}
              infinite={true}
            />
          </motion.p>
          <a
            className={styles.btn}
            onClick={() => scrollToSection(SectionIds.about)}
          >
            About Me
            <Arrow />
          </a>
          <SocialsList />
        </div>
        <motion.div custom={1} variants={imgAnimation} className={styles.imgBox}>
          <picture>
            <source srcSet={`${heroPhoto} 1x, ${heroPhoto2x} 2x`} />
            <img src={heroPhoto} alt="portrait Inna Kulish" loading="lazy" />
          </picture>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
