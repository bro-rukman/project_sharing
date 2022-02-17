import React, { useState, useEffect, useCallback, useMemo } from "react";
import { CompUseState } from "./component/CompUseState";
import "./App.css";
import { CompUseContext } from "./component/CompUseContext";
import CompUseCallback from "./component/CompUseCallback";

function App() {
  const [inc, setInc] = useState(0);
  const [countCallback, setCountCallback] = useState(0);

  //first render
  useEffect(() => {
    console.log("render");
  }, []);
  //will render if inc have an updated value, even the first render
  // and will unmount if inc has been slaine
  useEffect(() => {
    if (inc > 0) {
      console.log(inc);
    }
    return () => {
      if (inc > 0) {
        console.log("inc has been slaine");
      }
    };
  }, [inc]);
  const action = useCallback(() => {
    setCountCallback((prev) => prev + 1);
  }, [setCountCallback]);
  //
  const dataMemo = useMemo(() => countCallback, []);
  console.log(dataMemo);
  return (
    <div>
      {/* <p>Inc : {inc}</p>
      <button onClick={() => setInc(inc + 1)}>setInc</button> */}
      <CompUseState />
      <p>Countcallback : {countCallback}</p>
      <CompUseCallback action={action} />
    </div>
  );
}

export default App;
