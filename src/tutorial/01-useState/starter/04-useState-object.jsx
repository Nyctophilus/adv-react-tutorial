import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Muhammed",
    age: 27,
    hobby: "Boxing",
  });

  const handlePerson = () =>
    setPerson({
      ...person,
      name: "Medo",
    });

  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys: {person.hobby}</h3>

      <button onClick={handlePerson} className="btn">
        Medo
      </button>
    </>
  );
};

export default UseStateObject;
