import React, { useEffect, useState } from 'react';

function EffectTest04(props) {
   const [data, setData] = useState([]); // API에서 가져온 데이터를 저장
   // 에러 상태 관리
   const [error, setError] = useState(null); // eslint-disable-line no-unused-vars

   useEffect(() => {
      // API 호출 : fetch('데이터 주소')
      // .then() : 성공했을 때
      // .catch() : 실패했을 때
      fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then((response) => {
         if (!response.ok) {
            throw new Error('Network error')
         }
         return response.json(); // 응답 데이터를 JSON 형태로 변환
      })
      .then((data)=>setData(data.slice(0, 8))) // 위에서 json 형태로 변환된 데이터를 받아 setData로 넘긴다.
      .catch((error) => setError(error.message));
   },[]);

   return (
      <div className='EffectTest04__layout'>
         <ul>
            {data.map((k)=>(
               <li key={k.id}>
                  <h3>{k.name}</h3>
                  <p>{k.price}</p>
                  <img src={k.image_link} alt={k.image_link}/>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default EffectTest04;