import Header from '../../components/Header/Header';
import OpenedTabLayout from '../../components/OpenedTabLayout/OpenedTabLayout';
import styles from './Projects.module.css';
import projects from '../../data/projects.json';
import ProjectList from '../../components/ProjectList/ProjectList';

const Projects = () =>{
    return (
        <>
            <OpenedTabLayout name="home"/>
            <Header />
            <section className={styles.container}>
                <h1>Projects</h1>
                <ProjectList projects={projects} />
            </section>
        </>
    )
}
export default Projects;