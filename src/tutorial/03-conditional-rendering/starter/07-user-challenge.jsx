import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => setUser({ name: "medo" });
  const logout = () => setUser(null);

  return (
    <>
      {user ? (
        <>
          <h4>Hello there, {user.name} </h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h4>Please Login!</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </>
      )}
    </>
  );
};

export default UserChallenge;
