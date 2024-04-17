import ExperienceCard, { EducationExperience, WorkExperience } from "../ExperienceCard/ExperienceCard";
import styles from './ExperienceList.module.css';

type Props = {
    title: string,
    educationList?: EducationExperience[],
    workList?: WorkExperience[]
}
const ExperienceList = ({title, educationList, workList}: Props) =>{
    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <ul>
                {educationList?.map(education=>{
                    return <ExperienceCard key={education.id} educationDetails={education}/>
                })}
                {workList?.map(education=>{
                    return <ExperienceCard key={education.id} workDetails={education}/>
                })}
            </ul>
        </div>
    )
}
export default ExperienceList;