import styles from './Tag.module.css';

type Props = {
    title: string
}

const Tag = ({title}:Props) =>{
    return <div className={styles.tag}>{title}</div>
}
export default Tag;