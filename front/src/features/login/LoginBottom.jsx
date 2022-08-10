import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// 컴포넌트

// 로그인 하단 버튼 컴포넌트
export default function LoginBottom() {
  const navigate = useNavigate();
  return (
    <WrapBtn>
      <Btn
        size="size1"
        onClick={() => {
          navigate("/");
        }}
      >
        로그인 없이 보기
      </Btn>
      <Btn
        size="size2"
        onClick={() => {
          navigate("/sign");
        }}
      >
        회원가입
      </Btn>
    </WrapBtn>
  );
}

const WrapBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Btn = styled.button`
  padding: 0 20px;
  border: none;
  background-color: var(--white);

  :first-child {
    border-right: 1px solid var(--grey);
  }
  :last-child {
    font-weight: bolder;
    color: var(--blue);
  }
`;
