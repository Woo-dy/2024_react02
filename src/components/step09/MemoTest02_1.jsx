import React, { useState } from 'react';

function MemoTest02_1(props) {
   const [query, setQuery] = useState("")
   const items = ["apple", "banana", "cherry", "data", "elderberry", "fig", "grape"]

   return (
      <div className='MemoTest02_1__layout'>
         <h3>Memo 사용 예제</h3>
      </div>
   );
}

export default MemoTest02_1;