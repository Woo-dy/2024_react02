import React, { useState } from 'react';

function Profile({name}) {
   
   const [status, setStatus] = useState('Away')

   const awayClick = () => setStatus('Away');
   const availableClick = () => setStatus('Available');

   return (
      <div className='Profile__layout'>
         <h3>Name : <span>{name}</span></h3>
         <p>Status : {status}</p>
         <button onClick={awayClick}>Set Away</button>
         <button onClick={availableClick}>Set Available</button>
      </div>
   );
}

export default Profile;