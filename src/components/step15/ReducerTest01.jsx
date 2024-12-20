import React, { useReducer } from 'react';

// useReducer는 React의 상태관리 훅, 복잡한 상태 변화를 더 명확하고 예측 가능하게 관리할 수 있도록 도와준다.
// 상태 관리 로직을 컴포넌트에서 분리하여 코드 가독성을 높인다.

// reducer  -> state를 업데이트하는 함수
// dispatch -> state 업데이트를 위한 요구
// action   -> 요구의 내용, Type가 Payload 가 있다.

function reducer(state, action) {
   // eslint-disable-next-line default-case
   switch (action.type) {
      case "add" : return state + action.payload; // 현재상태(state)에 payload 더하기
      case "sub" : return state - action.payload; // 현재상태(state)에 payload 빼기
      case "reset" : return 0;
   }
}

function ReducerTest01(props) {
   // useReducer (위에 reducer 함수이름, 초기값)
   const [number, dispatch] = useReducer(reducer, 0)

   return (
      <div className='ReducerTest01__layout'>
         <p>Count : {number}</p>
         {/* 구분하기 위해서 Type 존재한다. action이나, 요청에 포함되는 데이 또는 정보를 의미 */}
         <button onClick={() => dispatch({type : "add", payload : 1})}> + </button>
         <button onClick={() => dispatch({type : "sub", payload : 1})}> - </button>
         <button onClick={() => dispatch({type : "reset"})}> Reset </button>
      </div>
   );
}

export default ReducerTest01;