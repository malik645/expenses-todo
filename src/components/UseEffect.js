import React, { useState, useEffect } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);
useEffect (()=>{
    document.title = `chat(${count})`
});
  return <div>
        <p>You clicked {count} times</p>
      <button className = "btn btn-primary" onClick={() => setCount(count + 1)}>
        Click me
      </button>
  </div>;
};

export default UseEffect;
