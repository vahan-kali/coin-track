import React from "react";
import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`  
0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }

`;

const Loading = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #ff9906; /* Blue */
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation-name: ${loadingAnimation};
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export default Loading;
