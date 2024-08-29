import React from "react";
import Logo from "@/assets/icons/header/logo.svg?react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { NAV_LINKS, SectionIds } from "./navList";

const Header: React.FC = () => {
    
  const scrollToSection = (sectionId: SectionIds) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>
      <nav className={styles.navbar}>
        <ul>
          {NAV_LINKS.map(({ title, sectionId }, index) => (
            <li key={`${title}_${index}`} className={styles.item}>
              <a
                className={styles.link}
                onClick={() => scrollToSection(sectionId)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
