import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Wrapper = styled.div`
  background-color: ${theme.primary};
`;

const Title = styled.div`
  color: white;
  font-size: 30px;
`;

const Description = styled.div`
  color: white;
  font-size: 14px;
`;

const Welcome = ({}) =>
  <Wrapper>
    <Title>Welcome to Points Tracker!</Title>
    <Description>
      Add membership programs to track points, determine when to use them,
      and offset your environmental impact.
    </Description>
  </Wrapper>

export default Welcome;
