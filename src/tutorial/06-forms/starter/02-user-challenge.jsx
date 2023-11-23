import { useEffect, useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const [formAlert, setFormAlert] = useState(false);

  const submitHandle = (e) => {
    e.preventDefault();
    name &&
      setUsers([
        ...users,
        { id: (users.length + 1) * Math.random(), name },
      ]);

    setName("");
  };

  const removeHandle = (e) => {
    e.preventDefault();
    console.log(users.find((user) => user.name === name));
    users.find((user) => user.name === name)
      ? setUsers(users.filter((user) => user.name !== name))
      : setFormAlert(true);

    setName("");
  };

  useEffect(() => {
    const inID = setInterval(() => {
      setFormAlert(false);
      console.log("inv");
    }, 5000);

    return () => clearInterval(inID);
  }, []);

  return (
    <div>
      <form className="form" onSubmit={submitHandle}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          add user
        </button>
        <button
          className="btn btn-block"
          onClick={removeHandle}
        >
          remove user
        </button>

        {formAlert && (
          <div className="form-alert">user not found.</div>
        )}
      </form>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <button
            onClick={(e) =>
              setUsers(
                users.filter((u) => u.name !== user.name)
              )
            }
            className="btn"
          >
            remove
          </button>
        </div>
      ))}
    </div>
  );
};
export default UserChallenge;
