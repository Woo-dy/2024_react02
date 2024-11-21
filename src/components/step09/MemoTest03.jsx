import React, { useMemo, useState } from 'react';

const haedCalcu = (num) => {
   console.log("haedCalcu");
   for (let i = 0; i < 999999999; i++) {}

   return num + 10000;
}

const easyCalcu = (num) => {
   console.log("easyCalcu")
   return num + 10000;
}

function MemoTest03(props) {
   console.log("컴포넌트")
   const [handNumber, setHandNumber] = useState(1);
   const [easyNumber, setEasyNumber] = useState(1);

   // useMemo를 사용 
   // handNumber 값이 변경될 때만 실행 (렌더링됨)
   const handSum = useMemo(()=>{
      return haedCalcu(handNumber);
   }, [handNumber])
   
   const easySum = easyCalcu(easyNumber)

   return (
      <div className='MemoTest03__layout'>
         <h3>계산기</h3>
         <input type='number'
            value={handNumber}
            onChange={(e)=> setHandNumber(parseInt(e.target.value))}
         />
         <span> + 10000 = {handSum}</span>

         <h3>계산기</h3>
         <input type='number'
            value={easyNumber}
            onChange={(e)=> setEasyNumber(parseInt(e.target.value))}
         />
         <span> + 10000 = {easySum}</span>
      </div>
   );
}

export default MemoTest03;