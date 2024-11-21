import React, { useCallback, useEffect, useState } from 'react';

function CallBackTest02(props) {
   const [number, setNumber] = useState(0);

   // useEffect에서 input에서 증가/감소 클릭할 때마다 리렌더링이 되면
   // someFunction 의 객체(함수) 새로 생성 되면서 변경된 것을 감지한다.
   // const someFunction = () => {
   //    console.log(`someFunc : number : ${number}`);
   //    return;
   // }

   // useCallback은 함수를 자체를 저장한다.
   // 버튼을 누르면 "someFunc : number : 0" 나온다.
   // 이유는 useCallback 저장할 당시 number는 0이였다.
   
   // const someFunction = useCallback(() => {
   //    console.log(`someFunc : number : ${number}`);
   //    return;
   // }, []);

   // 해결책) 숫자를 나오게 해주고 싶으면 의존성 배열[] 안에 [number] number를 넣어주면 해결된다.
   const someFunction = useCallback(() => {
      console.log(`someFunc : number : ${number}`);
      return;
   }, [number]);

   useEffect(()=>{
      console.log("someFunc 변경 되었네요.")
   }, [someFunction])

   return (
      <div className='CallBackTest02__layout'>
         <input 
            type="number"
            value={number}
            onChange={(e)=>setNumber(e.target.value)}
         />
         <button onClick={someFunction}>someFunction 함수 호출</button>
      </div>
   );
}

export default CallBackTest02;