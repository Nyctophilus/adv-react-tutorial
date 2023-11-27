const Person = ({ name, remove, id }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button className="btn" onClick={() => remove(id)}>
        remove
      </button>
    </div>
  );
};
export default Person;
