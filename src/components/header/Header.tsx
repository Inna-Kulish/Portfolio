import React, { useState } from "react";
import Logo from "@/assets/icons/header/logo.svg?react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Menu from "@/assets/icons/header/menu.svg?react";
import Cross from "@/assets/icons/header/cross.svg?react";
import { NAV_LINKS, SectionIds } from "./navList";

const Header: React.FC = () => {
  const [isMenuTooggled, setIsMenuToggled] = useState<boolean>(false);

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

      {/* Mobile menu */}
      <div className={styles.mobileContainer}>
        <button
          className={styles.menuBtn}
          onClick={() => setIsMenuToggled(!isMenuTooggled)}
        >
          {isMenuTooggled ? <Cross className={styles.mobileIcon}/> : <Menu width={28} height={32} />}
        </button>
      </div>
      {isMenuTooggled && (
        <div className={styles.mobileBox}>
          <ul className={styles.mobileList}>
            {NAV_LINKS.map(({ title, sectionId }, index) => (
              <li key={`${title}_${index}`} className={styles.itemMobile}>
                <a
                  className={styles.linkMobile}
                  onClick={() => scrollToSection(sectionId)}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
