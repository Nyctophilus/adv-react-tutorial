import { useState } from "react";
import { NavbarContext, useAppContext } from "./Navbar";

const UserContainer = () => {
  const [login, setLogin] = useState(true);

  const { name, logout } = useAppContext(NavbarContext);

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        marginInlineStart: "50%",
      }}
    >
      <h5>
        {login
          ? `Hello there, ${name?.name?.toUpperCase()}`
          : "Please, Login!"}
      </h5>

      <button
        onClick={() => {
          setLogin(!login);
          logout(null);
        }}
        className="btn"
      >
        {login ? "Logout" : "Login"}
      </button>
    </div>
  );
};
export default UserContainer;
