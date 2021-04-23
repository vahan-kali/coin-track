import React, { useState, useEffect } from "react";
import styled from "styled-components";

import GlobalCryptoMarket from "../GlobalCryptoMarket";

const HeroBanner = ({ darkImage }) => {
  const [marketChange, setMarketChange] = useState(false);
  const change = (e) => {
    if (e.target.innerText < 0) {
      setMarketChange = true;
    }
  };
  return (
    <Wrapper>
      <BackgroundImage changeImage={darkImage === "dark"} />
      <ContentWrapper>
        <Title>Coin Track</Title>
        <GlobalCryptoMarket />
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const BackgroundImage = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: baseline;
  background-image: url(https://store-images.s-microsoft.com/image/apps.15160.14439434818564022.3318c674-5d77-439f-a11b-5f9c9ebb2aa3.5d9b6e54-e872-4c9d-87ab-b87faaa40eb8?mode=scale&q=90&h=1080&w=1920);
  ${({ changeImage }) =>
    changeImage &&
    `
    background-image: url(https://itsblockchain.com/wp-content/uploads/2018/04/cryptotrading.original.jpg)
`}
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 65px;
  color: #ff9906;
`;

export default HeroBanner;
