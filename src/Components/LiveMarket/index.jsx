import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FavoriteCoins from "./FavoriteCoins";
import GlobalCryptoMarket from "../GlobalCryptoMarket";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
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

        <PaginationIconsWrapper>
          <AiOutlineArrowLeft />
          <AiOutlineArrowRight />
        </PaginationIconsWrapper>
      </NavBarWrapper>
      <FilterBarWrapper>
        <Name>
          Name
          <FilterIconWrapper>
            <AiOutlineArrowUp />
          </FilterIconWrapper>
        </Name>
        <Price>
          Price
          <FilterIconWrapper>
            <AiOutlineArrowUp />
          </FilterIconWrapper>
        </Price>
        <Volume>
          Volume
          <FilterIconWrapper>
            <AiOutlineArrowUp />
          </FilterIconWrapper>
        </Volume>
        <MarketCap>
          Market Cap
          <FilterIconWrapper>
            <AiOutlineArrowUp />
          </FilterIconWrapper>
        </MarketCap>
        <Change24H>
          Change 24h(%)
          <FilterIconWrapper>
            <AiOutlineArrowUp />
          </FilterIconWrapper>
        </Change24H>
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
`;

const InputField = styled.input`
  margin-top: 15px;
`;

const PaginationIconsWrapper = styled.div`
  margin-right: 10px;
`;

const FilterBarWrapper = styled.div`
  border-top: 1px #ff9906 solid;
  border-bottom: 1px #ff9906 solid;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const FilterIconWrapper = styled.div`
  display: flex;
  align-items: center;
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
