import React from "react";
import { NAV_LINKS } from "./navList";
import Logo from "@/assets/icons/header/logo.svg?react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Link to="/"><Logo className={styles.logo} /></Link>
            <nav className={styles.navbar}>
                <ul>
                    {NAV_LINKS.map(({title}, index) => (
                        <li key={`${title}_${index}`} className={styles.item}><a className={styles.link}>{title}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;