import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function Footer() {
   const {isDark, setIsDark} = useContext(ThemeContext)

   const toggleThema = () => {
      setIsDark(!isDark)
   }

   return (
      <footer className='footer' style={{
         backgroundColor: isDark ? 'black' : 'lightgray',
         color: isDark ? 'white' : 'black'
      }}>
         <button className='button' onClick={toggleThema}>Dark Mode</button>
      </footer>
   );
}

export default Footer;