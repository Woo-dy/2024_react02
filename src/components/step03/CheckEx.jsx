import { Button } from '@mui/material';
import React, { useState } from 'react';

function CheckEx(props) {
   const [isPinned, setPinned] = useState(false)

   const togglePinned = () => {
      setPinned(!isPinned);
   }

   return (
      <div className='Check__layout'>
         <Button variant="outlined" onClick={togglePinned}>
            Pinn This! {isPinned && 'V'}
         </Button>
      </div>
   );
}

export default CheckEx;