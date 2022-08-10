import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
//모듈
import { logOutUser, __checkToken } from "../redux/modules/loginSlice";

const Header = () => {
  const checkToken = useSelector((state) => state.login.user.result);
  const alarmList = useSelector((state) => state.alarm);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alarmState, setAlarmState] = useState(false);
  const localToken = localStorage.getItem("token");

  const logOut = () => {
    alert("정상 로그아웃 되었습니다.");
    localStorage.removeItem("token");
    dispatch(logOutUser());
    navigate("/");
  };

  React.useEffect(() => {
    if (localToken) {
      dispatch(__checkToken());
    }
  }, [localToken]);

  const countNewAlarm = (list) => {
    let count = 0;
    list.forEach((v) => {
      if (!v.state) count++;
    });
    return count;
  };

  return (
    <header>
      <Wrap>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Music in my Life
        </Link>
        <WrapSearch></WrapSearch>
        <WrapLogBtn>
          {checkToken ? (
            <>
              <LogoutBtn onClick={logOut}>로그아웃</LogoutBtn>
            </>
          ) : (
            <>
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                <button>로그인</button>
              </Link>
              <Link to={"/sign"} style={{ textDecoration: "none" }}>
                <button>회원가입</button>
              </Link>
            </>
          )}
        </WrapLogBtn>
      </Wrap>

      <BtnWrap>
        <TopBtn
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        ></TopBtn>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <HomeBtn></HomeBtn>
        </Link>
        <PostBtn
          onClick={() => {
            checkToken ? navigate("/post") : alert("로그인하고 이용해주세요!");
          }}
        ></PostBtn>
        <BotBtn
          onClick={() => {
            window.scrollTo({ top: 5000, left: 0, behavior: "smooth" });
          }}
        ></BotBtn>
      </BtnWrap>
    </header>
  );
};
const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 20px;
  position: fixed;
  top: 0;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid var(--greyD);
  background-color: #eef;
`;

const WrapLogBtn = styled.div`
  display: flex;
  width: 200px;
  gap: 10px;
  & > a {
    & button {
      width: 100px;
      height: 40px;
      background-color: rgba(0, 0, 0, 0);
      border: none;
    }
    &:first-child button {
      border-right: 1px solid var(--grey);
      color: var(--blue);
      font-weight: 500;
    }
  }
`;

const BtnWrap = styled.div`
  display: none;
  flex-direction: column;
  position: fixed;
  bottom: 20px;
  right: 20px;
  img {
    width: 50px;
    height: 50px;
    margin: 0;
  }
`;

const TopBtn = styled.button`
  border: none;
  background-color: transparent;
`;

const HomeBtn = styled.button`
  border: none;
  background-color: transparent;

  img {
    width: 25px;
    height: 25px;
  }
`;

const PostBtn = styled.button`
  border: none;
  background-color: transparent;
`;

const BotBtn = styled.button`
  border: none;
  background-color: transparent;
`;

const WrapSearch = styled.form`
  width: 40%;
`;

// const SearchInput = styled.input`
//   width: 80%;
//   padding: 10px;
//   outline: none;
//   border: none;
//   border: 1px solid var(--blue);
//   background-color: rgba(0, 0, 0, 0);
//   border-radius: 20px;
//   text-align: center;
//   :focus {
//     transition: 0.1s border;
//     border: 3px solid var(--blue);
//     border-radius: 20px;
//     text-align: left;
//   }
// `;

// const SearchBtn = styled.button`
//   width: 25px;
//   height: 25px;
//   font-size: 20px;
//   border: none;
// `;

const LogoutBtn = styled.button`
  width: 100%;
  height: 40px;
  color: var(--black);
  border: none;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
  :hover {
    border: 1px solid var(--blue);
  }
`;
export default Header;
