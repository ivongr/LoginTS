import { useState } from "react";

export default function useCount(initialCount = 0) {
  
    const [count,setCount] = useState(initialCount);
    
    function handleClick() {
      setCount(parseInt(number.current.value));
    }
   
    const Increment = () => {
      setCount(count => count += 1)
    };
  
    const Decrease = () => {
      setCount(count => count -= 1)
    }
  
    const number = useRef(null);
  
    return {
      count,
      Increment,
      Decrease
    };
}