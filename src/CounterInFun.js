import React, { useState } from "react";

function CounterInFun() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setLoggedIn] = useState(true);

  // const increment=()=>{
  //     setCount(count+1)
  // }
  // const decrement=()=>{
  //     setCount(count-1)
  // }

  // const reset=()=>{
  //     setCount(0)
  // }

  //conditional rendering

  //if else
  const conditionalButton = () => {
    if (isLoggedIn) {
      return <button className="btn btn-secondary">Logout</button>;
    } else {
      return <button className="btn btn-info">Login</button>;
    }
  };

  console.log(Math.floor(Math.random() * 100));

  return (
    <div>
      <div className="text-center">
        <h1>Counter App</h1>
        <h2>count:{count}</h2>
        <div className="d-flex flex-row justify-content-around mt-5">
          <button
            className="btn btn-success"
            onClick={() => setCount(count + 1)}
            type="button"
          >
            Increment
          </button>
          <button className="btn btn-danger" onClick={() => setCount(0)}>
            Reset
          </button>
          <button className="btn btn-info" onClick={() => setCount(count - 1)}>
            Decrement
          </button>
        </div>
        {/* {conditionalButton()} */}

        {/* {isLoggedIn ? <p>true</p>:<h1>false</h1>} */}
        {isLoggedIn && <p>True</p>}
        {!isLoggedIn && <h2>false</h2>}
      </div>
    </div>
  );
}

export default CounterInFun;
