import URLNavBar from '../URLNavBar/URLNavBar';
import styles from './OpenedTabLayout.module.css';
type Props = {
    name: string
}
const OpenedTabLayout = ({name}:Props) =>{
    return(
        <div className={styles.container}>
            <section>
                <h1><span>{name}.html</span> <a>×</a></h1>
            </section>
            <URLNavBar name={name}/>
        </div>
    )
}
export default OpenedTabLayout;