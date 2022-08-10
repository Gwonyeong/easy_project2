import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 로그인 & 회원가입 상단 메세지, 뒤로가기 버튼 컴포넌트
export default function LoginTop({ title }) {
  const navigate = useNavigate();

  return (
    <WrapTopLogin>
      <BackBtn
        onClick={() => {
          navigate(-1);
        }}
      >
        &#10602;
      </BackBtn>
      <h2>{title}</h2>
    </WrapTopLogin>
  );
}

const WrapTopLogin = styled.div`
  position: relative;
  margin: 20px 0 50px 0;
`;
const BackBtn = styled.button`
  position: absolute;
  left: 0;
  border: none;
  background-color: var(--white);
  font-size: 2rem;
`;
