import styles from './RoutePath.module.css';
type Props = {
    name: string
}

const RoutePath = ({name}: Props) =>{
    return (
        <section className={styles.route}>
                <h2>JorgePortfolio {'ᐳ'} Pages {'ᐳ'} <span>{name}.html</span> </h2>
        </section>
    )
}
export default RoutePath;