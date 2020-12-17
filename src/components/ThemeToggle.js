import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
 
const ThemeToggle = () => {
    const themeContext = useContext(ThemeContext)
    return (  
        <button onClick={themeContext.toggleTheme}>Toggle the theme</button>
    )
}
 
export default ThemeToggle;
