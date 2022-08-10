import React from "react";
import styled, { css } from "styled-components";

export default function Input({ children, ...restProps }) {
  return <StInput {...restProps} />;
}

const StInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border: 1px solid var(--grey);
  border-radius: 10px;
  outline: none;
  :focus {
    border: 2px solid var(--blue);
  }
`;
