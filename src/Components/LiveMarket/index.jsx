import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FavoriteCoins from "./FavoriteCoins";
import GlobalCryptoMarket from "../GlobalCryptoMarket";
import Coins from "./Coins";

const LiveMarket = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/cryptocurrencies/liveMarket")
      .then((data) => data.json())
      .then((response) => setCoins(response.data));
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Wrapper>
      <CoinSearcherAndIndustryDataWrapper>
        <GlobalCryptoMarket />
        <InputField placeholder="Search Coin" onChange={handleChange} />
      </CoinSearcherAndIndustryDataWrapper>
      <NavBarWrapper>
        <NavLinkWrapper>
          <NavItem
            exact
            to="/liveMarket"
            activeStyle={{
              borderBottom: "2px #ff9906 groove",
            }}
          >
            Cryptocurrencies
          </NavItem>
          <NavItem
            to="/liveMarket/favorites"
            activeStyle={{
              borderBottom: "2px #ff9906 groove",
            }}
          >
            Favorites
          </NavItem>
        </NavLinkWrapper>
      </NavBarWrapper>
      <FilterBarWrapper>
        <Name>Name</Name>
        <Price>Price</Price>
        <Volume>Volume</Volume>
        <MarketCap>Market Cap</MarketCap>
        <Change24H>Change 24h(%)</Change24H>
      </FilterBarWrapper>
      {window.location.pathname === "/liveMarket" &&
        filteredCoins.map((coin) => {
          return (
            <Coins
              coinId={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              volume={coin.total_volume}
              marketcap={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      {window.location.pathname === "/liveMarket/favorites" && (
        <FavoriteCoins />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CoinSearcherAndIndustryDataWrapper = styled.div`
  text-align: center;
  margin: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavLinkWrapper = styled.div``;

const NavItem = styled(NavLink)`
  margin: 0px 5px;
  text-decoration: none;
  color: #ff9906;
  font-size: 30px;
  margin-right: 20px;
`;

const InputField = styled.input`
  margin-top: 25px;
  font-size: 30px;
`;

const FilterBarWrapper = styled.div`
  border-top: 1px #ff9906 solid;
  border-bottom: 1px #ff9906 solid;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  font-size: 20px;
`;

const Name = styled.span`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  display: flex;
  align-items: center;
`;

const Volume = styled.span`
  display: flex;
  align-items: center;
`;

const MarketCap = styled.span`
  display: flex;
  align-items: center;
`;

const Change24H = styled.span`
  display: flex;
  align-items: center;
`;

export default LiveMarket;
