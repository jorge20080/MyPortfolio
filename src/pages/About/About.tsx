import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import Header from "../../components/Header/Header";
import OpenedTabLayout from "../../components/OpenedTabLayout/OpenedTabLayout";
import styles from './About.module.css';
import educationList from '../../data/education-experience.json';
import workList from '../../data/work-experience.json';
import skillsList from '../../data/skills.json';

type Skill = {
    id: number
    name: string,
    type: string
}
const getTechSkills = () =>{
    return skillsList.filter(skill=>skill.type==="Technical");
}
const getSoftSkills = () =>{
    return skillsList.filter(skill=>skill.type=="Soft");
}
const getOtherSkills = () =>{
    return skillsList.filter(skill=>skill.type=="Other");
}
const About = () =>{
    let techSkills: Skill[] = getTechSkills();
    let softSkills: Skill[] = getSoftSkills();
    let otherSkills: Skill[] = getOtherSkills();

    return (
        <main>
            <OpenedTabLayout name="about"/>
            <Header />
            <section className={styles.container}>
                <h2>Education</h2>
                <ul>
                    {educationList.map(education=>{
                        return <ExperienceCard key={education.id} educationDetails={education}/>
                    })}
                </ul>
            </section>
            <section className={styles.container}>
                <h2>Work</h2>
                <ul>
                    {workList.map(work=>{
                        return <ExperienceCard key={work.id} workDetails={work}/>
                    })}
                </ul>
            </section>
            <section className={`${styles.container} ${styles.skills} `}>
                <h2>Skills</h2>
                <section>
                    <h3>Technical</h3>
                    <ul>
                        {techSkills.map(skill=>{
                            return <li className={styles.tech_skill} key={skill.id}>{skill.name}</li>
                        })}
                    </ul>
                </section>
                <section>
                    <h3>Soft</h3>
                    <ul>
                        {softSkills.map(skill=>{
                            return <li className={styles.soft_skill} key={skill.id}>{skill.name}</li>
                        })}
                    </ul>
                </section>
                <section>
                    <h3>Basic Knowledge of</h3>
                    <ul>
                        {otherSkills.map(skill=>{
                            return <li className={styles.other_skill} key={skill.id}>{skill.name}</li>
                        })}
                    </ul>
                </section>
            </section>
        </main>
    )
}
export default About;