import React, { useState } from 'react';

function TodoList(props) {
   const [todos, setTodos] = useState(['Learn React', 'Build a project'])
   const deleteTodo = (index) => {
      // (_, i) => filter 매서드의 콜백 함수 매개변수
      // 첫번째 매개변수 _ 는 배열의 각 요소를 의미 (지금은 사용하지 않으므로)
      // 두번쨰 매개변수 i 는 index를 의미한다.
      setTodos(todos.filter((_, i) => i !== index));
   }
   
   return (
      <div className='TodoList__layout'>
         <h1>Todo List</h1>
         <ul>
            {/* 
            <li>Learn React <button>Delete</button></li>
            <li>Build a project <button>Delete</button></li> 
            */}
            {todos.map((k, index) => (
               <li key={index}>{k}{''} 
                  <button onClick={() => deleteTodo(index)}>Delete</button>
               </li> 
            ))}
         </ul>
         <p>Typing</p>
         <div className='TodoList__flex'>
            <input type="text" placeholder='메세지 입력'/> <button>Add New Task</button>
         </div>
      </div>
   );
}

export default TodoList;