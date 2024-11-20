import React, { useState } from 'react';
import TempInput from './TempInput';
import TempRadio from './TempRadio';

function TempEx(props) {
   const [unit, setUnit] = useState("Celsius")
   const [temperature, setTemperature] = useState("")
   const convertedTemp = (unit === "Celsius")
      ? (temperature * 9/5 + 32).toFixed(1) // 섭씨 구하는 공식
      : ((temperature- 32) * 5/9).toFixed(1) // 화씨 구하는 공식

   return (
      <div className='Temp__layout'>
         <h1>Temperature Converter</h1>
         <h2>화씨/ 섭씨 변환기</h2>
         <p>
            <span>Converted:</span> {temperature ? convertedTemp : "--"}
            {unit === "Fahrenheit" ? "°C" : "°F"}
         </p>

         {/* state 들의 값을 변경하는 요소들이 모두 자식 컴포넌트에게  */}
         <TempInput 
            value={temperature}
            unit={unit}
            onChange={setTemperature}
         />

         {/* 
            setter 함수를 자식에게 넘긴다. 
            자식 컴포넌트가 부모 컴포넌트 stats를 제어
         */}
         <TempRadio unit={unit} onUnitChange={setUnit}  />
      </div>
   );
}

export default TempEx;