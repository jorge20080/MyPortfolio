import Header from "../../components/Header/Header";
import OpenedTabLayout from "../../components/OpenedTabLayout/OpenedTabLayout";
import styles from './About.module.css';
import educationList from '../../data/education-experience.json';
import workList from '../../data/work-experience.json';
import { getTechSkills, getOtherSkills, getSoftSkills, Skill, getLanguages } from "../../utils/skills-helper";
import ExperienceList from "../../components/ExperienceList/ExperienceList";
import SkillsList from "../../components/SkillsList/SkillsList";

const About = () =>{
    document.title="Jorge - About";
    let techSkills: Skill[] = getTechSkills();
    let softSkills: Skill[] = getSoftSkills();
    let otherSkills: Skill[] = getOtherSkills();
    let languages: Skill[] = getLanguages();

    return (
        <>
            <OpenedTabLayout name="about"/>
            <Header />
            <section className={styles.container}>
                <ExperienceList title="Education" educationList={educationList}/>
                <ExperienceList title="Work" workList={workList}/>
            </section>
            <section className={styles.container}>
                <h2>Skills</h2>
                <SkillsList title="Technical" skillsList={techSkills}/>
                <SkillsList title="Soft" skillsList={softSkills}/>
                <SkillsList title="Other" skillsList={otherSkills}/>
                <SkillsList title="Languages" skillsList={languages}/>
            </section>
        </>
    )
}
export default About;