import { Button } from '@mui/material';
import React from 'react';

// 선언식 형식
// function Btn({name}) {
//   return (
//     <div>
//       <Button variant="contained" onClick={() => console.log(name)}>{name}</Button>
//     </div>
//   );
// }

// 표현식 형식
// 위에 내용과 같은 개념이다.
// const Btn = ({name}) => (
//   <Button variant="contained" onClick={() => console.log(name)}>{name}</Button>
// )

// const Btn = ({name}) => (
//    <Button variant="contained" 
//       onMouseEnter={() => console.log(name, "onMouseEnter")}
//       onMouseLeave={() => console.log(name, "onMouseLeave")}
//       onDoubleClick={() => console.log(name, "onDoubleClick")}
//       onContextMenu={() => console.log(name, "onContextMenu")}>{name}</Button>
// )


// which는 이벤트핸들러에서 이벤트의 유형이나 성격을 나타내는 역할
// 특정 이벤트가 발생했을 때 어느 이벤트가 발생했는지를 나타내는 문자열 값을 전달받음

// () => () : 단순히 하나의 표현식을 바로 반환할 때
// () => {} : 여러줄 코드할 때, 명시적으로 return을 표시할 때
// const headleEvent = (name, which) => {
//    console.log(name, which);
// }

// const Btn = ({name}) => (
//    <Button variant="contained" 
//       onMouseEnter={() => headleEvent(name, "onMouseEnter")}
//       onMouseLeave={() => headleEvent(name, "onMouseLeave")}
//       onDoubleClick={() => headleEvent(name, "onDoubleClick")}
//       onContextMenu={() => headleEvent(name, "onContextMenu")}
//    >{name}</Button>
// )

// e : 이벤트 객체를 말한다.
const headleEvent = (name, e) => {
   console.log(name, e);
}

const Btn = ({name}) => (
   <Button variant="contained" 
      onClick={(e) => headleEvent(name, e)}
   >{name}</Button>
)

export default Btn;