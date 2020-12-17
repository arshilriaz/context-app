import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (  
        <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                <li>the way of kings</li>
                <li>the lord of the rings</li>
                <li>harry potter</li>
            </ul>
        </div>
    )
}
 
export default BookList;
