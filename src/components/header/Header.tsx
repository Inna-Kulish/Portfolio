import React, { useState } from "react";
import Logo from "@/assets/icons/header/logo.svg?react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import Menu from "@/assets/icons/header/menu.svg?react";
import Cross from "@/assets/icons/header/cross.svg?react";
import { NAV_LINKS, SectionIds } from "./navList";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState<Record<number, boolean>>({});
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (index: number, navLink?: string, sectionId?: SectionIds) => {
     if (sectionId) {
       if (location.pathname !== "/") {
        navigate("/");
         setTimeout(() => {
          scrollToSection(sectionId, index);
        }, 1000);
      } else {
        scrollToSection(sectionId, index);
      }
    } else if (navLink) {
      navigate(navLink);
    }
  }

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
      <Link to="/" className={styles.logoLink}>
        <Logo className={styles.logo} width={90} height={90}/>
      </Link>
      <div className={styles.navbar}>
        <ul className={styles.list}>
          {NAV_LINKS.map(({ title, sectionId, navLink }, index) => (
            <li key={`${title}_${index}`} className={styles.item}>
              <a
                className={`${styles.link} ${isActive[index] ? styles.active : ''}`}
                onClick={() => handleNavClick(index, navLink, sectionId)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
        <button
          className={styles.menuBtn}
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          {isMenuToggled ? (
    <Cross className={`${styles.crossIcon} ${styles.rotatingIn}`} width={32} height={32}/>
  ) : (
    <Menu className={`${styles.menuIcon} ${styles.rotatingOut}`} width={28} height={32} />
  )}
        </button>
      {isMenuToggled && (
        <div className={styles.mobileBox}>
          <ul className={styles.mobileList}>
            {NAV_LINKS.map(({ title, sectionId, navLink }, index) => (
              <li key={`${title}_${index}`} className={styles.itemMobile}>
                <a
                  className={`${styles.linkMobile} ${isActive[index] ? styles.activeMobile : ''}`}
                  onClick={() => handleNavClick(index, navLink, sectionId)}
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
