import React from 'react';

function Main({isDark}) {
   return (
      <section className='content' style={{
         backgroundColor: isDark ? 'black' : 'lightgray',
         color: isDark ? 'white' : 'black'
      }}>
         <p>손흥민1님, 좋은 하루 되세요.</p>
      </section>
   );
}

export default Main;