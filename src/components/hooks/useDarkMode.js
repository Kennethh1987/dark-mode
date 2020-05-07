import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, invitialValue) => {

    const [storedValue, setStoredValue] = useLocalStorage('darkmode', Boolean);

    useEffect(() => {
        storedValue ? document.querySelector('body').classList.add('dark-mode')
        : document.querySelector('body').classList.remove('dark-mode')
    }, [storedValue])

    const toggleDarkMode = () => {
        setStoredValue(!storedValue)

    }
    return [storedValue, toggleDarkMode]
}