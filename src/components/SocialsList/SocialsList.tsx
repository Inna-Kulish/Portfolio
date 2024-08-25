import React from "react";
import { SOCIALS_LINKS } from "./socialsLinks";
import styles from "./SocialsList.module.scss";

const SocialsList: React.FC = () => {
  return (
    <div>
      <ul className={styles.list}>
        {SOCIALS_LINKS.map(({ name, Icon, link }, index) => (
          <li key={`${name}_${index}`}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialsList;
