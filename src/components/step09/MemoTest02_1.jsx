import React, { useMemo, useState } from 'react';

function MemoTest02_1(props) {
   const [query, setQuery] = useState("")
   const items = ["apple", "banana", "cherry", "data", "elderberry", "fig", "grape"]

   // query가 변경되면 렌더링이 된다.
   // includes() 특정값을 포함하고 있으면 true를 반환
   const filterItem = useMemo(() => {
      console.log("useMemo 안")
      return items.filter((k) => k.toLowerCase().includes(query.toLowerCase()));
   }, []);

   return (
      <div className='MemoTest02_1__layout'>
         <h3>Memo 사용 예제</h3>
         <input 
            type='text'
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
         />
         <ul>
            {filterItem.map((k, index) => (
               <li key={index}>{k}</li>
            ))}
         </ul>
      </div>
   );
}

export default MemoTest02_1;