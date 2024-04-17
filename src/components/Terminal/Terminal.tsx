import styles from './Terminal.module.css';

const Terminal = () =>{
    return(
        <section className={styles.terminal} >
            <ul>
                <li>Problems</li>
                <li>Output</li>
                <li>Debug</li>
                <li>Terminal</li>
            </ul>
            <div>JorgePortfolio % running at <span>http://localhost:5173</span></div>
        </section>
    )
}
export default Terminal;