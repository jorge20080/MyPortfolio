import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import styles from './Header.module.css';
const Header = () =>{
    const {isDark, toggleDarkMode} = useDarkModeContext();
    const handleDarkModeChange = () =>{
        toggleDarkMode();
    }
    return (
        <>
            <Link to='/'><p className={styles.logo}>JL<span>DR</span></p></Link>
            <input type="checkbox" className={styles.toggle} onChange={handleDarkModeChange} checked={isDark}/>
        </>
    )
}
export default Header;