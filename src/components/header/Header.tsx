import React, { useEffect, useRef, useState } from "react";
import Logo from "@/assets/icons/header/logo.svg?react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import Menu from "@/assets/icons/header/menu.svg?react";
import Cross from "@/assets/icons/header/cross.svg?react";
import { NAV_LINKS, SectionIds } from "./navList";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState<Record<number, boolean>>({});
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const mobileBoxRef = useRef<HTMLDivElement>(null);
  useLockBodyScroll(isMenuToggled);

  const menuIconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  const crossIconVariants = {
    open: { rotate: -180 },
    closed: { rotate: 0 },
  };

  const handleNavClick = (
    index: number,
    navLink?: string,
    sectionId?: SectionIds
  ) => {
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

    setIsMenuToggled(false);
  };

  const scrollToSection = (sectionId: SectionIds, index: number) => {
    const element = document.getElementById(sectionId);
    setIsActive({});
    if (element) {
      setIsActive((prev) => ({ ...prev, [index]: true }));
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderNavLinks = (isMobile = false) => (
    <ul className={isMobile ? styles.mobileList : styles.list}>
      {NAV_LINKS.map(({ title, sectionId, navLink }, index) => (
        <li
          key={`${title}_${index}`}
          className={isMobile ? styles.itemMobile : styles.item}
        >
          <a
            className={`${isMobile ? styles.linkMobile : styles.link} ${
              isActive[index]
                ? isMobile
                  ? styles.activeMobile
                  : styles.active
                : ""
            }`}
            onClick={() => handleNavClick(index, navLink, sectionId)}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  );

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (mobileBoxRef && !mobileBoxRef.current?.contains(e.target as Node)) {
        setIsMenuToggled(false);
      }
    };

    if (isMenuToggled) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuToggled]);

  return (
    <header className={`container ${styles.header}`}>
      <Link to="/" className={styles.logoLink}>
        <Logo className={styles.logo} width={90} height={90} />
      </Link>
        <div className={styles.navbar}>{renderNavLinks()}</div>

      {/* Mobile menu */}
      <motion.button
        className={styles.menuBtn}
        onClick={() => setIsMenuToggled(!isMenuToggled)}
        aria-expanded={isMenuToggled}
      >
        {isMenuToggled ? (
          <motion.div
            initial="closed"
            animate="open"
            variants={crossIconVariants}
            transition={{ duration: 0.5 }}
          >
            <Cross className={`${styles.crossIcon}`} width={32} height={32} />
          </motion.div>
        ) : (
          <motion.div
            initial="closed"
            animate="open"
            variants={menuIconVariants} // Анімація іконки меню
            transition={{ duration: 0.5 }}
          >
            <Menu className={`${styles.menuIcon}`} width={28} height={32} />
          </motion.div>
        )}
      </motion.button>
      {isMenuToggled && (
        <div className={styles.backdrop}>
          <div ref={mobileBoxRef} className={styles.mobileBox}>
            {renderNavLinks(true)}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
