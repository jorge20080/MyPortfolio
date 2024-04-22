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
                    </fieldset>
                </form>
            </section>
        </>
    )
}
export default Contact;