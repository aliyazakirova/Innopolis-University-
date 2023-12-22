import React from "react";
import { CardWrapper } from "./Styled.card";

const Card = (props) => {
  const { description, image, name, price } = props;
  return (
    <CardWrapper>
      <img src={image} className="card__image" alt="" />
      <h2 className="card__header">{name}</h2>
      <p className="card__description">{description}</p>
      <p>price: {price}</p>
    </CardWrapper>
  );
};

export default Card;
