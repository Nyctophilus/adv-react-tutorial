import UserContainer from "./UserContainer";

const Navlinks = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        flex: "1",
        marginInlineStart: "1rem",
      }}
    >
      <a href="#Home">Home</a>
      <a href="#About">About</a>

      <UserContainer />
    </div>
  );
};
export default Navlinks;
