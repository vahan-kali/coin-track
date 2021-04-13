import React from "react";
import styled, { keyframes } from "styled-components";

const animationNews = keyframes`    
0% {
  transform: translateX(100vw);
}
100% {
  transform: translateX(-100vw);
}
}`;
const NewsDisplay = () => {
  return (
    <Wrapper>
      <News>
        BTC HAS REACHED A RECORD HIGH OF 1MILLION USD PER COIN. THIS IS A BIG
        STEP FOR BTC AS MORE FINANCIAL INSTITUTIONS ARE OPTING FOR CRPYTO RATHER
        THAN FIAT AS A FORM OF TRANSACTIONS
      </News>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #252837;
  height: 40px;
  /* position: fixed; */
  top: 40;
  color: red;
  display: flex;
  align-items: center;
  /* z-index: 9; */
  width: 100%;
  overflow-x: hidden;
`;

const News = styled.p`
  animation-name: ${animationNews};
  transform: translateX(100vw);
  animation-duration: 50s;

  animation-iteration-count: infinite;
  white-space: nowrap;
  font-family: "Consolas";
  font-weight: bolder;
  animation-timing-function: linear;
`;

export default NewsDisplay;
