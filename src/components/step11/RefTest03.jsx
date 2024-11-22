import React, { useEffect, useRef, useState } from 'react';

function RefTest03(props) {
   const [count, setCount] = useState(0);
   const [count2, setCount2] = useState(0);
   const randerCount = useRef(1);

   // 방법 1
   // randerCount.current = randerCount.current + 1;
   // console.log('렌더링 수 : ', randerCount.current)

   // 방법 2 : useEffect 사용할 수 있다.
   useEffect(()=>{
      randerCount.current = randerCount.current + 1;
      console.log('렌더링 수 : ', randerCount.current);
   })

   return (
      <div className='RefTest03__layout'>
         <p>State : {count}</p>
         <button onClick={() => setCount(count + 4)}>State 올려</button>
         <button onClick={() => setCount2(count2 + 3)}>State 올려</button>
      </div>
   );
}

export default RefTest03;