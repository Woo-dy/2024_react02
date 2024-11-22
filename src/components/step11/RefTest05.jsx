import React, { useEffect, useRef } from 'react';

function RefTest05(props) {
   const inputRef = useRef();

   // 맨 처음 한번만 실행할 때는 의존성 배열을 빈 값[] 으로 넣는다.
   useEffect(()=>{
      inputRef.current.focus();
   },[]);

   const login = () => {
      const inputValue = inputRef.current.value;
      alert(`${inputValue}님 환영합니다.`)
   }

   // Enter 키 입력 이벤트
   const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
         login(); // Enter 일때만 로그인 함수 호출
      }
   }

   return (
      <div className='RefTest05__layout'>
         <input type="text" 
            placeholder='userName'
            ref = {inputRef}
            onKeyDown={handleKeyDown} // Enter 키 입력 이벤트
         />
         <button onClick={login}>로그인</button>
      </div>
   );
}

export default RefTest05;