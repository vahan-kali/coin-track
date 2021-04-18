import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsStar } from "react-icons/bs";

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <Wrapper>
      <CoinIdWrapper>
        <CoinLogo src={image} alt="crypto" />
        <CoinName>{name}</CoinName>
        <CoinTicker>{symbol.toUpperCase()}</CoinTicker>
      </CoinIdWrapper>

      <CoinPrice>${price}</CoinPrice>
      <CoinVolume>${volume.toLocaleString()}</CoinVolume>
      <CoinMarketCap> ${marketcap.toLocaleString()}</CoinMarketCap>
      {priceChange < 0 ? (
        <PriceChange>{priceChange.toFixed(2)}%</PriceChange>
      ) : (
        <PriceChange>{priceChange.toFixed(2)}%</PriceChange>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const CoinIdWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CoinLogo = styled.img`
  width: 40px;
`;

const CoinName = styled.p``;

const CoinTicker = styled.p``;

const CoinPrice = styled.p``;

const CoinVolume = styled.p``;

const PriceChange = styled.p``;

const CoinMarketCap = styled.p``;

export default Coins;
