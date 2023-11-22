export function Person({ id, name, nickName, images }) {
  const img = images?.[0]?.small?.url;

  return (
    <li>
      {img && (
        <img
          src={img}
          alt={nickName || name}
          style={{ width: "70px", borderRadius: "50%" }}
        />
      )}

      <h3>{name}</h3>
      {nickName && <h5>Nickname: {nickName}</h5>}
    </li>
  );
}
