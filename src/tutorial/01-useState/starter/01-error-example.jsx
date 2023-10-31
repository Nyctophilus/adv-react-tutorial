import { useState } from "react";

const ErrorExample = () => {
  const [count, setcount] = useState(0);

  const handleINC = () => setcount(count + 1);
  const handleDEC = () => setcount(count - 1);

  return (
    <div>
      <h2>{count}</h2>
      <button
        type="button"
        className="btn"
        onClick={handleINC}
      >
        Increase
      </button>
      <button
        type="button"
        className="btn"
        onClick={handleDEC}
      >
        Decrease
      </button>
    </div>
  );
};

export default ErrorExample;
