import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FavoriteCoins = () => {
  const [favoriteCoins, setFavoriteCoins] = useState([]);

  useEffect(async () => {
    const response = await fetch("/user/getFavoriteCoins", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => result.data);
    console.log(response);
    response.map((favorite) => {
      fetch(`/cryptocurrencies/liveCoinData/${favorite.favoriteCoin}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setFavoriteCoins([...favoriteCoins, result.data]);
          console.log(result.data);
        });
    });
  }, []);

  const favoriteList = favoriteCoins.map((favoriteCoin) => {
    return favoriteCoin.id;
  });

  if (favoriteCoins === []) {
    return <Wrapper>wait...</Wrapper>;
  } else {
    return (
      <Wrapper>
        {/* {console.log(favoriteCoins)} */}
        {favoriteList.map((id) => {
          return <div>{id}</div>;
        })}
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  padding: 10px;
`;

const CoinIdWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 0.1;
  margin: auto;
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

const CoinTicker = styled.p`
  margin-right: 5px;
`;

const CoinPrice = styled.p``;

const CoinVolume = styled.p``;

const PriceChange = styled.p``;

const CoinMarketCap = styled.p``;

export default FavoriteCoins;
