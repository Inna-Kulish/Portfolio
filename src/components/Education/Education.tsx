import React from "react";
import styles from "./Education.module.scss";
import Hat from "../../assets/icons/education/study.svg?react";
import Title from "../Title/Title";

const Education: React.FC = () => {
  return (
    <section className={styles.education}>
      <Title title="My" span="Education" Icon={Hat} color="light" />
    </section>
  );
};

export default Education;
