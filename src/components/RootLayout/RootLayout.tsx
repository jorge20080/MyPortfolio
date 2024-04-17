import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Terminal from "../Terminal/Terminal";
import WindowBar from "../WindowBar/WindowBar";
import styles from './RootLayout.module.css';

const RootLayout = () =>{
    return (
        <>
            <WindowBar/>
            <div className={styles.container}>
                <NavigationBar/>
                <main>
                    <Outlet />
                    <Terminal/>
                </main>
            </div>
        </>
    )
}
export default RootLayout;