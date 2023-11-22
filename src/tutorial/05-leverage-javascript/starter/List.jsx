import { Person } from "./Person";
import { people } from "../../../data";

const List = () => {
  function undefined({}) {
    return (
      <li>
        <h3>{person.name}</h3>
      </li>
    );
  }
  return (
    <ul>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </ul>
  );
};
export default List;
