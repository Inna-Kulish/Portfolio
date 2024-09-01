import React from "react";
import Monitor from "@/assets/icons/skills/monitor.svg?react";
import styles from "./Skills.module.scss";
import { SKILLS_LIST } from "./SkillsList";
import { SectionIds } from "../header/navList";

const Skills: React.FC = () => {
    return (
        <section id={SectionIds.skills} className={styles.skills}>
            <h2 className={styles.title}><Monitor /> Skills & <span>Abilities</span></h2>
            <div>
                <ul className={styles.list}>
                    {SKILLS_LIST.map(({name, Icon}, index) => (
                        <li className={styles.item} key={`${name}_${index}`}>
                            <Icon/>
                            {name}</li>
                    ))}
                </ul>
            </div>
</section>
    )
}

export default Skills;