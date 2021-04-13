import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

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
        <DataWrapper>
          <MarketCapWrapper>
            <MarketCapTitle>Market Cap</MarketCapTitle>
            <MarketCapValue>100</MarketCapValue>
            <MarketCapChangeWrapper>
              <MarketCapChange onChange={(e) => change(e)}>
                5.9%
              </MarketCapChange>
              <AiOutlineArrowUp />
            </MarketCapChangeWrapper>
          </MarketCapWrapper>
          <VolumeWrapper>
            <VolumeTitle>Volume 24h</VolumeTitle>
            <VolumeValue>50</VolumeValue>
            <VolumeChangeWrapper>
              <VolumeChange
                onClick={(e) => change(e)}
                negativeChange={marketChange}
              >
                -4.4%
              </VolumeChange>
              <AiOutlineArrowUp />
            </VolumeChangeWrapper>
          </VolumeWrapper>
        </DataWrapper>
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

const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 35px;
  border-top: solid 2px #ff9906;
  border-bottom: solid 2px #ff9906;
  justify-content: space-between;
  min-width: 500px;
  margin-top: 10px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 45px;
  color: #ff9906;
`;

const MarketCapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff9906;
`;
const MarketCapTitle = styled.h2``;
const MarketCapValue = styled.h3``;
const MarketCapChange = styled.span``;
const VolumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff9906;
`;

const MarketCapChangeWrapper = styled.div``;
const VolumeTitle = styled.h2``;
const VolumeValue = styled.h3``;
const VolumeChange = styled.span`
  ${({ negativeChange }) =>
    negativeChange &&
    `
color: red
`};
`;
const VolumeChangeWrapper = styled.div``;
export default HeroBanner;
