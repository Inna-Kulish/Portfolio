import React from "react";
import Monitor from "@/assets/icons/skills/monitor.svg?react";
import styles from "./Skills.module.scss";
import { SKILLS_LIST } from "./SkillsList";
import { SectionIds } from "../header/navList";
import Title from "../Title/Title";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
    const boxAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {ease: "easeOut", duration: 0.3,}
    },
    };
    
    return (
        <section id={SectionIds.skills} className={`container ${styles.skills}`}>
            <Title title="Skills &" span="Abilities" Icon={Monitor} color="dark"/>
            <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} className={styles.wrap}>
                <motion.ul variants={boxAnimation} className={styles.list}>
                    {SKILLS_LIST.map(({name, Icon}, index) => (
                        <li className={styles.item} key={`${name}_${index}`}>
                            <Icon className={styles.logoSkills} />
                            {name}</li>
                    ))}
                </motion.ul>
            </motion.div>
</section>
    )
}

export default Skills;