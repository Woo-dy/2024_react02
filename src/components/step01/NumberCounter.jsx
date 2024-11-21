import { Button } from '@mui/material';
import React from 'react';

function NumberCounter(props) {
   function handleClick() {
      console.log('Event1');
   }

   function handleClick2() {
      console.log('Event2');
   }

   return (
      <div className='btn_layout'>
         <Button variant="contained" onClick={handleClick}>버튼1</Button>
         <Button variant="outlined" onClick={handleClick2}>버튼2</Button>
      </div>
   );
}

export default NumberCounter;