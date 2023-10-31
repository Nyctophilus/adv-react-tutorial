import { useState } from "react";
import { data } from "../../../data";

const Person = ({ name, id, remove }) => {
  const handleRemove = () => remove(id);

  return (
    <div>
      <h2>{name}</h2>
      <button
        type="button"
        className="btn"
        onClick={handleRemove}
      >
        remove
      </button>
    </div>
  );
};

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleClear = () => setPeople([]);

  const handleRemove = (id) =>
    setPeople(people.filter((p) => p.id !== id));

  return (
    <div>
      {people.map((person) => (
        <Person
          {...{
            name: person.name,
            id: person.id,
            remove: handleRemove,
          }}
          key={person.id}
        />
      ))}

      <button
        type="button"
        className="btn"
        onClick={handleClear}
        style={{ marginTop: "2rem" }}
      >
        Clear list
      </button>
    </div>
  );
};

export default UseStateArray;
