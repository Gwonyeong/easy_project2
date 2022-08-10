import React from "react";
import styled from "styled-components";
import useDateHook from "../component/dateHook";

const MainPostDate = ({ date, nickname }) => {
  const stringDate = useDateHook(date);
  return (
    <Nick>
      {nickname}ㅤ{stringDate}
    </Nick>
  );
};

export default MainPostDate;

const Nick = styled.p`
  float: left;
`;
