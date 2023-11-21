import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setname] = useState("medo");

  return (
    <>
      <h2>short circuit overview</h2>

      <h4>{name || text}</h4>
      <h4>{name && text}</h4>
    </>
  );
};
export default ShortCircuitOverview;
