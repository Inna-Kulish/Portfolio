import React from "react";
import { SOCIALS_LINKS } from "./socialsLinks";
import styles from "./SocialsList.module.scss";
import Mail from "@/assets/icons/socialsList/mail.svg?react";

const SocialsList: React.FC = () => {
  return (
    <div className={styles.socials}> 
      <ul className={styles.list}>
        {SOCIALS_LINKS.map(({ name, Icon, link }, index) => (
          <li key={`${name}_${index}`}>
            <a className={`${styles.linkSocial} ${styles[name]}`} href={link} target="_blank" rel="noopener noreferrer">
              <Icon />
            </a>
          </li>
        ))}
        <li><a className={`${styles.linkSocial} ${styles.mail}`} href="mailto:norelajest@gmail.com"><Mail/></a></li>
      </ul>
    </div>
  );
};

export default SocialsList;
