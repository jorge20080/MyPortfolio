import { Skill } from '../../utils/skills-helper';
import styles from './SkillsList.module.css';

type Props = {
    title: string,
    skillsList: Skill[]
}
const SkillsList = ({title, skillsList}:Props) =>{
    return (
        <section className={`${styles.container} ${styles.skills}`}>
            <h3>{title}</h3>
            <ul>
                {skillsList.map(skill=>{
                    return <li key={skill.id}>{skill.name}</li>
                })}
            </ul>
        </section>
    )
}
export default SkillsList;