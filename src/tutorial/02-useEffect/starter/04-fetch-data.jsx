import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const json = await data.json();

        setUsers(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(users);
  return (
    <>
      <h1>fetch data example</h1>
      <h2>GitHub Users</h2>
      {users.map(({ id, login, avatar_url, repos_url }) => (
        <li key={id}>
          <img src={avatar_url} alt={login} />
          <h3>{login}</h3>
          <a href={repos_url}>Profile</a>
        </li>
      ))}
    </>
  );
};
export default FetchData;
