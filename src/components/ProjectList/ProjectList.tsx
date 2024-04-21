import ProjectCard, { Project } from '../ProjectCard/ProjectCard';
import styles from './ProjectList.module.css';

type Props = {
    projects: Project[]
}
const ProjectList = ({projects}: Props) =>{
    return(
        <ul className={styles.container}>
            {projects.map(project=>{
                return <li><ProjectCard project={project} /></li>
            })}
        </ul>
    )
}
export default ProjectList;