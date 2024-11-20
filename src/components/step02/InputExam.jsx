import { TextField } from '@mui/material';
import React from 'react';

function InputExam(props) {
   return (
      <div className='InputExam'>
         <input type='text' className='input__Text' onFocus={() => console.log('onFocus')} onBlur={() => console.log('onBlur')} placeholder='글을 입력해주세요.'/>  <br />

         {/* 
            해당 입력요소의 값이 바뀔 때 발생, 이벤트가 발생한 요소를 가리킨다. 
         */}
         <TextField id="outlined-basic" label="Outlined" variant="outlined" 
         onClick={(e) => console.log(e.target.value)}/> <br />

         <TextField id="standard-basic" label="Standard" variant="standard" 
         onClick={(e) => console.log(e.key,'UP')}/> <br />
      </div>
   );
}

export default InputExam;