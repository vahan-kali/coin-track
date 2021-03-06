import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

const GlobalCryptoMarket = () => {
  const [globalMarketCap, setGlobalMarketCap] = useState(0);
  const [globalVolume, setGlobalVolume] = useState(0);

  useEffect(() => {
    fetch("/cryptocurrencies/globalData")
      .then((data) => data.json())
      .then((response) => {
        console.log(response, "global crypto data");
        setGlobalMarketCap(response.data.data.quote.USD.total_market_cap);
        setGlobalVolume(response.data.data.quote.USD.total_volume_24h);
      });
  }, []);

  // const interval = setInterval(() => {
  //   fetch("cryptocurrencies/globalData")
  //     .then((data) => data.json())
  //     .then((response) => {
  //       setGlobalMarketCap(response.data.data.quote.USD.total_market_cap);
  //       setGlobalVolume(response.data.data.quote.USD.total_volume_24h);
  //     });
  // }, 240000);
  // return () => clearInterval(interval);

  /**
   * 1. uncomment after project(so daily limit does not exceed)
   * 2. either implement set interval every day and write code that calculates percentage,
   *  find percentage api or drop idea
   * 3. check why Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0
   * (maybe proxy json)
   */

  return (
    <Wrapper>
      <Title>Global Crypto Market</Title>
      <DataWrapper>
        <MarketCapWrapper>
          <MarketCapTitle>Market Cap</MarketCapTitle>
          <MarketCapValue>
            {globalMarketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </MarketCapValue>
        </MarketCapWrapper>
        <VolumeWrapper>
          <VolumeTitle>Volume 24h</VolumeTitle>
          <VolumeValue>
            {globalVolume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </VolumeValue>
        </VolumeWrapper>
      </DataWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 35px;
  border-top: solid 2px #ff9906;
  border-bottom: solid 2px #ff9906;
  justify-content: space-between;
  min-width: 40vw;
  margin-top: 10px;
  flex-direction: column;
`;
const DataWrapper = styled.div`
  display: flex;
  padding: 10px;
`;
const MarketCapTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 35px;
`;
const MarketCapValue = styled.h3`
  font-size: 30px;
`;

const VolumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff9906;
  margin-left: 25px;
`;

const Title = styled.h4`
  padding: 20px;
  font-size: 40px;
`;

const VolumeTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 35px;
`;
const VolumeValue = styled.h3`
  font-size: 30px;
`;

const MarketCapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff9906;
`;
export default GlobalCryptoMarket;
