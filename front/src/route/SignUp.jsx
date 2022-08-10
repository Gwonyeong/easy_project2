import React from "react";
import styled from "styled-components";
//컴포넌트

import LoginTop from "../features/login/LoginTop";
import SignUpForm from "../features/login/SingUpForm";

// 회원가입 컴포넌트
export default function SignUp() {
  return (
    <WrapSignBox>
      <LoginTop title="회원가입" />
      <SignUpForm />
    </WrapSignBox>
  );
}
const WrapSignBox = styled.div`
  width: 400px;
  height: 600px;
  margin: 100px auto;
  padding: 10px;
  background-color: var(--white);
`;
