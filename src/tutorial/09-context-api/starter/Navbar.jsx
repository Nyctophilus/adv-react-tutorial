import { createContext, useContext, useState } from "react";
import Navlinks from "./Navlinks";

export const NavbarContext = createContext();

// custom hook
export const useAppContext = (cnx) => useContext(cnx);

const Navbar = () => {
  const [user, setUser] = useState({ name: "Medo" });
  const logout = () => setUser(null);

  return (
    <NavbarContext.Provider value={{ name: user, logout }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Context API</h1>
        <Navlinks />
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;
