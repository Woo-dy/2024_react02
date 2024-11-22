import React, { useEffect, useId, useRef } from 'react';

// useId 란 고유한 ID를 생성한다.
function UseIdTest(props) {
   const id = useId();
   const inputRef = useRef();
   console.log(id);
   
   const age = useId();
   const ageRef = useRef();
   console.log(age);

   useEffect(() => {
      // 해당 방법으로 가져올 수 없다. (useRef 사용)
      // const element = document.querySelector(id);
      // console.log(element);

      
      // 값을 가져오려면 useRef 사용
      const element = inputRef.current;
      console.log(element);

      const element2 = inputRef.current;
      console.log(element2);
   }, []);

   return (
      <div className='UseIdTest__layout'>
         <label htmlFor={id}>이름</label>
         <input type="text" id={id} ref={inputRef} />

         <label htmlFor={age}>나이</label>
         <input type="text" id={age} ref={ageRef} />

         {/* 만약 여러개일 경우 */}
         <label htmlFor={`${id}-name`}>이름</label>
         <input type="text" id={`${id}-name`} ref={inputRef} />

         <label htmlFor={`${id}-age`}>나이</label>
         <input type="text" id={`${id}-age`} ref={ageRef} />
      </div>
   );
}

export default UseIdTest;