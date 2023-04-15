import React from "react";
import myStore from "../Redux/Store";
import { useSelector } from "react-redux";
import "./Counter.css";
function Counter() {
  const add = () => {
    myStore.dispatch({
      type: "increment",
    });
  };
  const sub = () => {
    myStore.dispatch({
      type: "decrement",
    });
  };
  const res = () => {
    myStore.dispatch({
      type: "reset",
    });
  };

  const dt = useSelector((storedata) => {
    return storedata;
  });
  return (
    <div style={{ margin: "20px auto" }}>
      <h1>Counter : {dt}</h1>
      <div className="btn_container">
        <button onClick={add}>Increment</button>
        <button onClick={sub}>Decrement</button>
        <button onClick={res}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
