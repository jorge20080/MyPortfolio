import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import WindowBar from "../WindowBar/WindowBar";
import styles from './RootLayout.module.css';

const RootLayout = () =>{
    return (
        <>
            <WindowBar/>
            <div className={styles.container}>
                <NavigationBar/>
                <Outlet />
            </div>
        </>
    )
}
export default RootLayout;