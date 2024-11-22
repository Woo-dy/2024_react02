import React from 'react';

function Footer({isDark, setIsDark}) {
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