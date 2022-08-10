import React from "react";
import styled from "styled-components";
const LoadingPage = () => {
  return (
    <WrapImg>
      <img
        src="https://t1.daumcdn.net/cfile/tistory/233FB6505786DA890A"
        alt="로딩이미지"
      />
    </WrapImg>
  );
};

export default LoadingPage;

const WrapImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 80vh;
  margin: auto;
`;
