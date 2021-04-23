import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Tracker = ({ coin, getPnl }) => {
  const [pnl, setPnl] = useState(0);

  const [positionEquity, setPositionEquity] = useState(0);

  const [coinImage, setCoinImage] = useState("");

  const [coinTicker, setCoinTicker] = useState("");

  const [coinName, setCoinName] = useState("");

  useEffect(async () => {
    const response = await fetch(`/cryptocurrencies/liveCoinData/${coin[0]}`)
      .then((data) => data.json())
      .then((response) => response.data);

    const amountBought = Number(coin[1]["amount bought"]);

    const marketPriceBoughtAt = Number(coin[1]["market price"]);

    setPositionEquity(
      (amountBought / marketPriceBoughtAt) *
        response.market_data.current_price.usd
    );

    setCoinName(response.name);

    setPnl(
      (amountBought / marketPriceBoughtAt) *
        response.market_data.current_price.usd -
        amountBought
    );

    getPnl(
      (amountBought / marketPriceBoughtAt) *
        response.market_data.current_price.usd -
        amountBought
    );

    setCoinImage(response.image.small);

    setCoinTicker(response.symbol);
  }, []);
  return (
    <Wrapper>
      <CoinWrapper>
        <CoinImage src={coinImage} />
        <CoinName>{coinName}</CoinName>
        <CoinTicker>{coinTicker.toUpperCase()}</CoinTicker>
      </CoinWrapper>
      <CoinInvestmentDataWrapper>
        <div>{coin[1]["amount bought"]} $</div>
        <div>{positionEquity.toFixed(2)} $ </div>
        <div>{pnl.toFixed(2)} $</div>
      </CoinInvestmentDataWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
  padding-left: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  border-bottom: 1px solid orange;
`;

const CoinImage = styled.img`
  width: 30px;
  margin-right: 5px;
`;

const CoinName = styled.p`
  margin-right: 5px;
`;

const CoinTicker = styled.p`
  margin-right: 5px;
`;

const CoinInvestmentDataWrapper = styled.div`
  flex: 0.8;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;

const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 0.2;
  margin: auto;
`;

export default Tracker;
