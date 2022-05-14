import { useState, useEffect } from 'react'; 

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        // see if there is a value in local storage
        // if so, return it using JSON.parse
        try {
            const localValue = window.localStorage.getItem(key); 
            return localValue ? JSON.parse(localValue) : initialValue;
        } catch (error) {
            return initialValue; 
        }
    });
    
    // if anything changes, save it to local storage
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value)); 
    }, [key, value]); 
    
    return [value, setValue];
}; 

export default useLocalStorage; 