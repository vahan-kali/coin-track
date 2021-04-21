import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsStar } from "react-icons/bs";

const Coins = ({
  coinId,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = async (e) => {
    await fetch("/user/storeFavoriteCoin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coin: coinId,
        favorite: !isFavorite,
        userToken: localStorage.getItem("token"),
      }),
    });
    console.log(isFavorite);
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    fetch("/user/getFavoriteCoins", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        usertoken: localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        const keys = Object.keys(result.data);
        console.log(keys, name);
        if (keys.includes(coinId)) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      });
  }, [setIsFavorite]);

  return (
    <Wrapper>
      <CoinIdWrapper>
        <CoinLogo src={image} alt={name} /> <CoinName>{name}</CoinName>{" "}
        <CoinTicker>{symbol.toUpperCase()}</CoinTicker>
      </CoinIdWrapper>
      <CoinMarketData>
        <CoinPrice>${price.toLocaleString()}</CoinPrice>
        <CoinVolume>${volume.toLocaleString()}</CoinVolume>
        <CoinMarketCap> ${marketcap.toLocaleString()}</CoinMarketCap>
        {priceChange < 0 ? (
          <PriceChange negative={true}>{priceChange.toFixed(2)}%</PriceChange>
        ) : (
          <PriceChange positive={true}>{priceChange.toFixed(2)}%</PriceChange>
        )}
      </CoinMarketData>
      <FavoriteIconWrapper onClick={handleFavorite} favoriteStyle={isFavorite}>
        <BsStar />
      </FavoriteIconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  border-bottom: 2px solid orange;
`;
const CoinIdWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 0.2;
  margin: auto;
`;

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

const FavoriteIconWrapper = styled.div`
  ${({ favoriteStyle }) =>
    favoriteStyle &&
    `
    color: #ff9906
`}
`;

const CoinName = styled.p`
  margin-right: 5px;
`;

const CoinTicker = styled.p`
  margin-right: 5px;
`;

const CoinPrice = styled.p`
  flex: 0.2;
`;

const CoinVolume = styled.p`
  flex: 0.2;
`;

const PriceChange = styled.p`
  flex: 0.2;
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

const CoinMarketCap = styled.p`
  flex: 0.2;
`;

export default Coins;
