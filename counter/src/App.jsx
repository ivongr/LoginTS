import { useState } from 'react'
import './App.css'
import counter from "./counter"

function App() {
  const [count,increment, decrease] = useState(0)

  const onClick = () => {
    increment,
    decrease
  }
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </>
  )
}

export default App
