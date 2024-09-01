import React from "react";
import styles from "./Title.module.scss";

interface TitleProps {
  title: string;
  span: string;
  Icon: React.ComponentType;
  color: "light" | "dark";
}

const Title: React.FC<TitleProps> = ({ title, span, Icon, color }) => (
  <h2 className={`${color === "light" ? styles.light : styles.dark} ${styles.title}`}>
    <Icon />
    {title}{" "}
    <span>
      {span}
    </span>
  </h2>
);

export default Title;
