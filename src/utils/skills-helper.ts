import skillsList from '../data/skills.json';

export const getTechSkills = () =>{
    return skillsList.filter(skill=>skill.type==="Technical");
}
export const getSoftSkills = () =>{
    return skillsList.filter(skill=>skill.type=="Soft");
}
export const getOtherSkills = () =>{
    return skillsList.filter(skill=>skill.type=="Other");
}
export type Skill = {
    id: number
    name: string,
    type: string
}