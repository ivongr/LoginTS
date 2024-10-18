import { useState } from "react";

export default function useCount(initialCount = 0) {
    const [count, setIncrement] = useState(initialCount);

   function handleClickincrement () {
        setIncrement(count => count += 1)
    };

  
    return (
      <button onclick={handleClickincrement}>
      Cantidad {count} </button>
    );
}