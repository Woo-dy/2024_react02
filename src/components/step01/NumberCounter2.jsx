import React from 'react';
import Btn from './Btn';

function NumberCounter2(props) {
   return (
      <div className='btn_layout2'>
         <Btn name={'Home'} />
         <Btn name={'Store'} />
         <Btn name={'Content'} />
      </div>
   );
}

export default NumberCounter2;