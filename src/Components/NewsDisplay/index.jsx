import React, { useEffect, useState } from "react";
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
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/cryptocurrencies/cryptoNews")
      .then((data) => data.json())
      .then((response) => setNews(response.data));
  });
  return (
    <Wrapper>
      {/* {news.map((e, index) => (
        <News key={index}>{e.headline}</News>
      ))} */}
      {/* * 1. its working but it stops working after a few seconds (Why? figure out
      with tc) */}
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
