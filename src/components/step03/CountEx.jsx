import { Button } from '@mui/material';
import React, { useState } from 'react';

function CountEx(props) {
   // 화면은 변경되지 않는다.
   // let count = 5
   // const setCount = (num) => {
   //    count = num
   //    console.log(count);
   // }

   // 값이 변경되서 화면을 재렌더링 할 때 사용
   // useState => State를 업데이트되면 재랜더링
   // const [count, setCount] = useState(0);

   // return (
   //    <div className='count__layout'>
   //       <Button variant="outlined" onClick={() => setCount(count - 1)}>-</Button>
   //       <h2>Count : {count}</h2>
   //       <Button variant="outlined" onClick={() => setCount(count + 1)}>+</Button>
   //    </div>
   // );

   const [count, setCount] = useState(0);
   const increment = () => setCount(count + 1);
   const decrement = () => setCount(count - 1);

   return (
      <div className='count__layout'>
         <Button variant="outlined" onClick={decrement}>-</Button>
         <h2>{count}</h2>
         <Button variant="outlined" onClick={increment}>+</Button>
      </div>
   );
}

export default CountEx;