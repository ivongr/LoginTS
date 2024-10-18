import { useState } from 'react'
import './App.css'
import counter from "./counter"


function App() {
  const [btnIncrement, setIncrement] = useState(0);

  const handleClick = (event) => {
    setIncrement(count => count += 1)
};

const decrease = () => {
    setCount(count => count -= 1)
}
  
  const onClick = () => {
    increment,
    decrease
  }
  return (
    <>
      {count}
      <button onClick={handleClick}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </>
  )
}

export default App
