import React, { useRef, useState } from 'react';

// useRef가 하는 일 
// 1. 값의 유지 : 값의 변화를 추적하지만 값이 변경되더라도 렌더링이 되지 않는다.
//               불필요한 렌더링 방지
// 2. DOM 요소 참조
function RefTest01(props) {
   const [count, setCount] = useState(0);
   const conutRef = useRef(5);

   // Ref의 값을 호출할 때는 current (현재값 기억)
   console.log("count : ", count, "countRef : " + conutRef.current);

   const statePlus = () => {
      setCount(count + 1);
   }

   const refPlus = () => {
      conutRef.current = conutRef.current + 1;
      console.log("count-안 : ", count, "countRef-안 : " + conutRef.current);
   }

   return (
      <div className='RefTest01__layout'>
         <p>State : {count}</p>
         <p>Ref : </p>
         <button onClick={statePlus}>State 올려</button>
         {/* useRef는 렌더링을 하지 않아서 화면 숫자는 그대로 */}
         <button onClick={refPlus}>Ref 올려</button>
      </div>
   );
}

export default RefTest01;