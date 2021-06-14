import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border: 0.1rem solid #eee;
  border-radius: 0.6rem;
  color: ${(props) => props.color};
  cursor: pointer;
  padding: 0.6rem 1.2rem;
`;
