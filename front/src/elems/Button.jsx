import React from "react";
import styled, { css } from "styled-components";

export default function Button({ children, ...restProps }) {
  return <Btn {...restProps}>{children}</Btn>;
}

const Btn = styled.button`
  height: 40px;
  border-radius: 10px;
  ${({ size }) => {
    switch (size) {
      case "size1":
        return size1;
      case "size2":
        return size2;
      case "size3":
        return size3;
      default:
        break;
    }
  }}
  background-color: #ccc;

  border: ${({ border }) => {
    return border ? "1px solid var(--blue)" : "none";
  }};
  color: ${({ color }) => `var(--${color})`};
  background-color: ${({ bgcolor }) => `var(--${bgcolor})`};
`;

export const size1 = css`
  width: 100%;
  height: 60px;
  font-size: 1.2rem;
  letter-spacing: 3px;
`;
export const size2 = css`
  width: 50%;
`;
export const size3 = css`
  width: 40%;
  height: 60px;
  font-size: 1.2rem;
`;
