import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isloading, setIsloading] = useState(true);

  return isloading ? (
    <h1>Loading...</h1>
  ) : (
    <h2>Multiple Returns Basics</h2>
  );
};
export default MultipleReturnsBasics;
