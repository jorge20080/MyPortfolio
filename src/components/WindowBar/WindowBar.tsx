import styles from './WindowBar.module.css';
const WindowBar = () =>{
    return(
        <section className={styles.window}>
            <div>
                <div className={styles.close}></div>
                <div className={styles.minimize}></div>
                <div className={styles.maximize}></div>
            </div>
            <span>JorgePortfolio</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#383838" d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z"/></svg>
        </section>
    )
}
export default WindowBar;