import React from 'react';

function TempInput({value, unit, onChange}) {
   return (
      <div className='TempInput__layout'>
         <input 
            type="number" 
            value={value}  
            onChange={(e)=>onChange(e.target.value)}
            placeholder='In Celsius'
         /> <span>{unit}</span>
      </div>
   );
}

export default TempInput;