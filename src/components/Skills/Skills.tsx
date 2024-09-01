import React from "react";
import Monitor from "@/assets/icons/skills/monitor.svg?react";
import styles from "./Skills.module.scss";
import { SKILLS_LIST } from "./SkillsList";
import { SectionIds } from "../header/navList";
import Title from "../Title/Title";

const Skills: React.FC = () => {
    return (
        <section id={SectionIds.skills} className={styles.skills}>
            <Title title="Skills &" span="Abilities" Icon={Monitor} color="dark"/>
            <div className={styles.wrap}>
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