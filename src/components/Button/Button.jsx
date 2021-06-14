import React from "react";
import * as S from "./Button.style";

const Button = ({ color, children }) => (
  <S.Button color={color === "primary" ? "blue" : "red"}>{children}</S.Button>
);

export default Button;
