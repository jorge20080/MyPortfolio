import Header from '../../components/Header/Header';
import OpenedTabLayout from '../../components/OpenedTabLayout/OpenedTabLayout';
import styles from './Contact.module.css';

const Contact = () =>{
    return (
        <>
            <OpenedTabLayout name="home"/>
            <Header />
            <section className={styles.container}>
                <h1>Contact Me</h1>
                <div className={styles.content_container}>
                    <form>
                        <fieldset>
                            <legend>contact</legend>
                            <label>
                                First Name
                                <input />
                            </label>
                            <label>
                                Last Name
                                <input />
                            </label>
                            <label>
                                Email
                                <input type="email"/>
                            </label>
                            <label>
                                Phone Number
                                <input />
                            </label>
                            <label>
                                Message
                                <textarea></textarea>
                            </label>
                            <input type="submit" value="Send"/>
                        </fieldset>
                    </form>
                    <aside>
                        <h2>Email</h2>
                        <a href='mailto:jorge20080@hotmail.com'>jorge20080@hotmail.com</a>
                        <h2>Phone Number</h2>
                        <a href='tel:226-346-1008'>226-346-1008</a>
                        <h2>LinkedIn</h2>
                        <a href="linkedin.com/in/jorge-luis-de-los-santos-reyes-a388764b/" target="_blank">LinkedIn</a>
                        <h2>GitHub</h2>
                        <a href="https://github.com/jorge20080" target="_blank">GitHub</a>
                    </aside>
                </div>
            </section>
        </>
    )
}
export default Contact;