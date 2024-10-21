import { useState } from 'react';
import { useRef } from 'react';
import './App.css';
import React from 'react';
import useCount from './counter';


function App() {
  const {count, Increment, Decrease} = useCount(0);

  //const [count, setCount] = useState(0);

  function handleClick() {
    setCount(parseInt(number.current.value));
  }
 
  const number = useRef(null);


  return (
    <>
      <input id="counter" type="number" ref={number}></input>
      <button onClick={handleClick}>Ingresar</button>
      <h1>Contador {count}</h1>
      <button className="success" onClick={Increment}>Incrementar</button>
      <button className="danger" onClick={Decrease} >Disminuir</button>
    </>
  )
}

export default App
