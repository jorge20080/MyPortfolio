import { Skill } from '../../utils/skills-helper';
import Tag from '../Tag/Tag';
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
                    return <li> 
                                <Tag key={skill.id} title={skill.name}/>
                            </li>
                })}
            </ul>
        </section>
    )
}
export default SkillsList;