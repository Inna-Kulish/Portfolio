import React from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.scss";

interface ProjectBtnProps {
  IconStart?: React.ComponentType;
  IconEnd?: React.ComponentType;
  title: string;
}

const ProjectBtn: React.FC<ProjectBtnProps> = ({
  IconStart,
  IconEnd,
  title,
}) => {
  return (
    <div className={styles.wrapBtn}>
      {IconStart && (
        <Link className={styles.viewBtn} to="/">
          <IconStart />
          {title}
        </Link>
      )}
      {IconEnd && (
        <Link className={styles.viewBtn} to="/projects">
          {title}
          <IconEnd />
        </Link>
      )}
    </div>
  );
};

export default ProjectBtn;
