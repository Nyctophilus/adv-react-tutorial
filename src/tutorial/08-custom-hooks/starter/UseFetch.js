import { useEffect, useState } from "react";

const UseFetchUser = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const res = await resp.json();
        setData(res);
      } catch (error) {
        setIsError(true);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { isLoading, isError, data };
};
export default UseFetchUser;
