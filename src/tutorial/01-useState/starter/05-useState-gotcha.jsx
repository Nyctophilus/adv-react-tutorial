import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const incCount = () =>
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 3000);
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h3>{count}</h3>
      <button className="btn" onClick={incCount}>
        Increase count!
      </button>
    </>
  );
};

export default UseStateGotcha;
