import React, { useState } from "react";
import useCounter from "./useCounter";
import useFetch from "./useFetch";
import { url } from "../service/api";

export const CompUseState = ({}) => {
  console.log("render compusestate");
  const [count, setCount] = useState(0);
  //custom hooks
  const { counter, handleCounter } = useCounter();
  const [init, setInit] = useState({
    name: "hello",
    age: 0,
  });
  // console.log(init);
  const initSetter = () => {
    setInit({
      name: "World",
      age: 20,
    });
    // setInit({
    //   age: 20,
    // });
    // setInit({
    //   ...init,
    //   age: 20,
    // });
  };
  const setStateBreakdown = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  const data = useFetch(`${url}/todos`);
  // console.log(data);
  return (
    <div>
      <p>name : {init.name}</p>
      <p>age : {init.age}</p>
      <button onClick={initSetter}>set Init</button>
      <p>count {count}</p>
      <button onClick={setStateBreakdown}>setCount</button>
      <p>counter {counter}</p>
      <button onClick={handleCounter}>handleCount</button>
    </div>
  );
};
