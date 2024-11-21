import React, { useState } from 'react';

function EffectTest01(props) {
   // 화면이 렌더링이 되지 않는다.
   // let count = 5;
   // const setCount = (num) => {
   //    count = num;
   //    console.log(count);
   // }

   // useState를 사용해야 화면이 렌더링 된다.
   // const [count, setCount] = useState(초기값);
   const [count, setCount] = useState(5);

   return (
      <div className='EffectTest01__layout'>
         <p>총 {count}번 출력했습니다.</p>
         <button onClick={() => setCount(count + 1)}>클릭</button>
      </div>
   );
}

export default EffectTest01;