import { Outlet } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import NavigationBar from "../NavigationBar/NavigationBar";
import Terminal from "../Terminal/Terminal";
import WindowBar from "../WindowBar/WindowBar";
import styles from './RootLayout.module.css';

const RootLayout = () =>{
    const {isDark} = useDarkModeContext();
    return (
        <>
            <WindowBar/>
            <div className={styles.container} data-theme={isDark? "dark": undefined}>
                <NavigationBar/>
                <main data-theme="">
                    <Outlet />
                    <Terminal/>
                </main>
            </div>
        </>
    )
}
export default RootLayout;