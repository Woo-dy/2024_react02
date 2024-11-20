import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './common.css';
import reportWebVitals from './reportWebVitals';
import FormEx from './components/step07/FormEx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <NumberCounter /> */}
    {/* <NumberCounter2 /> */}
    {/* <InputExam /> */}
    {/* <CountEx /> */}
    {/* <CheckEx /> */}
    {/* <TodoList /> */}
    {/* <ProfileEx /> */}
    {/* <TempEx /> */}
    <FormEx />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
