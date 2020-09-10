import React, {useState} from 'react';
import './App.css';
import {getValue} from './store/action';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const [inputVal, setInputVal]=useState('');
  const dispatch = useDispatch();
  const data= useSelector(state=>state.input.data);

  const list= data.map((item, i)=>(
    <li key={i}>{item}</li>
  ))
  const valueHandler=()=>{
    dispatch(getValue(inputVal));
    setInputVal('')
  }

  return (
    <div className="App">
     <input type='text' value={inputVal} onChange={(e)=>setInputVal(e.target.value)} />
     <button onClick={valueHandler}>SUBMIT</button>
     <ul>
       {list}
     </ul>
    </div>
  );
}

export default App;
