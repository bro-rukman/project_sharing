import React, { useState } from "react";

function useCounter(params) {
  const [counter, setCounter] = useState(params);
  const handleCounter = () => {
    setCounter((currState) => currState + 1);
  };
  return { counter, handleCounter };
}
export default useCounter;
