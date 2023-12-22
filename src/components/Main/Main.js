import React from "react";
import Card from "../Card/Card";
import { Spinner } from "../Spinner/Styled.spinner";
import { useFetch } from "./../customHooks/useFetch"

const Main = () => {
  const [goods, isLoading] = useFetch('https://6585ddb1022766bcb8c97887.mockapi.io/menu-restaurant')

  return (
    <>
      <h2>Items list</h2>
      <main style={{ display: "flex", flexWrap: "wrap", gap: "5%" }}>
        {goods.length > 0 &&
          goods.map(({ id, image, name, description, price }) => (
            <Card
              key={id}
              image={image}
              name={name}
              description={description}
              price={price}
            />
          ))}
      </main>
      {isLoading && <Spinner />}
    </>
  );
};

export default Main;
