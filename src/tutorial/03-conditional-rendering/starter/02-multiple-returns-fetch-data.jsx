import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setuser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await fetch(url);
        const data = await user.json();
        setIsLoading(false);
        setuser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  console.log(user);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <img src={user.avatar_url} alt={user.login} />
  );
};
export default MultipleReturnsFetchData;
