import React, {useEffect, useRef, useState} from "react";
import styled, {css} from "styled-components";
import theme from "../theme";

const Wrapper = styled.div`
  display: flex;
  height: 25px;
  margin-top: 15px;
`;

const Button = styled.div`
  align-items: center;
  border-radius: 3px;
  color: ${theme.primary};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 25px;
  justify-content: center;
  margin-right: 20px;
  transition-duration: 0.5s;
  transition-property: background-color;
  width: 60px;
  :hover {
    background-color: #E3E3E3;
  }
`;

const Navigation = ({}) =>
  <Wrapper>
    <Button>HOME</Button>
    <Button>NEWS</Button>
  </Wrapper>

export default Navigation;
