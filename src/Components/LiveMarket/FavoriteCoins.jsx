import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FavoriteCoins = ({}) => {
  const [favoriteCoins, setFavoriteCoins] = useState([]);

  useEffect(async () => {
    const response = await fetch("/user/getFavoriteCoins", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        usertoken: localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((result) => result.data);
    console.log(response, "response");
    console.log(Object.entries(response));
    const promises = Object.entries(response).map((favorite) => {
      return fetch(`/cryptocurrencies/liveCoinData/${favorite[0]}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          return result.data;
          // setFavoriteCoins([...favoriteCoins, result.data]);
          // console.log(result.data);
        });
    });
    Promise.all(promises).then((values) => {
      console.log(values);
      setFavoriteCoins([...values]);
    });
  }, []);

  if (favoriteCoins.length === 0) {
    return <Wrapper>wait...</Wrapper>;
  } else {
    return (
      <>
        {favoriteCoins.map((coin) => {
          return (
            <Wrapper>
              <CoinIdWrapper>
                <FavoriteCoinLogo src={coin.image.small} alt={coin.name} />
                <FavortieCoinTicker>
                  {coin.symbol.toUpperCase()}
                </FavortieCoinTicker>
                <FavoriteCoinName>{coin.name}</FavoriteCoinName>
              </CoinIdWrapper>
              <FavoriteCoinMarketData>
                <FavoriteCoinLivePrice>
                  {coin.market_data.current_price.usd.toLocaleString()}
                </FavoriteCoinLivePrice>
                <FavoriteCoinMarketCap>
                  {coin.market_data.market_cap.usd.toLocaleString()}
                </FavoriteCoinMarketCap>
                <FavoriteCoinVolume>
                  {coin.market_data.total_volume.usd.toLocaleString()}
                </FavoriteCoinVolume>
                {coin.market_data.price_change_24h < 0 ? (
                  <FavoriteCoinPriceChange negative={true}>
                    {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                  </FavoriteCoinPriceChange>
                ) : (
                  <FavoriteCoinPriceChange positive={true}>
                    {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                  </FavoriteCoinPriceChange>
                )}
              </FavoriteCoinMarketData>
            </Wrapper>
          );
        })}
      </>
    );
  }
};

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  border-bottom: 2px solid orange;
`;

const FavoriteCoinLogo = styled.img`
  width: 30px;
  margin-right: 5px;
`;

const FavoriteCoinName = styled.p``;

const CoinIdWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 0.2;
  margin: auto;
`;

const FavoriteCoinPriceChange = styled.p`
  ${({ negative }) =>
    negative &&
    `
color: red
`}
  ${({ positive }) =>
    positive &&
    `
color: green
`}
`;

const FavoriteCoinVolume = styled.p``;

const FavoriteCoinLivePrice = styled.div``;

const FavoriteCoinMarketCap = styled.div``;

const FavoriteCoinMarketData = styled.div`
  flex: 0.8;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;

const Div = styled.div``;

const CoinLogo = styled.img`
  width: 30px;
  margin-right: 5px;
`;

const CoinMarketData = styled.div`
  flex: 0.8;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;

const FavoriteIconWrapper = styled.div``;

const CoinName = styled.p`
  margin-right: 5px;
`;

const FavortieCoinTicker = styled.p`
  margin-right: 5px;
`;

const CoinPrice = styled.p``;

const CoinVolume = styled.p``;

const PriceChange = styled.p``;

const CoinMarketCap = styled.p``;

export default FavoriteCoins;
