import { createContext, ReactNode, useContext, useState } from "react";

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
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () =>{
        setDarkMode(prev=>!prev);
    }
    return <darkModeContext.Provider value={{isDark: darkMode, toggleDarkMode:toggleDarkMode}}>{children}</darkModeContext.Provider>
}
export default DarkModeProvider;