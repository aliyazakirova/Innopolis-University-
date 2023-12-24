import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const CardPage = () => {
  const [good, setGood] = useState("");
  const { goodId } = useParams();

  useEffect(() => {
    fetch(
      `https://6585ddb1022766bcb8c97887.mockapi.io/menu-restaurant/${goodId}`
    )
      .then((res) => res.json())
      .then((data) => setGood(data));
  }, []);
  return (
    <>
      {good === "" && null}
      {good !== "" && (
        <>
          <h1>{good.name}</h1>
          <div> {good.description}</div>
        </>
      )}
    </>
  );
};
