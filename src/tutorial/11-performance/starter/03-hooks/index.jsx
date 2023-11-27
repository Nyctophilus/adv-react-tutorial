import { useCallback, useMemo, useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import SlowFunc from "./SlowFunc";
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value = useMemo(() => SlowFunc(), []);
  console.log(value);

  const removePerson = useCallback(
    (id) => {
      const newPeople = people.filter(
        (person) => person.id !== id
      );
      setPeople(newPeople);
    },
    [people]
  );

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <List people={people} remove={removePerson} />
    </section>
  );
};
export default LowerState;
