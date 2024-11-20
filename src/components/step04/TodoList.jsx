import React, { useState } from 'react';

function TodoList(props) {
   const [todos, setTodos] = useState(['Learn React', 'Build a Project'])
   const [newTodo, setNewTodo] = useState('')
   
   // 리스트에서 삭제하기
   const deleteTodo = (index) => {
      // (_, i) => filter 매서드의 콜백 함수 매개변수
      // 첫번째 매개변수 _ 는 배열의 각 요소를 의미 (지금은 사용하지 않으므로)
      // 두번째 매개변수 i 는 index를 의미한다.
      setTodos(todos.filter((_, i) => i !== index));
   }

   // 리스트에 추가하기
   const addTodo = () => {
      if(newTodo.trim !== '') {
         // 정보가 있을 때
         // ... : 복사를 하는 의미 (todos이 배열을 복사한다.)
         // 기존 todos 배열에 새로운 정보를 가진 newTodo를 추가한다.
         setTodos([...todos, newTodo.trim()]) 
         setNewTodo('');
      }
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
         <p>Typing : <span>{newTodo}</span></p>
         <div className='TodoList__flex'>
            {/* onChange : 글자 입력 감지 */}
            <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder='메세지 입력'/> 
            <button onClick={addTodo}>
               Add New Task
            </button>
         </div>
      </div>
   );
}

export default TodoList;