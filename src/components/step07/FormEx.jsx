import React, { useState } from 'react';

function FormEx(props) {
   const [username, setUserName] = useState("")
   const [isSubScribed, setsSubScribed] = useState(false)
   const roles = ['user', 'admin', 'guest']
   const [role, setrole] = useState(roles[0])

   return (
      <form>
         <div className='FormEx__layout'>
            <p>Name : {username} {isSubScribed && '(SubScribed)'}</p>
            <p>Role : {role}</p>
            <p>
               <input 
               type="text" 
               placeholder='UserName'
               value={username}
               onChange={e => setUserName(e.target.value)} />
            </p>
            <p>
               <label><input 
               type="checkbox" checked={isSubScribed}
               onChange={e => setsSubScribed(e.target.checked)}/>
               SubScribed</label>
            </p>
            <p>
               <select 
                  value={role}
                  onChange={e=>setrole(e.target.value)}
               >
                  {
                     roles.map((k)=>(<option key={k} value={k}>{k}</option>))
                  }
               </select>
            </p>
         </div>
      </form>
   );
}

export default FormEx;