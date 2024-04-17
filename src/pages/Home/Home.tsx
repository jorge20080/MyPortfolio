import OpenedTabLayout from '../../components/OpenedTabLayout/OpenedTabLayout';
import profileImage from '../../assets/profilepic4.png';
import pdf from '../../assets/JorgeResume.pdf';
import styles from './Home.module.css';
import Typewriter from 'typewriter-effect';
import Header from '../../components/Header/Header';

const Home = () =>{
    return (
        <>
            <main className={styles.container}>
                <OpenedTabLayout name="home"/>
                <Header />
                <div className={styles.content_container}>
                    <img src={profileImage} />
                    <div className={styles.text_content}>
                        <h2> 
                            <span className={styles.hello}>Hello, I'm </span> 
                            <span className={styles.first}>J</span>orge <span className={styles.first}>L</span>uis <span className={styles.first}>D</span>e <span className={styles.first}>L</span>os <span className={styles.first}>S</span>antos <span className={styles.first}>R</span>eyes 
                        </h2>
                        <Typewriter
                            onInit={(typewriter)=>{
                                typewriter
                                    .typeString("Frontend Developer")
                                    .deleteAll()
                                    .typeString("Backend Developer")
                                    .deleteAll()
                                    .typeString("Software Automation Engineer")
                                    .deleteAll()
                                    .start()
                            }}
                            options={{
                                delay: 100,
                                loop:true
                            }}
                        />
                        <a href={pdf} target='_blank' >Resume</a>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Home;