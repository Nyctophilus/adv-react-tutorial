import { useState } from "react";

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h2>toggle challenge</h2>
      <button
        className="btn"
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </button>
      {toggle ? <p>truethY!</p> : <p>Falsey!</p>}
    </>
  );
};

export default ToggleChallenge;
