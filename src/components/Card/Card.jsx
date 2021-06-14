import React from "react";
import * as S from "./Card.style";

import Button from "../Button/Button";

const Card = ({ image, title, description }) => (
  <S.CardBlock>
    <S.CardImage src={image} />
    <S.CardTitle>{title}</S.CardTitle>
    <p>{description}</p>
    <S.CenterBlock>
      <Button color="primary">Read more</Button>
    </S.CenterBlock>
  </S.CardBlock>
);

export default Card;
