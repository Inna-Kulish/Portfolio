import React, { useState } from "react";
import Logo from "@/assets/icons/header/logo.svg?react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Menu from "@/assets/icons/header/menu.svg?react";
import Cross from "@/assets/icons/header/cross.svg?react";
import { NAV_LINKS, SectionIds } from "./navList";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState<Record<number, boolean>>({});
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const scrollToSection = (sectionId: SectionIds, index: number) => {
    const element = document.getElementById(sectionId);
    setIsActive({});
    if (element) {
      setIsActive((prev)=> ({...prev, [index]: true}));
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
                className={`${styles.link} ${isActive[index] ? styles.active : ''}`}
                onClick={() => scrollToSection(sectionId, index)}
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
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          {isMenuToggled ? (
    <Cross className={`${styles.crossIcon} ${styles.rotatingIn}`} />
  ) : (
    <Menu className={`${styles.menuIcon} ${styles.rotatingOut}`} width={28} height={32} />
  )}
        </button>
      </div>
      {isMenuToggled && (
        <div className={styles.mobileBox}>
          <ul className={styles.mobileList}>
            {NAV_LINKS.map(({ title, sectionId }, index) => (
              <li key={`${title}_${index}`} className={styles.itemMobile}>
                <a
                  className={`${styles.linkMobile} ${isActive[index] ? styles.activeMobile : ''}`}
                  onClick={() => scrollToSection(sectionId, index)}
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
