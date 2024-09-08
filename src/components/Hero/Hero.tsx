import React, { useEffect, useMemo, useState } from "react";
import SocialsList from "../SocialsList/SocialsList";
import styles from "./Hero.module.scss";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import TypingText from "./TypingText";
import Arrow from "@/assets/icons/hero/arrow.svg?react";
import heroPhoto from "@/assets/images/hero/hero-photo.jpg";
import { SectionIds } from "../header/navList";

const Hero: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#efefef",
        },
      },
      fullScreen: false,
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#232019",
        },
        links: {
          color: "#232019",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const scrollToSection = (sectionId: SectionIds) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id={SectionIds.home} className={styles.heroSection}>
      {init && (
        <Particles
          className={styles.particles}
          id="tsparticles"
          

          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
      <div className={styles.content}>
        <h2 className={styles.title}>
          Hi There, <br /> I'm Inna <span>Kulish</span>
        </h2>
        <p className={styles.desc}>
          I am <TypingText text={'Frontend Developer!'} delay={150} infinite={true} />
        </p>
        <a className={styles.btn} onClick={()=>scrollToSection(SectionIds.about)}>About Me<Arrow/></a>
        <SocialsList />
      </div>
      <div className={styles.imgBox}>
        <img src={heroPhoto} alt="portrait Inna Kulish" />
      </div>
    </section>
  );
};

export default Hero;
