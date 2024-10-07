import React from "react";
import styles from "./Footer.module.scss";
import { NAV_LINKS, SectionIds } from "../header/navList";
import Mail from "@/assets/icons/socialsList/mail.svg?react";
import Arrow from "@/assets/icons/about/arrowRight.svg?react";
import Location from "@/assets/icons/footer/location.svg?react";
import { SOCIALS_LINKS } from "../SocialsList/socialsLinks";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: SectionIds) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id={SectionIds.contact} className={`container ${styles.footer}`}>
      <div className={styles.box}>
        <h3 className={styles.title}>Inna's Portfolio</h3>
        <p className={styles.desc}>
          Thank you for visiting my personal portfolio website. Connect with me
          over socials or email.
        </p>
      </div>
      <div>
        <h3 className={styles.title}>Quick Links</h3>
        <ul className={styles.navList}>
          {NAV_LINKS.map(({ title, sectionId }, index) => (
            <li key={`${title}_${index}`} className={styles.itemLink}>
              <a
                className={styles.link}
                onClick={() => scrollToSection(sectionId)}
              >
                <Arrow className={styles.arrowSvg} />
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className={styles.title}>Contact Info</h3>

        <a className={styles.contact} href="mailto:norelajest@gmail.com">
          <Mail />
          norelajest@gmail.com
        </a>
        <div className={styles.contact}>
          <Location />
          Dnipro, Ukraine
        </div>
        <ul className={styles.socialsList}>
          {SOCIALS_LINKS.map(({ name, Icon, link }, index) => (
            <li key={`${name}_${index}`}>
              <a
                className={styles.linkSocial}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={styles.socialsSvg} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
