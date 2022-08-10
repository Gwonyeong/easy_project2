import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// 컴포넌트
import Input from "../../elems/Input";
import Button from "../../elems/Button";
// 모듈
import { __login } from "../../redux/modules/loginSlice";

// 로그인 form 컴포넌트
export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 버튼 잠금 state
  const [formstate, setFromState] = useState(false);
  // data 입력 state
  const [loginData, setloginData] = useState({ email: "", password: "" });

  //input 데이터 저장하기
  const changeInput = (e) => {
    const { value, id } = e.target;
    setloginData({ ...loginData, [id]: value });
  };

  // submit 이벤트
  const submitLogin = async (e) => {
    // 새로고침 막기
    e.preventDefault();
    // 상태 받아오기 (에러로 받아져서 .....)
    const loginState = await dispatch(__login(loginData));
    console.log(loginState);
    if (loginState.type === "log/LOGIN_LOG/rejected") {
      alert("아이디 혹은 비밀번호가 틀렸습니다.");
    }
    // 로그인시 환영 인사 후 페이지 이동
    if (loginState.payload.result) {
      alert(`${loginState.payload.nickname} 님 환영합니다 :) `);
      navigate("/");
    }
  };

  React.useEffect(() => {
    // 로그인 버튼 잠금
    if (loginData.email !== "" && loginData.password !== "") {
      setFromState(true);
    } else {
      setFromState(false);
    }
  }, [loginData]);

  return (
    <WrapForm onSubmit={submitLogin}>
      <Input
        id="email"
        type="email"
        placeholder="이메일을 입력"
        required
        onChange={changeInput}
      />
      <Input
        id="password"
        type="password"
        placeholder="비밀번호 입력"
        required
        onChange={changeInput}
      />
      <Button
        type="submit"
        size="size1"
        bgcolor={formstate ? "blue" : "grey"}
        color={formstate ? "white" : "black"}
        disabled={!formstate}
      >
        로그인
      </Button>
    </WrapForm>
  );
}

const WrapForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
