import React, { useState } from 'react';
import Profile from './Profile';

function ProfileEx({name}) {
   const users = ['손흥민', '이재성', '김민재']
   const [user, setUser] = useState(users[0])

   const [isstatus, setStatus] = useState(true)
   return (
      <div className='User__Profile__layout'>
         <h2>User Profile</h2>
         <button onClick={()=>setStatus(!isstatus)}>Toggle Status</button>
         <button onClick={()=>setUser(
            users[(users.indexOf(user) + 1) % users.length]
         )}>Switch user</button>
         <p>
            상태 : {isstatus ? 'Active':'Inactive'}
         </p>
         <Profile name={user} />
      </div>
   );
}

export default ProfileEx;