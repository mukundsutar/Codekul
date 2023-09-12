import React, { useState } from "react";

function Statte(){

    const [count, setCount] = useState(5);

    const add=()=>{
        setCount(count+1);
    }

    const sub=()=>{
        setCount(count-1);
    }

  return (
    <>
    <div className="buttonDiv">
      <button onClick={add}> + </button>
      <button onClick={sub}> - </button>
    </div>
      <p>My value: {count}</p>
    </>
  );
}

export default Statte;
