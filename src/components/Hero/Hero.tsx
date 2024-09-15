import React from "react";
import SocialsList from "../SocialsList/SocialsList";
import styles from "./Hero.module.scss";
import TypingText from "./TypingText";
import Arrow from "@/assets/icons/hero/arrow.svg?react";
import heroPhoto from "@/assets/images/hero/hero-photo.jpg";
import heroPhoto2x from "@/assets/images/hero/hero-photo@2x.jpg";
import { SectionIds } from "../header/navList";
import Part from "./Part";

const Hero: React.FC = () => {

  const scrollToSection = (sectionId: SectionIds) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id={SectionIds.home} className={styles.heroSection}>
      <Part />
      <div className={styles.content}>
        <h2 className={styles.title}>
          Hi There, <br /> I'm Inna <span>Kulish</span>
        </h2>
        <p className={styles.desc}>
          I am{" "}
          <TypingText
            text={"Frontend Developer!"}
            delay={150}
            infinite={true}
          />
        </p>
        <a
          className={styles.btn}
          onClick={() => scrollToSection(SectionIds.about)}
        >
          About Me
          <Arrow />
        </a>
        <SocialsList />
      </div>
      <div className={styles.imgBox}>
        <picture>
          <source srcSet={`${heroPhoto} 1x, ${heroPhoto2x} 2x`} />
          <img src={heroPhoto} alt="portrait Inna Kulish" loading="lazy" />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
