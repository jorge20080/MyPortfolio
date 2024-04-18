import { createContext, ReactNode, useContext, useState } from "react";
import { getDarkModeValue, setDarkModeValue } from "../utils/localStorage-helper";

type Props = {
    children:ReactNode
}
type DarkMode = {
    isDark: boolean,
    toggleDarkMode: ()=>void
}
const darkModeContext = createContext({} as DarkMode)

export const useDarkModeContext = ()=> useContext(darkModeContext);

const DarkModeProvider = ({children}:Props) =>{
    let storedDarkModeValue = getDarkModeValue() ?? false;
    const [darkMode, setDarkMode] = useState(storedDarkModeValue);
    const toggleDarkMode = () =>{
        setDarkModeValue(!darkMode);
        setDarkMode(prev=>!prev);
    }
    return <darkModeContext.Provider value={{isDark: darkMode, toggleDarkMode:toggleDarkMode}}>{children}</darkModeContext.Provider>
}
export default DarkModeProvider;