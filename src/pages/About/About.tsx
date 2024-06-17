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
                <div>
                    <h2>Profile</h2>
                    <p>I am a professional on the IT field, able to adapt to different environments and work
                        under pressure. Love working as a team in a way to achieve the goals of the company,
                        always following the strategies and guidelines provided by the organization. During
                        my professional career I have been able to develop mostly in the QA field where I
                        have gone from some basic manual testing to some advanced automated testing.
                        Currently I'm learning Cypress and going into more depth into Node.js and React.js.
                    </p>                
                    <ExperienceList title="Work" workList={workList}/>
                    <ExperienceList title="Education" educationList={educationList}/>
                </div>
                <aside className={styles.aside}>
                    <h2>Skills</h2>
                    <SkillsList title="Languages" skillsList={languages}/>
                    <SkillsList title="Technical" skillsList={techSkills}/>
                    <SkillsList title="Soft" skillsList={softSkills}/>
                    <SkillsList title="Other" skillsList={otherSkills}/>
                </aside>
            </section>
        </>
    )
}
export default About;