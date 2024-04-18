export const getDarkModeValue = () :boolean|null => {
    let value = localStorage.getItem('dark-mode');
    if(value!==null){
        return JSON.parse(value);
    }
    return null;
}
export const setDarkModeValue = (value: boolean) => {
    localStorage.setItem('dark-mode', JSON.stringify(value));
}
