import React from "react";
import * as S from "./CardList.style";

import Card from "../Card/Card";

const CardList = ({ cards }) => (
  <S.CardListBlock>
    {cards.map((card) => (
      <Card
        image={card.image}
        title={card.title}
        description={card.description}
      />
    ))}
  </S.CardListBlock>
);

export default CardList;
