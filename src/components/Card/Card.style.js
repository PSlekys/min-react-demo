import styled from "styled-components";

export const CardBlock = styled.div`
  border: 0.1rem solid #eee;
  box-sizing: border-box;
  margin: 0.5rem;
  padding: 1rem;
  width: calc(25% - 1rem);
`;

export const CardImage = styled.img`
  max-height: 5rem;
  object-fit: cover;
  width: 100%;
`;

export const CardTitle = styled.h2`
  font-size: 1.2rem;
  text-align: center;
`;

export const CenterBlock = styled.div`
  text-align: center;
`;
